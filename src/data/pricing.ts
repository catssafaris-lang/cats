// Auto-generated pricing data - scraped from AKS with 5% markup + derived pricing
// Last updated: April 2026

export interface SeasonRates {
  [pax: string]: {
    economy?: number;
    comfort?: number;
    luxury?: number;
    superior_luxury?: number;
  };
}

export interface Season {
  dates: string;
  rates: SeasonRates;
}

export interface SeasonalPricing {
  seasons: { [key: string]: Season };
  child_rates: string;
  currency: string;
  note: string;
  supplements?: string;
}

export interface SimplePricing {
  simple: true;
  rates: {
    non_resident: { adult: number; child: number; };
    resident: { adult: number; child: number; };
  };
  currency: string;
  note: string;
  group_discount?: string;
}

export interface GroupPricing {
  group: true;
  rates: {
    non_resident: number;
    resident: number;
  };
  duration: number;
  currency: string;
  note: string;
  departures: string;
}

export interface MountainPricing {
  mountain: true;
  rates: {
    per_person: number;
    group_of_2: number;
    group_of_3_4: number;
    group_of_5_plus: number;
  };
  currency: string;
  note: string;
  child_rates: string;
}

export interface ExcursionPricing {
  excursion: true;
  rates: {
    [groupSize: string]: {
      non_resident: { adult: number; child: number; };
      resident: { adult: number; child: number; };
    };
  };
  currency: string;
  note: string;
  child_note: string;
}

export interface GroupTourPricing {
  group_tour: true;
  min_price: number;
  currency: string;
  note: string;
  child_note: string;
}


export interface GroupSeasonalPricing {
  group: true;
  seasonal: true;
  seasons: {
    name: string;
    months: string;
    rates: { economy?: number; comfort?: number; luxury?: number; };
    srs?: number;
  }[];
  duration?: number;
  currency: string;
  note: string;
  departures?: string;
  child_rates?: string;
  child_note?: string;
  supplement_note?: string;
}

export type SafariPricing = SeasonalPricing | SimplePricing | GroupPricing | MountainPricing | ExcursionPricing | GroupTourPricing | GroupSeasonalPricing;

export interface AccommodationList {
  economy?: string[];
  comfort?: string[];
  luxury?: string[];
  superior_luxury?: string[];
}

export interface SafariPricingEntry {
  pricing: SafariPricing;
  accommodations: AccommodationList | null;
}

export const safariPricing: Record<string, SafariPricingEntry> = {
  "3-day-mara-encounter-masai-mara": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1590,
              "comfort": 1750,
              "luxury": 1910
            },
            "2": {
              "economy": 1050,
              "comfort": 1160,
              "luxury": 1260
            },
            "3": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "4": {
              "economy": 830,
              "comfort": 910,
              "luxury": 1000
            },
            "5": {
              "economy": 790,
              "comfort": 870,
              "luxury": 950
            },
            "6-7": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1800,
              "comfort": 1990,
              "luxury": 2160
            },
            "2": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1520
            },
            "3": {
              "economy": 1110,
              "comfort": 1230,
              "luxury": 1340
            },
            "4": {
              "economy": 1040,
              "comfort": 1150,
              "luxury": 1250
            },
            "5": {
              "economy": 1000,
              "comfort": 1100,
              "luxury": 1200
            },
            "6-7": {
              "economy": 960,
              "comfort": 1060,
              "luxury": 1160
            },
            "srs": {
              "economy": 110,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2120,
              "comfort": 2330,
              "luxury": 2540
            },
            "2": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "3": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "4": {
              "economy": 1250,
              "comfort": 1380,
              "luxury": 1500
            },
            "5": {
              "economy": 1190,
              "comfort": 1310,
              "luxury": 1430
            },
            "6-7": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1460,
              "comfort": 1610,
              "luxury": 1750
            },
            "2": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "3": {
              "economy": 820,
              "comfort": 900,
              "luxury": 980
            },
            "4": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "5": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "6-7": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            },
            "srs": {
              "economy": 100,
              "comfort": 110,
              "luxury": 120
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Mara Duma Camp"
      ],
      "comfort": [
        "Mara Simba \u2013 Lodge Rooms",
        "Mara Sopa Lodge",
        "Mara Leisure Camp",
        "Sentrim Mara Camp",
        "Prideinn Mara Camp",
        "Osero Camp",
        "Enkorok Mara Camp",
        "AA Mara Lodge",
        "La Maison Royale Mara Camp",
        "Mara River Lodge",
        "Basecamp Masai Mara",
        "Sekenani Camp",
        "Olengoti Eco Safari Camp",
        "Julia\u2019s River Camp",
        "Mara Big Five Camp",
        "Mara Sweet Acacia Lodge",
        "Ol Kinyei Mara Tented Camp",
        "Mara Kimana Camp"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Sarova Mara Camp \u2013 Deluxe tents",
        "Zebra Plains Mara Camp Camp",
        "Kandili Camp",
        "Naserian Mara Camp",
        "Emayian Camp",
        "Mara Simba \u2013 Tent Rooms",
        "Mara River Camp",
        "Mara Siria Camp",
        "Mara Maisha Camp (Main Camp)",
        "Keekorok Lodge",
        "Matira Bush Camp",
        "Loyk Mara camp",
        "Fig Tree Camp",
        "Ngamboli Tents",
        "Enchipai Mara Camp",
        "Kilima Camp Mara"
      ],
      "superior_luxury": [
        "Karen Blixen Camp",
        "Sarova Mara Camp \u2013 Club tents",
        "Mara Intrepids Camp",
        "Neptune Mara Rianta Luxury Camp",
        "Mara Eden Safari Camp",
        "Ashnil Mara Camp",
        "Mara Crossings Camp",
        "Saruni Mara Camp",
        "Olare Mara Kempinski Camp",
        "Porini Mara Camp",
        "Entumoto Safari Camp",
        "Kicheche Mara Camp",
        "Mara Bushtop Luxury Camp",
        "&Beyond Kichwa Tembo Camp",
        "Entim Mara Camp",
        "Mara Explorer Camp",
        "Mara Eden Safari Camp",
        "Sroi Mara Bush Camp",
        "Fairmont Mara Safari Club",
        "Basecamp Eagle View Camp",
        "Saruni Leopard Hill Camp",
        "Governors Camp Mara"
      ]
    }
  },
  "2-day-mara-discovery-safari-masai-mara": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "2": {
              "economy": 790,
              "comfort": 870,
              "luxury": 950
            },
            "3": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            },
            "4": {
              "economy": 640,
              "comfort": 700,
              "luxury": 770
            },
            "5": {
              "economy": 610,
              "comfort": 670,
              "luxury": 730
            },
            "6-7": {
              "economy": 590,
              "comfort": 650,
              "luxury": 710
            },
            "srs": {
              "economy": 50,
              "comfort": 60,
              "luxury": 60
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1400,
              "comfort": 1540,
              "luxury": 1680
            },
            "2": {
              "economy": 1050,
              "comfort": 1160,
              "luxury": 1260
            },
            "3": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "4": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "5": {
              "economy": 890,
              "comfort": 980,
              "luxury": 1070
            },
            "6-7": {
              "economy": 850,
              "comfort": 940,
              "luxury": 1020
            },
            "srs": {
              "economy": 50,
              "comfort": 60,
              "luxury": 60
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1600,
              "comfort": 1760,
              "luxury": 1920
            },
            "2": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "3": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "4": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "5": {
              "economy": 1000,
              "comfort": 1100,
              "luxury": 1200
            },
            "6-7": {
              "economy": 960,
              "comfort": 1060,
              "luxury": 1150
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1010,
              "comfort": 1110,
              "luxury": 1210
            },
            "2": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            },
            "3": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "4": {
              "economy": 560,
              "comfort": 620,
              "luxury": 670
            },
            "5": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            },
            "6-7": {
              "economy": 510,
              "comfort": 560,
              "luxury": 610
            },
            "srs": {
              "economy": 50,
              "comfort": 60,
              "luxury": 60
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Mara Duma Camp"
      ],
      "comfort": [
        "Mara Simba \u2013 Lodge Rooms",
        "Mara Sopa Lodge",
        "Mara Leisure Camp",
        "Sentrim Mara Camp",
        "Prideinn Mara Camp",
        "Osero Camp",
        "Enkorok Mara Camp",
        "AA Mara Lodge",
        "La Maison Royale Mara Camp",
        "Mara River Lodge",
        "Basecamp Masai Mara",
        "Sekenani Camp",
        "Olengoti Eco Safari Camp",
        "Julia\u2019s River Camp",
        "Mara Big Five Camp",
        "Mara Sweet Acacia Lodge",
        "Ol Kinyei Mara Tented Camp",
        "Mara Kimana Camp"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Sarova Mara Camp \u2013 Deluxe tents",
        "Zebra Plains Mara Camp Camp",
        "Kandili Camp",
        "Naserian Mara Camp",
        "Emayian Camp",
        "Mara Simba \u2013 Tent Rooms",
        "Mara River Camp",
        "Mara Siria Camp",
        "Mara Maisha Camp (Main Camp)",
        "Keekorok Lodge",
        "Matira Bush Camp",
        "Loyk Mara camp",
        "Fig Tree Camp",
        "Ngamboli Tents",
        "Enchipai Mara Camp",
        "Kilima Camp Mara"
      ],
      "superior_luxury": [
        "Karen Blixen Camp",
        "Sarova Mara Camp \u2013 Club tents",
        "Mara Intrepids Camp",
        "Neptune Mara Rianta Luxury Camp",
        "Mara Eden Safari Camp",
        "Ashnil Mara Camp",
        "Mara Crossings Camp",
        "Saruni Mara Camp",
        "Olare Mara Kempinski Camp",
        "Porini Mara Camp",
        "Entumoto Safari Camp",
        "Kicheche Mara Camp",
        "Mara Bushtop Luxury Camp",
        "&Beyond Kichwa Tembo Camp",
        "Entim Mara Camp",
        "Mara Explorer Camp",
        "Mara Eden Safari Camp",
        "Sroi Mara Bush Camp",
        "Fairmont Mara Safari Club",
        "Basecamp Eagle View Camp",
        "Saruni Leopard Hill Camp",
        "Governors Camp Mara"
      ]
    }
  },
  "elephants-on-parade-safari": {
    "pricing": {
      "seasons": {
        "low": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "2": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "3": {
              "economy": 500,
              "comfort": 550,
              "luxury": 600
            },
            "4": {
              "economy": 470,
              "comfort": 520,
              "luxury": 560
            },
            "5": {
              "economy": 440,
              "comfort": 480,
              "luxury": 530
            },
            "6-7": {
              "economy": 430,
              "comfort": 470,
              "luxury": 520
            },
            "srs": {
              "economy": 30,
              "comfort": 30,
              "luxury": 40
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1100,
              "comfort": 1210,
              "luxury": 1320
            },
            "2": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "3": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "4": {
              "economy": 560,
              "comfort": 620,
              "luxury": 670
            },
            "5": {
              "economy": 510,
              "comfort": 560,
              "luxury": 610
            },
            "6-7": {
              "economy": 490,
              "comfort": 540,
              "luxury": 590
            },
            "srs": {
              "economy": 40,
              "comfort": 40,
              "luxury": 50
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Amboseli Sopa Lodge \u2013 Standard rooms"
      ],
      "comfort": [
        "Amboseli Sopa Lodge \u2013 Premium rooms",
        "AA Amboseli Lodge",
        "Sentrim Amboseli Camp",
        "Penety Resort",
        "Hunter\u2019s Luxury Manor",
        "Amboseli"
      ],
      "luxury": [
        "Amboseli Serena Lodge",
        "Oltukai lodge",
        "Kibo Safari Camp",
        "Kilima Safari Camp",
        "Oilepo Safari Lodge"
      ],
      "superior_luxury": [
        "Tulia Amboseli Safari Camp",
        "Elerai Camp",
        "Tawi lodge",
        "Tortilis Camp",
        "Porini Amboseli camp"
      ]
    }
  },
  "5-days-masai-mara-amboseli-unlimited-wildlife": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3030,
              "comfort": 3330,
              "luxury": 3640
            },
            "2": {
              "economy": 1990,
              "comfort": 2190,
              "luxury": 2390
            },
            "3": {
              "economy": 1720,
              "comfort": 1890,
              "luxury": 2060
            },
            "4": {
              "economy": 1580,
              "comfort": 1740,
              "luxury": 1900
            },
            "5": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "6-7": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3400,
              "comfort": 3740,
              "luxury": 4080
            },
            "2": {
              "economy": 2230,
              "comfort": 2450,
              "luxury": 2680
            },
            "3": {
              "economy": 1920,
              "comfort": 2110,
              "luxury": 2300
            },
            "4": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "5": {
              "economy": 1680,
              "comfort": 1850,
              "luxury": 2020
            },
            "6-7": {
              "economy": 1610,
              "comfort": 1770,
              "luxury": 1930
            },
            "srs": {
              "economy": 230,
              "comfort": 250,
              "luxury": 280
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4390,
              "comfort": 4830,
              "luxury": 5270
            },
            "2": {
              "economy": 2890,
              "comfort": 3180,
              "luxury": 3470
            },
            "3": {
              "economy": 2490,
              "comfort": 2740,
              "luxury": 2990
            },
            "4": {
              "economy": 2280,
              "comfort": 2510,
              "luxury": 2740
            },
            "5": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "6-7": {
              "economy": 2080,
              "comfort": 2290,
              "luxury": 2500
            },
            "srs": {
              "economy": 300,
              "comfort": 330,
              "luxury": 360
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2660,
              "comfort": 2930,
              "luxury": 3190
            },
            "2": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "3": {
              "economy": 1510,
              "comfort": 1660,
              "luxury": 1810
            },
            "4": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "5": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "6-7": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "4-days-lakes-to-lions-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2290,
              "comfort": 2520,
              "luxury": 2750
            },
            "2": {
              "economy": 1520,
              "comfort": 1670,
              "luxury": 1820
            },
            "3": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "4": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "5": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "6-7": {
              "economy": 1120,
              "comfort": 1230,
              "luxury": 1340
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2460,
              "comfort": 2710,
              "luxury": 2950
            },
            "2": {
              "economy": 1730,
              "comfort": 1900,
              "luxury": 2080
            },
            "3": {
              "economy": 1530,
              "comfort": 1680,
              "luxury": 1840
            },
            "4": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "5": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "6-7": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2920,
              "comfort": 3210,
              "luxury": 3500
            },
            "2": {
              "economy": 2040,
              "comfort": 2240,
              "luxury": 2450
            },
            "3": {
              "economy": 1810,
              "comfort": 1990,
              "luxury": 2170
            },
            "4": {
              "economy": 1700,
              "comfort": 1870,
              "luxury": 2040
            },
            "5": {
              "economy": 1630,
              "comfort": 1790,
              "luxury": 1960
            },
            "6-7": {
              "economy": 1590,
              "comfort": 1750,
              "luxury": 1910
            },
            "srs": {
              "economy": 210,
              "comfort": 230,
              "luxury": 250
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2050,
              "comfort": 2260,
              "luxury": 2460
            },
            "2": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "3": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "4": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "5": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "6-7": {
              "economy": 1000,
              "comfort": 1100,
              "luxury": 1200
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Lake Nakuru Lodge"
      ],
      "comfort": [
        "Lake Nakuru Sopa Lodge",
        "Flamingo Hill Tented Camp"
      ],
      "luxury": [
        "Sarova Lion Hill Game Lodge"
      ],
      "superior_luxury": [
        "Cliff Nakuru Lodge"
      ]
    }
  },
  "3-days-twin-parks-safari-tsavo": {
    "pricing": {
      "seasons": {
        "low": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "2": {
              "economy": 890,
              "comfort": 980,
              "luxury": 1070
            },
            "3": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "4": {
              "economy": 700,
              "comfort": 770,
              "luxury": 840
            },
            "5": {
              "economy": 660,
              "comfort": 730,
              "luxury": 790
            },
            "6-7": {
              "economy": 640,
              "comfort": 700,
              "luxury": 770
            },
            "srs": {
              "economy": 50,
              "comfort": 60,
              "luxury": 60
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "2": {
              "economy": 1010,
              "comfort": 1110,
              "luxury": 1210
            },
            "3": {
              "economy": 840,
              "comfort": 920,
              "luxury": 1010
            },
            "4": {
              "economy": 770,
              "comfort": 850,
              "luxury": 920
            },
            "5": {
              "economy": 720,
              "comfort": 790,
              "luxury": 860
            },
            "6-7": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Voi Safari Lodge"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Sentrim Tsavo Camp",
        "Voi Wildlife Lodge",
        "Galana Crocodile Camp",
        "Ngutuni Safari Lodge"
      ],
      "luxury": [
        "Satao Camp",
        "Ashnil Aruba Lodge \u2013 Tent rooms"
      ]
    }
  },
  "amboseli-national-park-day-trip": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 500, "child": 380 },
          "resident": { "adult": 330, "child": 250 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 330, "child": 260 },
          "resident": { "adult": 220, "child": 170 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 270, "child": 210 },
          "resident": { "adult": 180, "child": 140 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "lake-naivasha-crescent-island-hells-gate-park-day-trip": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 570, "child": 440 },
          "resident": { "adult": 370, "child": 290 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 380, "child": 300 },
          "resident": { "adult": 250, "child": 190 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 300, "child": 230 },
          "resident": { "adult": 200, "child": 150 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "ol-pejeta-conservancy-day-trip": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 620, "child": 470 },
          "resident": { "adult": 400, "child": 310 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 410, "child": 320 },
          "resident": { "adult": 270, "child": 210 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 330, "child": 250 },
          "resident": { "adult": 220, "child": 170 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "lake-nakuru-lake-naivasha-crescent-island-day-trip": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 570, "child": 440 },
          "resident": { "adult": 370, "child": 290 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 380, "child": 300 },
          "resident": { "adult": 250, "child": 190 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 300, "child": 230 },
          "resident": { "adult": 200, "child": 150 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "nairobi-national-park-half-day-private-tour": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 330, "child": 260 },
          "resident": { "adult": 220, "child": 170 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 220, "child": 170 },
          "resident": { "adult": 150, "child": 120 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 180, "child": 140 },
          "resident": { "adult": 120, "child": 90 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "nairobi-national-park-half-day-group-tour": {
    "pricing": {
      "group_tour": true,
      "min_price": 160,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 7 travellers required. Price includes park fees, professional guide, and bottled water.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "1-day-nairobi-national-park-city-tour-excursion": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 480, "child": 370 },
          "resident": { "adult": 320, "child": 240 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 320, "child": 250 },
          "resident": { "adult": 210, "child": 160 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 260, "child": 200 },
          "resident": { "adult": 170, "child": 130 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "nairobi-into-africa-safaris-tour": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 420, "child": 320 },
          "resident": { "adult": 280, "child": 220 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 280, "child": 220 },
          "resident": { "adult": 180, "child": 140 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 220, "child": 170 },
          "resident": { "adult": 150, "child": 120 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": {
      "economy": [
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "5-day-tanzania-wildlife-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4680,
              "comfort": 5150,
              "luxury": 5620
            },
            "2": {
              "economy": 3080,
              "comfort": 3390,
              "luxury": 3700
            },
            "3": {
              "economy": 2640,
              "comfort": 2900,
              "luxury": 3170
            },
            "4": {
              "economy": 2430,
              "comfort": 2670,
              "luxury": 2920
            },
            "5": {
              "economy": 2310,
              "comfort": 2540,
              "luxury": 2770
            },
            "6-7": {
              "economy": 2210,
              "comfort": 2430,
              "luxury": 2650
            },
            "srs": {
              "economy": 310,
              "comfort": 340,
              "luxury": 370
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5240,
              "comfort": 5760,
              "luxury": 6290
            },
            "2": {
              "economy": 3450,
              "comfort": 3800,
              "luxury": 4140
            },
            "3": {
              "economy": 2970,
              "comfort": 3270,
              "luxury": 3560
            },
            "4": {
              "economy": 2730,
              "comfort": 3000,
              "luxury": 3280
            },
            "5": {
              "economy": 2580,
              "comfort": 2840,
              "luxury": 3100
            },
            "6-7": {
              "economy": 2490,
              "comfort": 2740,
              "luxury": 2990
            },
            "srs": {
              "economy": 350,
              "comfort": 390,
              "luxury": 420
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 6780,
              "comfort": 7460,
              "luxury": 8140
            },
            "2": {
              "economy": 4460,
              "comfort": 4910,
              "luxury": 5350
            },
            "3": {
              "economy": 3830,
              "comfort": 4210,
              "luxury": 4600
            },
            "4": {
              "economy": 3530,
              "comfort": 3880,
              "luxury": 4240
            },
            "5": {
              "economy": 3340,
              "comfort": 3670,
              "luxury": 4010
            },
            "6-7": {
              "economy": 3210,
              "comfort": 3530,
              "luxury": 3850
            },
            "srs": {
              "economy": 450,
              "comfort": 500,
              "luxury": 540
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4120,
              "comfort": 4530,
              "luxury": 4940
            },
            "2": {
              "economy": 2710,
              "comfort": 2980,
              "luxury": 3250
            },
            "3": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "4": {
              "economy": 2140,
              "comfort": 2350,
              "luxury": 2570
            },
            "5": {
              "economy": 2030,
              "comfort": 2230,
              "luxury": 2440
            },
            "6-7": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Kati Kati Tented Camp",
        "Seronera Wildlife Lodge",
        "Serengeti Wilderness Camp",
        "Rhino Lodge Ngorongoro",
        "Simba Campsite",
        "Tarangire Safari Lodge – Standard",
        "Sangaiwe Tented Lodge"
      ],
      "comfort": [
        "Serengeti Serena Safari Lodge",
        "Serengeti Sopa Lodge",
        "Dunia Camp",
        "Mbuzi Mawe Serena Camp",
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge",
        "Tarangire Sopa Lodge",
        "Maramboi Tented Lodge"
      ],
      "luxury": [
        "Four Seasons Safari Lodge Serengeti",
        "Melia Serengeti Lodge",
        "Lemala Ewanjan Tented Camp",
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp",
        "Oliver's Camp",
        "Lemala Mpingo Ridge",
        "Tarangire Treetops"
      ],
      "superior_luxury": [
        "Singita Sasakwa Lodge",
        "Singita Faru Faru Lodge",
        "One Nature Nyaruswiga",
        "&Beyond Klein's Camp",
        "andBeyond Ngorongoro Crater Lodge – Suite",
        "Chem Chem Lodge"
      ]
    }
  },
  "7-day-best-of-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 6530,
              "comfort": 7180,
              "luxury": 7840
            },
            "2": {
              "economy": 4290,
              "comfort": 4720,
              "luxury": 5150
            },
            "3": {
              "economy": 3690,
              "comfort": 4060,
              "luxury": 4430
            },
            "4": {
              "economy": 3400,
              "comfort": 3740,
              "luxury": 4080
            },
            "5": {
              "economy": 3220,
              "comfort": 3540,
              "luxury": 3860
            },
            "6-7": {
              "economy": 3090,
              "comfort": 3400,
              "luxury": 3710
            },
            "srs": {
              "economy": 430,
              "comfort": 470,
              "luxury": 520
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 7320,
              "comfort": 8050,
              "luxury": 8780
            },
            "2": {
              "economy": 4810,
              "comfort": 5290,
              "luxury": 5770
            },
            "3": {
              "economy": 4140,
              "comfort": 4550,
              "luxury": 4970
            },
            "4": {
              "economy": 3800,
              "comfort": 4180,
              "luxury": 4560
            },
            "5": {
              "economy": 3600,
              "comfort": 3960,
              "luxury": 4320
            },
            "6-7": {
              "economy": 3460,
              "comfort": 3810,
              "luxury": 4150
            },
            "srs": {
              "economy": 480,
              "comfort": 530,
              "luxury": 580
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 9460,
              "comfort": 10410,
              "luxury": 11350
            },
            "2": {
              "economy": 6230,
              "comfort": 6850,
              "luxury": 7480
            },
            "3": {
              "economy": 5360,
              "comfort": 5900,
              "luxury": 6430
            },
            "4": {
              "economy": 4920,
              "comfort": 5410,
              "luxury": 5900
            },
            "5": {
              "economy": 4680,
              "comfort": 5150,
              "luxury": 5620
            },
            "6-7": {
              "economy": 4490,
              "comfort": 4940,
              "luxury": 5390
            },
            "srs": {
              "economy": 620,
              "comfort": 680,
              "luxury": 740
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 5750,
              "comfort": 6330,
              "luxury": 6900
            },
            "2": {
              "economy": 3780,
              "comfort": 4160,
              "luxury": 4540
            },
            "3": {
              "economy": 3250,
              "comfort": 3580,
              "luxury": 3900
            },
            "4": {
              "economy": 2990,
              "comfort": 3290,
              "luxury": 3590
            },
            "5": {
              "economy": 2840,
              "comfort": 3120,
              "luxury": 3410
            },
            "6-7": {
              "economy": 2730,
              "comfort": 3000,
              "luxury": 3280
            },
            "srs": {
              "economy": 380,
              "comfort": 420,
              "luxury": 460
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Kati Kati Tented Camp",
        "Seronera Wildlife Lodge",
        "Serengeti Wilderness Camp",
        "Rhino Lodge Ngorongoro",
        "Simba Campsite"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Serengeti Serena Safari Lodge",
        "Serengeti Sopa Lodge",
        "Dunia Camp",
        "Mbuzi Mawe Serena Camp",
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Four Seasons Safari Lodge Serengeti",
        "Melia Serengeti Lodge",
        "Lemala Ewanjan Tented Camp",
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Singita Sasakwa Lodge",
        "Singita Faru Faru Lodge",
        "One Nature Nyaruswiga",
        "&Beyond Klein's Camp",
        "andBeyond Ngorongoro Crater Lodge – Suite"
      ]
    }
  },
  "8-day-kenya-tanzania-zanzibar-beach-combo": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 8140,
              "comfort": 8950,
              "luxury": 9770
            },
            "2": {
              "economy": 5360,
              "comfort": 5900,
              "luxury": 6430
            },
            "3": {
              "economy": 4600,
              "comfort": 5060,
              "luxury": 5520
            },
            "4": {
              "economy": 4230,
              "comfort": 4650,
              "luxury": 5080
            },
            "5": {
              "economy": 4020,
              "comfort": 4420,
              "luxury": 4820
            },
            "6-7": {
              "economy": 3860,
              "comfort": 4250,
              "luxury": 4630
            },
            "srs": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 9110,
              "comfort": 10020,
              "luxury": 10930
            },
            "2": {
              "economy": 6000,
              "comfort": 6600,
              "luxury": 7200
            },
            "3": {
              "economy": 5160,
              "comfort": 5680,
              "luxury": 6190
            },
            "4": {
              "economy": 4740,
              "comfort": 5210,
              "luxury": 5690
            },
            "5": {
              "economy": 4500,
              "comfort": 4950,
              "luxury": 5400
            },
            "6-7": {
              "economy": 4320,
              "comfort": 4750,
              "luxury": 5180
            },
            "srs": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 11800,
              "comfort": 12980,
              "luxury": 14160
            },
            "2": {
              "economy": 7770,
              "comfort": 8550,
              "luxury": 9320
            },
            "3": {
              "economy": 6680,
              "comfort": 7350,
              "luxury": 8020
            },
            "4": {
              "economy": 6130,
              "comfort": 6740,
              "luxury": 7360
            },
            "5": {
              "economy": 5830,
              "comfort": 6410,
              "luxury": 7000
            },
            "6-7": {
              "economy": 5590,
              "comfort": 6150,
              "luxury": 6710
            },
            "srs": {
              "economy": 780,
              "comfort": 860,
              "luxury": 940
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 7160,
              "comfort": 7880,
              "luxury": 8590
            },
            "2": {
              "economy": 4710,
              "comfort": 5180,
              "luxury": 5650
            },
            "3": {
              "economy": 4050,
              "comfort": 4460,
              "luxury": 4860
            },
            "4": {
              "economy": 3720,
              "comfort": 4090,
              "luxury": 4460
            },
            "5": {
              "economy": 3540,
              "comfort": 3890,
              "luxury": 4250
            },
            "6-7": {
              "economy": 3400,
              "comfort": 3740,
              "luxury": 4080
            },
            "srs": {
              "economy": 470,
              "comfort": 520,
              "luxury": 560
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Kati Kati Tented Camp",
        "Seronera Wildlife Lodge",
        "Serengeti Wilderness Camp",
        "Rhino Lodge Ngorongoro",
        "Simba Campsite",
        "Flame Tree Cottages",
        "Warere Beach Hotel",
        "Kendwa Rocks Beach Hotel"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Serengeti Serena Safari Lodge",
        "Serengeti Sopa Lodge",
        "Dunia Camp",
        "Mbuzi Mawe Serena Camp",
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge",
        "DoubleTree by Hilton Zanzibar",
        "Langi Langi Beach Bungalows",
        "Ocean Paradise Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Four Seasons Safari Lodge Serengeti",
        "Melia Serengeti Lodge",
        "Lemala Ewanjan Tented Camp",
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp",
        "Diamonds Star of the East",
        "The Residence Zanzibar",
        "Baraza Resort & Spa"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Singita Sasakwa Lodge",
        "Singita Faru Faru Lodge",
        "One Nature Nyaruswiga",
        "&Beyond Klein's Camp",
        "andBeyond Ngorongoro Crater Lodge – Suite",
        "Zuri Zanzibar",
        "Mnemba Island Lodge (andBeyond)",
        "Kilindi Zanzibar"
      ]
    }
  },
  "10-day-east-africa-grand-circuit": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 9280,
              "comfort": 10210,
              "luxury": 11140
            },
            "2": {
              "economy": 6100,
              "comfort": 6710,
              "luxury": 7320
            },
            "3": {
              "economy": 5250,
              "comfort": 5780,
              "luxury": 6300
            },
            "4": {
              "economy": 4820,
              "comfort": 5300,
              "luxury": 5780
            },
            "5": {
              "economy": 4580,
              "comfort": 5040,
              "luxury": 5500
            },
            "6-7": {
              "economy": 4390,
              "comfort": 4830,
              "luxury": 5270
            },
            "srs": {
              "economy": 610,
              "comfort": 670,
              "luxury": 730
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 10380,
              "comfort": 11420,
              "luxury": 12460
            },
            "2": {
              "economy": 6830,
              "comfort": 7510,
              "luxury": 8200
            },
            "3": {
              "economy": 5870,
              "comfort": 6460,
              "luxury": 7040
            },
            "4": {
              "economy": 5400,
              "comfort": 5940,
              "luxury": 6480
            },
            "5": {
              "economy": 5130,
              "comfort": 5640,
              "luxury": 6160
            },
            "6-7": {
              "economy": 4920,
              "comfort": 5410,
              "luxury": 5900
            },
            "srs": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 13450,
              "comfort": 14800,
              "luxury": 16140
            },
            "2": {
              "economy": 8850,
              "comfort": 9740,
              "luxury": 10620
            },
            "3": {
              "economy": 7610,
              "comfort": 8370,
              "luxury": 9130
            },
            "4": {
              "economy": 6990,
              "comfort": 7690,
              "luxury": 8390
            },
            "5": {
              "economy": 6640,
              "comfort": 7300,
              "luxury": 7970
            },
            "6-7": {
              "economy": 6370,
              "comfort": 7010,
              "luxury": 7640
            },
            "srs": {
              "economy": 890,
              "comfort": 980,
              "luxury": 1070
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 8160,
              "comfort": 8980,
              "luxury": 9790
            },
            "2": {
              "economy": 5370,
              "comfort": 5910,
              "luxury": 6440
            },
            "3": {
              "economy": 4620,
              "comfort": 5080,
              "luxury": 5540
            },
            "4": {
              "economy": 4240,
              "comfort": 4660,
              "luxury": 5090
            },
            "5": {
              "economy": 4030,
              "comfort": 4430,
              "luxury": 4840
            },
            "6-7": {
              "economy": 3870,
              "comfort": 4260,
              "luxury": 4640
            },
            "srs": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Kati Kati Tented Camp",
        "Seronera Wildlife Lodge",
        "Serengeti Wilderness Camp",
        "Rhino Lodge Ngorongoro",
        "Simba Campsite",
        "Flame Tree Cottages",
        "Warere Beach Hotel",
        "Kendwa Rocks Beach Hotel"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Serengeti Serena Safari Lodge",
        "Serengeti Sopa Lodge",
        "Dunia Camp",
        "Mbuzi Mawe Serena Camp",
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge",
        "DoubleTree by Hilton Zanzibar",
        "Langi Langi Beach Bungalows",
        "Ocean Paradise Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Four Seasons Safari Lodge Serengeti",
        "Melia Serengeti Lodge",
        "Lemala Ewanjan Tented Camp",
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp",
        "Diamonds Star of the East",
        "The Residence Zanzibar",
        "Baraza Resort & Spa"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Singita Sasakwa Lodge",
        "Singita Faru Faru Lodge",
        "One Nature Nyaruswiga",
        "&Beyond Klein's Camp",
        "andBeyond Ngorongoro Crater Lodge – Suite",
        "Zuri Zanzibar",
        "Mnemba Island Lodge (andBeyond)",
        "Kilindi Zanzibar"
      ]
    }
  },
  "5-day-zanzibar-beach-holiday": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "2": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "3": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "4": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "5": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "6-7": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2060,
              "comfort": 2270,
              "luxury": 2470
            },
            "2": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "3": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "4": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "5": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "6-7": {
              "economy": 970,
              "comfort": 1070,
              "luxury": 1160
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2660,
              "comfort": 2930,
              "luxury": 3190
            },
            "2": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "3": {
              "economy": 1510,
              "comfort": 1660,
              "luxury": 1810
            },
            "4": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "5": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "6-7": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "2": {
              "economy": 1060,
              "comfort": 1170,
              "luxury": 1270
            },
            "3": {
              "economy": 920,
              "comfort": 1010,
              "luxury": 1100
            },
            "4": {
              "economy": 840,
              "comfort": 920,
              "luxury": 1010
            },
            "5": {
              "economy": 800,
              "comfort": 880,
              "luxury": 960
            },
            "6-7": {
              "economy": 770,
              "comfort": 850,
              "luxury": 920
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Flame Tree Cottages",
        "Warere Beach Hotel",
        "Kendwa Rocks Beach Hotel"
      ],
      "comfort": [
        "DoubleTree by Hilton Zanzibar",
        "Langi Langi Beach Bungalows",
        "Ocean Paradise Resort"
      ],
      "luxury": [
        "Diamonds Star of the East",
        "The Residence Zanzibar",
        "Baraza Resort & Spa"
      ],
      "superior_luxury": [
        "Zuri Zanzibar",
        "Mnemba Island Lodge (andBeyond)",
        "Kilindi Zanzibar"
      ]
    }
  },
  "6-day-mount-kilimanjaro-marangu-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2210,
        "group_of_2": 2030,
        "group_of_3_4": 1880,
        "group_of_5_plus": 1770
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, guides, porters, meals, camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "3-day-nairobi-to-diani-amboseli-giants": {
    "pricing": {
      "seasons": {
        "low": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1450,
              "comfort": 1600,
              "luxury": 1740
            },
            "2": {
              "economy": 940,
              "comfort": 1030,
              "luxury": 1130
            },
            "3": {
              "economy": 800,
              "comfort": 880,
              "luxury": 960
            },
            "4": {
              "economy": 720,
              "comfort": 790,
              "luxury": 860
            },
            "5": {
              "economy": 680,
              "comfort": 750,
              "luxury": 820
            },
            "6-7": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1850,
              "comfort": 2040,
              "luxury": 2220
            },
            "2": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "3": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "4": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "5": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "6-7": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "srs": {
              "economy": 100,
              "comfort": 110,
              "luxury": 120
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Amboseli Sopa Lodge \u2013 Standard rooms"
      ],
      "comfort": [
        "Amboseli Sopa Lodge \u2013 Premium rooms",
        "AA Amboseli Lodge",
        "Sentrim Amboseli Camp",
        "Penety Resort",
        "Hunter\u2019s Luxury Manor",
        "Amboseli"
      ],
      "luxury": [
        "Amboseli Serena Lodge",
        "Oltukai lodge",
        "Kibo Safari Camp",
        "Kilima Safari Camp",
        "Oilepo Safari Lodge"
      ],
      "superior_luxury": [
        "Tulia Amboseli Safari Camp",
        "Elerai Camp",
        "Tawi lodge",
        "Tortilis Camp",
        "Porini Amboseli camp"
      ]
    }
  },
  "4-day-amboseli-tsavo-beast-to-beach": {
    "pricing": {
      "seasons": {
        "low": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "2": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "3": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "4": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "5": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "6-7": {
              "economy": 970,
              "comfort": 1070,
              "luxury": 1160
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "2": {
              "economy": 1540,
              "comfort": 1690,
              "luxury": 1850
            },
            "3": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "4": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "5": {
              "economy": 1140,
              "comfort": 1250,
              "luxury": 1370
            },
            "6-7": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Amboseli Sopa Lodge \u2013 Standard rooms"
      ],
      "comfort": [
        "Amboseli Sopa Lodge \u2013 Premium rooms",
        "AA Amboseli Lodge",
        "Sentrim Amboseli Camp",
        "Penety Resort",
        "Hunter\u2019s Luxury Manor",
        "Amboseli"
      ],
      "luxury": [
        "Amboseli Serena Lodge",
        "Oltukai lodge",
        "Kibo Safari Camp",
        "Kilima Safari Camp",
        "Oilepo Safari Lodge"
      ],
      "superior_luxury": [
        "Tulia Amboseli Safari Camp",
        "Elerai Camp",
        "Tawi lodge",
        "Tortilis Camp",
        "Porini Amboseli camp"
      ]
    }
  },
  "10-day-kenya-highlights-diani-beach": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 5110,
              "comfort": 5620,
              "luxury": 6130
            },
            "2": {
              "economy": 3360,
              "comfort": 3700,
              "luxury": 4030
            },
            "3": {
              "economy": 2890,
              "comfort": 3180,
              "luxury": 3470
            },
            "4": {
              "economy": 2660,
              "comfort": 2930,
              "luxury": 3190
            },
            "5": {
              "economy": 2520,
              "comfort": 2770,
              "luxury": 3020
            },
            "6-7": {
              "economy": 2420,
              "comfort": 2660,
              "luxury": 2900
            },
            "srs": {
              "economy": 340,
              "comfort": 370,
              "luxury": 410
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5720,
              "comfort": 6290,
              "luxury": 6860
            },
            "2": {
              "economy": 3770,
              "comfort": 4150,
              "luxury": 4520
            },
            "3": {
              "economy": 3240,
              "comfort": 3560,
              "luxury": 3890
            },
            "4": {
              "economy": 2980,
              "comfort": 3280,
              "luxury": 3580
            },
            "5": {
              "economy": 2830,
              "comfort": 3110,
              "luxury": 3400
            },
            "6-7": {
              "economy": 2720,
              "comfort": 2990,
              "luxury": 3260
            },
            "srs": {
              "economy": 380,
              "comfort": 420,
              "luxury": 460
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 7410,
              "comfort": 8150,
              "luxury": 8890
            },
            "2": {
              "economy": 4870,
              "comfort": 5360,
              "luxury": 5840
            },
            "3": {
              "economy": 4190,
              "comfort": 4610,
              "luxury": 5030
            },
            "4": {
              "economy": 3860,
              "comfort": 4250,
              "luxury": 4630
            },
            "5": {
              "economy": 3660,
              "comfort": 4030,
              "luxury": 4390
            },
            "6-7": {
              "economy": 3520,
              "comfort": 3870,
              "luxury": 4220
            },
            "srs": {
              "economy": 490,
              "comfort": 540,
              "luxury": 590
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4500,
              "comfort": 4950,
              "luxury": 5400
            },
            "2": {
              "economy": 2960,
              "comfort": 3260,
              "luxury": 3550
            },
            "3": {
              "economy": 2540,
              "comfort": 2790,
              "luxury": 3050
            },
            "4": {
              "economy": 2340,
              "comfort": 2570,
              "luxury": 2810
            },
            "5": {
              "economy": 2220,
              "comfort": 2440,
              "luxury": 2660
            },
            "6-7": {
              "economy": 2140,
              "comfort": 2350,
              "luxury": 2570
            },
            "srs": {
              "economy": 300,
              "comfort": 330,
              "luxury": 360
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "2-day-diani-beach-to-tsavo-east": {
    "pricing": {
      "seasons": {
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "6-7": {
              "economy": 430,
              "comfort": 470,
              "luxury": 520,
              "superior_luxury": 640
            },
            "01": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190,
              "superior_luxury": 1480
            },
            "srs": {
              "economy": 40,
              "comfort": 40,
              "luxury": 50,
              "superior_luxury": 60
            }
          }
        },
        "low": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "6-7": {
              "economy": 360,
              "comfort": 400,
              "luxury": 430,
              "superior_luxury": 540
            },
            "01": {
              "economy": 830,
              "comfort": 910,
              "luxury": 1000,
              "superior_luxury": 1240
            },
            "srs": {
              "economy": 30,
              "comfort": 30,
              "luxury": 40,
              "superior_luxury": 40
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Voi Safari Lodge"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Sentrim Tsavo Camp",
        "Voi Wildlife Lodge",
        "Galana Crocodile Camp",
        "Ngutuni Safari Lodge"
      ],
      "luxury": [
        "Satao Camp",
        "Ashnil Aruba Lodge \u2013 Tent rooms"
      ]
    }
  },
  "3-day-diani-to-amboseli-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "2": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "3": {
              "economy": 1050,
              "comfort": 1160,
              "luxury": 1260
            },
            "4": {
              "economy": 960,
              "comfort": 1060,
              "luxury": 1150
            },
            "5": {
              "economy": 920,
              "comfort": 1010,
              "luxury": 1100
            },
            "6-7": {
              "economy": 890,
              "comfort": 980,
              "luxury": 1070
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2070,
              "comfort": 2280,
              "luxury": 2480
            },
            "2": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "3": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "4": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "5": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "6-7": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2690,
              "comfort": 2960,
              "luxury": 3230
            },
            "2": {
              "economy": 1770,
              "comfort": 1950,
              "luxury": 2120
            },
            "3": {
              "economy": 1520,
              "comfort": 1670,
              "luxury": 1820
            },
            "4": {
              "economy": 1400,
              "comfort": 1540,
              "luxury": 1680
            },
            "5": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "6-7": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1630,
              "comfort": 1790,
              "luxury": 1960
            },
            "2": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "3": {
              "economy": 930,
              "comfort": 1020,
              "luxury": 1120
            },
            "4": {
              "economy": 850,
              "comfort": 940,
              "luxury": 1020
            },
            "5": {
              "economy": 810,
              "comfort": 890,
              "luxury": 970
            },
            "6-7": {
              "economy": 780,
              "comfort": 860,
              "luxury": 940
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "5-day-coastal-wildlife-explorer-diani": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2450,
              "comfort": 2700,
              "luxury": 2940
            },
            "2": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "3": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "4": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "5": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "6-7": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2760,
              "comfort": 3040,
              "luxury": 3310
            },
            "2": {
              "economy": 1820,
              "comfort": 2000,
              "luxury": 2180
            },
            "3": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "4": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "5": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "6-7": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3570,
              "comfort": 3930,
              "luxury": 4280
            },
            "2": {
              "economy": 2340,
              "comfort": 2570,
              "luxury": 2810
            },
            "3": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "4": {
              "economy": 1850,
              "comfort": 2040,
              "luxury": 2220
            },
            "5": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "6-7": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "2": {
              "economy": 1420,
              "comfort": 1560,
              "luxury": 1700
            },
            "3": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "4": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "5": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "6-7": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "7-day-kenya-safari-and-diani-beach": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4920,
              "comfort": 5410,
              "luxury": 5900
            },
            "2": {
              "economy": 3240,
              "comfort": 3560,
              "luxury": 3890
            },
            "3": {
              "economy": 2780,
              "comfort": 3060,
              "luxury": 3340
            },
            "4": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "5": {
              "economy": 2430,
              "comfort": 2670,
              "luxury": 2920
            },
            "6-7": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "srs": {
              "economy": 330,
              "comfort": 360,
              "luxury": 400
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5510,
              "comfort": 6060,
              "luxury": 6610
            },
            "2": {
              "economy": 3630,
              "comfort": 3990,
              "luxury": 4360
            },
            "3": {
              "economy": 3120,
              "comfort": 3430,
              "luxury": 3740
            },
            "4": {
              "economy": 2870,
              "comfort": 3160,
              "luxury": 3440
            },
            "5": {
              "economy": 2720,
              "comfort": 2990,
              "luxury": 3260
            },
            "6-7": {
              "economy": 2620,
              "comfort": 2880,
              "luxury": 3140
            },
            "srs": {
              "economy": 360,
              "comfort": 400,
              "luxury": 430
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 7140,
              "comfort": 7850,
              "luxury": 8570
            },
            "2": {
              "economy": 4700,
              "comfort": 5170,
              "luxury": 5640
            },
            "3": {
              "economy": 4040,
              "comfort": 4440,
              "luxury": 4850
            },
            "4": {
              "economy": 3710,
              "comfort": 4080,
              "luxury": 4450
            },
            "5": {
              "economy": 3530,
              "comfort": 3880,
              "luxury": 4240
            },
            "6-7": {
              "economy": 3380,
              "comfort": 3720,
              "luxury": 4060
            },
            "srs": {
              "economy": 470,
              "comfort": 520,
              "luxury": 560
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4330,
              "comfort": 4760,
              "luxury": 5200
            },
            "2": {
              "economy": 2850,
              "comfort": 3140,
              "luxury": 3420
            },
            "3": {
              "economy": 2450,
              "comfort": 2700,
              "luxury": 2940
            },
            "4": {
              "economy": 2260,
              "comfort": 2490,
              "luxury": 2710
            },
            "5": {
              "economy": 2140,
              "comfort": 2350,
              "luxury": 2570
            },
            "6-7": {
              "economy": 2050,
              "comfort": 2260,
              "luxury": 2460
            },
            "srs": {
              "economy": 280,
              "comfort": 310,
              "luxury": 340
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "2-day-amboseli-express": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "2": {
              "economy": 800,
              "comfort": 880,
              "luxury": 960
            },
            "3": {
              "economy": 690,
              "comfort": 760,
              "luxury": 830
            },
            "4": {
              "economy": 640,
              "comfort": 700,
              "luxury": 770
            },
            "5": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "6-7": {
              "economy": 570,
              "comfort": 630,
              "luxury": 680
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "2": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "3": {
              "economy": 770,
              "comfort": 850,
              "luxury": 920
            },
            "4": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "5": {
              "economy": 670,
              "comfort": 740,
              "luxury": 800
            },
            "6-7": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "2": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "3": {
              "economy": 1000,
              "comfort": 1100,
              "luxury": 1200
            },
            "4": {
              "economy": 920,
              "comfort": 1010,
              "luxury": 1100
            },
            "5": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "6-7": {
              "economy": 830,
              "comfort": 910,
              "luxury": 1000
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "2": {
              "economy": 700,
              "comfort": 770,
              "luxury": 840
            },
            "3": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "4": {
              "economy": 560,
              "comfort": 620,
              "luxury": 670
            },
            "5": {
              "economy": 530,
              "comfort": 580,
              "luxury": 640
            },
            "6-7": {
              "economy": 500,
              "comfort": 550,
              "luxury": 600
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "3-day-amboseli-classic": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2280,
              "comfort": 2510,
              "luxury": 2740
            },
            "2": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "3": {
              "economy": 1290,
              "comfort": 1420,
              "luxury": 1550
            },
            "4": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "5": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "6-7": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2540,
              "comfort": 2790,
              "luxury": 3050
            },
            "2": {
              "economy": 1680,
              "comfort": 1850,
              "luxury": 2020
            },
            "3": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "4": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "5": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "6-7": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3290,
              "comfort": 3620,
              "luxury": 3950
            },
            "2": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "3": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "4": {
              "economy": 1710,
              "comfort": 1880,
              "luxury": 2050
            },
            "5": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "6-7": {
              "economy": 1560,
              "comfort": 1720,
              "luxury": 1870
            },
            "srs": {
              "economy": 220,
              "comfort": 240,
              "luxury": 260
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2000,
              "comfort": 2200,
              "luxury": 2400
            },
            "2": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "3": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "4": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "5": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "6-7": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "srs": {
              "economy": 130,
              "comfort": 140,
              "luxury": 160
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "3-day-masai-mara-fly-in": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1820,
              "comfort": 2000,
              "luxury": 2180
            },
            "2": {
              "economy": 1190,
              "comfort": 1310,
              "luxury": 1430
            },
            "3": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "4": {
              "economy": 940,
              "comfort": 1030,
              "luxury": 1130
            },
            "5": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "6-7": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2040,
              "comfort": 2240,
              "luxury": 2450
            },
            "2": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "3": {
              "economy": 1150,
              "comfort": 1260,
              "luxury": 1380
            },
            "4": {
              "economy": 1060,
              "comfort": 1170,
              "luxury": 1270
            },
            "5": {
              "economy": 1010,
              "comfort": 1110,
              "luxury": 1210
            },
            "6-7": {
              "economy": 960,
              "comfort": 1060,
              "luxury": 1150
            },
            "srs": {
              "economy": 130,
              "comfort": 140,
              "luxury": 160
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2630,
              "comfort": 2890,
              "luxury": 3160
            },
            "2": {
              "economy": 1730,
              "comfort": 1900,
              "luxury": 2080
            },
            "3": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "4": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "5": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "6-7": {
              "economy": 1250,
              "comfort": 1380,
              "luxury": 1500
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1600,
              "comfort": 1760,
              "luxury": 1920
            },
            "2": {
              "economy": 1050,
              "comfort": 1160,
              "luxury": 1260
            },
            "3": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "4": {
              "economy": 830,
              "comfort": 910,
              "luxury": 1000
            },
            "5": {
              "economy": 790,
              "comfort": 870,
              "luxury": 950
            },
            "6-7": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "2-day-amboseli-luxury-fly-in": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "2": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "3": {
              "economy": 1450,
              "comfort": 1600,
              "luxury": 1740
            },
            "4": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "5": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "6-7": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2870,
              "comfort": 3160,
              "luxury": 3440
            },
            "2": {
              "economy": 1880,
              "comfort": 2070,
              "luxury": 2260
            },
            "3": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "4": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "5": {
              "economy": 1410,
              "comfort": 1550,
              "luxury": 1690
            },
            "6-7": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3700,
              "comfort": 4070,
              "luxury": 4440
            },
            "2": {
              "economy": 2440,
              "comfort": 2680,
              "luxury": 2930
            },
            "3": {
              "economy": 2100,
              "comfort": 2310,
              "luxury": 2520
            },
            "4": {
              "economy": 1930,
              "comfort": 2120,
              "luxury": 2320
            },
            "5": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "6-7": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2250,
              "comfort": 2480,
              "luxury": 2700
            },
            "2": {
              "economy": 1480,
              "comfort": 1630,
              "luxury": 1780
            },
            "3": {
              "economy": 1270,
              "comfort": 1400,
              "luxury": 1520
            },
            "4": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "5": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "6-7": {
              "economy": 1060,
              "comfort": 1170,
              "luxury": 1270
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "4-day-masai-mara-migration": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2450,
              "comfort": 2700,
              "luxury": 2940
            },
            "2": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "3": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "4": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "5": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "6-7": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2760,
              "comfort": 3040,
              "luxury": 3310
            },
            "2": {
              "economy": 1820,
              "comfort": 2000,
              "luxury": 2180
            },
            "3": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "4": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "5": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "6-7": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3570,
              "comfort": 3930,
              "luxury": 4280
            },
            "2": {
              "economy": 2340,
              "comfort": 2570,
              "luxury": 2810
            },
            "3": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "4": {
              "economy": 1850,
              "comfort": 2040,
              "luxury": 2220
            },
            "5": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "6-7": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "2": {
              "economy": 1420,
              "comfort": 1560,
              "luxury": 1700
            },
            "3": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "4": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "5": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "6-7": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "4-day-zanzibar-stone-town-beach": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2080,
              "comfort": 2290,
              "luxury": 2500
            },
            "2": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "3": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "4": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "5": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "6-7": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "2": {
              "economy": 1530,
              "comfort": 1680,
              "luxury": 1840
            },
            "3": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "4": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "5": {
              "economy": 1150,
              "comfort": 1260,
              "luxury": 1380
            },
            "6-7": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3010,
              "comfort": 3310,
              "luxury": 3610
            },
            "2": {
              "economy": 1980,
              "comfort": 2180,
              "luxury": 2380
            },
            "3": {
              "economy": 1710,
              "comfort": 1880,
              "luxury": 2050
            },
            "4": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "5": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "6-7": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "2": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "3": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "4": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "5": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "6-7": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Flame Tree Cottages",
        "Warere Beach Hotel",
        "Kendwa Rocks Beach Hotel"
      ],
      "comfort": [
        "DoubleTree by Hilton Zanzibar",
        "Langi Langi Beach Bungalows",
        "Ocean Paradise Resort"
      ],
      "luxury": [
        "Diamonds Star of the East",
        "The Residence Zanzibar",
        "Baraza Resort & Spa"
      ],
      "superior_luxury": [
        "Zuri Zanzibar",
        "Mnemba Island Lodge (andBeyond)",
        "Kilindi Zanzibar"
      ]
    }
  },
  "6-day-ultimate-zanzibar-getaway": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2650,
              "comfort": 2920,
              "luxury": 3180
            },
            "2": {
              "economy": 1740,
              "comfort": 1910,
              "luxury": 2090
            },
            "3": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "4": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "5": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "6-7": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2970,
              "comfort": 3270,
              "luxury": 3560
            },
            "2": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "3": {
              "economy": 1680,
              "comfort": 1850,
              "luxury": 2020
            },
            "4": {
              "economy": 1540,
              "comfort": 1690,
              "luxury": 1850
            },
            "5": {
              "economy": 1470,
              "comfort": 1620,
              "luxury": 1760
            },
            "6-7": {
              "economy": 1400,
              "comfort": 1540,
              "luxury": 1680
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3840,
              "comfort": 4220,
              "luxury": 4610
            },
            "2": {
              "economy": 2530,
              "comfort": 2780,
              "luxury": 3040
            },
            "3": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "4": {
              "economy": 1990,
              "comfort": 2190,
              "luxury": 2390
            },
            "5": {
              "economy": 1890,
              "comfort": 2080,
              "luxury": 2270
            },
            "6-7": {
              "economy": 1820,
              "comfort": 2000,
              "luxury": 2180
            },
            "srs": {
              "economy": 250,
              "comfort": 280,
              "luxury": 300
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "2": {
              "economy": 1530,
              "comfort": 1680,
              "luxury": 1840
            },
            "3": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "4": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "5": {
              "economy": 1150,
              "comfort": 1260,
              "luxury": 1380
            },
            "6-7": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Flame Tree Cottages",
        "Warere Beach Hotel",
        "Kendwa Rocks Beach Hotel"
      ],
      "comfort": [
        "DoubleTree by Hilton Zanzibar",
        "Langi Langi Beach Bungalows",
        "Ocean Paradise Resort"
      ],
      "luxury": [
        "Diamonds Star of the East",
        "The Residence Zanzibar",
        "Baraza Resort & Spa"
      ],
      "superior_luxury": [
        "Zuri Zanzibar",
        "Mnemba Island Lodge (andBeyond)",
        "Kilindi Zanzibar"
      ]
    }
  },
  "3-day-amboseli-flight-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2280,
              "comfort": 2510,
              "luxury": 2740
            },
            "2": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "3": {
              "economy": 1290,
              "comfort": 1420,
              "luxury": 1550
            },
            "4": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "5": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "6-7": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2540,
              "comfort": 2790,
              "luxury": 3050
            },
            "2": {
              "economy": 1680,
              "comfort": 1850,
              "luxury": 2020
            },
            "3": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "4": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "5": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "6-7": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3290,
              "comfort": 3620,
              "luxury": 3950
            },
            "2": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "3": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "4": {
              "economy": 1710,
              "comfort": 1880,
              "luxury": 2050
            },
            "5": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "6-7": {
              "economy": 1560,
              "comfort": 1720,
              "luxury": 1870
            },
            "srs": {
              "economy": 220,
              "comfort": 240,
              "luxury": 260
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2000,
              "comfort": 2200,
              "luxury": 2400
            },
            "2": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "3": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "4": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "5": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "6-7": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "srs": {
              "economy": 130,
              "comfort": 140,
              "luxury": 160
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "4-day-diani-to-nairobi-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2370,
              "comfort": 2610,
              "luxury": 2840
            },
            "2": {
              "economy": 1560,
              "comfort": 1720,
              "luxury": 1870
            },
            "3": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "4": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "5": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "6-7": {
              "economy": 1120,
              "comfort": 1230,
              "luxury": 1340
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2650,
              "comfort": 2920,
              "luxury": 3180
            },
            "2": {
              "economy": 1740,
              "comfort": 1910,
              "luxury": 2090
            },
            "3": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "4": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "5": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "6-7": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3430,
              "comfort": 3770,
              "luxury": 4120
            },
            "2": {
              "economy": 2260,
              "comfort": 2490,
              "luxury": 2710
            },
            "3": {
              "economy": 1940,
              "comfort": 2130,
              "luxury": 2330
            },
            "4": {
              "economy": 1790,
              "comfort": 1970,
              "luxury": 2150
            },
            "5": {
              "economy": 1700,
              "comfort": 1870,
              "luxury": 2040
            },
            "6-7": {
              "economy": 1630,
              "comfort": 1790,
              "luxury": 1960
            },
            "srs": {
              "economy": 230,
              "comfort": 250,
              "luxury": 280
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2080,
              "comfort": 2290,
              "luxury": 2500
            },
            "2": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "3": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "4": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "5": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "6-7": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "2-day-ol-pejeta-wildlife-sanctuary": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1410,
              "comfort": 1550,
              "luxury": 1690
            },
            "2": {
              "economy": 930,
              "comfort": 1020,
              "luxury": 1120
            },
            "3": {
              "economy": 800,
              "comfort": 880,
              "luxury": 960
            },
            "4": {
              "economy": 730,
              "comfort": 800,
              "luxury": 880
            },
            "5": {
              "economy": 700,
              "comfort": 770,
              "luxury": 840
            },
            "6-7": {
              "economy": 670,
              "comfort": 740,
              "luxury": 800
            },
            "srs": {
              "economy": 100,
              "comfort": 110,
              "luxury": 120
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1590,
              "comfort": 1750,
              "luxury": 1910
            },
            "2": {
              "economy": 1050,
              "comfort": 1160,
              "luxury": 1260
            },
            "3": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "4": {
              "economy": 830,
              "comfort": 910,
              "luxury": 1000
            },
            "5": {
              "economy": 790,
              "comfort": 870,
              "luxury": 950
            },
            "6-7": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2060,
              "comfort": 2270,
              "luxury": 2470
            },
            "2": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "3": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "4": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "5": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "6-7": {
              "economy": 970,
              "comfort": 1070,
              "luxury": 1160
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1250,
              "comfort": 1380,
              "luxury": 1500
            },
            "2": {
              "economy": 820,
              "comfort": 900,
              "luxury": 980
            },
            "3": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "4": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "5": {
              "economy": 610,
              "comfort": 670,
              "luxury": 730
            },
            "6-7": {
              "economy": 590,
              "comfort": 650,
              "luxury": 710
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Ol Pejeta Safari Cottages"
      ],
      "comfort": [
        "Sweetwaters Serena Camp",
        "Ol Pejeta Bush Camp"
      ],
      "luxury": [
        "The River Camp – Ol Pejeta",
        "Elewana Kifaru House"
      ]
    }
  },
  "2-day-rift-valley-lakes-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1240,
              "comfort": 1360,
              "luxury": 1490
            },
            "2": {
              "economy": 810,
              "comfort": 890,
              "luxury": 970
            },
            "3": {
              "economy": 700,
              "comfort": 770,
              "luxury": 840
            },
            "4": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "5": {
              "economy": 610,
              "comfort": 670,
              "luxury": 730
            },
            "6-7": {
              "economy": 590,
              "comfort": 650,
              "luxury": 710
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "2": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "3": {
              "economy": 780,
              "comfort": 860,
              "luxury": 940
            },
            "4": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "5": {
              "economy": 680,
              "comfort": 750,
              "luxury": 820
            },
            "6-7": {
              "economy": 660,
              "comfort": 730,
              "luxury": 790
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1790,
              "comfort": 1970,
              "luxury": 2150
            },
            "2": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "3": {
              "economy": 1010,
              "comfort": 1110,
              "luxury": 1210
            },
            "4": {
              "economy": 930,
              "comfort": 1020,
              "luxury": 1120
            },
            "5": {
              "economy": 880,
              "comfort": 970,
              "luxury": 1060
            },
            "6-7": {
              "economy": 840,
              "comfort": 920,
              "luxury": 1010
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "2": {
              "economy": 710,
              "comfort": 780,
              "luxury": 850
            },
            "3": {
              "economy": 610,
              "comfort": 670,
              "luxury": 730
            },
            "4": {
              "economy": 570,
              "comfort": 630,
              "luxury": 680
            },
            "5": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            },
            "6-7": {
              "economy": 510,
              "comfort": 560,
              "luxury": 610
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Lake Nakuru Flamingo Lodge",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge"
      ],
      "comfort": [
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp"
      ],
      "luxury": [
        "The Cliff – Lake Nakuru",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort"
      ],
      "superior_luxury": [
        "Hippo Point – Private House"
      ]
    }
  },
  "3-day-tsavo-west-amboseli-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2080,
              "comfort": 2290,
              "luxury": 2500
            },
            "2": {
              "economy": 1370,
              "comfort": 1510,
              "luxury": 1640
            },
            "3": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "4": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "5": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "6-7": {
              "economy": 990,
              "comfort": 1090,
              "luxury": 1190
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "2": {
              "economy": 1530,
              "comfort": 1680,
              "luxury": 1840
            },
            "3": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "4": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "5": {
              "economy": 1150,
              "comfort": 1260,
              "luxury": 1380
            },
            "6-7": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3010,
              "comfort": 3310,
              "luxury": 3610
            },
            "2": {
              "economy": 1980,
              "comfort": 2180,
              "luxury": 2380
            },
            "3": {
              "economy": 1710,
              "comfort": 1880,
              "luxury": 2050
            },
            "4": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "5": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "6-7": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "2": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "3": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "4": {
              "economy": 950,
              "comfort": 1040,
              "luxury": 1140
            },
            "5": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "6-7": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "4-day-classic-parks-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "2": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "3": {
              "economy": 1450,
              "comfort": 1600,
              "luxury": 1740
            },
            "4": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "5": {
              "economy": 1260,
              "comfort": 1390,
              "luxury": 1510
            },
            "6-7": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "srs": {
              "economy": 180,
              "comfort": 200,
              "luxury": 220
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2870,
              "comfort": 3160,
              "luxury": 3440
            },
            "2": {
              "economy": 1880,
              "comfort": 2070,
              "luxury": 2260
            },
            "3": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "4": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "5": {
              "economy": 1410,
              "comfort": 1550,
              "luxury": 1690
            },
            "6-7": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3700,
              "comfort": 4070,
              "luxury": 4440
            },
            "2": {
              "economy": 2440,
              "comfort": 2680,
              "luxury": 2930
            },
            "3": {
              "economy": 2100,
              "comfort": 2310,
              "luxury": 2520
            },
            "4": {
              "economy": 1930,
              "comfort": 2120,
              "luxury": 2320
            },
            "5": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "6-7": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2250,
              "comfort": 2480,
              "luxury": 2700
            },
            "2": {
              "economy": 1480,
              "comfort": 1630,
              "luxury": 1780
            },
            "3": {
              "economy": 1270,
              "comfort": 1400,
              "luxury": 1520
            },
            "4": {
              "economy": 1170,
              "comfort": 1290,
              "luxury": 1400
            },
            "5": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "6-7": {
              "economy": 1060,
              "comfort": 1170,
              "luxury": 1270
            },
            "srs": {
              "economy": 150,
              "comfort": 160,
              "luxury": 180
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House"
      ]
    }
  },
  "5-day-amboseli-naivasha-mara-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3320,
              "comfort": 3650,
              "luxury": 3980
            },
            "2": {
              "economy": 2180,
              "comfort": 2400,
              "luxury": 2620
            },
            "3": {
              "economy": 1870,
              "comfort": 2060,
              "luxury": 2240
            },
            "4": {
              "economy": 1720,
              "comfort": 1890,
              "luxury": 2060
            },
            "5": {
              "economy": 1630,
              "comfort": 1790,
              "luxury": 1960
            },
            "6-7": {
              "economy": 1580,
              "comfort": 1740,
              "luxury": 1900
            },
            "srs": {
              "economy": 220,
              "comfort": 240,
              "luxury": 260
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3700,
              "comfort": 4070,
              "luxury": 4440
            },
            "2": {
              "economy": 2440,
              "comfort": 2680,
              "luxury": 2930
            },
            "3": {
              "economy": 2100,
              "comfort": 2310,
              "luxury": 2520
            },
            "4": {
              "economy": 1930,
              "comfort": 2120,
              "luxury": 2320
            },
            "5": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "6-7": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4810,
              "comfort": 5290,
              "luxury": 5770
            },
            "2": {
              "economy": 3170,
              "comfort": 3490,
              "luxury": 3800
            },
            "3": {
              "economy": 2720,
              "comfort": 2990,
              "luxury": 3260
            },
            "4": {
              "economy": 2500,
              "comfort": 2750,
              "luxury": 3000
            },
            "5": {
              "economy": 2380,
              "comfort": 2620,
              "luxury": 2860
            },
            "6-7": {
              "economy": 2280,
              "comfort": 2510,
              "luxury": 2740
            },
            "srs": {
              "economy": 320,
              "comfort": 350,
              "luxury": 380
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2910,
              "comfort": 3200,
              "luxury": 3490
            },
            "2": {
              "economy": 1920,
              "comfort": 2110,
              "luxury": 2300
            },
            "3": {
              "economy": 1650,
              "comfort": 1820,
              "luxury": 1980
            },
            "4": {
              "economy": 1510,
              "comfort": 1660,
              "luxury": 1810
            },
            "5": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "6-7": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "6-day-five-park-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4070,
              "comfort": 4480,
              "luxury": 4880
            },
            "2": {
              "economy": 2680,
              "comfort": 2950,
              "luxury": 3220
            },
            "3": {
              "economy": 2310,
              "comfort": 2540,
              "luxury": 2770
            },
            "4": {
              "economy": 2110,
              "comfort": 2320,
              "luxury": 2530
            },
            "5": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "6-7": {
              "economy": 1930,
              "comfort": 2120,
              "luxury": 2320
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 4560,
              "comfort": 5020,
              "luxury": 5470
            },
            "2": {
              "economy": 3000,
              "comfort": 3300,
              "luxury": 3600
            },
            "3": {
              "economy": 2570,
              "comfort": 2830,
              "luxury": 3080
            },
            "4": {
              "economy": 2370,
              "comfort": 2610,
              "luxury": 2840
            },
            "5": {
              "economy": 2250,
              "comfort": 2480,
              "luxury": 2700
            },
            "6-7": {
              "economy": 2160,
              "comfort": 2380,
              "luxury": 2590
            },
            "srs": {
              "economy": 310,
              "comfort": 340,
              "luxury": 370
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 5900,
              "comfort": 6490,
              "luxury": 7080
            },
            "2": {
              "economy": 3890,
              "comfort": 4280,
              "luxury": 4670
            },
            "3": {
              "economy": 3340,
              "comfort": 3670,
              "luxury": 4010
            },
            "4": {
              "economy": 3070,
              "comfort": 3380,
              "luxury": 3680
            },
            "5": {
              "economy": 2910,
              "comfort": 3200,
              "luxury": 3490
            },
            "6-7": {
              "economy": 2790,
              "comfort": 3070,
              "luxury": 3350
            },
            "srs": {
              "economy": 390,
              "comfort": 430,
              "luxury": 470
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 3580,
              "comfort": 3940,
              "luxury": 4300
            },
            "2": {
              "economy": 2350,
              "comfort": 2580,
              "luxury": 2820
            },
            "3": {
              "economy": 2030,
              "comfort": 2230,
              "luxury": 2440
            },
            "4": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "5": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "6-7": {
              "economy": 1700,
              "comfort": 1870,
              "luxury": 2040
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "6-day-samburu-nakuru-mara-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4160,
              "comfort": 4580,
              "luxury": 4990
            },
            "2": {
              "economy": 2740,
              "comfort": 3010,
              "luxury": 3290
            },
            "3": {
              "economy": 2350,
              "comfort": 2580,
              "luxury": 2820
            },
            "4": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "5": {
              "economy": 2060,
              "comfort": 2270,
              "luxury": 2470
            },
            "6-7": {
              "economy": 1970,
              "comfort": 2170,
              "luxury": 2360
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 4670,
              "comfort": 5140,
              "luxury": 5600
            },
            "2": {
              "economy": 3070,
              "comfort": 3380,
              "luxury": 3680
            },
            "3": {
              "economy": 2640,
              "comfort": 2900,
              "luxury": 3170
            },
            "4": {
              "economy": 2420,
              "comfort": 2660,
              "luxury": 2900
            },
            "5": {
              "economy": 2300,
              "comfort": 2530,
              "luxury": 2760
            },
            "6-7": {
              "economy": 2210,
              "comfort": 2430,
              "luxury": 2650
            },
            "srs": {
              "economy": 310,
              "comfort": 340,
              "luxury": 370
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 6030,
              "comfort": 6630,
              "luxury": 7240
            },
            "2": {
              "economy": 3980,
              "comfort": 4380,
              "luxury": 4780
            },
            "3": {
              "economy": 3420,
              "comfort": 3760,
              "luxury": 4100
            },
            "4": {
              "economy": 3140,
              "comfort": 3450,
              "luxury": 3770
            },
            "5": {
              "economy": 2980,
              "comfort": 3280,
              "luxury": 3580
            },
            "6-7": {
              "economy": 2860,
              "comfort": 3150,
              "luxury": 3430
            },
            "srs": {
              "economy": 390,
              "comfort": 430,
              "luxury": 470
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 3670,
              "comfort": 4040,
              "luxury": 4400
            },
            "2": {
              "economy": 2410,
              "comfort": 2650,
              "luxury": 2890
            },
            "3": {
              "economy": 2070,
              "comfort": 2280,
              "luxury": 2480
            },
            "4": {
              "economy": 1910,
              "comfort": 2100,
              "luxury": 2290
            },
            "5": {
              "economy": 1810,
              "comfort": 1990,
              "luxury": 2170
            },
            "6-7": {
              "economy": 1740,
              "comfort": 1910,
              "luxury": 2090
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Samburu Sopa Lodge",
        "Samburu Game Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Ashnil Samburu Camp",
        "Samburu Intrepids Tented Camp",
        "Sarova Shaba Game Lodge",
        "Samburu Simba Lodge",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Elephant Bedroom Camp",
        "Larsens Tented Camp",
        "Saruni Samburu",
        "Elephant Watch Camp",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Sasaab Lodge",
        "Saruni Samburu – Samburu Suite",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "7-day-full-week-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 5020,
              "comfort": 5520,
              "luxury": 6020
            },
            "2": {
              "economy": 3300,
              "comfort": 3630,
              "luxury": 3960
            },
            "3": {
              "economy": 2840,
              "comfort": 3120,
              "luxury": 3410
            },
            "4": {
              "economy": 2610,
              "comfort": 2870,
              "luxury": 3130
            },
            "5": {
              "economy": 2480,
              "comfort": 2730,
              "luxury": 2980
            },
            "6-7": {
              "economy": 2380,
              "comfort": 2620,
              "luxury": 2860
            },
            "srs": {
              "economy": 330,
              "comfort": 360,
              "luxury": 400
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5620,
              "comfort": 6180,
              "luxury": 6740
            },
            "2": {
              "economy": 3700,
              "comfort": 4070,
              "luxury": 4440
            },
            "3": {
              "economy": 3180,
              "comfort": 3500,
              "luxury": 3820
            },
            "4": {
              "economy": 2920,
              "comfort": 3210,
              "luxury": 3500
            },
            "5": {
              "economy": 2770,
              "comfort": 3050,
              "luxury": 3320
            },
            "6-7": {
              "economy": 2660,
              "comfort": 2930,
              "luxury": 3190
            },
            "srs": {
              "economy": 370,
              "comfort": 410,
              "luxury": 440
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 7270,
              "comfort": 8000,
              "luxury": 8720
            },
            "2": {
              "economy": 4790,
              "comfort": 5270,
              "luxury": 5750
            },
            "3": {
              "economy": 4120,
              "comfort": 4530,
              "luxury": 4940
            },
            "4": {
              "economy": 3780,
              "comfort": 4160,
              "luxury": 4540
            },
            "5": {
              "economy": 3590,
              "comfort": 3950,
              "luxury": 4310
            },
            "6-7": {
              "economy": 3450,
              "comfort": 3800,
              "luxury": 4140
            },
            "srs": {
              "economy": 480,
              "comfort": 530,
              "luxury": 580
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4410,
              "comfort": 4850,
              "luxury": 5290
            },
            "2": {
              "economy": 2900,
              "comfort": 3190,
              "luxury": 3480
            },
            "3": {
              "economy": 2500,
              "comfort": 2750,
              "luxury": 3000
            },
            "4": {
              "economy": 2300,
              "comfort": 2530,
              "luxury": 2760
            },
            "5": {
              "economy": 2180,
              "comfort": 2400,
              "luxury": 2620
            },
            "6-7": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "srs": {
              "economy": 300,
              "comfort": 330,
              "luxury": 360
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "7-day-big-7-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4830,
              "comfort": 5310,
              "luxury": 5800
            },
            "2": {
              "economy": 3180,
              "comfort": 3500,
              "luxury": 3820
            },
            "3": {
              "economy": 2740,
              "comfort": 3010,
              "luxury": 3290
            },
            "4": {
              "economy": 2510,
              "comfort": 2760,
              "luxury": 3010
            },
            "5": {
              "economy": 2390,
              "comfort": 2630,
              "luxury": 2870
            },
            "6-7": {
              "economy": 2290,
              "comfort": 2520,
              "luxury": 2750
            },
            "srs": {
              "economy": 320,
              "comfort": 350,
              "luxury": 380
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5400,
              "comfort": 5940,
              "luxury": 6480
            },
            "2": {
              "economy": 3560,
              "comfort": 3920,
              "luxury": 4270
            },
            "3": {
              "economy": 3060,
              "comfort": 3370,
              "luxury": 3670
            },
            "4": {
              "economy": 2810,
              "comfort": 3090,
              "luxury": 3370
            },
            "5": {
              "economy": 2670,
              "comfort": 2940,
              "luxury": 3200
            },
            "6-7": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "srs": {
              "economy": 360,
              "comfort": 400,
              "luxury": 430
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 7000,
              "comfort": 7700,
              "luxury": 8400
            },
            "2": {
              "economy": 4600,
              "comfort": 5060,
              "luxury": 5520
            },
            "3": {
              "economy": 3950,
              "comfort": 4340,
              "luxury": 4740
            },
            "4": {
              "economy": 3640,
              "comfort": 4000,
              "luxury": 4370
            },
            "5": {
              "economy": 3450,
              "comfort": 3800,
              "luxury": 4140
            },
            "6-7": {
              "economy": 3320,
              "comfort": 3650,
              "luxury": 3980
            },
            "srs": {
              "economy": 460,
              "comfort": 510,
              "luxury": 550
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4250,
              "comfort": 4680,
              "luxury": 5100
            },
            "2": {
              "economy": 2790,
              "comfort": 3070,
              "luxury": 3350
            },
            "3": {
              "economy": 2410,
              "comfort": 2650,
              "luxury": 2890
            },
            "4": {
              "economy": 2210,
              "comfort": 2430,
              "luxury": 2650
            },
            "5": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "6-7": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "srs": {
              "economy": 280,
              "comfort": 310,
              "luxury": 340
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Samburu Sopa Lodge",
        "Samburu Game Lodge"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Ashnil Samburu Camp",
        "Samburu Intrepids Tented Camp",
        "Sarova Shaba Game Lodge",
        "Samburu Simba Lodge"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Elephant Bedroom Camp",
        "Larsens Tented Camp",
        "Saruni Samburu",
        "Elephant Watch Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Sasaab Lodge",
        "Saruni Samburu – Samburu Suite"
      ]
    }
  },
  "8-day-explorers-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 5490,
              "comfort": 6040,
              "luxury": 6590
            },
            "2": {
              "economy": 3610,
              "comfort": 3970,
              "luxury": 4330
            },
            "3": {
              "economy": 3110,
              "comfort": 3420,
              "luxury": 3730
            },
            "4": {
              "economy": 2860,
              "comfort": 3150,
              "luxury": 3430
            },
            "5": {
              "economy": 2710,
              "comfort": 2980,
              "luxury": 3250
            },
            "6-7": {
              "economy": 2600,
              "comfort": 2860,
              "luxury": 3120
            },
            "srs": {
              "economy": 360,
              "comfort": 400,
              "luxury": 430
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 6140,
              "comfort": 6750,
              "luxury": 7370
            },
            "2": {
              "economy": 4040,
              "comfort": 4440,
              "luxury": 4850
            },
            "3": {
              "economy": 3480,
              "comfort": 3830,
              "luxury": 4180
            },
            "4": {
              "economy": 3200,
              "comfort": 3520,
              "luxury": 3840
            },
            "5": {
              "economy": 3030,
              "comfort": 3330,
              "luxury": 3640
            },
            "6-7": {
              "economy": 2910,
              "comfort": 3200,
              "luxury": 3490
            },
            "srs": {
              "economy": 410,
              "comfort": 450,
              "luxury": 490
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 7960,
              "comfort": 8760,
              "luxury": 9550
            },
            "2": {
              "economy": 5240,
              "comfort": 5760,
              "luxury": 6290
            },
            "3": {
              "economy": 4500,
              "comfort": 4950,
              "luxury": 5400
            },
            "4": {
              "economy": 4140,
              "comfort": 4550,
              "luxury": 4970
            },
            "5": {
              "economy": 3930,
              "comfort": 4320,
              "luxury": 4720
            },
            "6-7": {
              "economy": 3770,
              "comfort": 4150,
              "luxury": 4520
            },
            "srs": {
              "economy": 530,
              "comfort": 580,
              "luxury": 640
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4830,
              "comfort": 5310,
              "luxury": 5800
            },
            "2": {
              "economy": 3180,
              "comfort": 3500,
              "luxury": 3820
            },
            "3": {
              "economy": 2740,
              "comfort": 3010,
              "luxury": 3290
            },
            "4": {
              "economy": 2510,
              "comfort": 2760,
              "luxury": 3010
            },
            "5": {
              "economy": 2390,
              "comfort": 2630,
              "luxury": 2870
            },
            "6-7": {
              "economy": 2290,
              "comfort": 2520,
              "luxury": 2750
            },
            "srs": {
              "economy": 320,
              "comfort": 350,
              "luxury": 380
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Samburu Sopa Lodge",
        "Samburu Game Lodge"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Ashnil Samburu Camp",
        "Samburu Intrepids Tented Camp",
        "Sarova Shaba Game Lodge",
        "Samburu Simba Lodge"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Elephant Bedroom Camp",
        "Larsens Tented Camp",
        "Saruni Samburu",
        "Elephant Watch Camp"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Sasaab Lodge",
        "Saruni Samburu – Samburu Suite"
      ]
    }
  },
  "8-day-6-in-8-discovery": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 5640,
              "comfort": 6200,
              "luxury": 6770
            },
            "2": {
              "economy": 3710,
              "comfort": 4080,
              "luxury": 4450
            },
            "3": {
              "economy": 3190,
              "comfort": 3510,
              "luxury": 3830
            },
            "4": {
              "economy": 2940,
              "comfort": 3230,
              "luxury": 3530
            },
            "5": {
              "economy": 2780,
              "comfort": 3060,
              "luxury": 3340
            },
            "6-7": {
              "economy": 2670,
              "comfort": 2940,
              "luxury": 3200
            },
            "srs": {
              "economy": 370,
              "comfort": 410,
              "luxury": 440
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 6320,
              "comfort": 6950,
              "luxury": 7580
            },
            "2": {
              "economy": 4160,
              "comfort": 4580,
              "luxury": 4990
            },
            "3": {
              "economy": 3580,
              "comfort": 3940,
              "luxury": 4300
            },
            "4": {
              "economy": 3290,
              "comfort": 3620,
              "luxury": 3950
            },
            "5": {
              "economy": 3120,
              "comfort": 3430,
              "luxury": 3740
            },
            "6-7": {
              "economy": 2990,
              "comfort": 3290,
              "luxury": 3590
            },
            "srs": {
              "economy": 420,
              "comfort": 460,
              "luxury": 500
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 8180,
              "comfort": 9000,
              "luxury": 9820
            },
            "2": {
              "economy": 5380,
              "comfort": 5920,
              "luxury": 6460
            },
            "3": {
              "economy": 4630,
              "comfort": 5090,
              "luxury": 5560
            },
            "4": {
              "economy": 4250,
              "comfort": 4680,
              "luxury": 5100
            },
            "5": {
              "economy": 4030,
              "comfort": 4430,
              "luxury": 4840
            },
            "6-7": {
              "economy": 3880,
              "comfort": 4270,
              "luxury": 4660
            },
            "srs": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4960,
              "comfort": 5460,
              "luxury": 5950
            },
            "2": {
              "economy": 3260,
              "comfort": 3590,
              "luxury": 3910
            },
            "3": {
              "economy": 2810,
              "comfort": 3090,
              "luxury": 3370
            },
            "4": {
              "economy": 2580,
              "comfort": 2840,
              "luxury": 3100
            },
            "5": {
              "economy": 2450,
              "comfort": 2700,
              "luxury": 2940
            },
            "6-7": {
              "economy": 2350,
              "comfort": 2580,
              "luxury": 2820
            },
            "srs": {
              "economy": 330,
              "comfort": 360,
              "luxury": 400
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Samburu Sopa Lodge",
        "Samburu Game Lodge",
        "Ol Pejeta Safari Cottages"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Ashnil Samburu Camp",
        "Samburu Intrepids Tented Camp",
        "Sarova Shaba Game Lodge",
        "Samburu Simba Lodge",
        "Sweetwaters Serena Camp",
        "Ol Pejeta Bush Camp"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Elephant Bedroom Camp",
        "Larsens Tented Camp",
        "Saruni Samburu",
        "Elephant Watch Camp",
        "The River Camp – Ol Pejeta",
        "Elewana Kifaru House"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Sasaab Lodge",
        "Saruni Samburu – Samburu Suite"
      ]
    }
  },
  "nakuru-naivasha-crescent-day-tour": {
    "pricing": {
      "group_tour": true,
      "min_price": 260,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 2 travellers required. Price includes park fees, boat ride, professional guide, lunch, and bottled water.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "amboseli-national-park-day-tour": {
    "pricing": {
      "group_tour": true,
      "min_price": 280,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 2 travellers required. Price includes park fees, professional guide, lunch, and bottled water.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "ol-pejeta-wildlife-sanctuary-day-tour": {
    "pricing": {
      "group_tour": true,
      "min_price": 320,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 2 travellers required. Price includes conservancy fees, professional guide, lunch, and bottled water.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "2-day-under-the-mara-sky-group": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 690, "comfort": 760 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 710, "comfort": 780 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 960, "comfort": 1060 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 1060, "comfort": 1170 }, "srs": 90 }
      ],
      "duration": 2,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Mara Legends Safari Camp or similar"
          ],
          "comfort": [
                "Masai Mara Sopa Lodge or similar"
          ]
    }
  },
  "2-day-high-lakes-group": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 590, "comfort": 650 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 610, "comfort": 670 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 820, "comfort": 900 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 910, "comfort": 1000 }, "srs": 90 }
      ],
      "duration": 2,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Lake Nakuru Flamingo Hill Camp or similar"
          ],
          "comfort": [
                "Lake Nakuru Sopa Lodge or similar"
          ]
    }
  },
  "2-day-wonderland-group": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 620, "comfort": 680 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 650, "comfort": 720 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 870, "comfort": 960 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 950, "comfort": 1040 }, "srs": 90 }
      ],
      "duration": 2,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, conservancy fees, accommodation & meals as per itinerary.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Sentrim Amboseli Lodge or similar",
                "Sentrim Tsavo East or similar"
          ],
          "comfort": [
                "Amboseli Serena Safari Lodge or similar",
                "Ashnil Aruba Lodge or similar"
          ]
    }
  },
  "tanzania-day-safaris": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 560, "child": 420 },
          "resident": { "adult": 360, "child": 250 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 370, "child": 280 },
          "resident": { "adult": 240, "child": 170 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 290, "child": 220 },
          "resident": { "adult": 190, "child": 130 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "6-day-mt-kenya-climb": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2210,
        "group_of_2": 2030,
        "group_of_3_4": 1880,
        "group_of_5_plus": 1770
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, guides, porters, meals, camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "6-day-mt-kenya-climb-sirimon-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2210,
        "group_of_2": 2030,
        "group_of_3_4": 1880,
        "group_of_5_plus": 1770
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, guides, porters, meals, camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "safaris-from-diani-beach": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1140,
              "comfort": 1250,
              "luxury": 1370
            },
            "2": {
              "economy": 740,
              "comfort": 810,
              "luxury": 890
            },
            "3": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "4": {
              "economy": 590,
              "comfort": 650,
              "luxury": 710
            },
            "5": {
              "economy": 560,
              "comfort": 620,
              "luxury": 670
            },
            "6-7": {
              "economy": 540,
              "comfort": 590,
              "luxury": 650
            },
            "srs": {
              "economy": 80,
              "comfort": 90,
              "luxury": 100
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "2": {
              "economy": 840,
              "comfort": 920,
              "luxury": 1010
            },
            "3": {
              "economy": 720,
              "comfort": 790,
              "luxury": 860
            },
            "4": {
              "economy": 670,
              "comfort": 740,
              "luxury": 800
            },
            "5": {
              "economy": 640,
              "comfort": 700,
              "luxury": 770
            },
            "6-7": {
              "economy": 600,
              "comfort": 660,
              "luxury": 720
            },
            "srs": {
              "economy": 90,
              "comfort": 100,
              "luxury": 110
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 1650,
              "comfort": 1820,
              "luxury": 1980
            },
            "2": {
              "economy": 1080,
              "comfort": 1190,
              "luxury": 1300
            },
            "3": {
              "economy": 930,
              "comfort": 1020,
              "luxury": 1120
            },
            "4": {
              "economy": 850,
              "comfort": 940,
              "luxury": 1020
            },
            "5": {
              "economy": 810,
              "comfort": 890,
              "luxury": 970
            },
            "6-7": {
              "economy": 790,
              "comfort": 870,
              "luxury": 950
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1000,
              "comfort": 1100,
              "luxury": 1200
            },
            "2": {
              "economy": 660,
              "comfort": 730,
              "luxury": 790
            },
            "3": {
              "economy": 570,
              "comfort": 630,
              "luxury": 680
            },
            "4": {
              "economy": 530,
              "comfort": 580,
              "luxury": 640
            },
            "5": {
              "economy": 490,
              "comfort": 540,
              "luxury": 590
            },
            "6-7": {
              "economy": 470,
              "comfort": 520,
              "luxury": 560
            },
            "srs": {
              "economy": 70,
              "comfort": 80,
              "luxury": 80
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": null
  },
  "diani-one-day-excursions": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 190, "child": 150 },
          "resident": { "adult": 120, "child": 90 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 130, "child": 100 },
          "resident": { "adult": 80, "child": 60 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 100, "child": 80 },
          "resident": { "adult": 70, "child": 50 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "group-safari-tours-from-diani-and-mombasa": {
    "pricing": {
      "group_tour": true,
      "min_price": 420,
      "currency": "USD",
      "note": "Starting price per person for group safari tours departing from Diani and Mombasa. Actual rates vary by tour, season, and accommodation level. Contact us for current rates.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "2-day-tsavo-east-group-safari-diani": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 460, "comfort": 510 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 490, "comfort": 540 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 640, "comfort": 700 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 710, "comfort": 780 }, "srs": 90 }
      ],
      "duration": 2,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary. Pickup from Diani or Mombasa hotels.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Sentrim Tsavo East Camp or similar"
          ],
          "comfort": [
                "Ashnil Aruba Lodge or similar"
          ]
    }
  },
  "4-day-lake-naivasha-masai-mara-5-ways-to-explore": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2840,
              "comfort": 3120,
              "luxury": 3410
            },
            "2": {
              "economy": 1870,
              "comfort": 2060,
              "luxury": 2240
            },
            "3": {
              "economy": 1610,
              "comfort": 1770,
              "luxury": 1930
            },
            "4": {
              "economy": 1480,
              "comfort": 1630,
              "luxury": 1780
            },
            "5": {
              "economy": 1400,
              "comfort": 1540,
              "luxury": 1680
            },
            "6-7": {
              "economy": 1350,
              "comfort": 1490,
              "luxury": 1620
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3190,
              "comfort": 3510,
              "luxury": 3830
            },
            "2": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "3": {
              "economy": 1810,
              "comfort": 1990,
              "luxury": 2170
            },
            "4": {
              "economy": 1650,
              "comfort": 1820,
              "luxury": 1980
            },
            "5": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "6-7": {
              "economy": 1510,
              "comfort": 1660,
              "luxury": 1810
            },
            "srs": {
              "economy": 210,
              "comfort": 230,
              "luxury": 250
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4120,
              "comfort": 4530,
              "luxury": 4940
            },
            "2": {
              "economy": 2710,
              "comfort": 2980,
              "luxury": 3250
            },
            "3": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "4": {
              "economy": 2140,
              "comfort": 2350,
              "luxury": 2570
            },
            "5": {
              "economy": 2030,
              "comfort": 2230,
              "luxury": 2440
            },
            "6-7": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2500,
              "comfort": 2750,
              "luxury": 3000
            },
            "2": {
              "economy": 1640,
              "comfort": 1800,
              "luxury": 1970
            },
            "3": {
              "economy": 1410,
              "comfort": 1550,
              "luxury": 1690
            },
            "4": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "5": {
              "economy": 1240,
              "comfort": 1360,
              "luxury": 1490
            },
            "6-7": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "3-day-endless-mara-group-safari": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 920, "comfort": 1010 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 960, "comfort": 1060 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 1230, "comfort": 1350 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 1380, "comfort": 1520 }, "srs": 90 }
      ],
      "duration": 3,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Mara Legends Safari Camp or similar"
          ],
          "comfort": [
                "Masai Mara Sopa Lodge or similar"
          ]
    }
  },
  "2-day-masai-mara-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "2": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "3": {
              "economy": 1110,
              "comfort": 1220,
              "luxury": 1330
            },
            "4": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "5": {
              "economy": 960,
              "comfort": 1060,
              "luxury": 1150
            },
            "6-7": {
              "economy": 920,
              "comfort": 1010,
              "luxury": 1100
            },
            "srs": {
              "economy": 130,
              "comfort": 140,
              "luxury": 160
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2180,
              "comfort": 2400,
              "luxury": 2620
            },
            "2": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "3": {
              "economy": 1240,
              "comfort": 1360,
              "luxury": 1490
            },
            "4": {
              "economy": 1140,
              "comfort": 1250,
              "luxury": 1370
            },
            "5": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "6-7": {
              "economy": 1040,
              "comfort": 1140,
              "luxury": 1250
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2830,
              "comfort": 3110,
              "luxury": 3400
            },
            "2": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "3": {
              "economy": 1600,
              "comfort": 1760,
              "luxury": 1920
            },
            "4": {
              "economy": 1470,
              "comfort": 1620,
              "luxury": 1760
            },
            "5": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "6-7": {
              "economy": 1340,
              "comfort": 1470,
              "luxury": 1610
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 1720,
              "comfort": 1890,
              "luxury": 2060
            },
            "2": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "3": {
              "economy": 970,
              "comfort": 1070,
              "luxury": 1160
            },
            "4": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "5": {
              "economy": 840,
              "comfort": 920,
              "luxury": 1010
            },
            "6-7": {
              "economy": 810,
              "comfort": 890,
              "luxury": 970
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "4-day-masai-mara-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2840,
              "comfort": 3120,
              "luxury": 3410
            },
            "2": {
              "economy": 1870,
              "comfort": 2060,
              "luxury": 2240
            },
            "3": {
              "economy": 1610,
              "comfort": 1770,
              "luxury": 1930
            },
            "4": {
              "economy": 1480,
              "comfort": 1630,
              "luxury": 1780
            },
            "5": {
              "economy": 1400,
              "comfort": 1540,
              "luxury": 1680
            },
            "6-7": {
              "economy": 1350,
              "comfort": 1490,
              "luxury": 1620
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3190,
              "comfort": 3510,
              "luxury": 3830
            },
            "2": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "3": {
              "economy": 1810,
              "comfort": 1990,
              "luxury": 2170
            },
            "4": {
              "economy": 1650,
              "comfort": 1820,
              "luxury": 1980
            },
            "5": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "6-7": {
              "economy": 1510,
              "comfort": 1660,
              "luxury": 1810
            },
            "srs": {
              "economy": 210,
              "comfort": 230,
              "luxury": 250
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4120,
              "comfort": 4530,
              "luxury": 4940
            },
            "2": {
              "economy": 2710,
              "comfort": 2980,
              "luxury": 3250
            },
            "3": {
              "economy": 2330,
              "comfort": 2560,
              "luxury": 2800
            },
            "4": {
              "economy": 2140,
              "comfort": 2350,
              "luxury": 2570
            },
            "5": {
              "economy": 2030,
              "comfort": 2230,
              "luxury": 2440
            },
            "6-7": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2500,
              "comfort": 2750,
              "luxury": 3000
            },
            "2": {
              "economy": 1640,
              "comfort": 1800,
              "luxury": 1970
            },
            "3": {
              "economy": 1410,
              "comfort": 1550,
              "luxury": 1690
            },
            "4": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "5": {
              "economy": 1240,
              "comfort": 1360,
              "luxury": 1490
            },
            "6-7": {
              "economy": 1180,
              "comfort": 1300,
              "luxury": 1420
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "tanzania-arusha-np-day-safari": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 480, "child": 360 },
          "resident": { "adult": 310, "child": 210 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 320, "child": 240 },
          "resident": { "adult": 210, "child": 140 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 250, "child": 190 },
          "resident": { "adult": 160, "child": 110 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "tanzania-ngorongoro-crater-day-safari": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 870, "child": 660 },
          "resident": { "adult": 570, "child": 390 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 580, "child": 440 },
          "resident": { "adult": 380, "child": 260 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 460, "child": 340 },
          "resident": { "adult": 300, "child": 210 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "tanzania-lake-manyara-day-safari": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 510, "child": 380 },
          "resident": { "adult": 330, "child": 230 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 340, "child": 250 },
          "resident": { "adult": 220, "child": 150 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 270, "child": 200 },
          "resident": { "adult": 180, "child": 120 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "tanzania-tarangire-np-day-safari": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 510, "child": 380 },
          "resident": { "adult": 330, "child": 230 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 340, "child": 250 },
          "resident": { "adult": 220, "child": 150 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 270, "child": 200 },
          "resident": { "adult": 180, "child": 120 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "3-days-taste-of-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2450,
              "comfort": 2700,
              "luxury": 2940
            },
            "2": {
              "economy": 1620,
              "comfort": 1780,
              "luxury": 1940
            },
            "3": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "4": {
              "economy": 1280,
              "comfort": 1410,
              "luxury": 1540
            },
            "5": {
              "economy": 1220,
              "comfort": 1340,
              "luxury": 1460
            },
            "6-7": {
              "economy": 1160,
              "comfort": 1280,
              "luxury": 1390
            },
            "srs": {
              "economy": 160,
              "comfort": 180,
              "luxury": 190
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2760,
              "comfort": 3040,
              "luxury": 3310
            },
            "2": {
              "economy": 1820,
              "comfort": 2000,
              "luxury": 2180
            },
            "3": {
              "economy": 1570,
              "comfort": 1730,
              "luxury": 1880
            },
            "4": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "5": {
              "economy": 1360,
              "comfort": 1500,
              "luxury": 1630
            },
            "6-7": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "srs": {
              "economy": 190,
              "comfort": 210,
              "luxury": 230
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3570,
              "comfort": 3930,
              "luxury": 4280
            },
            "2": {
              "economy": 2340,
              "comfort": 2570,
              "luxury": 2810
            },
            "3": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "4": {
              "economy": 1850,
              "comfort": 2040,
              "luxury": 2220
            },
            "5": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "6-7": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "srs": {
              "economy": 240,
              "comfort": 260,
              "luxury": 290
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "2": {
              "economy": 1420,
              "comfort": 1560,
              "luxury": 1700
            },
            "3": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "4": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "5": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "6-7": {
              "economy": 1030,
              "comfort": 1130,
              "luxury": 1240
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room"
    },
    "accommodations": {
      "economy": [
        "Rhino Lodge Ngorongoro",
        "Simba Campsite",
        "Tarangire Safari Lodge – Standard",
        "Sangaiwe Tented Lodge"
      ],
      "comfort": [
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge",
        "Tarangire Sopa Lodge",
        "Maramboi Tented Lodge"
      ],
      "luxury": [
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp",
        "Oliver's Camp",
        "Lemala Mpingo Ridge",
        "Tarangire Treetops"
      ],
      "superior_luxury": [
        "andBeyond Ngorongoro Crater Lodge – Suite",
        "Chem Chem Lodge"
      ]
    }
  },
  "4-days-best-of-tanzania-fly-drive-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4640,
              "comfort": 5100,
              "luxury": 5570
            },
            "2": {
              "economy": 3060,
              "comfort": 3370,
              "luxury": 3670
            },
            "3": {
              "economy": 2630,
              "comfort": 2890,
              "luxury": 3160
            },
            "4": {
              "economy": 2410,
              "comfort": 2650,
              "luxury": 2890
            },
            "5": {
              "economy": 2290,
              "comfort": 2520,
              "luxury": 2750
            },
            "6-7": {
              "economy": 2200,
              "comfort": 2420,
              "luxury": 2640
            },
            "srs": {
              "economy": 310,
              "comfort": 340,
              "luxury": 370
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5190,
              "comfort": 5710,
              "luxury": 6230
            },
            "2": {
              "economy": 3420,
              "comfort": 3760,
              "luxury": 4100
            },
            "3": {
              "economy": 2950,
              "comfort": 3250,
              "luxury": 3540
            },
            "4": {
              "economy": 2710,
              "comfort": 2980,
              "luxury": 3250
            },
            "5": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "6-7": {
              "economy": 2460,
              "comfort": 2710,
              "luxury": 2950
            },
            "srs": {
              "economy": 340,
              "comfort": 370,
              "luxury": 410
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 6720,
              "comfort": 7390,
              "luxury": 8060
            },
            "2": {
              "economy": 4420,
              "comfort": 4860,
              "luxury": 5300
            },
            "3": {
              "economy": 3800,
              "comfort": 4180,
              "luxury": 4560
            },
            "4": {
              "economy": 3490,
              "comfort": 3840,
              "luxury": 4190
            },
            "5": {
              "economy": 3320,
              "comfort": 3650,
              "luxury": 3980
            },
            "6-7": {
              "economy": 3190,
              "comfort": 3510,
              "luxury": 3830
            },
            "srs": {
              "economy": 450,
              "comfort": 500,
              "luxury": 540
            }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": {
              "economy": 4090,
              "comfort": 4500,
              "luxury": 4910
            },
            "2": {
              "economy": 2680,
              "comfort": 2950,
              "luxury": 3220
            },
            "3": {
              "economy": 2310,
              "comfort": 2540,
              "luxury": 2770
            },
            "4": {
              "economy": 2120,
              "comfort": 2330,
              "luxury": 2540
            },
            "5": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "6-7": {
              "economy": 1940,
              "comfort": 2130,
              "luxury": 2330
            },
            "srs": {
              "economy": 270,
              "comfort": 300,
              "luxury": 320
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing. Includes return flights from Nairobi."
    },
    "accommodations": {
      "economy": [
        "Kati Kati Tented Camp",
        "Seronera Wildlife Lodge",
        "Serengeti Wilderness Camp",
        "Rhino Lodge Ngorongoro",
        "Simba Campsite"
      ],
      "comfort": [
        "Serengeti Serena Safari Lodge",
        "Serengeti Sopa Lodge",
        "Dunia Camp",
        "Mbuzi Mawe Serena Camp",
        "Ngorongoro Sopa Lodge",
        "Ngorongoro Serena Safari Lodge",
        "Karatu Simba Lodge"
      ],
      "luxury": [
        "Four Seasons Safari Lodge Serengeti",
        "Melia Serengeti Lodge",
        "Lemala Ewanjan Tented Camp",
        "Ngorongoro Crater Lodge (andBeyond)",
        "The Manor at Ngorongoro",
        "Lemala Ngorongoro Tented Camp"
      ],
      "superior_luxury": [
        "Singita Sasakwa Lodge",
        "Singita Faru Faru Lodge",
        "One Nature Nyaruswiga",
        "&Beyond Klein's Camp",
        "andBeyond Ngorongoro Crater Lodge – Suite"
      ]
    }
  },
  "5-day-mount-kilimanjaro-marangu-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2130,
        "group_of_2": 1850,
        "group_of_3_4": 1710,
        "group_of_5_plus": 1580
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "7-day-mount-kilimanjaro-machame-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2660,
        "group_of_2": 2310,
        "group_of_3_4": 2130,
        "group_of_5_plus": 1970
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "7-day-mount-kilimanjaro-lemosho-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2900,
        "group_of_2": 2520,
        "group_of_3_4": 2320,
        "group_of_5_plus": 2150
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "8-day-mount-kilimanjaro-lemosho-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 3140,
        "group_of_2": 2730,
        "group_of_3_4": 2520,
        "group_of_5_plus": 2320
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "7-day-mount-kilimanjaro-rongai-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 2660,
        "group_of_2": 2310,
        "group_of_3_4": 2130,
        "group_of_5_plus": 1970
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "9-day-mount-kilimanjaro-northern-circuit": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 3630,
        "group_of_2": 3150,
        "group_of_3_4": 2900,
        "group_of_5_plus": 2680
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "5-day-mt-kenya-sirimon-chogoria-traverse": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 1820,
        "group_of_2": 1580,
        "group_of_3_4": 1450,
        "group_of_5_plus": 1340
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "4-day-mt-kenya-naro-moru-route": {
    "pricing": {
      "mountain": true,
      "rates": {
        "per_person": 1450,
        "group_of_2": 1260,
        "group_of_3_4": 1160,
        "group_of_5_plus": 1080
      },
      "currency": "USD",
      "note": "All-inclusive rate. Includes park fees, professional guides, porters, meals, and camping/hut fees.",
      "child_rates": "Children below 12: Not recommended. Ages 12-16: Adult rate with parental consent."
    },
    "accommodations": null
  },
  "5-day-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2420, "comfort": 2660, "luxury": 2900 },
            "2": { "economy": 1730, "comfort": 1900, "luxury": 2080 },
            "3": { "economy": 1680, "comfort": 1850, "luxury": 2020 },
            "4": { "economy": 1640, "comfort": 1800, "luxury": 1970 },
            "5": { "economy": 1610, "comfort": 1770, "luxury": 1930 },
            "6-7": { "economy": 1560, "comfort": 1720, "luxury": 1870 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 310 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2660, "comfort": 2930, "luxury": 3190 },
            "2": { "economy": 1910, "comfort": 2100, "luxury": 2290 },
            "3": { "economy": 1840, "comfort": 2020, "luxury": 2210 },
            "4": { "economy": 1810, "comfort": 1990, "luxury": 2170 },
            "5": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "6-7": { "economy": 1710, "comfort": 1880, "luxury": 2050 },
            "srs": { "economy": 280, "comfort": 310, "luxury": 340 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 3020, "comfort": 3320, "luxury": 3620 },
            "2": { "economy": 2160, "comfort": 2380, "luxury": 2590 },
            "3": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "4": { "economy": 2050, "comfort": 2260, "luxury": 2460 },
            "5": { "economy": 2000, "comfort": 2200, "luxury": 2400 },
            "6-7": { "economy": 1950, "comfort": 2140, "luxury": 2340 },
            "srs": { "economy": 330, "comfort": 360, "luxury": 400 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2060, "comfort": 2270, "luxury": 2470 },
            "2": { "economy": 1470, "comfort": 1620, "luxury": 1760 },
            "3": { "economy": 1420, "comfort": 1560, "luxury": 1700 },
            "4": { "economy": 1400, "comfort": 1540, "luxury": 1680 },
            "5": { "economy": 1370, "comfort": 1510, "luxury": 1640 },
            "6-7": { "economy": 1330, "comfort": 1460, "luxury": 1600 },
            "srs": { "economy": 220, "comfort": 240, "luxury": 260 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "6-day-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2900, "comfort": 3190, "luxury": 3480 },
            "2": { "economy": 2070, "comfort": 2280, "luxury": 2480 },
            "3": { "economy": 2020, "comfort": 2220, "luxury": 2420 },
            "4": { "economy": 1970, "comfort": 2170, "luxury": 2360 },
            "5": { "economy": 1930, "comfort": 2120, "luxury": 2320 },
            "6-7": { "economy": 1870, "comfort": 2060, "luxury": 2240 },
            "srs": { "economy": 320, "comfort": 350, "luxury": 380 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3190, "comfort": 3510, "luxury": 3830 },
            "2": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "3": { "economy": 2210, "comfort": 2430, "luxury": 2650 },
            "4": { "economy": 2170, "comfort": 2390, "luxury": 2600 },
            "5": { "economy": 2120, "comfort": 2330, "luxury": 2540 },
            "6-7": { "economy": 2060, "comfort": 2270, "luxury": 2470 },
            "srs": { "economy": 350, "comfort": 390, "luxury": 420 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "2": { "economy": 2600, "comfort": 2860, "luxury": 3120 },
            "3": { "economy": 2520, "comfort": 2770, "luxury": 3020 },
            "4": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "5": { "economy": 2410, "comfort": 2650, "luxury": 2890 },
            "6-7": { "economy": 2330, "comfort": 2560, "luxury": 2800 },
            "srs": { "economy": 390, "comfort": 430, "luxury": 470 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "2": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "3": { "economy": 1710, "comfort": 1880, "luxury": 2050 },
            "4": { "economy": 1680, "comfort": 1850, "luxury": 2020 },
            "5": { "economy": 1640, "comfort": 1800, "luxury": 1970 },
            "6-7": { "economy": 1590, "comfort": 1750, "luxury": 1910 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 310 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "8-day-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 4510, "comfort": 4960, "luxury": 5410 },
            "2": { "economy": 3220, "comfort": 3540, "luxury": 3860 },
            "3": { "economy": 3130, "comfort": 3440, "luxury": 3760 },
            "4": { "economy": 3070, "comfort": 3380, "luxury": 3680 },
            "5": { "economy": 3000, "comfort": 3300, "luxury": 3600 },
            "6-7": { "economy": 2900, "comfort": 3190, "luxury": 3480 },
            "srs": { "economy": 490, "comfort": 540, "luxury": 590 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 4960, "comfort": 5460, "luxury": 5950 },
            "2": { "economy": 3550, "comfort": 3910, "luxury": 4260 },
            "3": { "economy": 3440, "comfort": 3780, "luxury": 4130 },
            "4": { "economy": 3370, "comfort": 3710, "luxury": 4040 },
            "5": { "economy": 3300, "comfort": 3630, "luxury": 3960 },
            "6-7": { "economy": 3190, "comfort": 3510, "luxury": 3830 },
            "srs": { "economy": 540, "comfort": 590, "luxury": 650 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 5640, "comfort": 6200, "luxury": 6770 },
            "2": { "economy": 4030, "comfort": 4430, "luxury": 4840 },
            "3": { "economy": 3910, "comfort": 4300, "luxury": 4690 },
            "4": { "economy": 3830, "comfort": 4210, "luxury": 4600 },
            "5": { "economy": 3750, "comfort": 4120, "luxury": 4500 },
            "6-7": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "srs": { "economy": 610, "comfort": 670, "luxury": 730 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 3830, "comfort": 4210, "luxury": 4600 },
            "2": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "3": { "economy": 2660, "comfort": 2930, "luxury": 3190 },
            "4": { "economy": 2610, "comfort": 2870, "luxury": 3130 },
            "5": { "economy": 2550, "comfort": 2800, "luxury": 3060 },
            "6-7": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "srs": { "economy": 420, "comfort": 460, "luxury": 500 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "10-day-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 5640, "comfort": 6200, "luxury": 6770 },
            "2": { "economy": 4030, "comfort": 4430, "luxury": 4840 },
            "3": { "economy": 3910, "comfort": 4300, "luxury": 4690 },
            "4": { "economy": 3830, "comfort": 4210, "luxury": 4600 },
            "5": { "economy": 3750, "comfort": 4120, "luxury": 4500 },
            "6-7": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "srs": { "economy": 610, "comfort": 670, "luxury": 730 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 6200, "comfort": 6820, "luxury": 7440 },
            "2": { "economy": 4440, "comfort": 4880, "luxury": 5330 },
            "3": { "economy": 4290, "comfort": 4720, "luxury": 5150 },
            "4": { "economy": 4210, "comfort": 4630, "luxury": 5050 },
            "5": { "economy": 4120, "comfort": 4530, "luxury": 4940 },
            "6-7": { "economy": 3990, "comfort": 4390, "luxury": 4790 },
            "srs": { "economy": 670, "comfort": 740, "luxury": 800 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 7040, "comfort": 7740, "luxury": 8450 },
            "2": { "economy": 5040, "comfort": 5540, "luxury": 6050 },
            "3": { "economy": 4880, "comfort": 5370, "luxury": 5860 },
            "4": { "economy": 4790, "comfort": 5270, "luxury": 5750 },
            "5": { "economy": 4690, "comfort": 5160, "luxury": 5630 },
            "6-7": { "economy": 4530, "comfort": 4980, "luxury": 5440 },
            "srs": { "economy": 760, "comfort": 840, "luxury": 910 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 4800, "comfort": 5280, "luxury": 5760 },
            "2": { "economy": 3430, "comfort": 3770, "luxury": 4120 },
            "3": { "economy": 3320, "comfort": 3650, "luxury": 3980 },
            "4": { "economy": 3250, "comfort": 3580, "luxury": 3900 },
            "5": { "economy": 3190, "comfort": 3510, "luxury": 3830 },
            "6-7": { "economy": 3080, "comfort": 3390, "luxury": 3700 },
            "srs": { "economy": 510, "comfort": 560, "luxury": 610 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "12-day-kenya-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 6770, "comfort": 7450, "luxury": 8120 },
            "2": { "economy": 4830, "comfort": 5310, "luxury": 5800 },
            "3": { "economy": 4690, "comfort": 5160, "luxury": 5630 },
            "4": { "economy": 4590, "comfort": 5050, "luxury": 5510 },
            "5": { "economy": 4500, "comfort": 4950, "luxury": 5400 },
            "6-7": { "economy": 4350, "comfort": 4780, "luxury": 5220 },
            "srs": { "economy": 730, "comfort": 800, "luxury": 880 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 7450, "comfort": 8200, "luxury": 8940 },
            "2": { "economy": 5320, "comfort": 5850, "luxury": 6380 },
            "3": { "economy": 5160, "comfort": 5680, "luxury": 6190 },
            "4": { "economy": 5050, "comfort": 5560, "luxury": 6060 },
            "5": { "economy": 4950, "comfort": 5440, "luxury": 5940 },
            "6-7": { "economy": 4790, "comfort": 5270, "luxury": 5750 },
            "srs": { "economy": 800, "comfort": 880, "luxury": 960 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 8460, "comfort": 9310, "luxury": 10150 },
            "2": { "economy": 6050, "comfort": 6660, "luxury": 7260 },
            "3": { "economy": 5860, "comfort": 6450, "luxury": 7030 },
            "4": { "economy": 5740, "comfort": 6310, "luxury": 6890 },
            "5": { "economy": 5620, "comfort": 6180, "luxury": 6740 },
            "6-7": { "economy": 5430, "comfort": 5970, "luxury": 6520 },
            "srs": { "economy": 910, "comfort": 1000, "luxury": 1090 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 5750, "comfort": 6330, "luxury": 6900 },
            "2": { "economy": 4110, "comfort": 4520, "luxury": 4930 },
            "3": { "economy": 3990, "comfort": 4390, "luxury": 4790 },
            "4": { "economy": 3900, "comfort": 4290, "luxury": 4680 },
            "5": { "economy": 3820, "comfort": 4200, "luxury": 4580 },
            "6-7": { "economy": 3700, "comfort": 4070, "luxury": 4440 },
            "srs": { "economy": 620, "comfort": 680, "luxury": 740 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "3-day-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 1610, "comfort": 1770, "luxury": 1930 },
            "2": { "economy": 1150, "comfort": 1260, "luxury": 1380 },
            "3": { "economy": 1120, "comfort": 1230, "luxury": 1340 },
            "4": { "economy": 1100, "comfort": 1210, "luxury": 1320 },
            "5": { "economy": 1070, "comfort": 1180, "luxury": 1280 },
            "6-7": { "economy": 1040, "comfort": 1140, "luxury": 1250 },
            "srs": { "economy": 180, "comfort": 200, "luxury": 220 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 1770, "comfort": 1950, "luxury": 2120 },
            "2": { "economy": 1270, "comfort": 1400, "luxury": 1520 },
            "3": { "economy": 1230, "comfort": 1350, "luxury": 1480 },
            "4": { "economy": 1200, "comfort": 1320, "luxury": 1440 },
            "5": { "economy": 1180, "comfort": 1300, "luxury": 1420 },
            "6-7": { "economy": 1140, "comfort": 1250, "luxury": 1370 },
            "srs": { "economy": 200, "comfort": 220, "luxury": 240 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 2020, "comfort": 2220, "luxury": 2420 },
            "2": { "economy": 1450, "comfort": 1600, "luxury": 1740 },
            "3": { "economy": 1400, "comfort": 1540, "luxury": 1680 },
            "4": { "economy": 1370, "comfort": 1510, "luxury": 1640 },
            "5": { "economy": 1340, "comfort": 1470, "luxury": 1610 },
            "6-7": { "economy": 1290, "comfort": 1420, "luxury": 1550 },
            "srs": { "economy": 220, "comfort": 240, "luxury": 260 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 1370, "comfort": 1510, "luxury": 1640 },
            "2": { "economy": 990, "comfort": 1090, "luxury": 1190 },
            "3": { "economy": 950, "comfort": 1040, "luxury": 1140 },
            "4": { "economy": 930, "comfort": 1020, "luxury": 1120 },
            "5": { "economy": 910, "comfort": 1000, "luxury": 1090 },
            "6-7": { "economy": 890, "comfort": 980, "luxury": 1070 },
            "srs": { "economy": 150, "comfort": 160, "luxury": 180 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "4-day-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "2": { "economy": 1500, "comfort": 1650, "luxury": 1800 },
            "3": { "economy": 1460, "comfort": 1610, "luxury": 1750 },
            "4": { "economy": 1420, "comfort": 1560, "luxury": 1700 },
            "5": { "economy": 1390, "comfort": 1530, "luxury": 1670 },
            "6-7": { "economy": 1350, "comfort": 1490, "luxury": 1620 },
            "srs": { "economy": 230, "comfort": 250, "luxury": 280 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2310, "comfort": 2540, "luxury": 2770 },
            "2": { "economy": 1650, "comfort": 1820, "luxury": 1980 },
            "3": { "economy": 1600, "comfort": 1760, "luxury": 1920 },
            "4": { "economy": 1570, "comfort": 1730, "luxury": 1880 },
            "5": { "economy": 1530, "comfort": 1680, "luxury": 1840 },
            "6-7": { "economy": 1480, "comfort": 1630, "luxury": 1780 },
            "srs": { "economy": 250, "comfort": 280, "luxury": 300 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 2620, "comfort": 2880, "luxury": 3140 },
            "2": { "economy": 1870, "comfort": 2060, "luxury": 2240 },
            "3": { "economy": 1820, "comfort": 2000, "luxury": 2180 },
            "4": { "economy": 1770, "comfort": 1950, "luxury": 2120 },
            "5": { "economy": 1740, "comfort": 1910, "luxury": 2090 },
            "6-7": { "economy": 1690, "comfort": 1860, "luxury": 2030 },
            "srs": { "economy": 280, "comfort": 310, "luxury": 340 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 1790, "comfort": 1970, "luxury": 2150 },
            "2": { "economy": 1270, "comfort": 1400, "luxury": 1520 },
            "3": { "economy": 1240, "comfort": 1360, "luxury": 1490 },
            "4": { "economy": 1220, "comfort": 1340, "luxury": 1460 },
            "5": { "economy": 1180, "comfort": 1300, "luxury": 1420 },
            "6-7": { "economy": 1150, "comfort": 1260, "luxury": 1380 },
            "srs": { "economy": 200, "comfort": 220, "luxury": 240 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "5-day-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2580, "comfort": 2840, "luxury": 3100 },
            "2": { "economy": 1840, "comfort": 2020, "luxury": 2210 },
            "3": { "economy": 1790, "comfort": 1970, "luxury": 2150 },
            "4": { "economy": 1750, "comfort": 1930, "luxury": 2100 },
            "5": { "economy": 1720, "comfort": 1890, "luxury": 2060 },
            "6-7": { "economy": 1660, "comfort": 1830, "luxury": 1990 },
            "srs": { "economy": 280, "comfort": 310, "luxury": 340 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2840, "comfort": 3120, "luxury": 3410 },
            "2": { "economy": 2030, "comfort": 2230, "luxury": 2440 },
            "3": { "economy": 1970, "comfort": 2170, "luxury": 2360 },
            "4": { "economy": 1930, "comfort": 2120, "luxury": 2320 },
            "5": { "economy": 1880, "comfort": 2070, "luxury": 2260 },
            "6-7": { "economy": 1830, "comfort": 2010, "luxury": 2200 },
            "srs": { "economy": 310, "comfort": 340, "luxury": 370 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 3220, "comfort": 3540, "luxury": 3860 },
            "2": { "economy": 2300, "comfort": 2530, "luxury": 2760 },
            "3": { "economy": 2230, "comfort": 2450, "luxury": 2680 },
            "4": { "economy": 2190, "comfort": 2410, "luxury": 2630 },
            "5": { "economy": 2150, "comfort": 2360, "luxury": 2580 },
            "6-7": { "economy": 2070, "comfort": 2280, "luxury": 2480 },
            "srs": { "economy": 350, "comfort": 390, "luxury": 420 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2190, "comfort": 2410, "luxury": 2630 },
            "2": { "economy": 1570, "comfort": 1730, "luxury": 1880 },
            "3": { "economy": 1520, "comfort": 1670, "luxury": 1820 },
            "4": { "economy": 1490, "comfort": 1640, "luxury": 1790 },
            "5": { "economy": 1460, "comfort": 1610, "luxury": 1750 },
            "6-7": { "economy": 1410, "comfort": 1550, "luxury": 1690 },
            "srs": { "economy": 240, "comfort": 260, "luxury": 290 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "6-day-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3220, "comfort": 3540, "luxury": 3860 },
            "2": { "economy": 2300, "comfort": 2530, "luxury": 2760 },
            "3": { "economy": 2230, "comfort": 2450, "luxury": 2680 },
            "4": { "economy": 2190, "comfort": 2410, "luxury": 2630 },
            "5": { "economy": 2150, "comfort": 2360, "luxury": 2580 },
            "6-7": { "economy": 2070, "comfort": 2280, "luxury": 2480 },
            "srs": { "economy": 350, "comfort": 390, "luxury": 420 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3550, "comfort": 3910, "luxury": 4260 },
            "2": { "economy": 2530, "comfort": 2780, "luxury": 3040 },
            "3": { "economy": 2450, "comfort": 2700, "luxury": 2940 },
            "4": { "economy": 2410, "comfort": 2650, "luxury": 2890 },
            "5": { "economy": 2350, "comfort": 2580, "luxury": 2820 },
            "6-7": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "srs": { "economy": 380, "comfort": 420, "luxury": 460 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4030, "comfort": 4430, "luxury": 4840 },
            "2": { "economy": 2880, "comfort": 3170, "luxury": 3460 },
            "3": { "economy": 2790, "comfort": 3070, "luxury": 3350 },
            "4": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "5": { "economy": 2680, "comfort": 2950, "luxury": 3220 },
            "6-7": { "economy": 2600, "comfort": 2860, "luxury": 3120 },
            "srs": { "economy": 440, "comfort": 480, "luxury": 530 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "2": { "economy": 1960, "comfort": 2160, "luxury": 2350 },
            "3": { "economy": 1910, "comfort": 2100, "luxury": 2290 },
            "4": { "economy": 1860, "comfort": 2050, "luxury": 2230 },
            "5": { "economy": 1820, "comfort": 2000, "luxury": 2180 },
            "6-7": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "srs": { "economy": 300, "comfort": 330, "luxury": 360 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "7-day-tanzania-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3870, "comfort": 4260, "luxury": 4640 },
            "2": { "economy": 2760, "comfort": 3040, "luxury": 3310 },
            "3": { "economy": 2680, "comfort": 2950, "luxury": 3220 },
            "4": { "economy": 2630, "comfort": 2890, "luxury": 3160 },
            "5": { "economy": 2570, "comfort": 2830, "luxury": 3080 },
            "6-7": { "economy": 2490, "comfort": 2740, "luxury": 2990 },
            "srs": { "economy": 420, "comfort": 460, "luxury": 500 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 4250, "comfort": 4680, "luxury": 5100 },
            "2": { "economy": 3040, "comfort": 3340, "luxury": 3650 },
            "3": { "economy": 2950, "comfort": 3250, "luxury": 3540 },
            "4": { "economy": 2890, "comfort": 3180, "luxury": 3470 },
            "5": { "economy": 2830, "comfort": 3110, "luxury": 3400 },
            "6-7": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "srs": { "economy": 460, "comfort": 510, "luxury": 550 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4830, "comfort": 5310, "luxury": 5800 },
            "2": { "economy": 3450, "comfort": 3800, "luxury": 4140 },
            "3": { "economy": 3350, "comfort": 3690, "luxury": 4020 },
            "4": { "economy": 3290, "comfort": 3620, "luxury": 3950 },
            "5": { "economy": 3210, "comfort": 3530, "luxury": 3850 },
            "6-7": { "economy": 3110, "comfort": 3420, "luxury": 3730 },
            "srs": { "economy": 530, "comfort": 580, "luxury": 640 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 3290, "comfort": 3620, "luxury": 3950 },
            "2": { "economy": 2350, "comfort": 2580, "luxury": 2820 },
            "3": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "4": { "economy": 2230, "comfort": 2450, "luxury": 2680 },
            "5": { "economy": 2190, "comfort": 2410, "luxury": 2630 },
            "6-7": { "economy": 2110, "comfort": 2320, "luxury": 2530 },
            "srs": { "economy": 360, "comfort": 400, "luxury": 430 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Safari Camp / Tented Camp"], "comfort": ["Mid-range Lodge / Tented Lodge"], "luxury": ["Luxury Lodge / Premium Tented Camp"] }
  },
  "5-day-masai-mara-lake-nakuru-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "2": { "economy": 1500, "comfort": 1650, "luxury": 1800 },
            "3": { "economy": 1460, "comfort": 1610, "luxury": 1750 },
            "4": { "economy": 1420, "comfort": 1560, "luxury": 1700 },
            "5": { "economy": 1390, "comfort": 1530, "luxury": 1670 },
            "6-7": { "economy": 1350, "comfort": 1490, "luxury": 1620 },
            "srs": { "economy": 230, "comfort": 250, "luxury": 280 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2310, "comfort": 2540, "luxury": 2770 },
            "2": { "economy": 1650, "comfort": 1820, "luxury": 1980 },
            "3": { "economy": 1600, "comfort": 1760, "luxury": 1920 },
            "4": { "economy": 1570, "comfort": 1730, "luxury": 1880 },
            "5": { "economy": 1530, "comfort": 1680, "luxury": 1840 },
            "6-7": { "economy": 1480, "comfort": 1630, "luxury": 1780 },
            "srs": { "economy": 250, "comfort": 280, "luxury": 300 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 2620, "comfort": 2880, "luxury": 3140 },
            "2": { "economy": 1870, "comfort": 2060, "luxury": 2240 },
            "3": { "economy": 1820, "comfort": 2000, "luxury": 2180 },
            "4": { "economy": 1770, "comfort": 1950, "luxury": 2120 },
            "5": { "economy": 1740, "comfort": 1910, "luxury": 2090 },
            "6-7": { "economy": 1690, "comfort": 1860, "luxury": 2030 },
            "srs": { "economy": 280, "comfort": 310, "luxury": 340 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 1790, "comfort": 1970, "luxury": 2150 },
            "2": { "economy": 1270, "comfort": 1400, "luxury": 1520 },
            "3": { "economy": 1240, "comfort": 1360, "luxury": 1490 },
            "4": { "economy": 1220, "comfort": 1340, "luxury": 1460 },
            "5": { "economy": 1180, "comfort": 1300, "luxury": 1420 },
            "6-7": { "economy": 1150, "comfort": 1260, "luxury": 1380 },
            "srs": { "economy": 200, "comfort": 220, "luxury": 240 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "6-day-masai-mara-nakuru-amboseli-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2420, "comfort": 2660, "luxury": 2900 },
            "2": { "economy": 1730, "comfort": 1900, "luxury": 2080 },
            "3": { "economy": 1680, "comfort": 1850, "luxury": 2020 },
            "4": { "economy": 1640, "comfort": 1800, "luxury": 1970 },
            "5": { "economy": 1610, "comfort": 1770, "luxury": 1930 },
            "6-7": { "economy": 1560, "comfort": 1720, "luxury": 1870 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 310 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2660, "comfort": 2930, "luxury": 3190 },
            "2": { "economy": 1910, "comfort": 2100, "luxury": 2290 },
            "3": { "economy": 1840, "comfort": 2020, "luxury": 2210 },
            "4": { "economy": 1810, "comfort": 1990, "luxury": 2170 },
            "5": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "6-7": { "economy": 1710, "comfort": 1880, "luxury": 2050 },
            "srs": { "economy": 280, "comfort": 310, "luxury": 340 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 3020, "comfort": 3320, "luxury": 3620 },
            "2": { "economy": 2160, "comfort": 2380, "luxury": 2590 },
            "3": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "4": { "economy": 2050, "comfort": 2260, "luxury": 2460 },
            "5": { "economy": 2000, "comfort": 2200, "luxury": 2400 },
            "6-7": { "economy": 1950, "comfort": 2140, "luxury": 2340 },
            "srs": { "economy": 330, "comfort": 360, "luxury": 400 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2060, "comfort": 2270, "luxury": 2470 },
            "2": { "economy": 1470, "comfort": 1620, "luxury": 1760 },
            "3": { "economy": 1420, "comfort": 1560, "luxury": 1700 },
            "4": { "economy": 1400, "comfort": 1540, "luxury": 1680 },
            "5": { "economy": 1370, "comfort": 1510, "luxury": 1640 },
            "6-7": { "economy": 1330, "comfort": 1460, "luxury": 1600 },
            "srs": { "economy": 220, "comfort": 240, "luxury": 260 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "7-day-masai-mara-nakuru-amboseli-tsavo-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3220, "comfort": 3540, "luxury": 3860 },
            "2": { "economy": 2300, "comfort": 2530, "luxury": 2760 },
            "3": { "economy": 2230, "comfort": 2450, "luxury": 2680 },
            "4": { "economy": 2190, "comfort": 2410, "luxury": 2630 },
            "5": { "economy": 2150, "comfort": 2360, "luxury": 2580 },
            "6-7": { "economy": 2070, "comfort": 2280, "luxury": 2480 },
            "srs": { "economy": 350, "comfort": 390, "luxury": 420 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3550, "comfort": 3910, "luxury": 4260 },
            "2": { "economy": 2530, "comfort": 2780, "luxury": 3040 },
            "3": { "economy": 2450, "comfort": 2700, "luxury": 2940 },
            "4": { "economy": 2410, "comfort": 2650, "luxury": 2890 },
            "5": { "economy": 2350, "comfort": 2580, "luxury": 2820 },
            "6-7": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "srs": { "economy": 380, "comfort": 420, "luxury": 460 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4030, "comfort": 4430, "luxury": 4840 },
            "2": { "economy": 2880, "comfort": 3170, "luxury": 3460 },
            "3": { "economy": 2790, "comfort": 3070, "luxury": 3350 },
            "4": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "5": { "economy": 2680, "comfort": 2950, "luxury": 3220 },
            "6-7": { "economy": 2600, "comfort": 2860, "luxury": 3120 },
            "srs": { "economy": 440, "comfort": 480, "luxury": 530 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2740, "comfort": 3010, "luxury": 3290 },
            "2": { "economy": 1960, "comfort": 2160, "luxury": 2350 },
            "3": { "economy": 1910, "comfort": 2100, "luxury": 2290 },
            "4": { "economy": 1860, "comfort": 2050, "luxury": 2230 },
            "5": { "economy": 1820, "comfort": 2000, "luxury": 2180 },
            "6-7": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "srs": { "economy": 300, "comfort": 330, "luxury": 360 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "7-day-samburu-masai-mara-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3550, "comfort": 3910, "luxury": 4260 },
            "2": { "economy": 2530, "comfort": 2780, "luxury": 3040 },
            "3": { "economy": 2450, "comfort": 2700, "luxury": 2940 },
            "4": { "economy": 2410, "comfort": 2650, "luxury": 2890 },
            "5": { "economy": 2350, "comfort": 2580, "luxury": 2820 },
            "6-7": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "srs": { "economy": 380, "comfort": 420, "luxury": 460 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3900, "comfort": 4290, "luxury": 4680 },
            "2": { "economy": 2790, "comfort": 3070, "luxury": 3350 },
            "3": { "economy": 2710, "comfort": 2980, "luxury": 3250 },
            "4": { "economy": 2650, "comfort": 2920, "luxury": 3180 },
            "5": { "economy": 2600, "comfort": 2860, "luxury": 3120 },
            "6-7": { "economy": 2510, "comfort": 2760, "luxury": 3010 },
            "srs": { "economy": 430, "comfort": 470, "luxury": 520 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4440, "comfort": 4880, "luxury": 5330 },
            "2": { "economy": 3170, "comfort": 3490, "luxury": 3800 },
            "3": { "economy": 3070, "comfort": 3380, "luxury": 3680 },
            "4": { "economy": 3010, "comfort": 3310, "luxury": 3610 },
            "5": { "economy": 2950, "comfort": 3250, "luxury": 3540 },
            "6-7": { "economy": 2850, "comfort": 3140, "luxury": 3420 },
            "srs": { "economy": 480, "comfort": 530, "luxury": 580 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 3010, "comfort": 3310, "luxury": 3610 },
            "2": { "economy": 2160, "comfort": 2380, "luxury": 2590 },
            "3": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "4": { "economy": 2050, "comfort": 2260, "luxury": 2460 },
            "5": { "economy": 2000, "comfort": 2200, "luxury": 2400 },
            "6-7": { "economy": 1940, "comfort": 2130, "luxury": 2330 },
            "srs": { "economy": 330, "comfort": 360, "luxury": 400 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "8-day-grand-kenya-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 4190, "comfort": 4610, "luxury": 5030 },
            "2": { "economy": 2990, "comfort": 3290, "luxury": 3590 },
            "3": { "economy": 2900, "comfort": 3190, "luxury": 3480 },
            "4": { "economy": 2850, "comfort": 3140, "luxury": 3420 },
            "5": { "economy": 2780, "comfort": 3060, "luxury": 3340 },
            "6-7": { "economy": 2690, "comfort": 2960, "luxury": 3230 },
            "srs": { "economy": 450, "comfort": 500, "luxury": 540 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 4610, "comfort": 5070, "luxury": 5530 },
            "2": { "economy": 3300, "comfort": 3630, "luxury": 3960 },
            "3": { "economy": 3200, "comfort": 3520, "luxury": 3840 },
            "4": { "economy": 3130, "comfort": 3440, "luxury": 3760 },
            "5": { "economy": 3070, "comfort": 3380, "luxury": 3680 },
            "6-7": { "economy": 2970, "comfort": 3270, "luxury": 3560 },
            "srs": { "economy": 490, "comfort": 540, "luxury": 590 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 5240, "comfort": 5760, "luxury": 6290 },
            "2": { "economy": 3750, "comfort": 4120, "luxury": 4500 },
            "3": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "4": { "economy": 3560, "comfort": 3920, "luxury": 4270 },
            "5": { "economy": 3480, "comfort": 3830, "luxury": 4180 },
            "6-7": { "economy": 3360, "comfort": 3700, "luxury": 4030 },
            "srs": { "economy": 570, "comfort": 630, "luxury": 680 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 3560, "comfort": 3920, "luxury": 4270 },
            "2": { "economy": 2540, "comfort": 2790, "luxury": 3050 },
            "3": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "4": { "economy": 2420, "comfort": 2660, "luxury": 2900 },
            "5": { "economy": 2370, "comfort": 2610, "luxury": 2840 },
            "6-7": { "economy": 2290, "comfort": 2520, "luxury": 2750 },
            "srs": { "economy": 380, "comfort": 420, "luxury": 460 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "7-day-masai-mara-diani-beach-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3710, "comfort": 4080, "luxury": 4450 },
            "2": { "economy": 2650, "comfort": 2920, "luxury": 3180 },
            "3": { "economy": 2570, "comfort": 2830, "luxury": 3080 },
            "4": { "economy": 2520, "comfort": 2770, "luxury": 3020 },
            "5": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "6-7": { "economy": 2390, "comfort": 2630, "luxury": 2870 },
            "srs": { "economy": 410, "comfort": 450, "luxury": 490 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 4070, "comfort": 4480, "luxury": 4880 },
            "2": { "economy": 2910, "comfort": 3200, "luxury": 3490 },
            "3": { "economy": 2830, "comfort": 3110, "luxury": 3400 },
            "4": { "economy": 2770, "comfort": 3050, "luxury": 3320 },
            "5": { "economy": 2710, "comfort": 2980, "luxury": 3250 },
            "6-7": { "economy": 2620, "comfort": 2880, "luxury": 3140 },
            "srs": { "economy": 440, "comfort": 480, "luxury": 530 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4630, "comfort": 5090, "luxury": 5560 },
            "2": { "economy": 3310, "comfort": 3640, "luxury": 3970 },
            "3": { "economy": 3210, "comfort": 3530, "luxury": 3850 },
            "4": { "economy": 3140, "comfort": 3450, "luxury": 3770 },
            "5": { "economy": 3080, "comfort": 3390, "luxury": 3700 },
            "6-7": { "economy": 2980, "comfort": 3280, "luxury": 3580 },
            "srs": { "economy": 500, "comfort": 550, "luxury": 600 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 3150, "comfort": 3470, "luxury": 3780 },
            "2": { "economy": 2260, "comfort": 2490, "luxury": 2710 },
            "3": { "economy": 2180, "comfort": 2400, "luxury": 2620 },
            "4": { "economy": 2140, "comfort": 2350, "luxury": 2570 },
            "5": { "economy": 2090, "comfort": 2300, "luxury": 2510 },
            "6-7": { "economy": 2030, "comfort": 2230, "luxury": 2440 },
            "srs": { "economy": 340, "comfort": 370, "luxury": 410 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Beach Resort / Safari Camp"], "comfort": ["Mid-range Beach Hotel / Safari Lodge"], "luxury": ["Luxury Beach Resort / Safari Lodge"] }
  },
  "7-day-amboseli-tsavo-diani-beach-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2900, "comfort": 3190, "luxury": 3480 },
            "2": { "economy": 2070, "comfort": 2280, "luxury": 2480 },
            "3": { "economy": 2020, "comfort": 2220, "luxury": 2420 },
            "4": { "economy": 1970, "comfort": 2170, "luxury": 2360 },
            "5": { "economy": 1930, "comfort": 2120, "luxury": 2320 },
            "6-7": { "economy": 1870, "comfort": 2060, "luxury": 2240 },
            "srs": { "economy": 320, "comfort": 350, "luxury": 380 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3190, "comfort": 3510, "luxury": 3830 },
            "2": { "economy": 2280, "comfort": 2510, "luxury": 2740 },
            "3": { "economy": 2210, "comfort": 2430, "luxury": 2650 },
            "4": { "economy": 2170, "comfort": 2390, "luxury": 2600 },
            "5": { "economy": 2120, "comfort": 2330, "luxury": 2540 },
            "6-7": { "economy": 2060, "comfort": 2270, "luxury": 2470 },
            "srs": { "economy": 350, "comfort": 390, "luxury": 420 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "2": { "economy": 2600, "comfort": 2860, "luxury": 3120 },
            "3": { "economy": 2520, "comfort": 2770, "luxury": 3020 },
            "4": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "5": { "economy": 2410, "comfort": 2650, "luxury": 2890 },
            "6-7": { "economy": 2330, "comfort": 2560, "luxury": 2800 },
            "srs": { "economy": 390, "comfort": 430, "luxury": 470 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2460, "comfort": 2710, "luxury": 2950 },
            "2": { "economy": 1760, "comfort": 1940, "luxury": 2110 },
            "3": { "economy": 1710, "comfort": 1880, "luxury": 2050 },
            "4": { "economy": 1680, "comfort": 1850, "luxury": 2020 },
            "5": { "economy": 1640, "comfort": 1800, "luxury": 1970 },
            "6-7": { "economy": 1590, "comfort": 1750, "luxury": 1910 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 310 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Beach Resort / Safari Camp"], "comfort": ["Mid-range Beach Hotel / Safari Lodge"], "luxury": ["Luxury Beach Resort / Safari Lodge"] }
  },
  "10-day-masai-mara-amboseli-diani-beach-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 5160, "comfort": 5680, "luxury": 6190 },
            "2": { "economy": 3680, "comfort": 4050, "luxury": 4420 },
            "3": { "economy": 3570, "comfort": 3930, "luxury": 4280 },
            "4": { "economy": 3500, "comfort": 3850, "luxury": 4200 },
            "5": { "economy": 3430, "comfort": 3770, "luxury": 4120 },
            "6-7": { "economy": 3320, "comfort": 3650, "luxury": 3980 },
            "srs": { "economy": 560, "comfort": 620, "luxury": 670 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 5670, "comfort": 6240, "luxury": 6800 },
            "2": { "economy": 4050, "comfort": 4460, "luxury": 4860 },
            "3": { "economy": 3930, "comfort": 4320, "luxury": 4720 },
            "4": { "economy": 3860, "comfort": 4250, "luxury": 4630 },
            "5": { "economy": 3770, "comfort": 4150, "luxury": 4520 },
            "6-7": { "economy": 3650, "comfort": 4020, "luxury": 4380 },
            "srs": { "economy": 610, "comfort": 670, "luxury": 730 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 6440, "comfort": 7080, "luxury": 7730 },
            "2": { "economy": 4600, "comfort": 5060, "luxury": 5520 },
            "3": { "economy": 4470, "comfort": 4920, "luxury": 5360 },
            "4": { "economy": 4370, "comfort": 4810, "luxury": 5240 },
            "5": { "economy": 4280, "comfort": 4710, "luxury": 5140 },
            "6-7": { "economy": 4140, "comfort": 4550, "luxury": 4970 },
            "srs": { "economy": 690, "comfort": 760, "luxury": 830 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 4380, "comfort": 4820, "luxury": 5260 },
            "2": { "economy": 3130, "comfort": 3440, "luxury": 3760 },
            "3": { "economy": 3030, "comfort": 3330, "luxury": 3640 },
            "4": { "economy": 2980, "comfort": 3280, "luxury": 3580 },
            "5": { "economy": 2910, "comfort": 3200, "luxury": 3490 },
            "6-7": { "economy": 2810, "comfort": 3090, "luxury": 3370 },
            "srs": { "economy": 470, "comfort": 520, "luxury": 560 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Beach Resort / Safari Camp"], "comfort": ["Mid-range Beach Hotel / Safari Lodge"], "luxury": ["Luxury Beach Resort / Safari Lodge"] }
  },
  "12-day-kenya-safari-beach-holiday": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 6290, "comfort": 6920, "luxury": 7550 },
            "2": { "economy": 4490, "comfort": 4940, "luxury": 5390 },
            "3": { "economy": 4360, "comfort": 4800, "luxury": 5230 },
            "4": { "economy": 4260, "comfort": 4690, "luxury": 5110 },
            "5": { "economy": 4170, "comfort": 4590, "luxury": 5000 },
            "6-7": { "economy": 4040, "comfort": 4440, "luxury": 4850 },
            "srs": { "economy": 680, "comfort": 750, "luxury": 820 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 6910, "comfort": 7600, "luxury": 8290 },
            "2": { "economy": 4940, "comfort": 5430, "luxury": 5930 },
            "3": { "economy": 4790, "comfort": 5270, "luxury": 5750 },
            "4": { "economy": 4690, "comfort": 5160, "luxury": 5630 },
            "5": { "economy": 4590, "comfort": 5050, "luxury": 5510 },
            "6-7": { "economy": 4450, "comfort": 4900, "luxury": 5340 },
            "srs": { "economy": 740, "comfort": 810, "luxury": 890 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 7850, "comfort": 8640, "luxury": 9420 },
            "2": { "economy": 5610, "comfort": 6170, "luxury": 6730 },
            "3": { "economy": 5440, "comfort": 5980, "luxury": 6530 },
            "4": { "economy": 5330, "comfort": 5860, "luxury": 6400 },
            "5": { "economy": 5210, "comfort": 5730, "luxury": 6250 },
            "6-7": { "economy": 5050, "comfort": 5560, "luxury": 6060 },
            "srs": { "economy": 840, "comfort": 920, "luxury": 1010 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 5340, "comfort": 5870, "luxury": 6410 },
            "2": { "economy": 3810, "comfort": 4190, "luxury": 4570 },
            "3": { "economy": 3700, "comfort": 4070, "luxury": 4440 },
            "4": { "economy": 3630, "comfort": 3990, "luxury": 4360 },
            "5": { "economy": 3550, "comfort": 3910, "luxury": 4260 },
            "6-7": { "economy": 3440, "comfort": 3780, "luxury": 4130 },
            "srs": { "economy": 580, "comfort": 640, "luxury": 700 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Beach Resort / Safari Camp"], "comfort": ["Mid-range Beach Hotel / Safari Lodge"], "luxury": ["Luxury Beach Resort / Safari Lodge"] }
  },
  "3-day-samburu-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 2260, "comfort": 2490, "luxury": 2710 },
            "2": { "economy": 1610, "comfort": 1770, "luxury": 1930 },
            "3": { "economy": 1570, "comfort": 1730, "luxury": 1880 },
            "4": { "economy": 1530, "comfort": 1680, "luxury": 1840 },
            "5": { "economy": 1500, "comfort": 1650, "luxury": 1800 },
            "6-7": { "economy": 1460, "comfort": 1610, "luxury": 1750 },
            "srs": { "economy": 240, "comfort": 260, "luxury": 290 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 2490, "comfort": 2740, "luxury": 2990 },
            "2": { "economy": 1770, "comfort": 1950, "luxury": 2120 },
            "3": { "economy": 1720, "comfort": 1890, "luxury": 2060 },
            "4": { "economy": 1690, "comfort": 1860, "luxury": 2030 },
            "5": { "economy": 1650, "comfort": 1820, "luxury": 1980 },
            "6-7": { "economy": 1600, "comfort": 1760, "luxury": 1920 },
            "srs": { "economy": 270, "comfort": 300, "luxury": 320 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 2830, "comfort": 3110, "luxury": 3400 },
            "2": { "economy": 2020, "comfort": 2220, "luxury": 2420 },
            "3": { "economy": 1960, "comfort": 2160, "luxury": 2350 },
            "4": { "economy": 1920, "comfort": 2110, "luxury": 2300 },
            "5": { "economy": 1870, "comfort": 2060, "luxury": 2240 },
            "6-7": { "economy": 1820, "comfort": 2000, "luxury": 2180 },
            "srs": { "economy": 310, "comfort": 340, "luxury": 370 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 1920, "comfort": 2110, "luxury": 2300 },
            "2": { "economy": 1370, "comfort": 1510, "luxury": 1640 },
            "3": { "economy": 1340, "comfort": 1470, "luxury": 1610 },
            "4": { "economy": 1300, "comfort": 1430, "luxury": 1560 },
            "5": { "economy": 1280, "comfort": 1410, "luxury": 1540 },
            "6-7": { "economy": 1240, "comfort": 1360, "luxury": 1490 },
            "srs": { "economy": 210, "comfort": 230, "luxury": 250 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "5-day-masai-mara-amboseli-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 3380, "comfort": 3720, "luxury": 4060 },
            "2": { "economy": 2420, "comfort": 2660, "luxury": 2900 },
            "3": { "economy": 2340, "comfort": 2570, "luxury": 2810 },
            "4": { "economy": 2300, "comfort": 2530, "luxury": 2760 },
            "5": { "economy": 2250, "comfort": 2480, "luxury": 2700 },
            "6-7": { "economy": 2180, "comfort": 2400, "luxury": 2620 },
            "srs": { "economy": 360, "comfort": 400, "luxury": 430 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 3720, "comfort": 4090, "luxury": 4460 },
            "2": { "economy": 2660, "comfort": 2930, "luxury": 3190 },
            "3": { "economy": 2580, "comfort": 2840, "luxury": 3100 },
            "4": { "economy": 2530, "comfort": 2780, "luxury": 3040 },
            "5": { "economy": 2480, "comfort": 2730, "luxury": 2980 },
            "6-7": { "economy": 2400, "comfort": 2640, "luxury": 2880 },
            "srs": { "economy": 410, "comfort": 450, "luxury": 490 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 4230, "comfort": 4650, "luxury": 5080 },
            "2": { "economy": 3020, "comfort": 3320, "luxury": 3620 },
            "3": { "economy": 2940, "comfort": 3230, "luxury": 3530 },
            "4": { "economy": 2870, "comfort": 3160, "luxury": 3440 },
            "5": { "economy": 2810, "comfort": 3090, "luxury": 3370 },
            "6-7": { "economy": 2720, "comfort": 2990, "luxury": 3260 },
            "srs": { "economy": 460, "comfort": 510, "luxury": 550 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 2880, "comfort": 3170, "luxury": 3460 },
            "2": { "economy": 2060, "comfort": 2270, "luxury": 2470 },
            "3": { "economy": 1990, "comfort": 2190, "luxury": 2390 },
            "4": { "economy": 1950, "comfort": 2140, "luxury": 2340 },
            "5": { "economy": 1920, "comfort": 2110, "luxury": 2300 },
            "6-7": { "economy": 1850, "comfort": 2040, "luxury": 2220 },
            "srs": { "economy": 320, "comfort": 350, "luxury": 380 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "7-day-samburu-masai-mara-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 4830, "comfort": 5310, "luxury": 5800 },
            "2": { "economy": 3450, "comfort": 3800, "luxury": 4140 },
            "3": { "economy": 3350, "comfort": 3690, "luxury": 4020 },
            "4": { "economy": 3290, "comfort": 3620, "luxury": 3950 },
            "5": { "economy": 3210, "comfort": 3530, "luxury": 3850 },
            "6-7": { "economy": 3110, "comfort": 3420, "luxury": 3730 },
            "srs": { "economy": 530, "comfort": 580, "luxury": 640 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 5320, "comfort": 5850, "luxury": 6380 },
            "2": { "economy": 3800, "comfort": 4180, "luxury": 4560 },
            "3": { "economy": 3690, "comfort": 4060, "luxury": 4430 },
            "4": { "economy": 3610, "comfort": 3970, "luxury": 4330 },
            "5": { "economy": 3540, "comfort": 3890, "luxury": 4250 },
            "6-7": { "economy": 3420, "comfort": 3760, "luxury": 4100 },
            "srs": { "economy": 570, "comfort": 630, "luxury": 680 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 6050, "comfort": 6660, "luxury": 7260 },
            "2": { "economy": 4320, "comfort": 4750, "luxury": 5180 },
            "3": { "economy": 4180, "comfort": 4600, "luxury": 5020 },
            "4": { "economy": 4100, "comfort": 4510, "luxury": 4920 },
            "5": { "economy": 4020, "comfort": 4420, "luxury": 4820 },
            "6-7": { "economy": 3890, "comfort": 4280, "luxury": 4670 },
            "srs": { "economy": 650, "comfort": 720, "luxury": 780 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 4110, "comfort": 4520, "luxury": 4930 },
            "2": { "economy": 2940, "comfort": 3230, "luxury": 3530 },
            "3": { "economy": 2850, "comfort": 3140, "luxury": 3420 },
            "4": { "economy": 2790, "comfort": 3070, "luxury": 3350 },
            "5": { "economy": 2730, "comfort": 3000, "luxury": 3280 },
            "6-7": { "economy": 2640, "comfort": 2900, "luxury": 3170 },
            "srs": { "economy": 450, "comfort": 500, "luxury": 540 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Single supplement applies."
    },
    "accommodations": { "economy": ["Budget Camp / Basic Lodge"], "comfort": ["Mid-range Lodge / Tented Camp"], "luxury": ["Luxury Lodge / Premium Camp"] }
  },
  "wasini-island-dolphin-snorkeling-day-trip": {
    "pricing": {
      "excursion": true,
      "rates": {
        "1_pax": {
          "non_resident": { "adult": 150, "child": 110 },
          "resident": { "adult": 100, "child": 80 }
        },
        "2_4_pax": {
          "non_resident": { "adult": 100, "child": 80 },
          "resident": { "adult": 70, "child": 50 }
        },
        "5_7_pax": {
          "non_resident": { "adult": 80, "child": 60 },
          "resident": { "adult": 50, "child": 40 }
        }
      },
      "currency": "USD",
      "note": "Per person rates in a private 4x4 Land Cruiser. Maximum 7 passengers per vehicle.",
      "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
    },
    "accommodations": null
  },
  "3-day-tsavo-east-west-diani-safari": {
        "pricing": {
              "seasons": {
                    "peak": {
                          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
                          "rates": {
                                "1": {
                                      "economy": 1660,
                                      "comfort": 1830,
                                      "luxury": 1990
                                },
                                "2": {
                                      "economy": 1180,
                                      "comfort": 1300,
                                      "luxury": 1420
                                },
                                "3": {
                                      "economy": 1070,
                                      "comfort": 1180,
                                      "luxury": 1280
                                },
                                "4": {
                                      "economy": 1020,
                                      "comfort": 1120,
                                      "luxury": 1220
                                },
                                "5": {
                                      "economy": 1000,
                                      "comfort": 1100,
                                      "luxury": 1200
                                },
                                "6-7": {
                                      "economy": 960,
                                      "comfort": 1060,
                                      "luxury": 1150
                                },
                                "srs": {
                                      "economy": 90,
                                      "comfort": 100,
                                      "luxury": 110
                                }
                          }
                    },
                    "low": {
                          "dates": "1st Apr \u2013 31st May",
                          "rates": {
                                "1": {
                                      "economy": 1060,
                                      "comfort": 1170,
                                      "luxury": 1270
                                },
                                "2": {
                                      "economy": 730,
                                      "comfort": 800,
                                      "luxury": 880
                                },
                                "3": {
                                      "economy": 640,
                                      "comfort": 700,
                                      "luxury": 770
                                },
                                "4": {
                                      "economy": 590,
                                      "comfort": 650,
                                      "luxury": 710
                                },
                                "5": {
                                      "economy": 560,
                                      "comfort": 620,
                                      "luxury": 670
                                },
                                "6-7": {
                                      "economy": 540,
                                      "comfort": 590,
                                      "luxury": 650
                                },
                                "srs": {
                                      "economy": 50,
                                      "comfort": 60,
                                      "luxury": 60
                                }
                          }
                    }
              },
              "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
              "currency": "USD",
              "note": "Prices per person sharing in double/twin room"
        },
        "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite"
      ]
    }
  },
  "5-day-masai-mara-amboseli-diani-safari": {
        "pricing": {
              "seasons": {
                    "peak": {
                          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
                          "rates": {
                                "1": {
                                      "economy": 2230,
                                      "comfort": 2450,
                                      "luxury": 2680
                                },
                                "2": {
                                      "economy": 1570,
                                      "comfort": 1730,
                                      "luxury": 1880
                                },
                                "3": {
                                      "economy": 1400,
                                      "comfort": 1540,
                                      "luxury": 1680
                                },
                                "4": {
                                      "economy": 1310,
                                      "comfort": 1440,
                                      "luxury": 1570
                                },
                                "5": {
                                      "economy": 1250,
                                      "comfort": 1380,
                                      "luxury": 1500
                                },
                                "6-7": {
                                      "economy": 1220,
                                      "comfort": 1340,
                                      "luxury": 1460
                                },
                                "srs": {
                                      "economy": 160,
                                      "comfort": 180,
                                      "luxury": 190
                                }
                          }
                    },
                    "low": {
                          "dates": "1st Apr \u2013 31st May",
                          "rates": {
                                "1": {
                                      "economy": 1450,
                                      "comfort": 1600,
                                      "luxury": 1740
                                },
                                "2": {
                                      "economy": 1010,
                                      "comfort": 1110,
                                      "luxury": 1210
                                },
                                "3": {
                                      "economy": 880,
                                      "comfort": 970,
                                      "luxury": 1060
                                },
                                "4": {
                                      "economy": 820,
                                      "comfort": 900,
                                      "luxury": 980
                                },
                                "5": {
                                      "economy": 790,
                                      "comfort": 870,
                                      "luxury": 950
                                },
                                "6-7": {
                                      "economy": 770,
                                      "comfort": 850,
                                      "luxury": 920
                                },
                                "srs": {
                                      "economy": 100,
                                      "comfort": 110,
                                      "luxury": 120
                                }
                          }
                    }
              },
              "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
              "currency": "USD",
              "note": "Prices per person sharing in double/twin room"
        },
        "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "5-day-amboseli-tsavo-east-west-diani-safari": {
        "pricing": {
              "seasons": {
                    "peak": {
                          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
                          "rates": {
                                "1": {
                                      "economy": 2070,
                                      "comfort": 2280,
                                      "luxury": 2480
                                },
                                "2": {
                                      "economy": 1380,
                                      "comfort": 1520,
                                      "luxury": 1660
                                },
                                "3": {
                                      "economy": 1270,
                                      "comfort": 1400,
                                      "luxury": 1520
                                },
                                "4": {
                                      "economy": 1220,
                                      "comfort": 1340,
                                      "luxury": 1460
                                },
                                "5": {
                                      "economy": 1150,
                                      "comfort": 1260,
                                      "luxury": 1380
                                },
                                "6-7": {
                                      "economy": 1130,
                                      "comfort": 1240,
                                      "luxury": 1360
                                },
                                "srs": {
                                      "economy": 150,
                                      "comfort": 160,
                                      "luxury": 180
                                }
                          }
                    },
                    "low": {
                          "dates": "1st Apr \u2013 31st May",
                          "rates": {
                                "1": {
                                      "economy": 1380,
                                      "comfort": 1520,
                                      "luxury": 1660
                                },
                                "2": {
                                      "economy": 970,
                                      "comfort": 1070,
                                      "luxury": 1160
                                },
                                "3": {
                                      "economy": 840,
                                      "comfort": 920,
                                      "luxury": 1010
                                },
                                "4": {
                                      "economy": 800,
                                      "comfort": 880,
                                      "luxury": 960
                                },
                                "5": {
                                      "economy": 770,
                                      "comfort": 850,
                                      "luxury": 920
                                },
                                "6-7": {
                                      "economy": 740,
                                      "comfort": 810,
                                      "luxury": 890
                                },
                                "srs": {
                                      "economy": 100,
                                      "comfort": 110,
                                      "luxury": 120
                                }
                          }
                    }
              },
              "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
              "currency": "USD",
              "note": "Prices per person sharing in double/twin room"
        },
        "accommodations": {
      "economy": [
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "6-day-kenya-grand-safari-diani": {
        "pricing": {
              "seasons": {
                    "peak": {
                          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
                          "rates": {
                                "1": {
                                      "economy": 2650,
                                      "comfort": 2920,
                                      "luxury": 3180
                                },
                                "2": {
                                      "economy": 1790,
                                      "comfort": 1970,
                                      "luxury": 2150
                                },
                                "3": {
                                      "economy": 1610,
                                      "comfort": 1770,
                                      "luxury": 1930
                                },
                                "4": {
                                      "economy": 1560,
                                      "comfort": 1720,
                                      "luxury": 1870
                                },
                                "5": {
                                      "economy": 1500,
                                      "comfort": 1650,
                                      "luxury": 1800
                                },
                                "6-7": {
                                      "economy": 1470,
                                      "comfort": 1620,
                                      "luxury": 1760
                                },
                                "srs": {
                                      "economy": 200,
                                      "comfort": 220,
                                      "luxury": 240
                                }
                          }
                    },
                    "low": {
                          "dates": "1st Apr \u2013 31st May",
                          "rates": {
                                "1": {
                                      "economy": 1730,
                                      "comfort": 1900,
                                      "luxury": 2080
                                },
                                "2": {
                                      "economy": 1220,
                                      "comfort": 1340,
                                      "luxury": 1460
                                },
                                "3": {
                                      "economy": 1070,
                                      "comfort": 1180,
                                      "luxury": 1280
                                },
                                "4": {
                                      "economy": 1020,
                                      "comfort": 1120,
                                      "luxury": 1220
                                },
                                "5": {
                                      "economy": 990,
                                      "comfort": 1090,
                                      "luxury": 1190
                                },
                                "6-7": {
                                      "economy": 950,
                                      "comfort": 1040,
                                      "luxury": 1140
                                },
                                "srs": {
                                      "economy": 120,
                                      "comfort": 130,
                                      "luxury": 140
                                }
                          }
                    }
              },
              "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
              "currency": "USD",
              "note": "Prices per person sharing in double/twin room"
        },
        "accommodations": {
      "economy": [
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "2-day-diani-tsavo-east-west-safari": {
        "pricing": {
              "seasons": {
                    "peak": {
                          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
                          "rates": {
                                "1": {
                                      "economy": 1070,
                                      "comfort": 1180,
                                      "luxury": 1280
                                },
                                "2": {
                                      "economy": 660,
                                      "comfort": 730,
                                      "luxury": 790
                                },
                                "3": {
                                      "economy": 590,
                                      "comfort": 650,
                                      "luxury": 710
                                },
                                "4": {
                                      "economy": 550,
                                      "comfort": 600,
                                      "luxury": 660
                                },
                                "5": {
                                      "economy": 530,
                                      "comfort": 580,
                                      "luxury": 640
                                },
                                "6-7": {
                                      "economy": 510,
                                      "comfort": 560,
                                      "luxury": 610
                                },
                                "srs": {
                                      "economy": 50,
                                      "comfort": 60,
                                      "luxury": 60
                                }
                          }
                    },
                    "low": {
                          "dates": "1st Apr \u2013 31st May",
                          "rates": {
                                "1": {
                                      "economy": 930,
                                      "comfort": 1020,
                                      "luxury": 1120
                                },
                                "2": {
                                      "economy": 490,
                                      "comfort": 540,
                                      "luxury": 590
                                },
                                "3": {
                                      "economy": 440,
                                      "comfort": 480,
                                      "luxury": 530
                                },
                                "4": {
                                      "economy": 420,
                                      "comfort": 460,
                                      "luxury": 500
                                },
                                "5": {
                                      "economy": 390,
                                      "comfort": 430,
                                      "luxury": 470
                                },
                                "6-7": {
                                      "economy": 380,
                                      "comfort": 420,
                                      "luxury": 460
                                },
                                "srs": {
                                      "economy": 40,
                                      "comfort": 40,
                                      "luxury": 50
                                }
                          }
                    }
              },
              "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
              "currency": "USD",
              "note": "Prices per person sharing in double/twin room"
        },
        "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite"
      ]
    }
  },
  "shimba-hills-day-trip-from-diani": {
        "pricing": {
              "excursion": true,
              "rates": {
                    "1_pax": {
                          "non_resident": {
                                "adult": 300,
                                "child": 230
                          },
                          "resident": {
                                "adult": 190,
                                "child": 150
                          }
                    },
                    "2_4_pax": {
                          "non_resident": {
                                "adult": 210,
                                "child": 170
                          },
                          "resident": {
                                "adult": 140,
                                "child": 110
                          }
                    },
                    "5_7_pax": {
                          "non_resident": {
                                "adult": 180,
                                "child": 140
                          },
                          "resident": {
                                "adult": 120,
                                "child": 90
                          }
                    }
              },
              "currency": "USD",
              "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
              "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
        },
        "accommodations": null
  },
  "mombasa-city-cultural-tour": {
        "pricing": {
              "excursion": true,
              "rates": {
                    "1_pax": {
                          "non_resident": {
                                "adult": 270,
                                "child": 210
                          },
                          "resident": {
                                "adult": 170,
                                "child": 130
                          }
                    },
                    "2_4_pax": {
                          "non_resident": {
                                "adult": 190,
                                "child": 150
                          },
                          "resident": {
                                "adult": 130,
                                "child": 100
                          }
                    },
                    "5_7_pax": {
                          "non_resident": {
                                "adult": 160,
                                "child": 130
                          },
                          "resident": {
                                "adult": 110,
                                "child": 80
                          }
                    }
              },
              "currency": "USD",
              "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
              "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
        },
        "accommodations": {
      "economy": [
        "Diani Sea Lodge",
        "Sandies Tropical Village"
      ],
      "comfort": [
        "Diani Reef Beach Resort & Spa",
        "Leopard Beach Resort & Spa",
        "Leisure Lodge Beach & Golf Resort"
      ],
      "luxury": [
        "Swahili Beach Resort",
        "AfroChic Diani",
        "Kinondo Kwetu"
      ],
      "superior_luxury": [
        "Almanara Luxury Boutique Hotel & Villas"
      ]
    }
  },
  "kisite-mpunguti-marine-excursion": {
        "pricing": {
              "excursion": true,
              "rates": {
                    "1_pax": {
                          "non_resident": {
                                "adult": 290,
                                "child": 220
                          },
                          "resident": {
                                "adult": 190,
                                "child": 150
                          }
                    },
                    "2_4_pax": {
                          "non_resident": {
                                "adult": 210,
                                "child": 160
                          },
                          "resident": {
                                "adult": 140,
                                "child": 110
                          }
                    },
                    "5_7_pax": {
                          "non_resident": {
                                "adult": 180,
                                "child": 140
                          },
                          "resident": {
                                "adult": 120,
                                "child": 90
                          }
                    }
              },
              "currency": "USD",
              "note": "Per person rates in a private 4x4 Land Cruiser with dedicated driver-guide. Maximum 7 passengers per vehicle.",
              "child_note": "Child rates apply to ages 3-11. Infants under 3 travel free."
        },
        "accommodations": null
  },


  "3-day-coast-to-nairobi-tsavo-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "2": {
              "economy": 910,
              "comfort": 1000,
              "luxury": 1090
            },
            "3": {
              "economy": 780,
              "comfort": 860,
              "luxury": 940
            },
            "4": {
              "economy": 720,
              "comfort": 790,
              "luxury": 860
            },
            "5": {
              "economy": 680,
              "comfort": 750,
              "luxury": 820
            },
            "6-7": {
              "economy": 650,
              "comfort": 720,
              "luxury": 780
            },
            "srs": {
              "economy": 110,
              "comfort": 120,
              "luxury": 130
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov – 15th Dec",
          "rates": {
            "1": {
              "economy": 1540,
              "comfort": 1690,
              "luxury": 1850
            },
            "2": {
              "economy": 1010,
              "comfort": 1110,
              "luxury": 1210
            },
            "3": {
              "economy": 870,
              "comfort": 960,
              "luxury": 1040
            },
            "4": {
              "economy": 800,
              "comfort": 880,
              "luxury": 960
            },
            "5": {
              "economy": 760,
              "comfort": 840,
              "luxury": 910
            },
            "6-7": {
              "economy": 730,
              "comfort": 800,
              "luxury": 880
            },
            "srs": {
              "economy": 120,
              "comfort": 130,
              "luxury": 140
            }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
          "rates": {
            "1": {
              "economy": 1730,
              "comfort": 1900,
              "luxury": 2080
            },
            "2": {
              "economy": 1140,
              "comfort": 1250,
              "luxury": 1370
            },
            "3": {
              "economy": 980,
              "comfort": 1080,
              "luxury": 1180
            },
            "4": {
              "economy": 900,
              "comfort": 990,
              "luxury": 1080
            },
            "5": {
              "economy": 850,
              "comfort": 940,
              "luxury": 1020
            },
            "6-7": {
              "economy": 810,
              "comfort": 890,
              "luxury": 970
            },
            "srs": {
              "economy": 140,
              "comfort": 150,
              "luxury": 170
            }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May",
          "rates": {
            "1": {
              "economy": 1190,
              "comfort": 1310,
              "luxury": 1430
            },
            "2": {
              "economy": 780,
              "comfort": 860,
              "luxury": 940
            },
            "3": {
              "economy": 670,
              "comfort": 740,
              "luxury": 800
            },
            "4": {
              "economy": 620,
              "comfort": 680,
              "luxury": 740
            },
            "5": {
              "economy": 580,
              "comfort": 640,
              "luxury": 700
            },
            "6-7": {
              "economy": 560,
              "comfort": 620,
              "luxury": 670
            },
            "srs": {
              "economy": 100,
              "comfort": 110,
              "luxury": 120
            }
          }
        }
      },
      "child_rates": "Children 3-11 years receive 25% discount. Infants under 3 travel free.",
      "currency": "USD",
      "note": "Prices are in USD per person sharing. Multi-day private safari with dedicated 4x4 Land Cruiser and professional driver-guide."
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite"
      ]
    }
  },
  "5-day-coast-to-nairobi-tsavo-amboseli-nakuru": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": {
              "economy": 2530,
              "comfort": 2780,
              "luxury": 3040
            },
            "2": {
              "economy": 1660,
              "comfort": 1830,
              "luxury": 1990
            },
            "3": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "4": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "5": {
              "economy": 1250,
              "comfort": 1380,
              "luxury": 1500
            },
            "6-7": {
              "economy": 1190,
              "comfort": 1310,
              "luxury": 1430
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov – 15th Dec",
          "rates": {
            "1": {
              "economy": 2830,
              "comfort": 3110,
              "luxury": 3400
            },
            "2": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "3": {
              "economy": 1600,
              "comfort": 1760,
              "luxury": 1920
            },
            "4": {
              "economy": 1470,
              "comfort": 1620,
              "luxury": 1760
            },
            "5": {
              "economy": 1390,
              "comfort": 1530,
              "luxury": 1670
            },
            "6-7": {
              "economy": 1330,
              "comfort": 1460,
              "luxury": 1600
            },
            "srs": {
              "economy": 230,
              "comfort": 250,
              "luxury": 280
            }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
          "rates": {
            "1": {
              "economy": 3180,
              "comfort": 3500,
              "luxury": 3820
            },
            "2": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "3": {
              "economy": 1800,
              "comfort": 1980,
              "luxury": 2160
            },
            "4": {
              "economy": 1650,
              "comfort": 1820,
              "luxury": 1980
            },
            "5": {
              "economy": 1560,
              "comfort": 1720,
              "luxury": 1870
            },
            "6-7": {
              "economy": 1490,
              "comfort": 1640,
              "luxury": 1790
            },
            "srs": {
              "economy": 250,
              "comfort": 280,
              "luxury": 300
            }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May",
          "rates": {
            "1": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "2": {
              "economy": 1430,
              "comfort": 1570,
              "luxury": 1720
            },
            "3": {
              "economy": 1230,
              "comfort": 1350,
              "luxury": 1480
            },
            "4": {
              "economy": 1130,
              "comfort": 1240,
              "luxury": 1360
            },
            "5": {
              "economy": 1070,
              "comfort": 1180,
              "luxury": 1280
            },
            "6-7": {
              "economy": 1020,
              "comfort": 1120,
              "luxury": 1220
            },
            "srs": {
              "economy": 170,
              "comfort": 190,
              "luxury": 200
            }
          }
        }
      },
      "child_rates": "Children 3-11 years receive 25% discount. Infants under 3 travel free.",
      "currency": "USD",
      "note": "Prices are in USD per person sharing. Multi-day private safari with dedicated 4x4 Land Cruiser and professional driver-guide."
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Lake Nakuru Flamingo Lodge"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "The Cliff – Lake Nakuru"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge"
      ]
    }
  },
  "6-day-coast-to-nairobi-safari-grand-circuit": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": {
              "economy": 3100,
              "comfort": 3410,
              "luxury": 3720
            },
            "2": {
              "economy": 2040,
              "comfort": 2240,
              "luxury": 2450
            },
            "3": {
              "economy": 1760,
              "comfort": 1940,
              "luxury": 2110
            },
            "4": {
              "economy": 1610,
              "comfort": 1770,
              "luxury": 1930
            },
            "5": {
              "economy": 1530,
              "comfort": 1680,
              "luxury": 1840
            },
            "6-7": {
              "economy": 1460,
              "comfort": 1610,
              "luxury": 1750
            },
            "srs": {
              "economy": 250,
              "comfort": 280,
              "luxury": 300
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov – 15th Dec",
          "rates": {
            "1": {
              "economy": 3470,
              "comfort": 3820,
              "luxury": 4160
            },
            "2": {
              "economy": 2280,
              "comfort": 2510,
              "luxury": 2740
            },
            "3": {
              "economy": 1960,
              "comfort": 2160,
              "luxury": 2350
            },
            "4": {
              "economy": 1800,
              "comfort": 1980,
              "luxury": 2160
            },
            "5": {
              "economy": 1710,
              "comfort": 1880,
              "luxury": 2050
            },
            "6-7": {
              "economy": 1630,
              "comfort": 1790,
              "luxury": 1960
            },
            "srs": {
              "economy": 280,
              "comfort": 310,
              "luxury": 340
            }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
          "rates": {
            "1": {
              "economy": 3890,
              "comfort": 4280,
              "luxury": 4670
            },
            "2": {
              "economy": 2560,
              "comfort": 2820,
              "luxury": 3070
            },
            "3": {
              "economy": 2200,
              "comfort": 2420,
              "luxury": 2640
            },
            "4": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "5": {
              "economy": 1920,
              "comfort": 2110,
              "luxury": 2300
            },
            "6-7": {
              "economy": 1830,
              "comfort": 2010,
              "luxury": 2200
            },
            "srs": {
              "economy": 310,
              "comfort": 340,
              "luxury": 370
            }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May",
          "rates": {
            "1": {
              "economy": 2660,
              "comfort": 2930,
              "luxury": 3190
            },
            "2": {
              "economy": 1750,
              "comfort": 1930,
              "luxury": 2100
            },
            "3": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "4": {
              "economy": 1380,
              "comfort": 1520,
              "luxury": 1660
            },
            "5": {
              "economy": 1310,
              "comfort": 1440,
              "luxury": 1570
            },
            "6-7": {
              "economy": 1250,
              "comfort": 1380,
              "luxury": 1500
            },
            "srs": {
              "economy": 210,
              "comfort": 230,
              "luxury": 250
            }
          }
        }
      },
      "child_rates": "Children 3-11 years receive 25% discount. Infants under 3 travel free.",
      "currency": "USD",
      "note": "Prices are in USD per person sharing. Multi-day private safari with dedicated 4x4 Land Cruiser and professional driver-guide."
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House"
      ]
    }
  },
  "7-day-coast-to-nairobi-ultimate-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": {
              "economy": 3590,
              "comfort": 3950,
              "luxury": 4310
            },
            "2": {
              "economy": 2360,
              "comfort": 2600,
              "luxury": 2830
            },
            "3": {
              "economy": 2030,
              "comfort": 2230,
              "luxury": 2440
            },
            "4": {
              "economy": 1870,
              "comfort": 2060,
              "luxury": 2240
            },
            "5": {
              "economy": 1770,
              "comfort": 1950,
              "luxury": 2120
            },
            "6-7": {
              "economy": 1690,
              "comfort": 1860,
              "luxury": 2030
            },
            "srs": {
              "economy": 290,
              "comfort": 320,
              "luxury": 350
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov – 15th Dec",
          "rates": {
            "1": {
              "economy": 4010,
              "comfort": 4410,
              "luxury": 4810
            },
            "2": {
              "economy": 2640,
              "comfort": 2900,
              "luxury": 3170
            },
            "3": {
              "economy": 2270,
              "comfort": 2500,
              "luxury": 2720
            },
            "4": {
              "economy": 2090,
              "comfort": 2300,
              "luxury": 2510
            },
            "5": {
              "economy": 1980,
              "comfort": 2180,
              "luxury": 2380
            },
            "6-7": {
              "economy": 1890,
              "comfort": 2080,
              "luxury": 2270
            },
            "srs": {
              "economy": 320,
              "comfort": 350,
              "luxury": 380
            }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
          "rates": {
            "1": {
              "economy": 4510,
              "comfort": 4960,
              "luxury": 5410
            },
            "2": {
              "economy": 2960,
              "comfort": 3260,
              "luxury": 3550
            },
            "3": {
              "economy": 2550,
              "comfort": 2800,
              "luxury": 3060
            },
            "4": {
              "economy": 2340,
              "comfort": 2570,
              "luxury": 2810
            },
            "5": {
              "economy": 2220,
              "comfort": 2440,
              "luxury": 2660
            },
            "6-7": {
              "economy": 2120,
              "comfort": 2330,
              "luxury": 2540
            },
            "srs": {
              "economy": 360,
              "comfort": 400,
              "luxury": 430
            }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May",
          "rates": {
            "1": {
              "economy": 3080,
              "comfort": 3390,
              "luxury": 3700
            },
            "2": {
              "economy": 2020,
              "comfort": 2220,
              "luxury": 2420
            },
            "3": {
              "economy": 1740,
              "comfort": 1910,
              "luxury": 2090
            },
            "4": {
              "economy": 1600,
              "comfort": 1760,
              "luxury": 1920
            },
            "5": {
              "economy": 1520,
              "comfort": 1670,
              "luxury": 1820
            },
            "6-7": {
              "economy": 1450,
              "comfort": 1600,
              "luxury": 1740
            },
            "srs": {
              "economy": 250,
              "comfort": 280,
              "luxury": 300
            }
          }
        }
      },
      "child_rates": "Children 3-11 years receive 25% discount. Infants under 3 travel free.",
      "currency": "USD",
      "note": "Prices are in USD per person sharing. Multi-day private safari with dedicated 4x4 Land Cruiser and professional driver-guide."
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp"
      ]
    }
  },
  "9-day-coast-to-nairobi-grand-wildlife-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": {
              "economy": 4610,
              "comfort": 5070,
              "luxury": 5530
            },
            "2": {
              "economy": 3030,
              "comfort": 3330,
              "luxury": 3640
            },
            "3": {
              "economy": 2610,
              "comfort": 2870,
              "luxury": 3130
            },
            "4": {
              "economy": 2400,
              "comfort": 2640,
              "luxury": 2880
            },
            "5": {
              "economy": 2270,
              "comfort": 2500,
              "luxury": 2720
            },
            "6-7": {
              "economy": 2170,
              "comfort": 2390,
              "luxury": 2600
            },
            "srs": {
              "economy": 370,
              "comfort": 410,
              "luxury": 440
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov – 15th Dec",
          "rates": {
            "1": {
              "economy": 5160,
              "comfort": 5680,
              "luxury": 6190
            },
            "2": {
              "economy": 3390,
              "comfort": 3730,
              "luxury": 4070
            },
            "3": {
              "economy": 2920,
              "comfort": 3210,
              "luxury": 3500
            },
            "4": {
              "economy": 2680,
              "comfort": 2950,
              "luxury": 3220
            },
            "5": {
              "economy": 2540,
              "comfort": 2790,
              "luxury": 3050
            },
            "6-7": {
              "economy": 2420,
              "comfort": 2660,
              "luxury": 2900
            },
            "srs": {
              "economy": 410,
              "comfort": 450,
              "luxury": 490
            }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
          "rates": {
            "1": {
              "economy": 5790,
              "comfort": 6370,
              "luxury": 6950
            },
            "2": {
              "economy": 3810,
              "comfort": 4190,
              "luxury": 4570
            },
            "3": {
              "economy": 3280,
              "comfort": 3610,
              "luxury": 3940
            },
            "4": {
              "economy": 3010,
              "comfort": 3310,
              "luxury": 3610
            },
            "5": {
              "economy": 2850,
              "comfort": 3140,
              "luxury": 3420
            },
            "6-7": {
              "economy": 2720,
              "comfort": 2990,
              "luxury": 3260
            },
            "srs": {
              "economy": 460,
              "comfort": 510,
              "luxury": 550
            }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May",
          "rates": {
            "1": {
              "economy": 3960,
              "comfort": 4360,
              "luxury": 4750
            },
            "2": {
              "economy": 2600,
              "comfort": 2860,
              "luxury": 3120
            },
            "3": {
              "economy": 2240,
              "comfort": 2460,
              "luxury": 2690
            },
            "4": {
              "economy": 2060,
              "comfort": 2270,
              "luxury": 2470
            },
            "5": {
              "economy": 1950,
              "comfort": 2140,
              "luxury": 2340
            },
            "6-7": {
              "economy": 1860,
              "comfort": 2050,
              "luxury": 2230
            },
            "srs": {
              "economy": 320,
              "comfort": 350,
              "luxury": 380
            }
          }
        }
      },
      "child_rates": "Children 3-11 years receive 25% discount. Infants under 3 travel free.",
      "currency": "USD",
      "note": "Prices are in USD per person sharing. Multi-day private safari with dedicated 4x4 Land Cruiser and professional driver-guide."
    },
    "accommodations": {
      "economy": [
        "Ndololo Camp",
        "Man Eaters Camp",
        "Voi Wildlife Lodge",
        "Sentrim Tsavo Camp",
        "AA Lodge Amboseli",
        "Amboseli Eco Camp",
        "Amboseli Bush Camp",
        "Kimana Amboseli Camp",
        "Naivasha Kongoni Lodge",
        "Elsamere Lodge",
        "Lake Nakuru Flamingo Lodge",
        "Mara Chui Camp",
        "Elangata Olerai Camp",
        "Jambo Mara Safari Lodge",
        "Olorien Mara Camp",
        "Enkorok Mara Camp",
        "Samburu Sopa Lodge",
        "Samburu Game Lodge"
      ],
      "comfort": [
        "Ashnil Aruba Lodge",
        "Kilaguni Serena Safari Lodge",
        "Sarova Saltlick Game Lodge",
        "Severin Safari Camp",
        "Amboseli Sopa Lodge",
        "Amboseli Serena Safari Lodge",
        "Sentrim Amboseli Lodge",
        "Kibo Safari Camp",
        "Lake Naivasha Sopa Resort",
        "Lake Naivasha Country Club",
        "Crater Lake Tented Camp",
        "Lake Nakuru Lodge",
        "Lake Nakuru Sopa Lodge",
        "Sarova Lion Hill Game Lodge",
        "Mara Simba Lodge",
        "Sarova Mara Game Camp",
        "Sentrim Mara Camp",
        "Fig Tree Camp",
        "Basecamp Masai Mara",
        "Ashnil Samburu Camp",
        "Samburu Intrepids Tented Camp",
        "Sarova Shaba Game Lodge",
        "Samburu Simba Lodge"
      ],
      "luxury": [
        "Finch Hattons Luxury Lodge",
        "Galdessa Camp",
        "Satao Camp",
        "Taita Hills Safari Resort",
        "Ol Tukai Lodge",
        "Elewana Tortilis Camp",
        "Tawi Lodge",
        "Satao Elerai Camp",
        "Enashipai Resort & Spa",
        "Loldia House",
        "Great Rift Valley Lodge & Golf Resort",
        "The Cliff – Lake Nakuru",
        "Mara Serena Safari Lodge",
        "Fairmont Mara Safari Club",
        "Mara Engai Lodge",
        "Governors' Camp",
        "Mara Intrepids Tented Camp",
        "Elephant Bedroom Camp",
        "Larsens Tented Camp",
        "Saruni Samburu",
        "Elephant Watch Camp"
      ],
      "superior_luxury": [
        "Finch Hattons Luxury Lodge – Premium Suite",
        "Angama Amboseli",
        "Campi ya Kanzi",
        "Ol Donyo Lodge",
        "Hippo Point – Private House",
        "Angama Mara",
        "Mahali Mzuri",
        "Mara Plains Camp",
        "&Beyond Bateleur Camp",
        "Cottar's 1920s Safari Camp",
        "Sasaab Lodge",
        "Saruni Samburu – Samburu Suite"
      ]
    }
  },

  "1-day-shimba-hills-group-safari-diani": {
    "pricing": {
      "group_tour": true,
      "min_price": 85,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 7 travellers required. Hotel pickup and drop-off included.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },

  "1-day-tsavo-east-group-safari-diani": {
    "pricing": {
      "group_tour": true,
      "min_price": 120,
      "currency": "USD",
      "note": "Per person rate in a shared 4x4 Land Cruiser. Minimum 7 travellers required. Hotel pickup and drop-off included.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  },

  "2-day-tsavo-east-west-group-safari-diani": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 420, "comfort": 460 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 460, "comfort": 510 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 640, "comfort": 700 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 520, "comfort": 570 }, "srs": 90 }
      ],
      "duration": 2,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary. Pickup from Diani or Mombasa hotels.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Sentrim Tsavo East Camp or similar",
                "Sentrim Tsavo Camp or similar"
          ],
          "comfort": [
                "Ashnil Aruba Lodge or similar",
                "Kilaguni Serena Safari Lodge or similar"
          ]
    }
  },

  "3-day-tsavo-amboseli-group-safari-diani": {
    "pricing": {
      "group": true,
      "seasonal": true,
      "seasons": [
        {
          "name": "Low Season",
          "months": "April - May",
          "rates": { "economy": 620, "comfort": 680 }, "srs": 40 },
        {
          "name": "Shoulder Season A",
          "months": "June, November",
          "rates": { "economy": 680, "comfort": 750 }, "srs": 40 },
        {
          "name": "Shoulder Season B",
          "months": "January - March",
          "rates": { "economy": 760, "comfort": 840 }, "srs": 40 },
        {
          "name": "Peak Season",
          "months": "July - October, Dec 20 - Jan 5",
          "rates": { "economy": 760, "comfort": 840 }, "srs": 90 }
      ],
      "duration": 3,
      "currency": "USD",
      "note": "Per person sharing. All rates include shared 4x4 Land Cruiser, professional guide, park fees, accommodation & meals as per itinerary. Pickup from Diani or Mombasa hotels.",
      "departures": "Daily departures, minimum 2 persons",
      "child_rates": "Children under 3 years: FREE | Children 3–12 years: 75% of adult rate"
    },
    "accommodations": {
          "economy": [
                "Sentrim Tsavo East Camp or similar",
                "Sentrim Amboseli Lodge or similar"
          ],
          "comfort": [
                "Ashnil Aruba Lodge or similar",
                "Amboseli Sopa Lodge or similar"
          ]
    }
  },

  "1-day-diani-marine-group-experience": {
    "pricing": {
      "group_tour": true,
      "min_price": 60,
      "currency": "USD",
      "note": "Per person rate. Minimum 7 travellers required. Hotel pickup and drop-off included.",
      "child_note": "Child rates (ages 3-11) available on request. Infants under 3 travel free."
    },
    "accommodations": null
  }
,

  // Kenya-Uganda Safari Pricing
  // Kenya-Rwanda Safari Pricing
  "7-day-kenya-uganda-gorilla-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 6490, "comfort": 7140, "luxury": 7790 },
            "2": { "economy": 4510, "comfort": 4960, "luxury": 5410 },
            "3": { "economy": 3950, "comfort": 4350, "luxury": 4740 },
            "4": { "economy": 3660, "comfort": 4030, "luxury": 4390 },
            "5": { "economy": 3480, "comfort": 3830, "luxury": 4180 },
            "6-7": { "economy": 3350, "comfort": 3690, "luxury": 4020 },
            "srs": { "economy": 120, "comfort": 140, "luxury": 160 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 7260, "comfort": 7990, "luxury": 8710 },
            "2": { "economy": 5050, "comfort": 5560, "luxury": 6060 },
            "3": { "economy": 4420, "comfort": 4860, "luxury": 5300 },
            "4": { "economy": 4090, "comfort": 4500, "luxury": 4910 },
            "5": { "economy": 3890, "comfort": 4280, "luxury": 4670 },
            "6-7": { "economy": 3740, "comfort": 4110, "luxury": 4490 },
            "srs": { "economy": 140, "comfort": 160, "luxury": 180 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 8580, "comfort": 9440, "luxury": 10300 },
            "2": { "economy": 5970, "comfort": 6570, "luxury": 7160 },
            "3": { "economy": 5230, "comfort": 5750, "luxury": 6270 },
            "4": { "economy": 4840, "comfort": 5320, "luxury": 5810 },
            "5": { "economy": 4600, "comfort": 5060, "luxury": 5520 },
            "6-7": { "economy": 4420, "comfort": 4860, "luxury": 5310 },
            "srs": { "economy": 170, "comfort": 190, "luxury": 210 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 5710, "comfort": 6280, "luxury": 6850 },
            "2": { "economy": 3970, "comfort": 4370, "luxury": 4760 },
            "3": { "economy": 3480, "comfort": 3830, "luxury": 4170 },
            "4": { "economy": 3220, "comfort": 3540, "luxury": 3860 },
            "5": { "economy": 3060, "comfort": 3370, "luxury": 3670 },
            "6-7": { "economy": 2940, "comfort": 3230, "luxury": 3530 },
            "srs": { "economy": 100, "comfort": 120, "luxury": 140 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Uganda gorilla trekking permit ($700), Nairobi-Entebbe flight, all park fees, full-board accommodation, and ground transport."
    },
    "accommodations": {
      "economy": [
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Bwindi: Buhoma Haven Lodge / Gorilla Valley Lodge"
      ],
      "comfort": [
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Bwindi: Ichumbi Gorilla Lodge / Buhoma Lodge"
      ],
      "luxury": [
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Bwindi: Mahogany Springs Lodge / Silverback Lodge"
      ]
    }
  },
  "10-day-kenya-uganda-wildlife-grand-circuit": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 9100, "comfort": 10010, "luxury": 10920 },
            "2": { "economy": 6330, "comfort": 6960, "luxury": 7590 },
            "3": { "economy": 5540, "comfort": 6090, "luxury": 6640 },
            "4": { "economy": 5130, "comfort": 5640, "luxury": 6150 },
            "5": { "economy": 4880, "comfort": 5370, "luxury": 5860 },
            "6-7": { "economy": 4690, "comfort": 5160, "luxury": 5630 },
            "srs": { "economy": 160, "comfort": 180, "luxury": 210 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 10190, "comfort": 11210, "luxury": 12230 },
            "2": { "economy": 7090, "comfort": 7800, "luxury": 8510 },
            "3": { "economy": 6210, "comfort": 6830, "luxury": 7450 },
            "4": { "economy": 5750, "comfort": 6330, "luxury": 6900 },
            "5": { "economy": 5470, "comfort": 6020, "luxury": 6560 },
            "6-7": { "economy": 5260, "comfort": 5790, "luxury": 6310 },
            "srs": { "economy": 180, "comfort": 200, "luxury": 230 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 12050, "comfort": 13260, "luxury": 14460 },
            "2": { "economy": 8380, "comfort": 9220, "luxury": 10060 },
            "3": { "economy": 7340, "comfort": 8070, "luxury": 8810 },
            "4": { "economy": 6790, "comfort": 7470, "luxury": 8150 },
            "5": { "economy": 6460, "comfort": 7100, "luxury": 7750 },
            "6-7": { "economy": 6200, "comfort": 6820, "luxury": 7440 },
            "srs": { "economy": 220, "comfort": 250, "luxury": 280 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 7990, "comfort": 8790, "luxury": 9590 },
            "2": { "economy": 5560, "comfort": 6120, "luxury": 6670 },
            "3": { "economy": 4870, "comfort": 5360, "luxury": 5840 },
            "4": { "economy": 4510, "comfort": 4960, "luxury": 5410 },
            "5": { "economy": 4290, "comfort": 4720, "luxury": 5150 },
            "6-7": { "economy": 4120, "comfort": 4530, "luxury": 4940 },
            "srs": { "economy": 140, "comfort": 160, "luxury": 180 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Uganda gorilla permit ($700), Nairobi-Entebbe flight, all park fees, full-board accommodation, and private 4x4 transport in both countries."
    },
    "accommodations": {
      "economy": [
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Lake Nakuru: Lake Nakuru Lodge",
        "Queen Elizabeth NP: Bush Lodge / Ihamba Safari Lodge",
        "Bwindi: Buhoma Haven Lodge / Gorilla Valley Lodge"
      ],
      "comfort": [
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Lake Nakuru: Flamingo Hill Tented Camp",
        "Queen Elizabeth NP: Katara Lodge / Ihamba Lakeside Safari Lodge",
        "Bwindi: Ichumbi Gorilla Lodge / Buhoma Lodge"
      ],
      "luxury": [
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Lake Nakuru: Sarova Lion Hill Game Lodge",
        "Queen Elizabeth NP: Mweya Safari Lodge / Kyambura Gorge Lodge",
        "Bwindi: Mahogany Springs Lodge / Silverback Lodge"
      ]
    }
  },
  "5-day-uganda-gorilla-express": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 4810, "comfort": 5290, "luxury": 5770 },
            "2": { "economy": 3350, "comfort": 3690, "luxury": 4020 },
            "3": { "economy": 2930, "comfort": 3220, "luxury": 3520 },
            "4": { "economy": 2710, "comfort": 2980, "luxury": 3260 },
            "5": { "economy": 2580, "comfort": 2840, "luxury": 3100 },
            "6-7": { "economy": 2480, "comfort": 2730, "luxury": 2980 },
            "srs": { "economy": 90, "comfort": 110, "luxury": 130 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 5390, "comfort": 5930, "luxury": 6460 },
            "2": { "economy": 3750, "comfort": 4130, "luxury": 4500 },
            "3": { "economy": 3280, "comfort": 3610, "luxury": 3940 },
            "4": { "economy": 3040, "comfort": 3340, "luxury": 3640 },
            "5": { "economy": 2890, "comfort": 3180, "luxury": 3470 },
            "6-7": { "economy": 2780, "comfort": 3060, "luxury": 3340 },
            "srs": { "economy": 110, "comfort": 130, "luxury": 150 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 6370, "comfort": 7010, "luxury": 7640 },
            "2": { "economy": 4430, "comfort": 4870, "luxury": 5310 },
            "3": { "economy": 3880, "comfort": 4270, "luxury": 4660 },
            "4": { "economy": 3590, "comfort": 3950, "luxury": 4310 },
            "5": { "economy": 3420, "comfort": 3760, "luxury": 4100 },
            "6-7": { "economy": 3280, "comfort": 3610, "luxury": 3940 },
            "srs": { "economy": 130, "comfort": 150, "luxury": 170 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 4240, "comfort": 4660, "luxury": 5080 },
            "2": { "economy": 2950, "comfort": 3250, "luxury": 3540 },
            "3": { "economy": 2580, "comfort": 2840, "luxury": 3100 },
            "4": { "economy": 2390, "comfort": 2630, "luxury": 2870 },
            "5": { "economy": 2270, "comfort": 2500, "luxury": 2730 },
            "6-7": { "economy": 2180, "comfort": 2400, "luxury": 2620 },
            "srs": { "economy": 80, "comfort": 100, "luxury": 110 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Uganda gorilla permit ($700), Nairobi-Entebbe flight, all park fees, full-board accommodation, and private ground transport."
    },
    "accommodations": {
      "economy": [
        "Bwindi: Buhoma Haven Lodge / Gorilla Valley Lodge",
        "Lake Bunyonyi: Bunyonyi Overland Resort"
      ],
      "comfort": [
        "Bwindi: Ichumbi Gorilla Lodge / Buhoma Lodge",
        "Lake Bunyonyi: Arcadia Cottages / BirdNest Resort"
      ],
      "luxury": [
        "Bwindi: Mahogany Springs Lodge / Silverback Lodge",
        "Lake Bunyonyi: BirdNest Resort \u2013 Luxury Suite / Hawk\u2019s Eye View Lodge"
      ]
    }
  },
  "14-day-ultimate-east-africa-explorer-kenya-uganda": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 13120, "comfort": 14430, "luxury": 15740 },
            "2": { "economy": 9120, "comfort": 10030, "luxury": 10950 },
            "3": { "economy": 7990, "comfort": 8790, "luxury": 9590 },
            "4": { "economy": 7400, "comfort": 8140, "luxury": 8880 },
            "5": { "economy": 7030, "comfort": 7730, "luxury": 8440 },
            "6-7": { "economy": 6760, "comfort": 7440, "luxury": 8110 },
            "srs": { "economy": 230, "comfort": 260, "luxury": 290 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 14690, "comfort": 16160, "luxury": 17620 },
            "2": { "economy": 10220, "comfort": 11240, "luxury": 12260 },
            "3": { "economy": 8950, "comfort": 9850, "luxury": 10740 },
            "4": { "economy": 8290, "comfort": 9120, "luxury": 9940 },
            "5": { "economy": 7880, "comfort": 8670, "luxury": 9460 },
            "6-7": { "economy": 7580, "comfort": 8340, "luxury": 9090 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 320 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 17370, "comfort": 19110, "luxury": 20840 },
            "2": { "economy": 12080, "comfort": 13290, "luxury": 14500 },
            "3": { "economy": 10590, "comfort": 11650, "luxury": 12700 },
            "4": { "economy": 9800, "comfort": 10780, "luxury": 11760 },
            "5": { "economy": 9320, "comfort": 10250, "luxury": 11180 },
            "6-7": { "economy": 8950, "comfort": 9850, "luxury": 10740 },
            "srs": { "economy": 310, "comfort": 340, "luxury": 380 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 11530, "comfort": 12680, "luxury": 13830 },
            "2": { "economy": 8020, "comfort": 8820, "luxury": 9620 },
            "3": { "economy": 7030, "comfort": 7730, "luxury": 8430 },
            "4": { "economy": 6510, "comfort": 7160, "luxury": 7810 },
            "5": { "economy": 6190, "comfort": 6810, "luxury": 7420 },
            "6-7": { "economy": 5950, "comfort": 6550, "luxury": 7140 },
            "srs": { "economy": 200, "comfort": 230, "luxury": 260 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Uganda gorilla permit ($700), chimpanzee tracking permit, Nairobi-Entebbe flight, all park fees, full-board accommodation, and private 4x4 transport."
    },
    "accommodations": {
      "economy": [
        "Amboseli: Amboseli Sopa Lodge",
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Kibale: Primates Lodge / Chimpanzee Forest Guesthouse",
        "Queen Elizabeth NP: Bush Lodge / Ihamba Safari Lodge",
        "Bwindi: Buhoma Haven Lodge / Gorilla Valley Lodge"
      ],
      "comfort": [
        "Amboseli: Sentrim Amboseli Camp / AA Amboseli Lodge",
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Kibale: Turaco Treetops Lodge / Kibale Forest Camp",
        "Queen Elizabeth NP: Katara Lodge / Ihamba Lakeside Safari Lodge",
        "Bwindi: Ichumbi Gorilla Lodge / Buhoma Lodge"
      ],
      "luxury": [
        "Amboseli: Amboseli Serena Lodge / Oltukai Lodge",
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Kibale: Kyaninga Lodge / Crater Safari Lodge",
        "Queen Elizabeth NP: Mweya Safari Lodge / Kyambura Gorge Lodge",
        "Bwindi: Mahogany Springs Lodge / Silverback Lodge"
      ]
    }
  },

// ═══════════════════════════════════════════════════════════
// KENYA-RWANDA SAFARIS
// ═══════════════════════════════════════════════════════════

  "7-day-kenya-rwanda-gorilla-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 7700, "comfort": 8470, "luxury": 9240 },
            "2": { "economy": 5350, "comfort": 5890, "luxury": 6420 },
            "3": { "economy": 4690, "comfort": 5160, "luxury": 5630 },
            "4": { "economy": 4340, "comfort": 4770, "luxury": 5210 },
            "5": { "economy": 4130, "comfort": 4540, "luxury": 4950 },
            "6-7": { "economy": 3970, "comfort": 4370, "luxury": 4760 },
            "srs": { "economy": 140, "comfort": 160, "luxury": 190 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 8620, "comfort": 9480, "luxury": 10340 },
            "2": { "economy": 5990, "comfort": 6590, "luxury": 7190 },
            "3": { "economy": 5250, "comfort": 5780, "luxury": 6300 },
            "4": { "economy": 4860, "comfort": 5350, "luxury": 5830 },
            "5": { "economy": 4620, "comfort": 5080, "luxury": 5540 },
            "6-7": { "economy": 4440, "comfort": 4880, "luxury": 5330 },
            "srs": { "economy": 160, "comfort": 180, "luxury": 210 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 10200, "comfort": 11220, "luxury": 12240 },
            "2": { "economy": 7090, "comfort": 7800, "luxury": 8510 },
            "3": { "economy": 6210, "comfort": 6830, "luxury": 7450 },
            "4": { "economy": 5750, "comfort": 6330, "luxury": 6900 },
            "5": { "economy": 5470, "comfort": 6020, "luxury": 6560 },
            "6-7": { "economy": 5260, "comfort": 5790, "luxury": 6310 },
            "srs": { "economy": 190, "comfort": 220, "luxury": 250 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 6780, "comfort": 7460, "luxury": 8130 },
            "2": { "economy": 4710, "comfort": 5180, "luxury": 5650 },
            "3": { "economy": 4130, "comfort": 4540, "luxury": 4950 },
            "4": { "economy": 3820, "comfort": 4200, "luxury": 4580 },
            "5": { "economy": 3630, "comfort": 3990, "luxury": 4350 },
            "6-7": { "economy": 3490, "comfort": 3840, "luxury": 4190 },
            "srs": { "economy": 120, "comfort": 140, "luxury": 160 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Rwanda gorilla trekking permit ($1,500), golden monkey permit, Nairobi-Kigali flight, all park fees, full-board accommodation, and ground transport."
    },
    "accommodations": {
      "economy": [
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Volcanoes NP: Le Bambou Gorilla Lodge / Hotel Muhabura"
      ],
      "comfort": [
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Volcanoes NP: Mountain Gorilla View Lodge / Da Vinci Gorilla Lodge"
      ],
      "luxury": [
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Volcanoes NP: Five Volcanoes Boutique Hotel / Sabyinyo Silverback Lodge"
      ]
    }
  },
  "9-day-kenya-rwanda-wildlife-culture": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 10640, "comfort": 11700, "luxury": 12770 },
            "2": { "economy": 7400, "comfort": 8140, "luxury": 8880 },
            "3": { "economy": 6480, "comfort": 7130, "luxury": 7780 },
            "4": { "economy": 6000, "comfort": 6600, "luxury": 7200 },
            "5": { "economy": 5710, "comfort": 6280, "luxury": 6850 },
            "6-7": { "economy": 5490, "comfort": 6040, "luxury": 6590 },
            "srs": { "economy": 180, "comfort": 210, "luxury": 240 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 11910, "comfort": 13100, "luxury": 14290 },
            "2": { "economy": 8280, "comfort": 9110, "luxury": 9940 },
            "3": { "economy": 7260, "comfort": 7990, "luxury": 8710 },
            "4": { "economy": 6720, "comfort": 7390, "luxury": 8060 },
            "5": { "economy": 6390, "comfort": 7030, "luxury": 7670 },
            "6-7": { "economy": 6140, "comfort": 6750, "luxury": 7370 },
            "srs": { "economy": 210, "comfort": 240, "luxury": 270 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 14100, "comfort": 15510, "luxury": 16920 },
            "2": { "economy": 9810, "comfort": 10790, "luxury": 11770 },
            "3": { "economy": 8590, "comfort": 9450, "luxury": 10310 },
            "4": { "economy": 7950, "comfort": 8750, "luxury": 9540 },
            "5": { "economy": 7560, "comfort": 8320, "luxury": 9070 },
            "6-7": { "economy": 7270, "comfort": 8000, "luxury": 8720 },
            "srs": { "economy": 260, "comfort": 290, "luxury": 320 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 9360, "comfort": 10300, "luxury": 11230 },
            "2": { "economy": 6510, "comfort": 7160, "luxury": 7810 },
            "3": { "economy": 5700, "comfort": 6270, "luxury": 6840 },
            "4": { "economy": 5280, "comfort": 5810, "luxury": 6330 },
            "5": { "economy": 5020, "comfort": 5520, "luxury": 6020 },
            "6-7": { "economy": 4830, "comfort": 5310, "luxury": 5790 },
            "srs": { "economy": 160, "comfort": 180, "luxury": 200 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Rwanda gorilla permit ($1,500), Nairobi-Kigali flight, Akagera park fees, Kigali city tour, full-board accommodation, and private 4x4 transport."
    },
    "accommodations": {
      "economy": [
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Kigali: Hotel des Mille Collines",
        "Akagera NP: Akagera Game Lodge",
        "Volcanoes NP: Le Bambou Gorilla Lodge / Hotel Muhabura"
      ],
      "comfort": [
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Kigali: Kigali Marriott Hotel",
        "Akagera NP: Ruzizi Tented Lodge / Karenge Bush Camp",
        "Volcanoes NP: Mountain Gorilla View Lodge / Da Vinci Gorilla Lodge"
      ],
      "luxury": [
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Kigali: The Retreat by Heaven",
        "Akagera NP: Magashi Camp / Wilderness Magashi",
        "Volcanoes NP: Five Volcanoes Boutique Hotel / Sabyinyo Silverback Lodge"
      ]
    }
  },
  "5-day-rwanda-gorilla-golden-monkey": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 6210, "comfort": 6830, "luxury": 7450 },
            "2": { "economy": 4320, "comfort": 4750, "luxury": 5180 },
            "3": { "economy": 3780, "comfort": 4160, "luxury": 4540 },
            "4": { "economy": 3500, "comfort": 3850, "luxury": 4200 },
            "5": { "economy": 3330, "comfort": 3660, "luxury": 3990 },
            "6-7": { "economy": 3200, "comfort": 3520, "luxury": 3840 },
            "srs": { "economy": 110, "comfort": 130, "luxury": 160 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 6950, "comfort": 7650, "luxury": 8340 },
            "2": { "economy": 4830, "comfort": 5310, "luxury": 5800 },
            "3": { "economy": 4230, "comfort": 4650, "luxury": 5080 },
            "4": { "economy": 3920, "comfort": 4310, "luxury": 4700 },
            "5": { "economy": 3730, "comfort": 4100, "luxury": 4470 },
            "6-7": { "economy": 3580, "comfort": 3940, "luxury": 4300 },
            "srs": { "economy": 130, "comfort": 150, "luxury": 180 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 8220, "comfort": 9040, "luxury": 9860 },
            "2": { "economy": 5720, "comfort": 6290, "luxury": 6860 },
            "3": { "economy": 5010, "comfort": 5510, "luxury": 6010 },
            "4": { "economy": 4640, "comfort": 5100, "luxury": 5560 },
            "5": { "economy": 4410, "comfort": 4850, "luxury": 5290 },
            "6-7": { "economy": 4240, "comfort": 4660, "luxury": 5080 },
            "srs": { "economy": 150, "comfort": 180, "luxury": 210 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 5460, "comfort": 6010, "luxury": 6550 },
            "2": { "economy": 3800, "comfort": 4180, "luxury": 4560 },
            "3": { "economy": 3330, "comfort": 3660, "luxury": 3990 },
            "4": { "economy": 3080, "comfort": 3390, "luxury": 3700 },
            "5": { "economy": 2930, "comfort": 3220, "luxury": 3510 },
            "6-7": { "economy": 2820, "comfort": 3100, "luxury": 3380 },
            "srs": { "economy": 90, "comfort": 110, "luxury": 130 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Rwanda gorilla trekking permit ($1,500), golden monkey permit ($100), Nairobi-Kigali flight, all park fees, full-board accommodation, and ground transport."
    },
    "accommodations": {
      "economy": [
        "Volcanoes NP: Le Bambou Gorilla Lodge / Hotel Muhabura"
      ],
      "comfort": [
        "Volcanoes NP: Mountain Gorilla View Lodge / Da Vinci Gorilla Lodge"
      ],
      "luxury": [
        "Volcanoes NP: Five Volcanoes Boutique Hotel / Sabyinyo Silverback Lodge / Bisate Lodge"
      ]
    }
  },
  "12-day-grand-kenya-rwanda-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": { "economy": 14430, "comfort": 15870, "luxury": 17310 },
            "2": { "economy": 10030, "comfort": 11030, "luxury": 12040 },
            "3": { "economy": 8790, "comfort": 9670, "luxury": 10550 },
            "4": { "economy": 8140, "comfort": 8950, "luxury": 9770 },
            "5": { "economy": 7740, "comfort": 8510, "luxury": 9280 },
            "6-7": { "economy": 7440, "comfort": 8180, "luxury": 8930 },
            "srs": { "economy": 250, "comfort": 280, "luxury": 320 }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": { "economy": 16160, "comfort": 17780, "luxury": 19390 },
            "2": { "economy": 11240, "comfort": 12360, "luxury": 13490 },
            "3": { "economy": 9840, "comfort": 10820, "luxury": 11810 },
            "4": { "economy": 9110, "comfort": 10020, "luxury": 10930 },
            "5": { "economy": 8670, "comfort": 9540, "luxury": 10400 },
            "6-7": { "economy": 8330, "comfort": 9160, "luxury": 9990 },
            "srs": { "economy": 280, "comfort": 320, "luxury": 360 }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": { "economy": 19110, "comfort": 21020, "luxury": 22930 },
            "2": { "economy": 13290, "comfort": 14620, "luxury": 15950 },
            "3": { "economy": 11640, "comfort": 12800, "luxury": 13970 },
            "4": { "economy": 10780, "comfort": 11860, "luxury": 12930 },
            "5": { "economy": 10250, "comfort": 11280, "luxury": 12300 },
            "6-7": { "economy": 9850, "comfort": 10840, "luxury": 11820 },
            "srs": { "economy": 340, "comfort": 380, "luxury": 420 }
          }
        },
        "low": {
          "dates": "1st Apr \u2013 31st May",
          "rates": {
            "1": { "economy": 12680, "comfort": 13950, "luxury": 15220 },
            "2": { "economy": 8820, "comfort": 9700, "luxury": 10580 },
            "3": { "economy": 7730, "comfort": 8500, "luxury": 9270 },
            "4": { "economy": 7160, "comfort": 7880, "luxury": 8590 },
            "5": { "economy": 6810, "comfort": 7490, "luxury": 8170 },
            "6-7": { "economy": 6540, "comfort": 7190, "luxury": 7850 },
            "srs": { "economy": 220, "comfort": 250, "luxury": 280 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Includes Rwanda gorilla permit ($1,500), chimpanzee tracking permit, Nairobi-Kigali flight, all park fees, full-board accommodation, and private 4x4 transport in both countries."
    },
    "accommodations": {
      "economy": [
        "Lake Nakuru: Lake Nakuru Lodge",
        "Masai Mara: Mara Chui Camp / Elangata Olerai Camp",
        "Akagera NP: Akagera Game Lodge",
        "Nyungwe: Nyungwe Top View Hill Hotel",
        "Volcanoes NP: Le Bambou Gorilla Lodge / Hotel Muhabura"
      ],
      "comfort": [
        "Lake Nakuru: Flamingo Hill Tented Camp",
        "Masai Mara: Mara Leisure Camp / Sentrim Mara Camp",
        "Akagera NP: Ruzizi Tented Lodge / Karenge Bush Camp",
        "Nyungwe: One&Only Nyungwe House / Nyungwe Forest Lodge",
        "Volcanoes NP: Mountain Gorilla View Lodge / Da Vinci Gorilla Lodge"
      ],
      "luxury": [
        "Lake Nakuru: Sarova Lion Hill Game Lodge",
        "Masai Mara: Mara Serena Safari Lodge / Sarova Mara Camp",
        "Akagera NP: Magashi Camp / Wilderness Magashi",
        "Nyungwe: One&Only Nyungwe House",
        "Volcanoes NP: Five Volcanoes Boutique Hotel / Sabyinyo Silverback Lodge"
      ]
    }
  },
  "9-day-kenya-tanzania-safari-highlights": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 3740, "comfort": 4950, "luxury": 7150 },
            "2": { "economy": 2530, "comfort": 3410, "luxury": 4950 },
            "3": { "economy": 2310, "comfort": 3080, "luxury": 4510 },
            "4": { "economy": 2200, "comfort": 2860, "luxury": 4180 },
            "5": { "economy": 2090, "comfort": 2750, "luxury": 3960 },
            "6": { "economy": 1980, "comfort": 2640, "luxury": 3850 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 4290, "comfort": 5720, "luxury": 8250 },
            "2": { "economy": 2920, "comfort": 3960, "luxury": 5720 },
            "3": { "economy": 2640, "comfort": 3520, "luxury": 5170 },
            "4": { "economy": 2530, "comfort": 3300, "luxury": 4840 },
            "5": { "economy": 2420, "comfort": 3190, "luxury": 4620 },
            "6": { "economy": 2310, "comfort": 3080, "luxury": 4400 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 3190, "comfort": 4180, "luxury": 6050 },
            "2": { "economy": 2200, "comfort": 2860, "luxury": 4180 },
            "3": { "economy": 1980, "comfort": 2640, "luxury": 3850 },
            "4": { "economy": 1870, "comfort": 2530, "luxury": 3630 },
            "5": { "economy": 1760, "comfort": 2420, "luxury": 3410 },
            "6": { "economy": 1650, "comfort": 2310, "luxury": 3300 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Cross-border transfer included"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "8-day-kenya-tanzania-migration-special": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 3520, "comfort": 4620, "luxury": 6820 },
            "2": { "economy": 2420, "comfort": 3190, "luxury": 4730 },
            "3": { "economy": 2200, "comfort": 2860, "luxury": 4290 },
            "4": { "economy": 2090, "comfort": 2750, "luxury": 3960 },
            "5": { "economy": 1980, "comfort": 2640, "luxury": 3740 },
            "6": { "economy": 1870, "comfort": 2530, "luxury": 3630 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 4070, "comfort": 5500, "luxury": 7920 },
            "2": { "economy": 2750, "comfort": 3740, "luxury": 5500 },
            "3": { "economy": 2530, "comfort": 3410, "luxury": 4950 },
            "4": { "economy": 2420, "comfort": 3190, "luxury": 4620 },
            "5": { "economy": 2310, "comfort": 3080, "luxury": 4400 },
            "6": { "economy": 2200, "comfort": 2920, "luxury": 4180 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 2970, "comfort": 3960, "luxury": 5720 },
            "2": { "economy": 2090, "comfort": 2750, "luxury": 3960 },
            "3": { "economy": 1870, "comfort": 2530, "luxury": 3630 },
            "4": { "economy": 1760, "comfort": 2420, "luxury": 3410 },
            "5": { "economy": 1650, "comfort": 2310, "luxury": 3190 },
            "6": { "economy": 1540, "comfort": 2200, "luxury": 3080 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Migration viewing guaranteed Jul-Oct. Mara-Serengeti border transfer included"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "10-day-kenya-tanzania-family-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 3960, "comfort": 5280, "luxury": 7700 },
            "2": { "economy": 2750, "comfort": 3630, "luxury": 5280 },
            "3": { "economy": 2530, "comfort": 3300, "luxury": 4840 },
            "4": { "economy": 2310, "comfort": 3080, "luxury": 4510 },
            "5": { "economy": 2200, "comfort": 2860, "luxury": 4180 },
            "6": { "economy": 2090, "comfort": 2750, "luxury": 3960 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 4620, "comfort": 6160, "luxury": 8910 },
            "2": { "economy": 3190, "comfort": 4180, "luxury": 6160 },
            "3": { "economy": 2860, "comfort": 3850, "luxury": 5610 },
            "4": { "economy": 2640, "comfort": 3520, "luxury": 5170 },
            "5": { "economy": 2530, "comfort": 3300, "luxury": 4950 },
            "6": { "economy": 2420, "comfort": 3190, "luxury": 4730 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 3410, "comfort": 4510, "luxury": 6490 },
            "2": { "economy": 2310, "comfort": 3080, "luxury": 4510 },
            "3": { "economy": 2090, "comfort": 2750, "luxury": 4070 },
            "4": { "economy": 1980, "comfort": 2640, "luxury": 3850 },
            "5": { "economy": 1870, "comfort": 2530, "luxury": 3630 },
            "6": { "economy": 1760, "comfort": 2420, "luxury": 3410 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Child-friendly lodges selected. Children under 5 stay free at select properties"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "12-day-kenya-tanzania-luxury-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 5940, "comfort": 7700, "luxury": 11550 },
            "2": { "economy": 4070, "comfort": 5280, "luxury": 7920 },
            "3": { "economy": 3630, "comfort": 4840, "luxury": 7260 },
            "4": { "economy": 3410, "comfort": 4510, "luxury": 6820 },
            "5": { "economy": 3190, "comfort": 4290, "luxury": 6490 },
            "6": { "economy": 3080, "comfort": 4070, "luxury": 6160 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 6820, "comfort": 8910, "luxury": 13420 },
            "2": { "economy": 4730, "comfort": 6160, "luxury": 9240 },
            "3": { "economy": 4180, "comfort": 5610, "luxury": 8360 },
            "4": { "economy": 3960, "comfort": 5280, "luxury": 7920 },
            "5": { "economy": 3740, "comfort": 4950, "luxury": 7480 },
            "6": { "economy": 3520, "comfort": 4730, "luxury": 7150 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 5060, "comfort": 6600, "luxury": 9900 },
            "2": { "economy": 3520, "comfort": 4510, "luxury": 6820 },
            "3": { "economy": 3080, "comfort": 4070, "luxury": 6160 },
            "4": { "economy": 2860, "comfort": 3850, "luxury": 5830 },
            "5": { "economy": 2750, "comfort": 3630, "luxury": 5500 },
            "6": { "economy": 2640, "comfort": 3520, "luxury": 5280 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Five-star luxury lodges & tented camps. Internal flights included where applicable. Private vehicle throughout"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "10-day-kenya-tanzania-photography-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 4180, "comfort": 5500, "luxury": 8030 },
            "2": { "economy": 2860, "comfort": 3850, "luxury": 5500 },
            "3": { "economy": 2640, "comfort": 3520, "luxury": 5060 },
            "4": { "economy": 2420, "comfort": 3190, "luxury": 4730 },
            "5": { "economy": 2310, "comfort": 3080, "luxury": 4510 },
            "6": { "economy": 2200, "comfort": 2920, "luxury": 4290 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 4840, "comfort": 6380, "luxury": 9240 },
            "2": { "economy": 3300, "comfort": 4400, "luxury": 6380 },
            "3": { "economy": 2970, "comfort": 4070, "luxury": 5830 },
            "4": { "economy": 2750, "comfort": 3740, "luxury": 5500 },
            "5": { "economy": 2640, "comfort": 3520, "luxury": 5170 },
            "6": { "economy": 2530, "comfort": 3410, "luxury": 4950 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 3520, "comfort": 4730, "luxury": 6820 },
            "2": { "economy": 2420, "comfort": 3300, "luxury": 4730 },
            "3": { "economy": 2200, "comfort": 2970, "luxury": 4290 },
            "4": { "economy": 2090, "comfort": 2750, "luxury": 3960 },
            "5": { "economy": 1980, "comfort": 2640, "luxury": 3740 },
            "6": { "economy": 1870, "comfort": 2530, "luxury": 3630 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Photography-optimized vehicles with dust covers. Extended game drives for golden hour shooting"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "9-day-kenya-tanzania-honeymoon-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 3850, "comfort": 5060, "luxury": 7480 },
            "2": { "economy": 2640, "comfort": 3520, "luxury": 5170 },
            "3": { "economy": 2420, "comfort": 3190, "luxury": 4730 },
            "4": { "economy": 2310, "comfort": 2970, "luxury": 4400 },
            "5": { "economy": 2200, "comfort": 2860, "luxury": 4180 },
            "6": { "economy": 2090, "comfort": 2750, "luxury": 3960 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 4400, "comfort": 5830, "luxury": 8580 },
            "2": { "economy": 3080, "comfort": 4070, "luxury": 5940 },
            "3": { "economy": 2750, "comfort": 3630, "luxury": 5390 },
            "4": { "economy": 2640, "comfort": 3410, "luxury": 5060 },
            "5": { "economy": 2530, "comfort": 3300, "luxury": 4840 },
            "6": { "economy": 2420, "comfort": 3190, "luxury": 4620 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 3300, "comfort": 4290, "luxury": 6380 },
            "2": { "economy": 2310, "comfort": 2970, "luxury": 4400 },
            "3": { "economy": 2090, "comfort": 2750, "luxury": 3960 },
            "4": { "economy": 1980, "comfort": 2530, "luxury": 3740 },
            "5": { "economy": 1870, "comfort": 2420, "luxury": 3520 },
            "6": { "economy": 1760, "comfort": 2310, "luxury": 3410 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Romantic lodge upgrades included. Complimentary bush dinner for couples"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "7-day-kenya-tanzania-budget-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 2640, "comfort": 3520, "luxury": 5170 },
            "2": { "economy": 1870, "comfort": 2420, "luxury": 3520 },
            "3": { "economy": 1650, "comfort": 2200, "luxury": 3190 },
            "4": { "economy": 1540, "comfort": 2090, "luxury": 2970 },
            "5": { "economy": 1430, "comfort": 1980, "luxury": 2860 },
            "6": { "economy": 1320, "comfort": 1870, "luxury": 2750 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 3080, "comfort": 4070, "luxury": 5940 },
            "2": { "economy": 2090, "comfort": 2860, "luxury": 4070 },
            "3": { "economy": 1870, "comfort": 2530, "luxury": 3630 },
            "4": { "economy": 1760, "comfort": 2420, "luxury": 3410 },
            "5": { "economy": 1650, "comfort": 2310, "luxury": 3300 },
            "6": { "economy": 1540, "comfort": 2200, "luxury": 3080 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 2200, "comfort": 2970, "luxury": 4290 },
            "2": { "economy": 1540, "comfort": 2090, "luxury": 2970 },
            "3": { "economy": 1430, "comfort": 1870, "luxury": 2750 },
            "4": { "economy": 1320, "comfort": 1760, "luxury": 2530 },
            "5": { "economy": 1210, "comfort": 1650, "luxury": 2420 },
            "6": { "economy": 1100, "comfort": 1540, "luxury": 2310 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Budget-friendly accommodations with great value. Shared vehicle option available for further savings"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "15-day-kenya-tanzania-zanzibar-grand-tour": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
          "rates": {
            "1": { "economy": 6380, "comfort": 8470, "luxury": 12430 },
            "2": { "economy": 4400, "comfort": 5830, "luxury": 8580 },
            "3": { "economy": 3960, "comfort": 5280, "luxury": 7810 },
            "4": { "economy": 3740, "comfort": 4950, "luxury": 7260 },
            "5": { "economy": 3520, "comfort": 4730, "luxury": 6930 },
            "6": { "economy": 3300, "comfort": 4510, "luxury": 6600 }
          }
        },
        "peak": {
          "dates": "1st Jul – 31st Oct & 20th Dec – 2nd Jan",
          "rates": {
            "1": { "economy": 7370, "comfort": 9790, "luxury": 14410 },
            "2": { "economy": 5060, "comfort": 6820, "luxury": 9900 },
            "3": { "economy": 4510, "comfort": 6160, "luxury": 8910 },
            "4": { "economy": 4290, "comfort": 5720, "luxury": 8360 },
            "5": { "economy": 4070, "comfort": 5500, "luxury": 7920 },
            "6": { "economy": 3850, "comfort": 5170, "luxury": 7590 }
          }
        },
        "low": {
          "dates": "1st Apr – 31st May & 1st Nov – 19th Dec",
          "rates": {
            "1": { "economy": 5500, "comfort": 7260, "luxury": 10560 },
            "2": { "economy": 3740, "comfort": 4950, "luxury": 7260 },
            "3": { "economy": 3410, "comfort": 4510, "luxury": 6600 },
            "4": { "economy": 3190, "comfort": 4290, "luxury": 6270 },
            "5": { "economy": 2970, "comfort": 4070, "luxury": 5940 },
            "6": { "economy": 2860, "comfort": 3850, "luxury": 5610 }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
      "currency": "USD",
      "note": "Prices per person sharing in double/twin room. Tanzania park fees included. Ngorongoro crater fee included. Zanzibar transfers & domestic flight included. 3 nights Zanzibar beach resort included. Stone Town tour included"
    },
    "accommodations": {
      "economy": ["Safari Camp / Tented Camp"],
      "comfort": ["Mid-range Lodge / Tented Lodge"],
      "luxury": ["Luxury Lodge / Premium Tented Camp"]
    }
  },
  "4-day-masai-mara-flight-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2100,
              "comfort": 2310,
              "luxury": 2520
            },
            "2": {
              "economy": 1450,
              "comfort": 1595,
              "luxury": 1740
            },
            "3": {
              "economy": 1280,
              "comfort": 1408,
              "luxury": 1536
            },
            "4": {
              "economy": 1200,
              "comfort": 1320,
              "luxury": 1440
            },
            "5": {
              "economy": 1150,
              "comfort": 1265,
              "luxury": 1380
            },
            "6-7": {
              "economy": 1120,
              "comfort": 1232,
              "luxury": 1344
            },
            "srs": {
              "economy": 150,
              "comfort": 165,
              "luxury": 180
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2415,
              "comfort": 2656,
              "luxury": 2898
            },
            "2": {
              "economy": 1667,
              "comfort": 1833,
              "luxury": 2000
            },
            "3": {
              "economy": 1472,
              "comfort": 1619,
              "luxury": 1766
            },
            "4": {
              "economy": 1380,
              "comfort": 1518,
              "luxury": 1656
            },
            "5": {
              "economy": 1322,
              "comfort": 1454,
              "luxury": 1586
            },
            "6-7": {
              "economy": 1288,
              "comfort": 1416,
              "luxury": 1545
            },
            "srs": {
              "economy": 172,
              "comfort": 189,
              "luxury": 206
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 2835,
              "comfort": 3118,
              "luxury": 3402
            },
            "2": {
              "economy": 1957,
              "comfort": 2152,
              "luxury": 2348
            },
            "3": {
              "economy": 1728,
              "comfort": 1900,
              "luxury": 2073
            },
            "4": {
              "economy": 1620,
              "comfort": 1782,
              "luxury": 1944
            },
            "5": {
              "economy": 1552,
              "comfort": 1707,
              "luxury": 1862
            },
            "6-7": {
              "economy": 1512,
              "comfort": 1663,
              "luxury": 1814
            },
            "srs": {
              "economy": 202,
              "comfort": 222,
              "luxury": 242
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "5-day-mara-amboseli-flight-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2650,
              "comfort": 2915,
              "luxury": 3180
            },
            "2": {
              "economy": 1850,
              "comfort": 2035,
              "luxury": 2220
            },
            "3": {
              "economy": 1630,
              "comfort": 1793,
              "luxury": 1956
            },
            "4": {
              "economy": 1530,
              "comfort": 1683,
              "luxury": 1836
            },
            "5": {
              "economy": 1470,
              "comfort": 1617,
              "luxury": 1764
            },
            "6-7": {
              "economy": 1420,
              "comfort": 1562,
              "luxury": 1704
            },
            "srs": {
              "economy": 170,
              "comfort": 187,
              "luxury": 204
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3047,
              "comfort": 3351,
              "luxury": 3656
            },
            "2": {
              "economy": 2127,
              "comfort": 2339,
              "luxury": 2552
            },
            "3": {
              "economy": 1874,
              "comfort": 2061,
              "luxury": 2248
            },
            "4": {
              "economy": 1759,
              "comfort": 1934,
              "luxury": 2110
            },
            "5": {
              "economy": 1690,
              "comfort": 1859,
              "luxury": 2028
            },
            "6-7": {
              "economy": 1632,
              "comfort": 1795,
              "luxury": 1958
            },
            "srs": {
              "economy": 195,
              "comfort": 214,
              "luxury": 234
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3577,
              "comfort": 3934,
              "luxury": 4292
            },
            "2": {
              "economy": 2497,
              "comfort": 2746,
              "luxury": 2996
            },
            "3": {
              "economy": 2200,
              "comfort": 2420,
              "luxury": 2640
            },
            "4": {
              "economy": 2065,
              "comfort": 2271,
              "luxury": 2478
            },
            "5": {
              "economy": 1984,
              "comfort": 2182,
              "luxury": 2380
            },
            "6-7": {
              "economy": 1917,
              "comfort": 2108,
              "luxury": 2300
            },
            "srs": {
              "economy": 229,
              "comfort": 251,
              "luxury": 274
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "7-day-kenya-luxury-flight-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3800,
              "comfort": 4180,
              "luxury": 4560
            },
            "2": {
              "economy": 2650,
              "comfort": 2915,
              "luxury": 3180
            },
            "3": {
              "economy": 2350,
              "comfort": 2585,
              "luxury": 2820
            },
            "4": {
              "economy": 2200,
              "comfort": 2420,
              "luxury": 2640
            },
            "5": {
              "economy": 2100,
              "comfort": 2310,
              "luxury": 2520
            },
            "6-7": {
              "economy": 2050,
              "comfort": 2255,
              "luxury": 2460
            },
            "srs": {
              "economy": 220,
              "comfort": 242,
              "luxury": 264
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 4370,
              "comfort": 4807,
              "luxury": 5244
            },
            "2": {
              "economy": 3047,
              "comfort": 3351,
              "luxury": 3656
            },
            "3": {
              "economy": 2702,
              "comfort": 2972,
              "luxury": 3242
            },
            "4": {
              "economy": 2530,
              "comfort": 2783,
              "luxury": 3036
            },
            "5": {
              "economy": 2415,
              "comfort": 2656,
              "luxury": 2898
            },
            "6-7": {
              "economy": 2357,
              "comfort": 2592,
              "luxury": 2828
            },
            "srs": {
              "economy": 252,
              "comfort": 277,
              "luxury": 302
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 5130,
              "comfort": 5643,
              "luxury": 6156
            },
            "2": {
              "economy": 3577,
              "comfort": 3934,
              "luxury": 4292
            },
            "3": {
              "economy": 3172,
              "comfort": 3489,
              "luxury": 3806
            },
            "4": {
              "economy": 2970,
              "comfort": 3267,
              "luxury": 3564
            },
            "5": {
              "economy": 2835,
              "comfort": 3118,
              "luxury": 3402
            },
            "6-7": {
              "economy": 2767,
              "comfort": 3043,
              "luxury": 3320
            },
            "srs": {
              "economy": 297,
              "comfort": 326,
              "luxury": 356
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "4-day-lamu-beach-and-bush-flight-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2350,
              "comfort": 2585,
              "luxury": 2820
            },
            "2": {
              "economy": 1650,
              "comfort": 1815,
              "luxury": 1980
            },
            "3": {
              "economy": 1450,
              "comfort": 1595,
              "luxury": 1740
            },
            "4": {
              "economy": 1360,
              "comfort": 1496,
              "luxury": 1632
            },
            "5": {
              "economy": 1300,
              "comfort": 1430,
              "luxury": 1560
            },
            "6-7": {
              "economy": 1260,
              "comfort": 1386,
              "luxury": 1512
            },
            "srs": {
              "economy": 160,
              "comfort": 176,
              "luxury": 192
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 2702,
              "comfort": 2972,
              "luxury": 3242
            },
            "2": {
              "economy": 1897,
              "comfort": 2086,
              "luxury": 2276
            },
            "3": {
              "economy": 1667,
              "comfort": 1833,
              "luxury": 2000
            },
            "4": {
              "economy": 1563,
              "comfort": 1719,
              "luxury": 1875
            },
            "5": {
              "economy": 1494,
              "comfort": 1643,
              "luxury": 1792
            },
            "6-7": {
              "economy": 1449,
              "comfort": 1593,
              "luxury": 1738
            },
            "srs": {
              "economy": 184,
              "comfort": 202,
              "luxury": 220
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3172,
              "comfort": 3489,
              "luxury": 3806
            },
            "2": {
              "economy": 2227,
              "comfort": 2449,
              "luxury": 2672
            },
            "3": {
              "economy": 1957,
              "comfort": 2152,
              "luxury": 2348
            },
            "4": {
              "economy": 1836,
              "comfort": 2019,
              "luxury": 2203
            },
            "5": {
              "economy": 1755,
              "comfort": 1930,
              "luxury": 2106
            },
            "6-7": {
              "economy": 1701,
              "comfort": 1871,
              "luxury": 2041
            },
            "srs": {
              "economy": 216,
              "comfort": 237,
              "luxury": 259
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "4-day-laikipia-conservancy-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2800,
              "comfort": 3080,
              "luxury": 3360
            },
            "2": {
              "economy": 1950,
              "comfort": 2145,
              "luxury": 2340
            },
            "3": {
              "economy": 1720,
              "comfort": 1892,
              "luxury": 2064
            },
            "4": {
              "economy": 1610,
              "comfort": 1771,
              "luxury": 1932
            },
            "5": {
              "economy": 1540,
              "comfort": 1694,
              "luxury": 1848
            },
            "6-7": {
              "economy": 1500,
              "comfort": 1650,
              "luxury": 1800
            },
            "srs": {
              "economy": 180,
              "comfort": 198,
              "luxury": 216
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3219,
              "comfort": 3540,
              "luxury": 3862
            },
            "2": {
              "economy": 2242,
              "comfort": 2466,
              "luxury": 2690
            },
            "3": {
              "economy": 1977,
              "comfort": 2174,
              "luxury": 2372
            },
            "4": {
              "economy": 1851,
              "comfort": 2036,
              "luxury": 2221
            },
            "5": {
              "economy": 1770,
              "comfort": 1947,
              "luxury": 2124
            },
            "6-7": {
              "economy": 1724,
              "comfort": 1896,
              "luxury": 2068
            },
            "srs": {
              "economy": 206,
              "comfort": 226,
              "luxury": 247
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3780,
              "comfort": 4158,
              "luxury": 4536
            },
            "2": {
              "economy": 2632,
              "comfort": 2895,
              "luxury": 3158
            },
            "3": {
              "economy": 2322,
              "comfort": 2554,
              "luxury": 2786
            },
            "4": {
              "economy": 2173,
              "comfort": 2390,
              "luxury": 2607
            },
            "5": {
              "economy": 2079,
              "comfort": 2286,
              "luxury": 2494
            },
            "6-7": {
              "economy": 2025,
              "comfort": 2227,
              "luxury": 2430
            },
            "srs": {
              "economy": 243,
              "comfort": 267,
              "luxury": 291
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "5-day-masai-mara-migration-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3100,
              "comfort": 3410,
              "luxury": 3720
            },
            "2": {
              "economy": 2150,
              "comfort": 2365,
              "luxury": 2580
            },
            "3": {
              "economy": 1900,
              "comfort": 2090,
              "luxury": 2280
            },
            "4": {
              "economy": 1780,
              "comfort": 1958,
              "luxury": 2136
            },
            "5": {
              "economy": 1700,
              "comfort": 1870,
              "luxury": 2040
            },
            "6-7": {
              "economy": 1650,
              "comfort": 1815,
              "luxury": 1980
            },
            "srs": {
              "economy": 190,
              "comfort": 209,
              "luxury": 228
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3564,
              "comfort": 3920,
              "luxury": 4276
            },
            "2": {
              "economy": 2472,
              "comfort": 2719,
              "luxury": 2966
            },
            "3": {
              "economy": 2185,
              "comfort": 2403,
              "luxury": 2622
            },
            "4": {
              "economy": 2046,
              "comfort": 2250,
              "luxury": 2455
            },
            "5": {
              "economy": 1954,
              "comfort": 2149,
              "luxury": 2344
            },
            "6-7": {
              "economy": 1897,
              "comfort": 2086,
              "luxury": 2276
            },
            "srs": {
              "economy": 218,
              "comfort": 239,
              "luxury": 261
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4185,
              "comfort": 4603,
              "luxury": 5022
            },
            "2": {
              "economy": 2902,
              "comfort": 3192,
              "luxury": 3482
            },
            "3": {
              "economy": 2565,
              "comfort": 2821,
              "luxury": 3078
            },
            "4": {
              "economy": 2403,
              "comfort": 2643,
              "luxury": 2883
            },
            "5": {
              "economy": 2295,
              "comfort": 2524,
              "luxury": 2754
            },
            "6-7": {
              "economy": 2227,
              "comfort": 2449,
              "luxury": 2672
            },
            "srs": {
              "economy": 256,
              "comfort": 281,
              "luxury": 307
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "5-day-amboseli-tsavo-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 2750,
              "comfort": 3025,
              "luxury": 3300
            },
            "2": {
              "economy": 1920,
              "comfort": 2112,
              "luxury": 2304
            },
            "3": {
              "economy": 1690,
              "comfort": 1859,
              "luxury": 2028
            },
            "4": {
              "economy": 1590,
              "comfort": 1749,
              "luxury": 1908
            },
            "5": {
              "economy": 1520,
              "comfort": 1672,
              "luxury": 1824
            },
            "6-7": {
              "economy": 1470,
              "comfort": 1617,
              "luxury": 1764
            },
            "srs": {
              "economy": 175,
              "comfort": 192,
              "luxury": 210
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 3162,
              "comfort": 3478,
              "luxury": 3794
            },
            "2": {
              "economy": 2208,
              "comfort": 2428,
              "luxury": 2649
            },
            "3": {
              "economy": 1943,
              "comfort": 2137,
              "luxury": 2331
            },
            "4": {
              "economy": 1828,
              "comfort": 2010,
              "luxury": 2193
            },
            "5": {
              "economy": 1747,
              "comfort": 1921,
              "luxury": 2096
            },
            "6-7": {
              "economy": 1690,
              "comfort": 1859,
              "luxury": 2028
            },
            "srs": {
              "economy": 201,
              "comfort": 221,
              "luxury": 241
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 3712,
              "comfort": 4083,
              "luxury": 4454
            },
            "2": {
              "economy": 2592,
              "comfort": 2851,
              "luxury": 3110
            },
            "3": {
              "economy": 2281,
              "comfort": 2509,
              "luxury": 2737
            },
            "4": {
              "economy": 2146,
              "comfort": 2360,
              "luxury": 2575
            },
            "5": {
              "economy": 2052,
              "comfort": 2257,
              "luxury": 2462
            },
            "6-7": {
              "economy": 1984,
              "comfort": 2182,
              "luxury": 2380
            },
            "srs": {
              "economy": 236,
              "comfort": 259,
              "luxury": 283
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "6-day-samburu-mara-grand-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3500,
              "comfort": 3850,
              "luxury": 4200
            },
            "2": {
              "economy": 2450,
              "comfort": 2695,
              "luxury": 2940
            },
            "3": {
              "economy": 2160,
              "comfort": 2376,
              "luxury": 2592
            },
            "4": {
              "economy": 2030,
              "comfort": 2233,
              "luxury": 2436
            },
            "5": {
              "economy": 1940,
              "comfort": 2134,
              "luxury": 2328
            },
            "6-7": {
              "economy": 1880,
              "comfort": 2068,
              "luxury": 2256
            },
            "srs": {
              "economy": 200,
              "comfort": 220,
              "luxury": 240
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 4024,
              "comfort": 4426,
              "luxury": 4828
            },
            "2": {
              "economy": 2817,
              "comfort": 3098,
              "luxury": 3380
            },
            "3": {
              "economy": 2484,
              "comfort": 2732,
              "luxury": 2980
            },
            "4": {
              "economy": 2334,
              "comfort": 2567,
              "luxury": 2800
            },
            "5": {
              "economy": 2231,
              "comfort": 2454,
              "luxury": 2677
            },
            "6-7": {
              "economy": 2162,
              "comfort": 2378,
              "luxury": 2594
            },
            "srs": {
              "economy": 229,
              "comfort": 251,
              "luxury": 274
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 4725,
              "comfort": 5197,
              "luxury": 5670
            },
            "2": {
              "economy": 3307,
              "comfort": 3637,
              "luxury": 3968
            },
            "3": {
              "economy": 2916,
              "comfort": 3207,
              "luxury": 3499
            },
            "4": {
              "economy": 2740,
              "comfort": 3014,
              "luxury": 3288
            },
            "5": {
              "economy": 2619,
              "comfort": 2880,
              "luxury": 3142
            },
            "6-7": {
              "economy": 2538,
              "comfort": 2791,
              "luxury": 3045
            },
            "srs": {
              "economy": 270,
              "comfort": 297,
              "luxury": 324
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "7-day-kenya-fly-in-family-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 3750,
              "comfort": 4125,
              "luxury": 4500
            },
            "2": {
              "economy": 2600,
              "comfort": 2860,
              "luxury": 3120
            },
            "3": {
              "economy": 2300,
              "comfort": 2530,
              "luxury": 2760
            },
            "4": {
              "economy": 2160,
              "comfort": 2376,
              "luxury": 2592
            },
            "5": {
              "economy": 2060,
              "comfort": 2266,
              "luxury": 2472
            },
            "6-7": {
              "economy": 2000,
              "comfort": 2200,
              "luxury": 2400
            },
            "srs": {
              "economy": 210,
              "comfort": 231,
              "luxury": 252
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 4312,
              "comfort": 4743,
              "luxury": 5174
            },
            "2": {
              "economy": 2989,
              "comfort": 3287,
              "luxury": 3586
            },
            "3": {
              "economy": 2645,
              "comfort": 2909,
              "luxury": 3174
            },
            "4": {
              "economy": 2484,
              "comfort": 2732,
              "luxury": 2980
            },
            "5": {
              "economy": 2369,
              "comfort": 2605,
              "luxury": 2842
            },
            "6-7": {
              "economy": 2300,
              "comfort": 2530,
              "luxury": 2760
            },
            "srs": {
              "economy": 241,
              "comfort": 265,
              "luxury": 289
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 5062,
              "comfort": 5568,
              "luxury": 6074
            },
            "2": {
              "economy": 3510,
              "comfort": 3861,
              "luxury": 4212
            },
            "3": {
              "economy": 3105,
              "comfort": 3415,
              "luxury": 3726
            },
            "4": {
              "economy": 2916,
              "comfort": 3207,
              "luxury": 3499
            },
            "5": {
              "economy": 2781,
              "comfort": 3059,
              "luxury": 3337
            },
            "6-7": {
              "economy": 2700,
              "comfort": 2970,
              "luxury": 3240
            },
            "srs": {
              "economy": 283,
              "comfort": 311,
              "luxury": 339
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  },
  "8-day-ultimate-kenya-fly-in-safari": {
    "pricing": {
      "seasons": {
        "shoulder_a": {
          "dates": "3rd Jan \u2013 31st Mar & 1st Jun \u2013 30th Jun",
          "rates": {
            "1": {
              "economy": 4900,
              "comfort": 5390,
              "luxury": 5880
            },
            "2": {
              "economy": 3400,
              "comfort": 3740,
              "luxury": 4080
            },
            "3": {
              "economy": 3000,
              "comfort": 3300,
              "luxury": 3600
            },
            "4": {
              "economy": 2820,
              "comfort": 3102,
              "luxury": 3384
            },
            "5": {
              "economy": 2700,
              "comfort": 2970,
              "luxury": 3240
            },
            "6-7": {
              "economy": 2620,
              "comfort": 2882,
              "luxury": 3144
            },
            "srs": {
              "economy": 250,
              "comfort": 275,
              "luxury": 300
            }
          }
        },
        "shoulder_b": {
          "dates": "1st Nov \u2013 15th Dec",
          "rates": {
            "1": {
              "economy": 5635,
              "comfort": 6198,
              "luxury": 6762
            },
            "2": {
              "economy": 3909,
              "comfort": 4299,
              "luxury": 4690
            },
            "3": {
              "economy": 3449,
              "comfort": 3793,
              "luxury": 4138
            },
            "4": {
              "economy": 3242,
              "comfort": 3566,
              "luxury": 3890
            },
            "5": {
              "economy": 3104,
              "comfort": 3414,
              "luxury": 3724
            },
            "6-7": {
              "economy": 3012,
              "comfort": 3313,
              "luxury": 3614
            },
            "srs": {
              "economy": 287,
              "comfort": 315,
              "luxury": 344
            }
          }
        },
        "peak": {
          "dates": "1st Jul \u2013 31st Oct & 16th Dec \u2013 2nd Jan",
          "rates": {
            "1": {
              "economy": 6615,
              "comfort": 7276,
              "luxury": 7938
            },
            "2": {
              "economy": 4590,
              "comfort": 5049,
              "luxury": 5508
            },
            "3": {
              "economy": 4050,
              "comfort": 4455,
              "luxury": 4860
            },
            "4": {
              "economy": 3807,
              "comfort": 4187,
              "luxury": 4568
            },
            "5": {
              "economy": 3645,
              "comfort": 4009,
              "luxury": 4374
            },
            "6-7": {
              "economy": 3537,
              "comfort": 3890,
              "luxury": 4244
            },
            "srs": {
              "economy": 337,
              "comfort": 370,
              "luxury": 404
            }
          }
        }
      },
      "child_rates": "Children below 3: Free | Children 3-11: 70% of adult rate | Children 12+: Full adult rate",
      "currency": "USD",
      "note": "Rates are per person. Bush flight costs are included in all rates. Rates vary by accommodation tier selected. Single room supplement (SRS) applies per night."
    },

    "accommodations": {
      "economy": [
        "Sentrim Hotels & Lodges",
        "Sopa Lodges",
        "Sarova Hotels",
        "Kibo Safari Camp"
      ],
      "comfort": [
        "Serena Hotels & Lodges",
        "Mara Simba Lodge",
        "Ol Tukai Lodge Amboseli",
        "Samburu Game Lodge",
        "Severin Safari Camp"
      ],
      "luxury": [
        "Governors Camp Collection",
        "Angama Mara",
        "Tortilis Camp Amboseli",
        "Saruni Collection",
        "Elewana Collection",
        "Fairmont Hotels"
      ],
      "superior_luxury": [
        "&Beyond Camps",
        "Cottar's 1920s Camp",
        "Mahali Mzuri (Richard Branson)",
        "Segera Retreat Laikipia",
        "Alfajiri Villas Diani",
        "Hemingways Nairobi"
      ]
    }
  }
,
  "8-day-kenya-tanzania-wildlife-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 4380,
                          "comfort": 4820,
                          "luxury": 5300,
                          "superior_luxury": 6630
                      },
                      "2": {
                          "economy": 2740,
                          "comfort": 3010,
                          "luxury": 3320,
                          "superior_luxury": 4140
                      },
                      "3": {
                          "economy": 2580,
                          "comfort": 2830,
                          "luxury": 3120,
                          "superior_luxury": 3900
                      },
                      "4": {
                          "economy": 2490,
                          "comfort": 2740,
                          "luxury": 3020,
                          "superior_luxury": 3770
                      },
                      "5": {
                          "economy": 2440,
                          "comfort": 2680,
                          "luxury": 2950,
                          "superior_luxury": 3690
                      },
                      "6-7": {
                          "economy": 2360,
                          "comfort": 2590,
                          "luxury": 2850,
                          "superior_luxury": 3560
                      },
                      "srs": {
                          "economy": 280,
                          "comfort": 360,
                          "luxury": 440,
                          "superior_luxury": 560
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 4820,
                          "comfort": 5300,
                          "luxury": 5840,
                          "superior_luxury": 7290
                      },
                      "2": {
                          "economy": 3010,
                          "comfort": 3320,
                          "luxury": 3650,
                          "superior_luxury": 4560
                      },
                      "3": {
                          "economy": 2830,
                          "comfort": 3120,
                          "luxury": 3430,
                          "superior_luxury": 4290
                      },
                      "4": {
                          "economy": 2740,
                          "comfort": 3020,
                          "luxury": 3320,
                          "superior_luxury": 4150
                      },
                      "5": {
                          "economy": 2680,
                          "comfort": 2950,
                          "luxury": 3250,
                          "superior_luxury": 4060
                      },
                      "6-7": {
                          "economy": 2590,
                          "comfort": 2850,
                          "luxury": 3140,
                          "superior_luxury": 3920
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 400,
                          "luxury": 480,
                          "superior_luxury": 620
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 5480,
                          "comfort": 6030,
                          "luxury": 6630,
                          "superior_luxury": 8290
                      },
                      "2": {
                          "economy": 3430,
                          "comfort": 3770,
                          "luxury": 4140,
                          "superior_luxury": 5180
                      },
                      "3": {
                          "economy": 3220,
                          "comfort": 3540,
                          "luxury": 3900,
                          "superior_luxury": 4870
                      },
                      "4": {
                          "economy": 3120,
                          "comfort": 3430,
                          "luxury": 3770,
                          "superior_luxury": 4710
                      },
                      "5": {
                          "economy": 3050,
                          "comfort": 3350,
                          "luxury": 3690,
                          "superior_luxury": 4610
                      },
                      "6-7": {
                          "economy": 2950,
                          "comfort": 3240,
                          "luxury": 3560,
                          "superior_luxury": 4460
                      },
                      "srs": {
                          "economy": 350,
                          "comfort": 450,
                          "luxury": 550,
                          "superior_luxury": 700
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 6360,
                          "comfort": 6990,
                          "luxury": 7690,
                          "superior_luxury": 9610
                      },
                      "2": {
                          "economy": 3970,
                          "comfort": 4370,
                          "luxury": 4810,
                          "superior_luxury": 6010
                      },
                      "3": {
                          "economy": 3730,
                          "comfort": 4110,
                          "luxury": 4520,
                          "superior_luxury": 5650
                      },
                      "4": {
                          "economy": 3620,
                          "comfort": 3980,
                          "luxury": 4370,
                          "superior_luxury": 5470
                      },
                      "5": {
                          "economy": 3540,
                          "comfort": 3890,
                          "luxury": 4280,
                          "superior_luxury": 5350
                      },
                      "6-7": {
                          "economy": 3420,
                          "comfort": 3760,
                          "luxury": 4130,
                          "superior_luxury": 5170
                      },
                      "srs": {
                          "economy": 410,
                          "comfort": 520,
                          "luxury": 640,
                          "superior_luxury": 810
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Mara Chui Camp",
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Mara Sopa Lodge",
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Mara Serena Safari Lodge",
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Oliver's Camp"
          ]
      }
  },
  "6-day-beach-to-nairobi-grand-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "2": {
                          "economy": 1250,
                          "comfort": 1380,
                          "luxury": 1510,
                          "superior_luxury": 1890
                      },
                      "3": {
                          "economy": 1180,
                          "comfort": 1290,
                          "luxury": 1420,
                          "superior_luxury": 1780
                      },
                      "4": {
                          "economy": 1140,
                          "comfort": 1250,
                          "luxury": 1380,
                          "superior_luxury": 1720
                      },
                      "5": {
                          "economy": 1110,
                          "comfort": 1220,
                          "luxury": 1350,
                          "superior_luxury": 1680
                      },
                      "6-7": {
                          "economy": 1080,
                          "comfort": 1180,
                          "luxury": 1300,
                          "superior_luxury": 1630
                      },
                      "srs": {
                          "economy": 210,
                          "comfort": 270,
                          "luxury": 330,
                          "superior_luxury": 420
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2200,
                          "comfort": 2420,
                          "luxury": 2660,
                          "superior_luxury": 3330
                      },
                      "2": {
                          "economy": 1380,
                          "comfort": 1510,
                          "luxury": 1660,
                          "superior_luxury": 2080
                      },
                      "3": {
                          "economy": 1290,
                          "comfort": 1420,
                          "luxury": 1560,
                          "superior_luxury": 1950
                      },
                      "4": {
                          "economy": 1250,
                          "comfort": 1380,
                          "luxury": 1510,
                          "superior_luxury": 1890
                      },
                      "5": {
                          "economy": 1220,
                          "comfort": 1350,
                          "luxury": 1480,
                          "superior_luxury": 1850
                      },
                      "6-7": {
                          "economy": 1180,
                          "comfort": 1300,
                          "luxury": 1430,
                          "superior_luxury": 1790
                      },
                      "srs": {
                          "economy": 230,
                          "comfort": 300,
                          "luxury": 360,
                          "superior_luxury": 460
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2500,
                          "comfort": 2750,
                          "luxury": 3030,
                          "superior_luxury": 3780
                      },
                      "2": {
                          "economy": 1560,
                          "comfort": 1720,
                          "luxury": 1890,
                          "superior_luxury": 2360
                      },
                      "3": {
                          "economy": 1470,
                          "comfort": 1620,
                          "luxury": 1780,
                          "superior_luxury": 2220
                      },
                      "4": {
                          "economy": 1420,
                          "comfort": 1560,
                          "luxury": 1720,
                          "superior_luxury": 2150
                      },
                      "5": {
                          "economy": 1390,
                          "comfort": 1530,
                          "luxury": 1680,
                          "superior_luxury": 2100
                      },
                      "6-7": {
                          "economy": 1340,
                          "comfort": 1480,
                          "luxury": 1630,
                          "superior_luxury": 2030
                      },
                      "srs": {
                          "economy": 260,
                          "comfort": 340,
                          "luxury": 410,
                          "superior_luxury": 530
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2900,
                          "comfort": 3190,
                          "luxury": 3510,
                          "superior_luxury": 4390
                      },
                      "2": {
                          "economy": 1810,
                          "comfort": 1990,
                          "luxury": 2190,
                          "superior_luxury": 2740
                      },
                      "3": {
                          "economy": 1700,
                          "comfort": 1870,
                          "luxury": 2060,
                          "superior_luxury": 2580
                      },
                      "4": {
                          "economy": 1650,
                          "comfort": 1810,
                          "luxury": 2000,
                          "superior_luxury": 2490
                      },
                      "5": {
                          "economy": 1610,
                          "comfort": 1770,
                          "luxury": 1950,
                          "superior_luxury": 2440
                      },
                      "6-7": {
                          "economy": 1560,
                          "comfort": 1710,
                          "luxury": 1890,
                          "superior_luxury": 2360
                      },
                      "srs": {
                          "economy": 300,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Voi Safari Lodge",
              "Ngulia Safari Lodge",
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Naivasha Kongoni Lodge",
              "Mara Chui Camp"
          ],
          "comfort": [
              "Sentrim Tsavo Camp",
              "Severin Safari Camp",
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Lake Naivasha Country Club",
              "Mara Sopa Lodge"
          ],
          "luxury": [
              "Satao Camp",
              "Sarova Salt Lick Game Lodge",
              "Amboseli Serena Safari Lodge",
              "Lake Nakuru Sopa Lodge",
              "Lake Naivasha Sopa Lodge",
              "Mara Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Finch Hattons",
              "Tawi Lodge",
              "Enashipai Resort & Spa",
              "Karen Blixen Camp",
              "Governors Camp"
          ]
      }
  },
  "7-day-coast-to-mara-nairobi-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2480,
                          "comfort": 2730,
                          "luxury": 3000,
                          "superior_luxury": 3750
                      },
                      "2": {
                          "economy": 1550,
                          "comfort": 1710,
                          "luxury": 1880,
                          "superior_luxury": 2340
                      },
                      "3": {
                          "economy": 1460,
                          "comfort": 1600,
                          "luxury": 1760,
                          "superior_luxury": 2200
                      },
                      "4": {
                          "economy": 1410,
                          "comfort": 1550,
                          "luxury": 1710,
                          "superior_luxury": 2130
                      },
                      "5": {
                          "economy": 1380,
                          "comfort": 1520,
                          "luxury": 1670,
                          "superior_luxury": 2090
                      },
                      "6-7": {
                          "economy": 1330,
                          "comfort": 1470,
                          "luxury": 1610,
                          "superior_luxury": 2020
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 320,
                          "luxury": 390,
                          "superior_luxury": 490
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2730,
                          "comfort": 3000,
                          "luxury": 3300,
                          "superior_luxury": 4130
                      },
                      "2": {
                          "economy": 1710,
                          "comfort": 1880,
                          "luxury": 2060,
                          "superior_luxury": 2580
                      },
                      "3": {
                          "economy": 1600,
                          "comfort": 1760,
                          "luxury": 1940,
                          "superior_luxury": 2420
                      },
                      "4": {
                          "economy": 1550,
                          "comfort": 1710,
                          "luxury": 1880,
                          "superior_luxury": 2350
                      },
                      "5": {
                          "economy": 1520,
                          "comfort": 1670,
                          "luxury": 1840,
                          "superior_luxury": 2300
                      },
                      "6-7": {
                          "economy": 1470,
                          "comfort": 1610,
                          "luxury": 1770,
                          "superior_luxury": 2220
                      },
                      "srs": {
                          "economy": 270,
                          "comfort": 350,
                          "luxury": 420,
                          "superior_luxury": 540
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 3100,
                          "comfort": 3410,
                          "luxury": 3750,
                          "superior_luxury": 4690
                      },
                      "2": {
                          "economy": 1940,
                          "comfort": 2130,
                          "luxury": 2340,
                          "superior_luxury": 2930
                      },
                      "3": {
                          "economy": 1820,
                          "comfort": 2000,
                          "luxury": 2200,
                          "superior_luxury": 2750
                      },
                      "4": {
                          "economy": 1760,
                          "comfort": 1940,
                          "luxury": 2130,
                          "superior_luxury": 2670
                      },
                      "5": {
                          "economy": 1720,
                          "comfort": 1900,
                          "luxury": 2090,
                          "superior_luxury": 2610
                      },
                      "6-7": {
                          "economy": 1670,
                          "comfort": 1830,
                          "luxury": 2020,
                          "superior_luxury": 2520
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3600,
                          "comfort": 3960,
                          "luxury": 4350,
                          "superior_luxury": 5440
                      },
                      "2": {
                          "economy": 2250,
                          "comfort": 2470,
                          "luxury": 2720,
                          "superior_luxury": 3400
                      },
                      "3": {
                          "economy": 2110,
                          "comfort": 2320,
                          "luxury": 2560,
                          "superior_luxury": 3200
                      },
                      "4": {
                          "economy": 2050,
                          "comfort": 2250,
                          "luxury": 2470,
                          "superior_luxury": 3090
                      },
                      "5": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "6-7": {
                          "economy": 1930,
                          "comfort": 2130,
                          "luxury": 2340,
                          "superior_luxury": 2920
                      },
                      "srs": {
                          "economy": 360,
                          "comfort": 460,
                          "luxury": 560,
                          "superior_luxury": 710
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Voi Safari Lodge",
              "Ngulia Safari Lodge",
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Naivasha Kongoni Lodge",
              "Mara Chui Camp"
          ],
          "comfort": [
              "Sentrim Tsavo Camp",
              "Severin Safari Camp",
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Lake Naivasha Country Club",
              "Mara Sopa Lodge"
          ],
          "luxury": [
              "Satao Camp",
              "Sarova Salt Lick Game Lodge",
              "Amboseli Serena Safari Lodge",
              "Lake Nakuru Sopa Lodge",
              "Lake Naivasha Sopa Lodge",
              "Mara Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Finch Hattons",
              "Tawi Lodge",
              "Enashipai Resort & Spa",
              "Karen Blixen Camp",
              "Governors Camp"
          ]
      }
  },
  "9-day-ultimate-coast-to-nairobi-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 3200,
                          "comfort": 3520,
                          "luxury": 3870,
                          "superior_luxury": 4840
                      },
                      "2": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "3": {
                          "economy": 1880,
                          "comfort": 2070,
                          "luxury": 2270,
                          "superior_luxury": 2840
                      },
                      "4": {
                          "economy": 1820,
                          "comfort": 2000,
                          "luxury": 2200,
                          "superior_luxury": 2750
                      },
                      "5": {
                          "economy": 1780,
                          "comfort": 1960,
                          "luxury": 2150,
                          "superior_luxury": 2690
                      },
                      "6-7": {
                          "economy": 1720,
                          "comfort": 1890,
                          "luxury": 2080,
                          "superior_luxury": 2600
                      },
                      "srs": {
                          "economy": 320,
                          "comfort": 410,
                          "luxury": 500,
                          "superior_luxury": 630
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 3520,
                          "comfort": 3870,
                          "luxury": 4260,
                          "superior_luxury": 5320
                      },
                      "2": {
                          "economy": 2200,
                          "comfort": 2420,
                          "luxury": 2660,
                          "superior_luxury": 3330
                      },
                      "3": {
                          "economy": 2070,
                          "comfort": 2270,
                          "luxury": 2500,
                          "superior_luxury": 3130
                      },
                      "4": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "5": {
                          "economy": 1960,
                          "comfort": 2150,
                          "luxury": 2370,
                          "superior_luxury": 2960
                      },
                      "6-7": {
                          "economy": 1890,
                          "comfort": 2080,
                          "luxury": 2290,
                          "superior_luxury": 2860
                      },
                      "srs": {
                          "economy": 350,
                          "comfort": 450,
                          "luxury": 540,
                          "superior_luxury": 690
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 4000,
                          "comfort": 4400,
                          "luxury": 4840,
                          "superior_luxury": 6050
                      },
                      "2": {
                          "economy": 2500,
                          "comfort": 2750,
                          "luxury": 3030,
                          "superior_luxury": 3780
                      },
                      "3": {
                          "economy": 2350,
                          "comfort": 2590,
                          "luxury": 2840,
                          "superior_luxury": 3550
                      },
                      "4": {
                          "economy": 2280,
                          "comfort": 2500,
                          "luxury": 2750,
                          "superior_luxury": 3440
                      },
                      "5": {
                          "economy": 2230,
                          "comfort": 2450,
                          "luxury": 2690,
                          "superior_luxury": 3370
                      },
                      "6-7": {
                          "economy": 2150,
                          "comfort": 2370,
                          "luxury": 2600,
                          "superior_luxury": 3250
                      },
                      "srs": {
                          "economy": 390,
                          "comfort": 510,
                          "luxury": 620,
                          "superior_luxury": 790
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 4640,
                          "comfort": 5100,
                          "luxury": 5610,
                          "superior_luxury": 7020
                      },
                      "2": {
                          "economy": 2900,
                          "comfort": 3190,
                          "luxury": 3510,
                          "superior_luxury": 4390
                      },
                      "3": {
                          "economy": 2730,
                          "comfort": 3000,
                          "luxury": 3300,
                          "superior_luxury": 4120
                      },
                      "4": {
                          "economy": 2640,
                          "comfort": 2900,
                          "luxury": 3190,
                          "superior_luxury": 3990
                      },
                      "5": {
                          "economy": 2580,
                          "comfort": 2840,
                          "luxury": 3120,
                          "superior_luxury": 3900
                      },
                      "6-7": {
                          "economy": 2490,
                          "comfort": 2740,
                          "luxury": 3020,
                          "superior_luxury": 3770
                      },
                      "srs": {
                          "economy": 460,
                          "comfort": 590,
                          "luxury": 720,
                          "superior_luxury": 910
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Voi Safari Lodge",
              "Ngulia Safari Lodge",
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Naivasha Kongoni Lodge",
              "Mara Chui Camp"
          ],
          "comfort": [
              "Sentrim Tsavo Camp",
              "Severin Safari Camp",
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Lake Naivasha Country Club",
              "Mara Sopa Lodge"
          ],
          "luxury": [
              "Satao Camp",
              "Sarova Salt Lick Game Lodge",
              "Amboseli Serena Safari Lodge",
              "Lake Nakuru Sopa Lodge",
              "Lake Naivasha Sopa Lodge",
              "Mara Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Finch Hattons",
              "Tawi Lodge",
              "Enashipai Resort & Spa",
              "Karen Blixen Camp",
              "Governors Camp"
          ]
      }
  },
  "4-day-masai-mara-group-safari-mombasa": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "2": {
                          "economy": 640,
                          "comfort": 700,
                          "luxury": 770,
                          "superior_luxury": 970
                      },
                      "3": {
                          "economy": 600,
                          "comfort": 660,
                          "luxury": 730,
                          "superior_luxury": 910
                      },
                      "4": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 700,
                          "superior_luxury": 880
                      },
                      "5": {
                          "economy": 570,
                          "comfort": 630,
                          "luxury": 690,
                          "superior_luxury": 860
                      },
                      "6-7": {
                          "economy": 550,
                          "comfort": 610,
                          "luxury": 670,
                          "superior_luxury": 830
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "2": {
                          "economy": 700,
                          "comfort": 770,
                          "luxury": 850,
                          "superior_luxury": 1060
                      },
                      "3": {
                          "economy": 660,
                          "comfort": 730,
                          "luxury": 800,
                          "superior_luxury": 1000
                      },
                      "4": {
                          "economy": 640,
                          "comfort": 700,
                          "luxury": 780,
                          "superior_luxury": 970
                      },
                      "5": {
                          "economy": 630,
                          "comfort": 690,
                          "luxury": 760,
                          "superior_luxury": 950
                      },
                      "6-7": {
                          "economy": 610,
                          "comfort": 670,
                          "luxury": 730,
                          "superior_luxury": 920
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1280,
                          "comfort": 1410,
                          "luxury": 1550,
                          "superior_luxury": 1940
                      },
                      "2": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "3": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1140
                      },
                      "4": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "5": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 860,
                          "superior_luxury": 1080
                      },
                      "6-7": {
                          "economy": 690,
                          "comfort": 760,
                          "luxury": 830,
                          "superior_luxury": 1040
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1480,
                          "comfort": 1630,
                          "luxury": 1800,
                          "superior_luxury": 2250
                      },
                      "2": {
                          "economy": 930,
                          "comfort": 1020,
                          "luxury": 1120,
                          "superior_luxury": 1400
                      },
                      "3": {
                          "economy": 870,
                          "comfort": 960,
                          "luxury": 1060,
                          "superior_luxury": 1320
                      },
                      "4": {
                          "economy": 840,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "5": {
                          "economy": 830,
                          "comfort": 910,
                          "luxury": 1000,
                          "superior_luxury": 1250
                      },
                      "6-7": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Mara Chui Camp",
              "Jambo Mara Safari Lodge",
              "Olorien Camp"
          ],
          "comfort": [
              "Mara Sopa Lodge",
              "Sentrim Mara Camp",
              "Basecamp Masai Mara"
          ],
          "luxury": [
              "Mara Serena Safari Lodge",
              "Keekorok Lodge",
              "Fig Tree Camp"
          ],
          "superior_luxury": [
              "Karen Blixen Camp",
              "Governors Camp",
              "Fairmont Mara Safari Club"
          ]
      }
  },
  "2-day-ngorongoro-crater-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "2": {
                          "economy": 620,
                          "comfort": 680,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "3": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 710,
                          "superior_luxury": 880
                      },
                      "4": {
                          "economy": 560,
                          "comfort": 620,
                          "luxury": 680,
                          "superior_luxury": 850
                      },
                      "5": {
                          "economy": 550,
                          "comfort": 610,
                          "luxury": 670,
                          "superior_luxury": 830
                      },
                      "6-7": {
                          "economy": 530,
                          "comfort": 590,
                          "luxury": 650,
                          "superior_luxury": 810
                      },
                      "srs": {
                          "economy": 70,
                          "comfort": 90,
                          "luxury": 110,
                          "superior_luxury": 140
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "2": {
                          "economy": 680,
                          "comfort": 750,
                          "luxury": 830,
                          "superior_luxury": 1030
                      },
                      "3": {
                          "economy": 640,
                          "comfort": 710,
                          "luxury": 780,
                          "superior_luxury": 970
                      },
                      "4": {
                          "economy": 620,
                          "comfort": 680,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "5": {
                          "economy": 610,
                          "comfort": 670,
                          "luxury": 730,
                          "superior_luxury": 920
                      },
                      "6-7": {
                          "economy": 590,
                          "comfort": 650,
                          "luxury": 710,
                          "superior_luxury": 890
                      },
                      "srs": {
                          "economy": 80,
                          "comfort": 100,
                          "luxury": 120,
                          "superior_luxury": 150
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1240,
                          "comfort": 1360,
                          "luxury": 1500,
                          "superior_luxury": 1880
                      },
                      "2": {
                          "economy": 780,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "3": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "4": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 850,
                          "superior_luxury": 1070
                      },
                      "5": {
                          "economy": 690,
                          "comfort": 760,
                          "luxury": 830,
                          "superior_luxury": 1040
                      },
                      "6-7": {
                          "economy": 670,
                          "comfort": 730,
                          "luxury": 810,
                          "superior_luxury": 1010
                      },
                      "srs": {
                          "economy": 90,
                          "comfort": 110,
                          "luxury": 140,
                          "superior_luxury": 180
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2180
                      },
                      "2": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "3": {
                          "economy": 850,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "4": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "5": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "6-7": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "srs": {
                          "economy": 100,
                          "comfort": 130,
                          "luxury": 160,
                          "superior_luxury": 200
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Rhino Lodge",
              "Ngorongoro Wildlife Lodge",
              "Hhando Coffee Lodge"
          ],
          "comfort": [
              "Ngorongoro Sopa Lodge",
              "Ngorongoro Farm House",
              "Kitela Lodge"
          ],
          "luxury": [
              "Ngorongoro Serena Safari Lodge",
              "Lemala Ngorongoro Tented Camp",
              "The Manor at Ngorongoro"
          ],
          "superior_luxury": [
              "&Beyond Ngorongoro Crater Lodge",
              "The Highlands Ngorongoro",
              "Entamanu Ngorongoro"
          ]
      }
  },
  "3-day-serengeti-fly-in-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2080,
                          "comfort": 2290,
                          "luxury": 2520,
                          "superior_luxury": 3150
                      },
                      "2": {
                          "economy": 1300,
                          "comfort": 1430,
                          "luxury": 1570,
                          "superior_luxury": 1970
                      },
                      "3": {
                          "economy": 1220,
                          "comfort": 1340,
                          "luxury": 1480,
                          "superior_luxury": 1850
                      },
                      "4": {
                          "economy": 1180,
                          "comfort": 1300,
                          "luxury": 1430,
                          "superior_luxury": 1790
                      },
                      "5": {
                          "economy": 1160,
                          "comfort": 1270,
                          "luxury": 1400,
                          "superior_luxury": 1750
                      },
                      "6-7": {
                          "economy": 1120,
                          "comfort": 1230,
                          "luxury": 1350,
                          "superior_luxury": 1690
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2290,
                          "comfort": 2520,
                          "luxury": 2770,
                          "superior_luxury": 3460
                      },
                      "2": {
                          "economy": 1430,
                          "comfort": 1570,
                          "luxury": 1730,
                          "superior_luxury": 2160
                      },
                      "3": {
                          "economy": 1340,
                          "comfort": 1480,
                          "luxury": 1630,
                          "superior_luxury": 2030
                      },
                      "4": {
                          "economy": 1300,
                          "comfort": 1430,
                          "luxury": 1570,
                          "superior_luxury": 1970
                      },
                      "5": {
                          "economy": 1270,
                          "comfort": 1400,
                          "luxury": 1540,
                          "superior_luxury": 1920
                      },
                      "6-7": {
                          "economy": 1230,
                          "comfort": 1350,
                          "luxury": 1490,
                          "superior_luxury": 1860
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2600,
                          "comfort": 2860,
                          "luxury": 3150,
                          "superior_luxury": 3930
                      },
                      "2": {
                          "economy": 1630,
                          "comfort": 1790,
                          "luxury": 1970,
                          "superior_luxury": 2460
                      },
                      "3": {
                          "economy": 1530,
                          "comfort": 1680,
                          "luxury": 1850,
                          "superior_luxury": 2310
                      },
                      "4": {
                          "economy": 1480,
                          "comfort": 1630,
                          "luxury": 1790,
                          "superior_luxury": 2240
                      },
                      "5": {
                          "economy": 1450,
                          "comfort": 1590,
                          "luxury": 1750,
                          "superior_luxury": 2190
                      },
                      "6-7": {
                          "economy": 1400,
                          "comfort": 1540,
                          "luxury": 1690,
                          "superior_luxury": 2110
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3020,
                          "comfort": 3320,
                          "luxury": 3650,
                          "superior_luxury": 4560
                      },
                      "2": {
                          "economy": 1890,
                          "comfort": 2070,
                          "luxury": 2280,
                          "superior_luxury": 2850
                      },
                      "3": {
                          "economy": 1770,
                          "comfort": 1950,
                          "luxury": 2140,
                          "superior_luxury": 2680
                      },
                      "4": {
                          "economy": 1720,
                          "comfort": 1890,
                          "luxury": 2080,
                          "superior_luxury": 2590
                      },
                      "5": {
                          "economy": 1680,
                          "comfort": 1850,
                          "luxury": 2030,
                          "superior_luxury": 2540
                      },
                      "6-7": {
                          "economy": 1620,
                          "comfort": 1780,
                          "luxury": 1960,
                          "superior_luxury": 2450
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Seronera Wildlife Lodge",
              "Ikoma Wild Camp",
              "ThornTree Camp"
          ],
          "comfort": [
              "Serengeti Sopa Lodge",
              "Serengeti Safari Camp",
              "Kati Kati Tented Camp"
          ],
          "luxury": [
              "Serengeti Serena Safari Lodge",
              "Four Seasons Safari Lodge Serengeti",
              "Lemala Nanyukie"
          ],
          "superior_luxury": [
              "Singita Sabora Tented Camp",
              "&Beyond Serengeti Under Canvas",
              "One Nature Nyaruswiga Serengeti"
          ]
      }
  },
  "4-day-tarangire-serengeti-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1840,
                          "comfort": 2020,
                          "luxury": 2230,
                          "superior_luxury": 2780
                      },
                      "2": {
                          "economy": 1150,
                          "comfort": 1270,
                          "luxury": 1390,
                          "superior_luxury": 1740
                      },
                      "3": {
                          "economy": 1080,
                          "comfort": 1190,
                          "luxury": 1310,
                          "superior_luxury": 1640
                      },
                      "4": {
                          "economy": 1050,
                          "comfort": 1150,
                          "luxury": 1270,
                          "superior_luxury": 1580
                      },
                      "5": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "6-7": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2020,
                          "comfort": 2230,
                          "luxury": 2450,
                          "superior_luxury": 3060
                      },
                      "2": {
                          "economy": 1270,
                          "comfort": 1390,
                          "luxury": 1530,
                          "superior_luxury": 1910
                      },
                      "3": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1440,
                          "superior_luxury": 1800
                      },
                      "4": {
                          "economy": 1150,
                          "comfort": 1270,
                          "luxury": 1390,
                          "superior_luxury": 1740
                      },
                      "5": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "6-7": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2300,
                          "comfort": 2530,
                          "luxury": 2780,
                          "superior_luxury": 3480
                      },
                      "2": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2170
                      },
                      "3": {
                          "economy": 1350,
                          "comfort": 1490,
                          "luxury": 1640,
                          "superior_luxury": 2040
                      },
                      "4": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1980
                      },
                      "5": {
                          "economy": 1280,
                          "comfort": 1410,
                          "luxury": 1550,
                          "superior_luxury": 1940
                      },
                      "6-7": {
                          "economy": 1240,
                          "comfort": 1360,
                          "luxury": 1500,
                          "superior_luxury": 1870
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2670,
                          "comfort": 2930,
                          "luxury": 3230,
                          "superior_luxury": 4040
                      },
                      "2": {
                          "economy": 1670,
                          "comfort": 1830,
                          "luxury": 2020,
                          "superior_luxury": 2520
                      },
                      "3": {
                          "economy": 1570,
                          "comfort": 1720,
                          "luxury": 1900,
                          "superior_luxury": 2370
                      },
                      "4": {
                          "economy": 1520,
                          "comfort": 1670,
                          "luxury": 1840,
                          "superior_luxury": 2300
                      },
                      "5": {
                          "economy": 1480,
                          "comfort": 1630,
                          "luxury": 1800,
                          "superior_luxury": 2240
                      },
                      "6-7": {
                          "economy": 1430,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2170
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "Singita Sabora Tented Camp",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  },
  "5-day-serengeti-migration-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2510,
                          "comfort": 2760,
                          "luxury": 3040,
                          "superior_luxury": 3800
                      },
                      "2": {
                          "economy": 1570,
                          "comfort": 1730,
                          "luxury": 1900,
                          "superior_luxury": 2370
                      },
                      "3": {
                          "economy": 1480,
                          "comfort": 1620,
                          "luxury": 1790,
                          "superior_luxury": 2230
                      },
                      "4": {
                          "economy": 1430,
                          "comfort": 1570,
                          "luxury": 1730,
                          "superior_luxury": 2160
                      },
                      "5": {
                          "economy": 1400,
                          "comfort": 1540,
                          "luxury": 1690,
                          "superior_luxury": 2110
                      },
                      "6-7": {
                          "economy": 1350,
                          "comfort": 1490,
                          "luxury": 1630,
                          "superior_luxury": 2040
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2760,
                          "comfort": 3040,
                          "luxury": 3340,
                          "superior_luxury": 4180
                      },
                      "2": {
                          "economy": 1730,
                          "comfort": 1900,
                          "luxury": 2090,
                          "superior_luxury": 2610
                      },
                      "3": {
                          "economy": 1620,
                          "comfort": 1790,
                          "luxury": 1960,
                          "superior_luxury": 2460
                      },
                      "4": {
                          "economy": 1570,
                          "comfort": 1730,
                          "luxury": 1900,
                          "superior_luxury": 2380
                      },
                      "5": {
                          "economy": 1540,
                          "comfort": 1690,
                          "luxury": 1860,
                          "superior_luxury": 2320
                      },
                      "6-7": {
                          "economy": 1490,
                          "comfort": 1630,
                          "luxury": 1800,
                          "superior_luxury": 2250
                      },
                      "srs": {
                          "economy": 190,
                          "comfort": 250,
                          "luxury": 300,
                          "superior_luxury": 390
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 3140,
                          "comfort": 3450,
                          "luxury": 3800,
                          "superior_luxury": 4750
                      },
                      "2": {
                          "economy": 1960,
                          "comfort": 2160,
                          "luxury": 2370,
                          "superior_luxury": 2970
                      },
                      "3": {
                          "economy": 1840,
                          "comfort": 2030,
                          "luxury": 2230,
                          "superior_luxury": 2790
                      },
                      "4": {
                          "economy": 1790,
                          "comfort": 1960,
                          "luxury": 2160,
                          "superior_luxury": 2700
                      },
                      "5": {
                          "economy": 1750,
                          "comfort": 1920,
                          "luxury": 2110,
                          "superior_luxury": 2640
                      },
                      "6-7": {
                          "economy": 1690,
                          "comfort": 1860,
                          "luxury": 2040,
                          "superior_luxury": 2550
                      },
                      "srs": {
                          "economy": 220,
                          "comfort": 280,
                          "luxury": 340,
                          "superior_luxury": 440
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3640,
                          "comfort": 4010,
                          "luxury": 4410,
                          "superior_luxury": 5510
                      },
                      "2": {
                          "economy": 2280,
                          "comfort": 2500,
                          "luxury": 2750,
                          "superior_luxury": 3440
                      },
                      "3": {
                          "economy": 2140,
                          "comfort": 2350,
                          "luxury": 2590,
                          "superior_luxury": 3240
                      },
                      "4": {
                          "economy": 2070,
                          "comfort": 2280,
                          "luxury": 2510,
                          "superior_luxury": 3130
                      },
                      "5": {
                          "economy": 2030,
                          "comfort": 2230,
                          "luxury": 2450,
                          "superior_luxury": 3060
                      },
                      "6-7": {
                          "economy": 1960,
                          "comfort": 2150,
                          "luxury": 2370,
                          "superior_luxury": 2960
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 330,
                          "luxury": 400,
                          "superior_luxury": 510
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "Singita Sabora Tented Camp",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  },
  "6-day-tanzania-luxury-lodge-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 3280,
                          "comfort": 3610,
                          "luxury": 3970,
                          "superior_luxury": 4960
                      },
                      "2": {
                          "economy": 2050,
                          "comfort": 2260,
                          "luxury": 2480,
                          "superior_luxury": 3100
                      },
                      "3": {
                          "economy": 1930,
                          "comfort": 2120,
                          "luxury": 2330,
                          "superior_luxury": 2910
                      },
                      "4": {
                          "economy": 1870,
                          "comfort": 2050,
                          "luxury": 2260,
                          "superior_luxury": 2820
                      },
                      "5": {
                          "economy": 1820,
                          "comfort": 2010,
                          "luxury": 2210,
                          "superior_luxury": 2760
                      },
                      "6-7": {
                          "economy": 1760,
                          "comfort": 1940,
                          "luxury": 2130,
                          "superior_luxury": 2670
                      },
                      "srs": {
                          "economy": 210,
                          "comfort": 270,
                          "luxury": 330,
                          "superior_luxury": 420
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 3610,
                          "comfort": 3970,
                          "luxury": 4370,
                          "superior_luxury": 5460
                      },
                      "2": {
                          "economy": 2260,
                          "comfort": 2480,
                          "luxury": 2730,
                          "superior_luxury": 3410
                      },
                      "3": {
                          "economy": 2120,
                          "comfort": 2330,
                          "luxury": 2560,
                          "superior_luxury": 3210
                      },
                      "4": {
                          "economy": 2050,
                          "comfort": 2260,
                          "luxury": 2480,
                          "superior_luxury": 3100
                      },
                      "5": {
                          "economy": 2010,
                          "comfort": 2210,
                          "luxury": 2430,
                          "superior_luxury": 3040
                      },
                      "6-7": {
                          "economy": 1940,
                          "comfort": 2130,
                          "luxury": 2350,
                          "superior_luxury": 2930
                      },
                      "srs": {
                          "economy": 230,
                          "comfort": 300,
                          "luxury": 360,
                          "superior_luxury": 460
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 4100,
                          "comfort": 4510,
                          "luxury": 4960,
                          "superior_luxury": 6200
                      },
                      "2": {
                          "economy": 2560,
                          "comfort": 2820,
                          "luxury": 3100,
                          "superior_luxury": 3880
                      },
                      "3": {
                          "economy": 2410,
                          "comfort": 2650,
                          "luxury": 2910,
                          "superior_luxury": 3640
                      },
                      "4": {
                          "economy": 2330,
                          "comfort": 2570,
                          "luxury": 2820,
                          "superior_luxury": 3530
                      },
                      "5": {
                          "economy": 2280,
                          "comfort": 2510,
                          "luxury": 2760,
                          "superior_luxury": 3450
                      },
                      "6-7": {
                          "economy": 2200,
                          "comfort": 2420,
                          "luxury": 2670,
                          "superior_luxury": 3330
                      },
                      "srs": {
                          "economy": 260,
                          "comfort": 340,
                          "luxury": 410,
                          "superior_luxury": 530
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 4760,
                          "comfort": 5230,
                          "luxury": 5750,
                          "superior_luxury": 7190
                      },
                      "2": {
                          "economy": 2970,
                          "comfort": 3270,
                          "luxury": 3600,
                          "superior_luxury": 4500
                      },
                      "3": {
                          "economy": 2790,
                          "comfort": 3070,
                          "luxury": 3380,
                          "superior_luxury": 4230
                      },
                      "4": {
                          "economy": 2700,
                          "comfort": 2980,
                          "luxury": 3270,
                          "superior_luxury": 4090
                      },
                      "5": {
                          "economy": 2650,
                          "comfort": 2910,
                          "luxury": 3200,
                          "superior_luxury": 4000
                      },
                      "6-7": {
                          "economy": 2560,
                          "comfort": 2810,
                          "luxury": 3090,
                          "superior_luxury": 3870
                      },
                      "srs": {
                          "economy": 300,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Lake Manyara Wildlife Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Lake Manyara Serena Safari Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Gibb's Farm"
          ]
      }
  },
  "8-day-tanzania-photography-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 4160,
                          "comfort": 4580,
                          "luxury": 5030,
                          "superior_luxury": 6290
                      },
                      "2": {
                          "economy": 2600,
                          "comfort": 2860,
                          "luxury": 3150,
                          "superior_luxury": 3930
                      },
                      "3": {
                          "economy": 2440,
                          "comfort": 2690,
                          "luxury": 2960,
                          "superior_luxury": 3700
                      },
                      "4": {
                          "economy": 2370,
                          "comfort": 2600,
                          "luxury": 2860,
                          "superior_luxury": 3580
                      },
                      "5": {
                          "economy": 2310,
                          "comfort": 2550,
                          "luxury": 2800,
                          "superior_luxury": 3500
                      },
                      "6-7": {
                          "economy": 2240,
                          "comfort": 2460,
                          "luxury": 2710,
                          "superior_luxury": 3380
                      },
                      "srs": {
                          "economy": 280,
                          "comfort": 360,
                          "luxury": 440,
                          "superior_luxury": 560
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 4580,
                          "comfort": 5030,
                          "luxury": 5540,
                          "superior_luxury": 6920
                      },
                      "2": {
                          "economy": 2860,
                          "comfort": 3150,
                          "luxury": 3460,
                          "superior_luxury": 4330
                      },
                      "3": {
                          "economy": 2690,
                          "comfort": 2960,
                          "luxury": 3250,
                          "superior_luxury": 4070
                      },
                      "4": {
                          "economy": 2600,
                          "comfort": 2860,
                          "luxury": 3150,
                          "superior_luxury": 3940
                      },
                      "5": {
                          "economy": 2550,
                          "comfort": 2800,
                          "luxury": 3080,
                          "superior_luxury": 3850
                      },
                      "6-7": {
                          "economy": 2460,
                          "comfort": 2710,
                          "luxury": 2980,
                          "superior_luxury": 3720
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 400,
                          "luxury": 480,
                          "superior_luxury": 620
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 5200,
                          "comfort": 5720,
                          "luxury": 6290,
                          "superior_luxury": 7870
                      },
                      "2": {
                          "economy": 3250,
                          "comfort": 3580,
                          "luxury": 3930,
                          "superior_luxury": 4920
                      },
                      "3": {
                          "economy": 3060,
                          "comfort": 3360,
                          "luxury": 3700,
                          "superior_luxury": 4620
                      },
                      "4": {
                          "economy": 2960,
                          "comfort": 3250,
                          "luxury": 3580,
                          "superior_luxury": 4470
                      },
                      "5": {
                          "economy": 2890,
                          "comfort": 3180,
                          "luxury": 3500,
                          "superior_luxury": 4370
                      },
                      "6-7": {
                          "economy": 2800,
                          "comfort": 3070,
                          "luxury": 3380,
                          "superior_luxury": 4230
                      },
                      "srs": {
                          "economy": 350,
                          "comfort": 450,
                          "luxury": 550,
                          "superior_luxury": 700
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 6030,
                          "comfort": 6640,
                          "luxury": 7300,
                          "superior_luxury": 9120
                      },
                      "2": {
                          "economy": 3770,
                          "comfort": 4150,
                          "luxury": 4560,
                          "superior_luxury": 5700
                      },
                      "3": {
                          "economy": 3540,
                          "comfort": 3900,
                          "luxury": 4290,
                          "superior_luxury": 5360
                      },
                      "4": {
                          "economy": 3430,
                          "comfort": 3770,
                          "luxury": 4150,
                          "superior_luxury": 5190
                      },
                      "5": {
                          "economy": 3360,
                          "comfort": 3690,
                          "luxury": 4060,
                          "superior_luxury": 5070
                      },
                      "6-7": {
                          "economy": 3240,
                          "comfort": 3570,
                          "luxury": 3920,
                          "superior_luxury": 4900
                      },
                      "srs": {
                          "economy": 410,
                          "comfort": 520,
                          "luxury": 640,
                          "superior_luxury": 810
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Lake Manyara Wildlife Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Lake Manyara Serena Safari Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Gibb's Farm"
          ]
      }
  },
  "10-day-tanzania-safari-and-zanzibar-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 3520,
                          "comfort": 3870,
                          "luxury": 4260,
                          "superior_luxury": 5320
                      },
                      "2": {
                          "economy": 2200,
                          "comfort": 2420,
                          "luxury": 2660,
                          "superior_luxury": 3330
                      },
                      "3": {
                          "economy": 2070,
                          "comfort": 2270,
                          "luxury": 2500,
                          "superior_luxury": 3130
                      },
                      "4": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "5": {
                          "economy": 1960,
                          "comfort": 2150,
                          "luxury": 2370,
                          "superior_luxury": 2960
                      },
                      "6-7": {
                          "economy": 1890,
                          "comfort": 2080,
                          "luxury": 2290,
                          "superior_luxury": 2860
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 320,
                          "luxury": 390,
                          "superior_luxury": 490
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 3870,
                          "comfort": 4260,
                          "luxury": 4690,
                          "superior_luxury": 5860
                      },
                      "2": {
                          "economy": 2420,
                          "comfort": 2660,
                          "luxury": 2930,
                          "superior_luxury": 3660
                      },
                      "3": {
                          "economy": 2270,
                          "comfort": 2500,
                          "luxury": 2750,
                          "superior_luxury": 3440
                      },
                      "4": {
                          "economy": 2200,
                          "comfort": 2420,
                          "luxury": 2660,
                          "superior_luxury": 3330
                      },
                      "5": {
                          "economy": 2150,
                          "comfort": 2370,
                          "luxury": 2610,
                          "superior_luxury": 3260
                      },
                      "6-7": {
                          "economy": 2080,
                          "comfort": 2290,
                          "luxury": 2520,
                          "superior_luxury": 3150
                      },
                      "srs": {
                          "economy": 270,
                          "comfort": 350,
                          "luxury": 420,
                          "superior_luxury": 540
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 4400,
                          "comfort": 4840,
                          "luxury": 5320,
                          "superior_luxury": 6660
                      },
                      "2": {
                          "economy": 2750,
                          "comfort": 3030,
                          "luxury": 3330,
                          "superior_luxury": 4160
                      },
                      "3": {
                          "economy": 2590,
                          "comfort": 2840,
                          "luxury": 3130,
                          "superior_luxury": 3910
                      },
                      "4": {
                          "economy": 2500,
                          "comfort": 2750,
                          "luxury": 3030,
                          "superior_luxury": 3790
                      },
                      "5": {
                          "economy": 2450,
                          "comfort": 2690,
                          "luxury": 2960,
                          "superior_luxury": 3700
                      },
                      "6-7": {
                          "economy": 2370,
                          "comfort": 2600,
                          "luxury": 2860,
                          "superior_luxury": 3580
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 5100,
                          "comfort": 5610,
                          "luxury": 6180,
                          "superior_luxury": 7720
                      },
                      "2": {
                          "economy": 3190,
                          "comfort": 3510,
                          "luxury": 3860,
                          "superior_luxury": 4820
                      },
                      "3": {
                          "economy": 3000,
                          "comfort": 3300,
                          "luxury": 3630,
                          "superior_luxury": 4540
                      },
                      "4": {
                          "economy": 2900,
                          "comfort": 3190,
                          "luxury": 3510,
                          "superior_luxury": 4390
                      },
                      "5": {
                          "economy": 2840,
                          "comfort": 3120,
                          "luxury": 3440,
                          "superior_luxury": 4290
                      },
                      "6-7": {
                          "economy": 2740,
                          "comfort": 3020,
                          "luxury": 3320,
                          "superior_luxury": 4150
                      },
                      "srs": {
                          "economy": 360,
                          "comfort": 460,
                          "luxury": 560,
                          "superior_luxury": 710
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge",
              "Amaan Beach Bungalows"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge",
              "DoubleTree Resort by Hilton Zanzibar"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Sea Cliff Resort & Spa"
          ],
          "superior_luxury": [
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "The Residence Zanzibar",
              "Park Hyatt Zanzibar"
          ]
      }
  },
  "12-day-tanzania-grand-expedition": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 5600,
                          "comfort": 6160,
                          "luxury": 6780,
                          "superior_luxury": 8470
                      },
                      "2": {
                          "economy": 3500,
                          "comfort": 3850,
                          "luxury": 4240,
                          "superior_luxury": 5290
                      },
                      "3": {
                          "economy": 3290,
                          "comfort": 3620,
                          "luxury": 3980,
                          "superior_luxury": 4980
                      },
                      "4": {
                          "economy": 3190,
                          "comfort": 3500,
                          "luxury": 3850,
                          "superior_luxury": 4820
                      },
                      "5": {
                          "economy": 3120,
                          "comfort": 3430,
                          "luxury": 3770,
                          "superior_luxury": 4710
                      },
                      "6-7": {
                          "economy": 3010,
                          "comfort": 3310,
                          "luxury": 3640,
                          "superior_luxury": 4550
                      },
                      "srs": {
                          "economy": 390,
                          "comfort": 500,
                          "luxury": 610,
                          "superior_luxury": 770
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 6160,
                          "comfort": 6780,
                          "luxury": 7450,
                          "superior_luxury": 9320
                      },
                      "2": {
                          "economy": 3850,
                          "comfort": 4240,
                          "luxury": 4660,
                          "superior_luxury": 5820
                      },
                      "3": {
                          "economy": 3620,
                          "comfort": 3980,
                          "luxury": 4380,
                          "superior_luxury": 5470
                      },
                      "4": {
                          "economy": 3500,
                          "comfort": 3850,
                          "luxury": 4240,
                          "superior_luxury": 5300
                      },
                      "5": {
                          "economy": 3430,
                          "comfort": 3770,
                          "luxury": 4150,
                          "superior_luxury": 5180
                      },
                      "6-7": {
                          "economy": 3310,
                          "comfort": 3640,
                          "luxury": 4010,
                          "superior_luxury": 5010
                      },
                      "srs": {
                          "economy": 420,
                          "comfort": 540,
                          "luxury": 670,
                          "superior_luxury": 850
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 7000,
                          "comfort": 7700,
                          "luxury": 8470,
                          "superior_luxury": 10590
                      },
                      "2": {
                          "economy": 4380,
                          "comfort": 4810,
                          "luxury": 5290,
                          "superior_luxury": 6620
                      },
                      "3": {
                          "economy": 4110,
                          "comfort": 4520,
                          "luxury": 4980,
                          "superior_luxury": 6220
                      },
                      "4": {
                          "economy": 3980,
                          "comfort": 4380,
                          "luxury": 4820,
                          "superior_luxury": 6020
                      },
                      "5": {
                          "economy": 3890,
                          "comfort": 4280,
                          "luxury": 4710,
                          "superior_luxury": 5890
                      },
                      "6-7": {
                          "economy": 3760,
                          "comfort": 4140,
                          "luxury": 4550,
                          "superior_luxury": 5690
                      },
                      "srs": {
                          "economy": 480,
                          "comfort": 620,
                          "luxury": 760,
                          "superior_luxury": 960
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 8120,
                          "comfort": 8930,
                          "luxury": 9830,
                          "superior_luxury": 12280
                      },
                      "2": {
                          "economy": 5080,
                          "comfort": 5580,
                          "luxury": 6140,
                          "superior_luxury": 7680
                      },
                      "3": {
                          "economy": 4770,
                          "comfort": 5250,
                          "luxury": 5770,
                          "superior_luxury": 7220
                      },
                      "4": {
                          "economy": 4620,
                          "comfort": 5080,
                          "luxury": 5590,
                          "superior_luxury": 6990
                      },
                      "5": {
                          "economy": 4520,
                          "comfort": 4970,
                          "luxury": 5470,
                          "superior_luxury": 6830
                      },
                      "6-7": {
                          "economy": 4360,
                          "comfort": 4800,
                          "luxury": 5280,
                          "superior_luxury": 6600
                      },
                      "srs": {
                          "economy": 560,
                          "comfort": 720,
                          "luxury": 880,
                          "superior_luxury": 1120
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge",
              "Amaan Beach Bungalows"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge",
              "DoubleTree Resort by Hilton Zanzibar"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Sea Cliff Resort & Spa"
          ],
          "superior_luxury": [
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "The Residence Zanzibar",
              "Park Hyatt Zanzibar"
          ]
      }
  },
  "14-day-ultimate-tanzania-safari-and-zanzibar": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 6000,
                          "comfort": 6600,
                          "luxury": 7260,
                          "superior_luxury": 9080
                      },
                      "2": {
                          "economy": 3750,
                          "comfort": 4130,
                          "luxury": 4540,
                          "superior_luxury": 5670
                      },
                      "3": {
                          "economy": 3530,
                          "comfort": 3880,
                          "luxury": 4270,
                          "superior_luxury": 5330
                      },
                      "4": {
                          "economy": 3410,
                          "comfort": 3750,
                          "luxury": 4130,
                          "superior_luxury": 5160
                      },
                      "5": {
                          "economy": 3340,
                          "comfort": 3670,
                          "luxury": 4040,
                          "superior_luxury": 5050
                      },
                      "6-7": {
                          "economy": 3230,
                          "comfort": 3550,
                          "luxury": 3900,
                          "superior_luxury": 4880
                      },
                      "srs": {
                          "economy": 390,
                          "comfort": 500,
                          "luxury": 610,
                          "superior_luxury": 770
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 6600,
                          "comfort": 7260,
                          "luxury": 7990,
                          "superior_luxury": 9980
                      },
                      "2": {
                          "economy": 4130,
                          "comfort": 4540,
                          "luxury": 4990,
                          "superior_luxury": 6240
                      },
                      "3": {
                          "economy": 3880,
                          "comfort": 4270,
                          "luxury": 4690,
                          "superior_luxury": 5860
                      },
                      "4": {
                          "economy": 3750,
                          "comfort": 4130,
                          "luxury": 4540,
                          "superior_luxury": 5680
                      },
                      "5": {
                          "economy": 3670,
                          "comfort": 4040,
                          "luxury": 4440,
                          "superior_luxury": 5550
                      },
                      "6-7": {
                          "economy": 3550,
                          "comfort": 3900,
                          "luxury": 4290,
                          "superior_luxury": 5370
                      },
                      "srs": {
                          "economy": 420,
                          "comfort": 540,
                          "luxury": 670,
                          "superior_luxury": 850
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 7500,
                          "comfort": 8250,
                          "luxury": 9080,
                          "superior_luxury": 11340
                      },
                      "2": {
                          "economy": 4690,
                          "comfort": 5160,
                          "luxury": 5670,
                          "superior_luxury": 7090
                      },
                      "3": {
                          "economy": 4410,
                          "comfort": 4850,
                          "luxury": 5330,
                          "superior_luxury": 6660
                      },
                      "4": {
                          "economy": 4270,
                          "comfort": 4690,
                          "luxury": 5160,
                          "superior_luxury": 6450
                      },
                      "5": {
                          "economy": 4170,
                          "comfort": 4590,
                          "luxury": 5050,
                          "superior_luxury": 6310
                      },
                      "6-7": {
                          "economy": 4030,
                          "comfort": 4430,
                          "luxury": 4880,
                          "superior_luxury": 6100
                      },
                      "srs": {
                          "economy": 480,
                          "comfort": 620,
                          "luxury": 760,
                          "superior_luxury": 960
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 8700,
                          "comfort": 9570,
                          "luxury": 10530,
                          "superior_luxury": 13160
                      },
                      "2": {
                          "economy": 5440,
                          "comfort": 5980,
                          "luxury": 6580,
                          "superior_luxury": 8220
                      },
                      "3": {
                          "economy": 5110,
                          "comfort": 5620,
                          "luxury": 6180,
                          "superior_luxury": 7730
                      },
                      "4": {
                          "economy": 4950,
                          "comfort": 5440,
                          "luxury": 5990,
                          "superior_luxury": 7480
                      },
                      "5": {
                          "economy": 4840,
                          "comfort": 5320,
                          "luxury": 5860,
                          "superior_luxury": 7320
                      },
                      "6-7": {
                          "economy": 4680,
                          "comfort": 5140,
                          "luxury": 5660,
                          "superior_luxury": 7070
                      },
                      "srs": {
                          "economy": 560,
                          "comfort": 720,
                          "luxury": 880,
                          "superior_luxury": 1120
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge",
              "Amaan Beach Bungalows"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge",
              "DoubleTree Resort by Hilton Zanzibar"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Sea Cliff Resort & Spa"
          ],
          "superior_luxury": [
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "The Residence Zanzibar",
              "Park Hyatt Zanzibar"
          ]
      }
  },
  "4-day-ngorongoro-and-manyara-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1840,
                          "comfort": 2020,
                          "luxury": 2230,
                          "superior_luxury": 2780
                      },
                      "2": {
                          "economy": 1150,
                          "comfort": 1270,
                          "luxury": 1390,
                          "superior_luxury": 1740
                      },
                      "3": {
                          "economy": 1080,
                          "comfort": 1190,
                          "luxury": 1310,
                          "superior_luxury": 1640
                      },
                      "4": {
                          "economy": 1050,
                          "comfort": 1150,
                          "luxury": 1270,
                          "superior_luxury": 1580
                      },
                      "5": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "6-7": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2020,
                          "comfort": 2230,
                          "luxury": 2450,
                          "superior_luxury": 3060
                      },
                      "2": {
                          "economy": 1270,
                          "comfort": 1390,
                          "luxury": 1530,
                          "superior_luxury": 1910
                      },
                      "3": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1440,
                          "superior_luxury": 1800
                      },
                      "4": {
                          "economy": 1150,
                          "comfort": 1270,
                          "luxury": 1390,
                          "superior_luxury": 1740
                      },
                      "5": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "6-7": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2300,
                          "comfort": 2530,
                          "luxury": 2780,
                          "superior_luxury": 3480
                      },
                      "2": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2170
                      },
                      "3": {
                          "economy": 1350,
                          "comfort": 1490,
                          "luxury": 1640,
                          "superior_luxury": 2040
                      },
                      "4": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1980
                      },
                      "5": {
                          "economy": 1280,
                          "comfort": 1410,
                          "luxury": 1550,
                          "superior_luxury": 1940
                      },
                      "6-7": {
                          "economy": 1240,
                          "comfort": 1360,
                          "luxury": 1500,
                          "superior_luxury": 1870
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2670,
                          "comfort": 2930,
                          "luxury": 3230,
                          "superior_luxury": 4040
                      },
                      "2": {
                          "economy": 1670,
                          "comfort": 1830,
                          "luxury": 2020,
                          "superior_luxury": 2520
                      },
                      "3": {
                          "economy": 1570,
                          "comfort": 1720,
                          "luxury": 1900,
                          "superior_luxury": 2370
                      },
                      "4": {
                          "economy": 1520,
                          "comfort": 1670,
                          "luxury": 1840,
                          "superior_luxury": 2300
                      },
                      "5": {
                          "economy": 1480,
                          "comfort": 1630,
                          "luxury": 1800,
                          "superior_luxury": 2240
                      },
                      "6-7": {
                          "economy": 1430,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2170
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Lake Manyara Wildlife Lodge",
              "Rhino Lodge",
              "Hhando Coffee Lodge"
          ],
          "comfort": [
              "Lake Manyara Serena Safari Lodge",
              "Ngorongoro Sopa Lodge",
              "Kitela Lodge"
          ],
          "luxury": [
              "&Beyond Lake Manyara Tree Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Lemala Ngorongoro Tented Camp"
          ],
          "superior_luxury": [
              "Gibb's Farm",
              "&Beyond Ngorongoro Crater Lodge",
              "The Highlands Ngorongoro"
          ]
      }
  },
  "6-day-tanzania-family-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2880,
                          "comfort": 3170,
                          "luxury": 3480,
                          "superior_luxury": 4360
                      },
                      "2": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2180,
                          "superior_luxury": 2720
                      },
                      "3": {
                          "economy": 1690,
                          "comfort": 1860,
                          "luxury": 2050,
                          "superior_luxury": 2560
                      },
                      "4": {
                          "economy": 1640,
                          "comfort": 1800,
                          "luxury": 1980,
                          "superior_luxury": 2480
                      },
                      "5": {
                          "economy": 1600,
                          "comfort": 1760,
                          "luxury": 1940,
                          "superior_luxury": 2420
                      },
                      "6-7": {
                          "economy": 1550,
                          "comfort": 1700,
                          "luxury": 1870,
                          "superior_luxury": 2340
                      },
                      "srs": {
                          "economy": 210,
                          "comfort": 270,
                          "luxury": 330,
                          "superior_luxury": 420
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 3170,
                          "comfort": 3480,
                          "luxury": 3830,
                          "superior_luxury": 4790
                      },
                      "2": {
                          "economy": 1980,
                          "comfort": 2180,
                          "luxury": 2400,
                          "superior_luxury": 2990
                      },
                      "3": {
                          "economy": 1860,
                          "comfort": 2050,
                          "luxury": 2250,
                          "superior_luxury": 2820
                      },
                      "4": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2180,
                          "superior_luxury": 2730
                      },
                      "5": {
                          "economy": 1760,
                          "comfort": 1940,
                          "luxury": 2130,
                          "superior_luxury": 2670
                      },
                      "6-7": {
                          "economy": 1700,
                          "comfort": 1870,
                          "luxury": 2060,
                          "superior_luxury": 2580
                      },
                      "srs": {
                          "economy": 230,
                          "comfort": 300,
                          "luxury": 360,
                          "superior_luxury": 460
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 3600,
                          "comfort": 3960,
                          "luxury": 4360,
                          "superior_luxury": 5450
                      },
                      "2": {
                          "economy": 2250,
                          "comfort": 2480,
                          "luxury": 2720,
                          "superior_luxury": 3400
                      },
                      "3": {
                          "economy": 2120,
                          "comfort": 2330,
                          "luxury": 2560,
                          "superior_luxury": 3200
                      },
                      "4": {
                          "economy": 2050,
                          "comfort": 2250,
                          "luxury": 2480,
                          "superior_luxury": 3100
                      },
                      "5": {
                          "economy": 2000,
                          "comfort": 2200,
                          "luxury": 2420,
                          "superior_luxury": 3030
                      },
                      "6-7": {
                          "economy": 1940,
                          "comfort": 2130,
                          "luxury": 2340,
                          "superior_luxury": 2930
                      },
                      "srs": {
                          "economy": 260,
                          "comfort": 340,
                          "luxury": 410,
                          "superior_luxury": 530
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 4180,
                          "comfort": 4590,
                          "luxury": 5050,
                          "superior_luxury": 6320
                      },
                      "2": {
                          "economy": 2610,
                          "comfort": 2870,
                          "luxury": 3160,
                          "superior_luxury": 3950
                      },
                      "3": {
                          "economy": 2450,
                          "comfort": 2700,
                          "luxury": 2970,
                          "superior_luxury": 3710
                      },
                      "4": {
                          "economy": 2380,
                          "comfort": 2610,
                          "luxury": 2870,
                          "superior_luxury": 3590
                      },
                      "5": {
                          "economy": 2320,
                          "comfort": 2560,
                          "luxury": 2810,
                          "superior_luxury": 3510
                      },
                      "6-7": {
                          "economy": 2240,
                          "comfort": 2470,
                          "luxury": 2720,
                          "superior_luxury": 3390
                      },
                      "srs": {
                          "economy": 300,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "Singita Sabora Tented Camp",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  },
  "5-day-tanzania-honeymoon-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 3040,
                          "comfort": 3340,
                          "luxury": 3680,
                          "superior_luxury": 4600
                      },
                      "2": {
                          "economy": 1900,
                          "comfort": 2090,
                          "luxury": 2300,
                          "superior_luxury": 2870
                      },
                      "3": {
                          "economy": 1790,
                          "comfort": 1960,
                          "luxury": 2160,
                          "superior_luxury": 2700
                      },
                      "4": {
                          "economy": 1730,
                          "comfort": 1900,
                          "luxury": 2090,
                          "superior_luxury": 2620
                      },
                      "5": {
                          "economy": 1690,
                          "comfort": 1860,
                          "luxury": 2050,
                          "superior_luxury": 2560
                      },
                      "6-7": {
                          "economy": 1630,
                          "comfort": 1800,
                          "luxury": 1980,
                          "superior_luxury": 2470
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 3340,
                          "comfort": 3680,
                          "luxury": 4050,
                          "superior_luxury": 5060
                      },
                      "2": {
                          "economy": 2090,
                          "comfort": 2300,
                          "luxury": 2530,
                          "superior_luxury": 3160
                      },
                      "3": {
                          "economy": 1960,
                          "comfort": 2160,
                          "luxury": 2380,
                          "superior_luxury": 2970
                      },
                      "4": {
                          "economy": 1900,
                          "comfort": 2090,
                          "luxury": 2300,
                          "superior_luxury": 2880
                      },
                      "5": {
                          "economy": 1860,
                          "comfort": 2050,
                          "luxury": 2250,
                          "superior_luxury": 2810
                      },
                      "6-7": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2170,
                          "superior_luxury": 2720
                      },
                      "srs": {
                          "economy": 190,
                          "comfort": 250,
                          "luxury": 300,
                          "superior_luxury": 390
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 3800,
                          "comfort": 4180,
                          "luxury": 4600,
                          "superior_luxury": 5750
                      },
                      "2": {
                          "economy": 2380,
                          "comfort": 2610,
                          "luxury": 2870,
                          "superior_luxury": 3590
                      },
                      "3": {
                          "economy": 2230,
                          "comfort": 2460,
                          "luxury": 2700,
                          "superior_luxury": 3380
                      },
                      "4": {
                          "economy": 2160,
                          "comfort": 2380,
                          "luxury": 2620,
                          "superior_luxury": 3270
                      },
                      "5": {
                          "economy": 2110,
                          "comfort": 2330,
                          "luxury": 2560,
                          "superior_luxury": 3200
                      },
                      "6-7": {
                          "economy": 2040,
                          "comfort": 2250,
                          "luxury": 2470,
                          "superior_luxury": 3090
                      },
                      "srs": {
                          "economy": 220,
                          "comfort": 280,
                          "luxury": 340,
                          "superior_luxury": 440
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 4410,
                          "comfort": 4850,
                          "luxury": 5330,
                          "superior_luxury": 6670
                      },
                      "2": {
                          "economy": 2760,
                          "comfort": 3030,
                          "luxury": 3330,
                          "superior_luxury": 4170
                      },
                      "3": {
                          "economy": 2590,
                          "comfort": 2850,
                          "luxury": 3130,
                          "superior_luxury": 3920
                      },
                      "4": {
                          "economy": 2510,
                          "comfort": 2760,
                          "luxury": 3030,
                          "superior_luxury": 3790
                      },
                      "5": {
                          "economy": 2450,
                          "comfort": 2700,
                          "luxury": 2970,
                          "superior_luxury": 3710
                      },
                      "6-7": {
                          "economy": 2370,
                          "comfort": 2610,
                          "luxury": 2870,
                          "superior_luxury": 3580
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 330,
                          "luxury": 400,
                          "superior_luxury": 510
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Oliver's Camp",
              "Singita Sabora Tented Camp",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  },
  "4-day-serengeti-calving-season-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2160,
                          "comfort": 2380,
                          "luxury": 2610,
                          "superior_luxury": 3270
                      },
                      "2": {
                          "economy": 1350,
                          "comfort": 1490,
                          "luxury": 1630,
                          "superior_luxury": 2040
                      },
                      "3": {
                          "economy": 1270,
                          "comfort": 1400,
                          "luxury": 1540,
                          "superior_luxury": 1920
                      },
                      "4": {
                          "economy": 1230,
                          "comfort": 1350,
                          "luxury": 1490,
                          "superior_luxury": 1860
                      },
                      "5": {
                          "economy": 1200,
                          "comfort": 1320,
                          "luxury": 1450,
                          "superior_luxury": 1820
                      },
                      "6-7": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1400,
                          "superior_luxury": 1760
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2380,
                          "comfort": 2610,
                          "luxury": 2870,
                          "superior_luxury": 3590
                      },
                      "2": {
                          "economy": 1490,
                          "comfort": 1630,
                          "luxury": 1800,
                          "superior_luxury": 2250
                      },
                      "3": {
                          "economy": 1400,
                          "comfort": 1540,
                          "luxury": 1690,
                          "superior_luxury": 2110
                      },
                      "4": {
                          "economy": 1350,
                          "comfort": 1490,
                          "luxury": 1640,
                          "superior_luxury": 2040
                      },
                      "5": {
                          "economy": 1320,
                          "comfort": 1450,
                          "luxury": 1600,
                          "superior_luxury": 2000
                      },
                      "6-7": {
                          "economy": 1280,
                          "comfort": 1400,
                          "luxury": 1550,
                          "superior_luxury": 1930
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2700,
                          "comfort": 2970,
                          "luxury": 3270,
                          "superior_luxury": 4080
                      },
                      "2": {
                          "economy": 1690,
                          "comfort": 1860,
                          "luxury": 2040,
                          "superior_luxury": 2550
                      },
                      "3": {
                          "economy": 1590,
                          "comfort": 1740,
                          "luxury": 1920,
                          "superior_luxury": 2400
                      },
                      "4": {
                          "economy": 1540,
                          "comfort": 1690,
                          "luxury": 1860,
                          "superior_luxury": 2320
                      },
                      "5": {
                          "economy": 1500,
                          "comfort": 1650,
                          "luxury": 1820,
                          "superior_luxury": 2270
                      },
                      "6-7": {
                          "economy": 1450,
                          "comfort": 1600,
                          "luxury": 1760,
                          "superior_luxury": 2200
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3130,
                          "comfort": 3450,
                          "luxury": 3790,
                          "superior_luxury": 4740
                      },
                      "2": {
                          "economy": 1960,
                          "comfort": 2150,
                          "luxury": 2370,
                          "superior_luxury": 2960
                      },
                      "3": {
                          "economy": 1840,
                          "comfort": 2020,
                          "luxury": 2230,
                          "superior_luxury": 2780
                      },
                      "4": {
                          "economy": 1780,
                          "comfort": 1960,
                          "luxury": 2160,
                          "superior_luxury": 2690
                      },
                      "5": {
                          "economy": 1740,
                          "comfort": 1920,
                          "luxury": 2110,
                          "superior_luxury": 2640
                      },
                      "6-7": {
                          "economy": 1680,
                          "comfort": 1850,
                          "luxury": 2040,
                          "superior_luxury": 2550
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Ndutu Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Lake Masek Tented Camp",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Lemala Ndutu Tented Camp",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "&Beyond Serengeti Under Canvas",
              "The Highlands Ngorongoro",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  },
  "7-day-masai-mara-to-serengeti-migration-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 4320,
                          "comfort": 4750,
                          "luxury": 5230,
                          "superior_luxury": 6530
                      },
                      "2": {
                          "economy": 2700,
                          "comfort": 2970,
                          "luxury": 3270,
                          "superior_luxury": 4080
                      },
                      "3": {
                          "economy": 2540,
                          "comfort": 2790,
                          "luxury": 3070,
                          "superior_luxury": 3840
                      },
                      "4": {
                          "economy": 2460,
                          "comfort": 2700,
                          "luxury": 2970,
                          "superior_luxury": 3720
                      },
                      "5": {
                          "economy": 2400,
                          "comfort": 2640,
                          "luxury": 2910,
                          "superior_luxury": 3630
                      },
                      "6-7": {
                          "economy": 2320,
                          "comfort": 2550,
                          "luxury": 2810,
                          "superior_luxury": 3510
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 320,
                          "luxury": 390,
                          "superior_luxury": 490
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 4750,
                          "comfort": 5230,
                          "luxury": 5750,
                          "superior_luxury": 7190
                      },
                      "2": {
                          "economy": 2970,
                          "comfort": 3270,
                          "luxury": 3590,
                          "superior_luxury": 4490
                      },
                      "3": {
                          "economy": 2790,
                          "comfort": 3070,
                          "luxury": 3380,
                          "superior_luxury": 4220
                      },
                      "4": {
                          "economy": 2700,
                          "comfort": 2970,
                          "luxury": 3270,
                          "superior_luxury": 4090
                      },
                      "5": {
                          "economy": 2640,
                          "comfort": 2910,
                          "luxury": 3200,
                          "superior_luxury": 4000
                      },
                      "6-7": {
                          "economy": 2550,
                          "comfort": 2810,
                          "luxury": 3090,
                          "superior_luxury": 3860
                      },
                      "srs": {
                          "economy": 270,
                          "comfort": 350,
                          "luxury": 420,
                          "superior_luxury": 540
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 5400,
                          "comfort": 5940,
                          "luxury": 6530,
                          "superior_luxury": 8170
                      },
                      "2": {
                          "economy": 3380,
                          "comfort": 3710,
                          "luxury": 4080,
                          "superior_luxury": 5100
                      },
                      "3": {
                          "economy": 3170,
                          "comfort": 3490,
                          "luxury": 3840,
                          "superior_luxury": 4800
                      },
                      "4": {
                          "economy": 3070,
                          "comfort": 3380,
                          "luxury": 3720,
                          "superior_luxury": 4650
                      },
                      "5": {
                          "economy": 3000,
                          "comfort": 3300,
                          "luxury": 3630,
                          "superior_luxury": 4540
                      },
                      "6-7": {
                          "economy": 2900,
                          "comfort": 3190,
                          "luxury": 3510,
                          "superior_luxury": 4390
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 6260,
                          "comfort": 6890,
                          "luxury": 7580,
                          "superior_luxury": 9470
                      },
                      "2": {
                          "economy": 3920,
                          "comfort": 4310,
                          "luxury": 4740,
                          "superior_luxury": 5920
                      },
                      "3": {
                          "economy": 3680,
                          "comfort": 4050,
                          "luxury": 4450,
                          "superior_luxury": 5570
                      },
                      "4": {
                          "economy": 3560,
                          "comfort": 3920,
                          "luxury": 4310,
                          "superior_luxury": 5390
                      },
                      "5": {
                          "economy": 3480,
                          "comfort": 3830,
                          "luxury": 4220,
                          "superior_luxury": 5270
                      },
                      "6-7": {
                          "economy": 3370,
                          "comfort": 3700,
                          "luxury": 4070,
                          "superior_luxury": 5090
                      },
                      "srs": {
                          "economy": 360,
                          "comfort": 460,
                          "luxury": 560,
                          "superior_luxury": 710
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Mara Chui Camp",
              "Tarangire Safari Lodge",
              "Seronera Wildlife Lodge",
              "Rhino Lodge"
          ],
          "comfort": [
              "Mara Sopa Lodge",
              "Tarangire Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Mara Serena Safari Lodge",
              "Tarangire Treetops",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge"
          ],
          "superior_luxury": [
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Oliver's Camp"
          ]
      }
  },
  "11-day-east-africa-explorer": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 7040,
                          "comfort": 7740,
                          "luxury": 8520,
                          "superior_luxury": 10650
                      },
                      "2": {
                          "economy": 4400,
                          "comfort": 4840,
                          "luxury": 5320,
                          "superior_luxury": 6660
                      },
                      "3": {
                          "economy": 4140,
                          "comfort": 4550,
                          "luxury": 5000,
                          "superior_luxury": 6260
                      },
                      "4": {
                          "economy": 4000,
                          "comfort": 4400,
                          "luxury": 4840,
                          "superior_luxury": 6060
                      },
                      "5": {
                          "economy": 3920,
                          "comfort": 4310,
                          "luxury": 4740,
                          "superior_luxury": 5920
                      },
                      "6-7": {
                          "economy": 3780,
                          "comfort": 4160,
                          "luxury": 4580,
                          "superior_luxury": 5720
                      },
                      "srs": {
                          "economy": 390,
                          "comfort": 500,
                          "luxury": 610,
                          "superior_luxury": 770
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 7740,
                          "comfort": 8520,
                          "luxury": 9370,
                          "superior_luxury": 11710
                      },
                      "2": {
                          "economy": 4840,
                          "comfort": 5320,
                          "luxury": 5860,
                          "superior_luxury": 7320
                      },
                      "3": {
                          "economy": 4550,
                          "comfort": 5000,
                          "luxury": 5510,
                          "superior_luxury": 6880
                      },
                      "4": {
                          "economy": 4400,
                          "comfort": 4840,
                          "luxury": 5330,
                          "superior_luxury": 6660
                      },
                      "5": {
                          "economy": 4310,
                          "comfort": 4740,
                          "luxury": 5210,
                          "superior_luxury": 6520
                      },
                      "6-7": {
                          "economy": 4160,
                          "comfort": 4580,
                          "luxury": 5040,
                          "superior_luxury": 6300
                      },
                      "srs": {
                          "economy": 420,
                          "comfort": 540,
                          "luxury": 670,
                          "superior_luxury": 850
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 8800,
                          "comfort": 9680,
                          "luxury": 10650,
                          "superior_luxury": 13310
                      },
                      "2": {
                          "economy": 5500,
                          "comfort": 6050,
                          "luxury": 6660,
                          "superior_luxury": 8320
                      },
                      "3": {
                          "economy": 5170,
                          "comfort": 5690,
                          "luxury": 6260,
                          "superior_luxury": 7820
                      },
                      "4": {
                          "economy": 5010,
                          "comfort": 5510,
                          "luxury": 6060,
                          "superior_luxury": 7570
                      },
                      "5": {
                          "economy": 4900,
                          "comfort": 5380,
                          "luxury": 5920,
                          "superior_luxury": 7400
                      },
                      "6-7": {
                          "economy": 4730,
                          "comfort": 5200,
                          "luxury": 5720,
                          "superior_luxury": 7150
                      },
                      "srs": {
                          "economy": 480,
                          "comfort": 620,
                          "luxury": 760,
                          "superior_luxury": 960
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 10210,
                          "comfort": 11230,
                          "luxury": 12350,
                          "superior_luxury": 15440
                      },
                      "2": {
                          "economy": 6380,
                          "comfort": 7020,
                          "luxury": 7720,
                          "superior_luxury": 9650
                      },
                      "3": {
                          "economy": 6000,
                          "comfort": 6600,
                          "luxury": 7260,
                          "superior_luxury": 9070
                      },
                      "4": {
                          "economy": 5810,
                          "comfort": 6390,
                          "luxury": 7030,
                          "superior_luxury": 8780
                      },
                      "5": {
                          "economy": 5680,
                          "comfort": 6250,
                          "luxury": 6870,
                          "superior_luxury": 8590
                      },
                      "6-7": {
                          "economy": 5490,
                          "comfort": 6040,
                          "luxury": 6640,
                          "superior_luxury": 8300
                      },
                      "srs": {
                          "economy": 560,
                          "comfort": 720,
                          "luxury": 880,
                          "superior_luxury": 1120
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Mara Chui Camp",
              "Seronera Wildlife Lodge",
              "Tarangire Safari Lodge"
          ],
          "comfort": [
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Mara Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Amboseli Serena Safari Lodge",
              "Mara Serena Safari Lodge",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Tarangire Treetops"
          ],
          "superior_luxury": [
              "Tawi Lodge",
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Oliver's Camp"
          ]
      }
  },
  "14-day-ultimate-east-africa-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 8960,
                          "comfort": 9860,
                          "luxury": 10840,
                          "superior_luxury": 13550
                      },
                      "2": {
                          "economy": 5600,
                          "comfort": 6160,
                          "luxury": 6780,
                          "superior_luxury": 8470
                      },
                      "3": {
                          "economy": 5260,
                          "comfort": 5790,
                          "luxury": 6370,
                          "superior_luxury": 7960
                      },
                      "4": {
                          "economy": 5100,
                          "comfort": 5610,
                          "luxury": 6170,
                          "superior_luxury": 7710
                      },
                      "5": {
                          "economy": 4980,
                          "comfort": 5480,
                          "luxury": 6030,
                          "superior_luxury": 7540
                      },
                      "6-7": {
                          "economy": 4820,
                          "comfort": 5300,
                          "luxury": 5830,
                          "superior_luxury": 7280
                      },
                      "srs": {
                          "economy": 490,
                          "comfort": 630,
                          "luxury": 770,
                          "superior_luxury": 980
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 9860,
                          "comfort": 10840,
                          "luxury": 11930,
                          "superior_luxury": 14910
                      },
                      "2": {
                          "economy": 6160,
                          "comfort": 6780,
                          "luxury": 7450,
                          "superior_luxury": 9320
                      },
                      "3": {
                          "economy": 5790,
                          "comfort": 6370,
                          "luxury": 7010,
                          "superior_luxury": 8760
                      },
                      "4": {
                          "economy": 5610,
                          "comfort": 6170,
                          "luxury": 6780,
                          "superior_luxury": 8480
                      },
                      "5": {
                          "economy": 5480,
                          "comfort": 6030,
                          "luxury": 6630,
                          "superior_luxury": 8290
                      },
                      "6-7": {
                          "economy": 5300,
                          "comfort": 5830,
                          "luxury": 6410,
                          "superior_luxury": 8010
                      },
                      "srs": {
                          "economy": 540,
                          "comfort": 690,
                          "luxury": 850,
                          "superior_luxury": 1080
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 11200,
                          "comfort": 12320,
                          "luxury": 13550,
                          "superior_luxury": 16940
                      },
                      "2": {
                          "economy": 7000,
                          "comfort": 7700,
                          "luxury": 8470,
                          "superior_luxury": 10590
                      },
                      "3": {
                          "economy": 6580,
                          "comfort": 7240,
                          "luxury": 7960,
                          "superior_luxury": 9950
                      },
                      "4": {
                          "economy": 6370,
                          "comfort": 7010,
                          "luxury": 7710,
                          "superior_luxury": 9630
                      },
                      "5": {
                          "economy": 6230,
                          "comfort": 6850,
                          "luxury": 7540,
                          "superior_luxury": 9420
                      },
                      "6-7": {
                          "economy": 6020,
                          "comfort": 6620,
                          "luxury": 7280,
                          "superior_luxury": 9110
                      },
                      "srs": {
                          "economy": 610,
                          "comfort": 790,
                          "luxury": 960,
                          "superior_luxury": 1230
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 12990,
                          "comfort": 14290,
                          "luxury": 15720,
                          "superior_luxury": 19650
                      },
                      "2": {
                          "economy": 8120,
                          "comfort": 8930,
                          "luxury": 9830,
                          "superior_luxury": 12280
                      },
                      "3": {
                          "economy": 7630,
                          "comfort": 8400,
                          "luxury": 9240,
                          "superior_luxury": 11540
                      },
                      "4": {
                          "economy": 7390,
                          "comfort": 8130,
                          "luxury": 8940,
                          "superior_luxury": 11180
                      },
                      "5": {
                          "economy": 7230,
                          "comfort": 7950,
                          "luxury": 8740,
                          "superior_luxury": 10930
                      },
                      "6-7": {
                          "economy": 6980,
                          "comfort": 7680,
                          "luxury": 8450,
                          "superior_luxury": 10560
                      },
                      "srs": {
                          "economy": 710,
                          "comfort": 910,
                          "luxury": 1120,
                          "superior_luxury": 1420
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Mara Chui Camp",
              "Seronera Wildlife Lodge",
              "Tarangire Safari Lodge"
          ],
          "comfort": [
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Mara Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Amboseli Serena Safari Lodge",
              "Mara Serena Safari Lodge",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Tarangire Treetops"
          ],
          "superior_luxury": [
              "Tawi Lodge",
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Oliver's Camp"
          ]
      }
  },
  "15-day-kenya-tanzania-grand-safari-tour": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 9600,
                          "comfort": 10560,
                          "luxury": 11620,
                          "superior_luxury": 14520
                      },
                      "2": {
                          "economy": 6000,
                          "comfort": 6600,
                          "luxury": 7260,
                          "superior_luxury": 9080
                      },
                      "3": {
                          "economy": 5640,
                          "comfort": 6200,
                          "luxury": 6820,
                          "superior_luxury": 8530
                      },
                      "4": {
                          "economy": 5460,
                          "comfort": 6010,
                          "luxury": 6610,
                          "superior_luxury": 8260
                      },
                      "5": {
                          "economy": 5340,
                          "comfort": 5870,
                          "luxury": 6460,
                          "superior_luxury": 8080
                      },
                      "6-7": {
                          "economy": 5160,
                          "comfort": 5680,
                          "luxury": 6240,
                          "superior_luxury": 7800
                      },
                      "srs": {
                          "economy": 530,
                          "comfort": 680,
                          "luxury": 830,
                          "superior_luxury": 1050
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 10560,
                          "comfort": 11620,
                          "luxury": 12780,
                          "superior_luxury": 15970
                      },
                      "2": {
                          "economy": 6600,
                          "comfort": 7260,
                          "luxury": 7990,
                          "superior_luxury": 9980
                      },
                      "3": {
                          "economy": 6200,
                          "comfort": 6820,
                          "luxury": 7510,
                          "superior_luxury": 9380
                      },
                      "4": {
                          "economy": 6010,
                          "comfort": 6610,
                          "luxury": 7270,
                          "superior_luxury": 9080
                      },
                      "5": {
                          "economy": 5870,
                          "comfort": 6460,
                          "luxury": 7110,
                          "superior_luxury": 8880
                      },
                      "6-7": {
                          "economy": 5680,
                          "comfort": 6240,
                          "luxury": 6870,
                          "superior_luxury": 8580
                      },
                      "srs": {
                          "economy": 580,
                          "comfort": 740,
                          "luxury": 910,
                          "superior_luxury": 1160
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 12000,
                          "comfort": 13200,
                          "luxury": 14520,
                          "superior_luxury": 18150
                      },
                      "2": {
                          "economy": 7500,
                          "comfort": 8250,
                          "luxury": 9080,
                          "superior_luxury": 11340
                      },
                      "3": {
                          "economy": 7050,
                          "comfort": 7760,
                          "luxury": 8530,
                          "superior_luxury": 10660
                      },
                      "4": {
                          "economy": 6830,
                          "comfort": 7510,
                          "luxury": 8260,
                          "superior_luxury": 10320
                      },
                      "5": {
                          "economy": 6680,
                          "comfort": 7340,
                          "luxury": 8080,
                          "superior_luxury": 10100
                      },
                      "6-7": {
                          "economy": 6450,
                          "comfort": 7100,
                          "luxury": 7800,
                          "superior_luxury": 9760
                      },
                      "srs": {
                          "economy": 660,
                          "comfort": 840,
                          "luxury": 1030,
                          "superior_luxury": 1310
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 13920,
                          "comfort": 15310,
                          "luxury": 16840,
                          "superior_luxury": 21050
                      },
                      "2": {
                          "economy": 8700,
                          "comfort": 9570,
                          "luxury": 10530,
                          "superior_luxury": 13160
                      },
                      "3": {
                          "economy": 8180,
                          "comfort": 9000,
                          "luxury": 9900,
                          "superior_luxury": 12370
                      },
                      "4": {
                          "economy": 7920,
                          "comfort": 8710,
                          "luxury": 9580,
                          "superior_luxury": 11970
                      },
                      "5": {
                          "economy": 7740,
                          "comfort": 8520,
                          "luxury": 9370,
                          "superior_luxury": 11710
                      },
                      "6-7": {
                          "economy": 7480,
                          "comfort": 8230,
                          "luxury": 9050,
                          "superior_luxury": 11320
                      },
                      "srs": {
                          "economy": 760,
                          "comfort": 980,
                          "luxury": 1200,
                          "superior_luxury": 1520
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Amboseli Sopa Lodge",
              "Lake Nakuru Lodge",
              "Mara Chui Camp",
              "Seronera Wildlife Lodge",
              "Tarangire Safari Lodge"
          ],
          "comfort": [
              "Ol Tukai Lodge",
              "Sarova Lion Hill Game Lodge",
              "Mara Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Amboseli Serena Safari Lodge",
              "Mara Serena Safari Lodge",
              "Serengeti Serena Safari Lodge",
              "Ngorongoro Serena Safari Lodge",
              "Tarangire Treetops"
          ],
          "superior_luxury": [
              "Tawi Lodge",
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge",
              "Oliver's Camp"
          ]
      }
  },
  "ol-pejeta-rhino-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1040,
                          "comfort": 1140,
                          "luxury": 1260,
                          "superior_luxury": 1570
                      },
                      "2": {
                          "economy": 650,
                          "comfort": 720,
                          "luxury": 790,
                          "superior_luxury": 980
                      },
                      "3": {
                          "economy": 610,
                          "comfort": 670,
                          "luxury": 740,
                          "superior_luxury": 920
                      },
                      "4": {
                          "economy": 590,
                          "comfort": 650,
                          "luxury": 720,
                          "superior_luxury": 890
                      },
                      "5": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 700,
                          "superior_luxury": 870
                      },
                      "6-7": {
                          "economy": 560,
                          "comfort": 610,
                          "luxury": 680,
                          "superior_luxury": 850
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1140,
                          "comfort": 1260,
                          "luxury": 1380,
                          "superior_luxury": 1730
                      },
                      "2": {
                          "economy": 720,
                          "comfort": 790,
                          "luxury": 870,
                          "superior_luxury": 1080
                      },
                      "3": {
                          "economy": 670,
                          "comfort": 740,
                          "luxury": 810,
                          "superior_luxury": 1020
                      },
                      "4": {
                          "economy": 650,
                          "comfort": 720,
                          "luxury": 790,
                          "superior_luxury": 980
                      },
                      "5": {
                          "economy": 640,
                          "comfort": 700,
                          "luxury": 770,
                          "superior_luxury": 960
                      },
                      "6-7": {
                          "economy": 610,
                          "comfort": 680,
                          "luxury": 740,
                          "superior_luxury": 930
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1300,
                          "comfort": 1430,
                          "luxury": 1570,
                          "superior_luxury": 1970
                      },
                      "2": {
                          "economy": 810,
                          "comfort": 890,
                          "luxury": 980,
                          "superior_luxury": 1230
                      },
                      "3": {
                          "economy": 760,
                          "comfort": 840,
                          "luxury": 920,
                          "superior_luxury": 1160
                      },
                      "4": {
                          "economy": 740,
                          "comfort": 810,
                          "luxury": 890,
                          "superior_luxury": 1120
                      },
                      "5": {
                          "economy": 720,
                          "comfort": 800,
                          "luxury": 870,
                          "superior_luxury": 1090
                      },
                      "6-7": {
                          "economy": 700,
                          "comfort": 770,
                          "luxury": 850,
                          "superior_luxury": 1060
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1510,
                          "comfort": 1660,
                          "luxury": 1820,
                          "superior_luxury": 2280
                      },
                      "2": {
                          "economy": 940,
                          "comfort": 1040,
                          "luxury": 1140,
                          "superior_luxury": 1430
                      },
                      "3": {
                          "economy": 890,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1340
                      },
                      "4": {
                          "economy": 860,
                          "comfort": 940,
                          "luxury": 1040,
                          "superior_luxury": 1300
                      },
                      "5": {
                          "economy": 840,
                          "comfort": 920,
                          "luxury": 1010,
                          "superior_luxury": 1270
                      },
                      "6-7": {
                          "economy": 810,
                          "comfort": 890,
                          "luxury": 980,
                          "superior_luxury": 1230
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Sweetwaters Serena Camp",
              "The Stables at Ol Pejeta",
              "Ol Pejeta Safari Cottages"
          ],
          "comfort": [
              "Porini Rhino Camp",
              "Kicheche Laikipia Camp",
              "Ol Pejeta Safari Cottages"
          ],
          "luxury": [
              "Ol Pejeta Bush Camp",
              "Kicheche Laikipia Camp",
              "Sweetwaters Serena Camp"
          ],
          "superior_luxury": [
              "Ol Pejeta House",
              "Segera Retreat",
              "Sirikoi Lodge"
          ]
      }
  },
  "samburu-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1200,
                          "comfort": 1320,
                          "luxury": 1450,
                          "superior_luxury": 1820
                      },
                      "2": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1130
                      },
                      "3": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 850,
                          "superior_luxury": 1070
                      },
                      "4": {
                          "economy": 680,
                          "comfort": 750,
                          "luxury": 830,
                          "superior_luxury": 1030
                      },
                      "5": {
                          "economy": 670,
                          "comfort": 730,
                          "luxury": 810,
                          "superior_luxury": 1010
                      },
                      "6-7": {
                          "economy": 650,
                          "comfort": 710,
                          "luxury": 780,
                          "superior_luxury": 980
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1320,
                          "comfort": 1450,
                          "luxury": 1600,
                          "superior_luxury": 2000
                      },
                      "2": {
                          "economy": 830,
                          "comfort": 910,
                          "luxury": 1000,
                          "superior_luxury": 1250
                      },
                      "3": {
                          "economy": 780,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "4": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1140
                      },
                      "5": {
                          "economy": 730,
                          "comfort": 810,
                          "luxury": 890,
                          "superior_luxury": 1110
                      },
                      "6-7": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 860,
                          "superior_luxury": 1070
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1500,
                          "comfort": 1650,
                          "luxury": 1820,
                          "superior_luxury": 2270
                      },
                      "2": {
                          "economy": 940,
                          "comfort": 1030,
                          "luxury": 1130,
                          "superior_luxury": 1420
                      },
                      "3": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1330
                      },
                      "4": {
                          "economy": 850,
                          "comfort": 940,
                          "luxury": 1030,
                          "superior_luxury": 1290
                      },
                      "5": {
                          "economy": 830,
                          "comfort": 920,
                          "luxury": 1010,
                          "superior_luxury": 1260
                      },
                      "6-7": {
                          "economy": 810,
                          "comfort": 890,
                          "luxury": 980,
                          "superior_luxury": 1220
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1740,
                          "comfort": 1910,
                          "luxury": 2110,
                          "superior_luxury": 2630
                      },
                      "2": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1640
                      },
                      "3": {
                          "economy": 1020,
                          "comfort": 1120,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "4": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "5": {
                          "economy": 970,
                          "comfort": 1060,
                          "luxury": 1170,
                          "superior_luxury": 1460
                      },
                      "6-7": {
                          "economy": 940,
                          "comfort": 1030,
                          "luxury": 1130,
                          "superior_luxury": 1410
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Ashnil Samburu Camp",
              "Samburu Riverside Camp"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Samburu Game Lodge",
              "Ashnil Samburu Camp"
          ],
          "luxury": [
              "Saruni Samburu",
              "Elephant Bedroom Camp",
              "Elephant Watch Camp"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Samburu Intrepids Camp",
              "Sarara Camp"
          ]
      }
  },
  "aberdares-rainforest-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 960,
                          "comfort": 1060,
                          "luxury": 1160,
                          "superior_luxury": 1450
                      },
                      "2": {
                          "economy": 600,
                          "comfort": 660,
                          "luxury": 730,
                          "superior_luxury": 910
                      },
                      "3": {
                          "economy": 560,
                          "comfort": 620,
                          "luxury": 680,
                          "superior_luxury": 850
                      },
                      "4": {
                          "economy": 550,
                          "comfort": 600,
                          "luxury": 660,
                          "superior_luxury": 830
                      },
                      "5": {
                          "economy": 530,
                          "comfort": 590,
                          "luxury": 650,
                          "superior_luxury": 810
                      },
                      "6-7": {
                          "economy": 520,
                          "comfort": 570,
                          "luxury": 620,
                          "superior_luxury": 780
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "2": {
                          "economy": 660,
                          "comfort": 730,
                          "luxury": 800,
                          "superior_luxury": 1000
                      },
                      "3": {
                          "economy": 620,
                          "comfort": 680,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "4": {
                          "economy": 600,
                          "comfort": 660,
                          "luxury": 730,
                          "superior_luxury": 910
                      },
                      "5": {
                          "economy": 590,
                          "comfort": 650,
                          "luxury": 710,
                          "superior_luxury": 890
                      },
                      "6-7": {
                          "economy": 570,
                          "comfort": 620,
                          "luxury": 690,
                          "superior_luxury": 860
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1200,
                          "comfort": 1320,
                          "luxury": 1450,
                          "superior_luxury": 1820
                      },
                      "2": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1130
                      },
                      "3": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 850,
                          "superior_luxury": 1070
                      },
                      "4": {
                          "economy": 680,
                          "comfort": 750,
                          "luxury": 830,
                          "superior_luxury": 1030
                      },
                      "5": {
                          "economy": 670,
                          "comfort": 730,
                          "luxury": 810,
                          "superior_luxury": 1010
                      },
                      "6-7": {
                          "economy": 650,
                          "comfort": 710,
                          "luxury": 780,
                          "superior_luxury": 980
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1390,
                          "comfort": 1530,
                          "luxury": 1680,
                          "superior_luxury": 2110
                      },
                      "2": {
                          "economy": 870,
                          "comfort": 960,
                          "luxury": 1050,
                          "superior_luxury": 1320
                      },
                      "3": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "4": {
                          "economy": 790,
                          "comfort": 870,
                          "luxury": 960,
                          "superior_luxury": 1200
                      },
                      "5": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "6-7": {
                          "economy": 750,
                          "comfort": 820,
                          "luxury": 910,
                          "superior_luxury": 1130
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "The Ark Lodge",
              "Rhino Watch Safari Lodge",
              "Aberdare Cottages"
          ],
          "comfort": [
              "Aberdare Country Club",
              "Rhino Watch Safari Lodge",
              "The Ark Lodge"
          ],
          "luxury": [
              "Treetops Lodge",
              "The Ark Lodge",
              "Aberdare Country Club"
          ],
          "superior_luxury": [
              "Sangare Ranch",
              "Giraffe Ark Game Lodge",
              "Treetops Lodge"
          ]
      }
  },
  "meru-national-park-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1280,
                          "comfort": 1410,
                          "luxury": 1550,
                          "superior_luxury": 1940
                      },
                      "2": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "3": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1140
                      },
                      "4": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "5": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 860,
                          "superior_luxury": 1080
                      },
                      "6-7": {
                          "economy": 690,
                          "comfort": 760,
                          "luxury": 830,
                          "superior_luxury": 1040
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1410,
                          "comfort": 1550,
                          "luxury": 1700,
                          "superior_luxury": 2130
                      },
                      "2": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1060,
                          "superior_luxury": 1330
                      },
                      "3": {
                          "economy": 830,
                          "comfort": 910,
                          "luxury": 1000,
                          "superior_luxury": 1250
                      },
                      "4": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "5": {
                          "economy": 780,
                          "comfort": 860,
                          "luxury": 950,
                          "superior_luxury": 1180
                      },
                      "6-7": {
                          "economy": 760,
                          "comfort": 830,
                          "luxury": 920,
                          "superior_luxury": 1140
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1600,
                          "comfort": 1760,
                          "luxury": 1940,
                          "superior_luxury": 2420
                      },
                      "2": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "3": {
                          "economy": 940,
                          "comfort": 1030,
                          "luxury": 1140,
                          "superior_luxury": 1420
                      },
                      "4": {
                          "economy": 910,
                          "comfort": 1000,
                          "luxury": 1100,
                          "superior_luxury": 1380
                      },
                      "5": {
                          "economy": 890,
                          "comfort": 980,
                          "luxury": 1080,
                          "superior_luxury": 1350
                      },
                      "6-7": {
                          "economy": 860,
                          "comfort": 950,
                          "luxury": 1040,
                          "superior_luxury": 1300
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1860,
                          "comfort": 2040,
                          "luxury": 2250,
                          "superior_luxury": 2810
                      },
                      "2": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1400,
                          "superior_luxury": 1750
                      },
                      "3": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "4": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "5": {
                          "economy": 1030,
                          "comfort": 1140,
                          "luxury": 1250,
                          "superior_luxury": 1560
                      },
                      "6-7": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Elsa's Kopje Meru",
              "Ikweta Safari Camp",
              "Rhino River Camp"
          ],
          "comfort": [
              "Ikweta Safari Camp",
              "Rhino River Camp",
              "Leopard Rock Lodge"
          ],
          "luxury": [
              "Leopard Rock Lodge",
              "Elsa's Kopje Meru",
              "Rhino River Camp"
          ],
          "superior_luxury": [
              "Offbeat Meru Camp",
              "Elsa's Kopje Meru",
              "Leopard Rock Lodge"
          ]
      }
  },
  "samburu-ol-pejeta-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2180
                      },
                      "2": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "3": {
                          "economy": 850,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "4": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "5": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "6-7": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1580,
                          "comfort": 1740,
                          "luxury": 1920,
                          "superior_luxury": 2400
                      },
                      "2": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "3": {
                          "economy": 930,
                          "comfort": 1020,
                          "luxury": 1130,
                          "superior_luxury": 1410
                      },
                      "4": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "5": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1330
                      },
                      "6-7": {
                          "economy": 850,
                          "comfort": 940,
                          "luxury": 1030,
                          "superior_luxury": 1290
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2180,
                          "superior_luxury": 2720
                      },
                      "2": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "3": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "4": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "5": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "6-7": {
                          "economy": 970,
                          "comfort": 1060,
                          "luxury": 1170,
                          "superior_luxury": 1460
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2090,
                          "comfort": 2300,
                          "luxury": 2530,
                          "superior_luxury": 3160
                      },
                      "2": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1970
                      },
                      "3": {
                          "economy": 1230,
                          "comfort": 1350,
                          "luxury": 1480,
                          "superior_luxury": 1860
                      },
                      "4": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1440,
                          "superior_luxury": 1800
                      },
                      "5": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1410,
                          "superior_luxury": 1760
                      },
                      "6-7": {
                          "economy": 1120,
                          "comfort": 1230,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Sweetwaters Serena Camp",
              "The Stables at Ol Pejeta"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Porini Rhino Camp",
              "Samburu Game Lodge"
          ],
          "luxury": [
              "Saruni Samburu",
              "Ol Pejeta Bush Camp",
              "Elephant Bedroom Camp"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Ol Pejeta House",
              "Samburu Intrepids Camp"
          ]
      }
  },
  "northern-kenya-grand-safari-to-diani-beach": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2320,
                          "comfort": 2550,
                          "luxury": 2810,
                          "superior_luxury": 3510
                      },
                      "2": {
                          "economy": 1450,
                          "comfort": 1600,
                          "luxury": 1750,
                          "superior_luxury": 2190
                      },
                      "3": {
                          "economy": 1360,
                          "comfort": 1500,
                          "luxury": 1650,
                          "superior_luxury": 2060
                      },
                      "4": {
                          "economy": 1320,
                          "comfort": 1450,
                          "luxury": 1600,
                          "superior_luxury": 2000
                      },
                      "5": {
                          "economy": 1290,
                          "comfort": 1420,
                          "luxury": 1560,
                          "superior_luxury": 1950
                      },
                      "6-7": {
                          "economy": 1250,
                          "comfort": 1370,
                          "luxury": 1510,
                          "superior_luxury": 1890
                      },
                      "srs": {
                          "economy": 210,
                          "comfort": 270,
                          "luxury": 330,
                          "superior_luxury": 420
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2550,
                          "comfort": 2810,
                          "luxury": 3090,
                          "superior_luxury": 3860
                      },
                      "2": {
                          "economy": 1600,
                          "comfort": 1750,
                          "luxury": 1930,
                          "superior_luxury": 2410
                      },
                      "3": {
                          "economy": 1500,
                          "comfort": 1650,
                          "luxury": 1810,
                          "superior_luxury": 2270
                      },
                      "4": {
                          "economy": 1450,
                          "comfort": 1600,
                          "luxury": 1760,
                          "superior_luxury": 2200
                      },
                      "5": {
                          "economy": 1420,
                          "comfort": 1560,
                          "luxury": 1720,
                          "superior_luxury": 2150
                      },
                      "6-7": {
                          "economy": 1370,
                          "comfort": 1510,
                          "luxury": 1660,
                          "superior_luxury": 2070
                      },
                      "srs": {
                          "economy": 230,
                          "comfort": 300,
                          "luxury": 360,
                          "superior_luxury": 460
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2900,
                          "comfort": 3190,
                          "luxury": 3510,
                          "superior_luxury": 4390
                      },
                      "2": {
                          "economy": 1810,
                          "comfort": 1990,
                          "luxury": 2190,
                          "superior_luxury": 2740
                      },
                      "3": {
                          "economy": 1700,
                          "comfort": 1870,
                          "luxury": 2060,
                          "superior_luxury": 2580
                      },
                      "4": {
                          "economy": 1650,
                          "comfort": 1810,
                          "luxury": 2000,
                          "superior_luxury": 2490
                      },
                      "5": {
                          "economy": 1610,
                          "comfort": 1770,
                          "luxury": 1950,
                          "superior_luxury": 2440
                      },
                      "6-7": {
                          "economy": 1560,
                          "comfort": 1710,
                          "luxury": 1890,
                          "superior_luxury": 2360
                      },
                      "srs": {
                          "economy": 260,
                          "comfort": 340,
                          "luxury": 410,
                          "superior_luxury": 530
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3360,
                          "comfort": 3700,
                          "luxury": 4070,
                          "superior_luxury": 5090
                      },
                      "2": {
                          "economy": 2100,
                          "comfort": 2310,
                          "luxury": 2540,
                          "superior_luxury": 3180
                      },
                      "3": {
                          "economy": 1980,
                          "comfort": 2170,
                          "luxury": 2390,
                          "superior_luxury": 2990
                      },
                      "4": {
                          "economy": 1910,
                          "comfort": 2100,
                          "luxury": 2320,
                          "superior_luxury": 2890
                      },
                      "5": {
                          "economy": 1870,
                          "comfort": 2060,
                          "luxury": 2260,
                          "superior_luxury": 2830
                      },
                      "6-7": {
                          "economy": 1810,
                          "comfort": 1990,
                          "luxury": 2190,
                          "superior_luxury": 2730
                      },
                      "srs": {
                          "economy": 300,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Ikweta Safari Camp",
              "Sweetwaters Serena Camp",
              "The Ark Lodge"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Rhino River Camp",
              "Porini Rhino Camp",
              "Aberdare Country Club"
          ],
          "luxury": [
              "Saruni Samburu",
              "Leopard Rock Lodge",
              "Ol Pejeta Bush Camp",
              "Treetops Lodge"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Offbeat Meru Camp",
              "Ol Pejeta House",
              "Sangare Ranch"
          ]
      }
  },
  "3-day-samburu-wildlife-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1040,
                          "comfort": 1140,
                          "luxury": 1260,
                          "superior_luxury": 1570
                      },
                      "2": {
                          "economy": 650,
                          "comfort": 720,
                          "luxury": 790,
                          "superior_luxury": 980
                      },
                      "3": {
                          "economy": 610,
                          "comfort": 670,
                          "luxury": 740,
                          "superior_luxury": 920
                      },
                      "4": {
                          "economy": 590,
                          "comfort": 650,
                          "luxury": 720,
                          "superior_luxury": 890
                      },
                      "5": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 700,
                          "superior_luxury": 870
                      },
                      "6-7": {
                          "economy": 560,
                          "comfort": 610,
                          "luxury": 680,
                          "superior_luxury": 850
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1140,
                          "comfort": 1260,
                          "luxury": 1380,
                          "superior_luxury": 1730
                      },
                      "2": {
                          "economy": 720,
                          "comfort": 790,
                          "luxury": 870,
                          "superior_luxury": 1080
                      },
                      "3": {
                          "economy": 670,
                          "comfort": 740,
                          "luxury": 810,
                          "superior_luxury": 1020
                      },
                      "4": {
                          "economy": 650,
                          "comfort": 720,
                          "luxury": 790,
                          "superior_luxury": 980
                      },
                      "5": {
                          "economy": 640,
                          "comfort": 700,
                          "luxury": 770,
                          "superior_luxury": 960
                      },
                      "6-7": {
                          "economy": 610,
                          "comfort": 680,
                          "luxury": 740,
                          "superior_luxury": 930
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1300,
                          "comfort": 1430,
                          "luxury": 1570,
                          "superior_luxury": 1970
                      },
                      "2": {
                          "economy": 810,
                          "comfort": 890,
                          "luxury": 980,
                          "superior_luxury": 1230
                      },
                      "3": {
                          "economy": 760,
                          "comfort": 840,
                          "luxury": 920,
                          "superior_luxury": 1160
                      },
                      "4": {
                          "economy": 740,
                          "comfort": 810,
                          "luxury": 890,
                          "superior_luxury": 1120
                      },
                      "5": {
                          "economy": 720,
                          "comfort": 800,
                          "luxury": 870,
                          "superior_luxury": 1090
                      },
                      "6-7": {
                          "economy": 700,
                          "comfort": 770,
                          "luxury": 850,
                          "superior_luxury": 1060
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1510,
                          "comfort": 1660,
                          "luxury": 1820,
                          "superior_luxury": 2280
                      },
                      "2": {
                          "economy": 940,
                          "comfort": 1040,
                          "luxury": 1140,
                          "superior_luxury": 1430
                      },
                      "3": {
                          "economy": 890,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1340
                      },
                      "4": {
                          "economy": 860,
                          "comfort": 940,
                          "luxury": 1040,
                          "superior_luxury": 1300
                      },
                      "5": {
                          "economy": 840,
                          "comfort": 920,
                          "luxury": 1010,
                          "superior_luxury": 1270
                      },
                      "6-7": {
                          "economy": 810,
                          "comfort": 890,
                          "luxury": 980,
                          "superior_luxury": 1230
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Ashnil Samburu Camp",
              "Samburu Riverside Camp"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Samburu Game Lodge",
              "Ashnil Samburu Camp"
          ],
          "luxury": [
              "Saruni Samburu",
              "Elephant Bedroom Camp",
              "Elephant Watch Camp"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Samburu Intrepids Camp",
              "Sarara Camp"
          ]
      }
  },
  "3-day-ol-pejeta-conservancy-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "2": {
                          "economy": 620,
                          "comfort": 680,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "3": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 710,
                          "superior_luxury": 880
                      },
                      "4": {
                          "economy": 560,
                          "comfort": 620,
                          "luxury": 680,
                          "superior_luxury": 850
                      },
                      "5": {
                          "economy": 550,
                          "comfort": 610,
                          "luxury": 670,
                          "superior_luxury": 830
                      },
                      "6-7": {
                          "economy": 530,
                          "comfort": 590,
                          "luxury": 650,
                          "superior_luxury": 810
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "2": {
                          "economy": 680,
                          "comfort": 750,
                          "luxury": 830,
                          "superior_luxury": 1030
                      },
                      "3": {
                          "economy": 640,
                          "comfort": 710,
                          "luxury": 780,
                          "superior_luxury": 970
                      },
                      "4": {
                          "economy": 620,
                          "comfort": 680,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "5": {
                          "economy": 610,
                          "comfort": 670,
                          "luxury": 730,
                          "superior_luxury": 920
                      },
                      "6-7": {
                          "economy": 590,
                          "comfort": 650,
                          "luxury": 710,
                          "superior_luxury": 890
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1240,
                          "comfort": 1360,
                          "luxury": 1500,
                          "superior_luxury": 1880
                      },
                      "2": {
                          "economy": 780,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "3": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "4": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 850,
                          "superior_luxury": 1070
                      },
                      "5": {
                          "economy": 690,
                          "comfort": 760,
                          "luxury": 830,
                          "superior_luxury": 1040
                      },
                      "6-7": {
                          "economy": 670,
                          "comfort": 730,
                          "luxury": 810,
                          "superior_luxury": 1010
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2180
                      },
                      "2": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "3": {
                          "economy": 850,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "4": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "5": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "6-7": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Sweetwaters Serena Camp",
              "The Stables at Ol Pejeta",
              "Ol Pejeta Safari Cottages"
          ],
          "comfort": [
              "Porini Rhino Camp",
              "Kicheche Laikipia Camp",
              "Ol Pejeta Safari Cottages"
          ],
          "luxury": [
              "Ol Pejeta Bush Camp",
              "Kicheche Laikipia Camp",
              "Sweetwaters Serena Camp"
          ],
          "superior_luxury": [
              "Ol Pejeta House",
              "Segera Retreat",
              "Sirikoi Lodge"
          ]
      }
  },
  "3-day-aberdares-rainforest-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 930,
                          "comfort": 1020,
                          "luxury": 1120,
                          "superior_luxury": 1400
                      },
                      "2": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 700,
                          "superior_luxury": 880
                      },
                      "3": {
                          "economy": 550,
                          "comfort": 600,
                          "luxury": 660,
                          "superior_luxury": 820
                      },
                      "4": {
                          "economy": 530,
                          "comfort": 580,
                          "luxury": 640,
                          "superior_luxury": 800
                      },
                      "5": {
                          "economy": 520,
                          "comfort": 570,
                          "luxury": 620,
                          "superior_luxury": 780
                      },
                      "6-7": {
                          "economy": 500,
                          "comfort": 550,
                          "luxury": 600,
                          "superior_luxury": 750
                      },
                      "srs": {
                          "economy": 110,
                          "comfort": 140,
                          "luxury": 170,
                          "superior_luxury": 210
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1020,
                          "comfort": 1120,
                          "luxury": 1240,
                          "superior_luxury": 1540
                      },
                      "2": {
                          "economy": 640,
                          "comfort": 700,
                          "luxury": 770,
                          "superior_luxury": 960
                      },
                      "3": {
                          "economy": 600,
                          "comfort": 660,
                          "luxury": 730,
                          "superior_luxury": 910
                      },
                      "4": {
                          "economy": 580,
                          "comfort": 640,
                          "luxury": 700,
                          "superior_luxury": 880
                      },
                      "5": {
                          "economy": 570,
                          "comfort": 620,
                          "luxury": 690,
                          "superior_luxury": 860
                      },
                      "6-7": {
                          "economy": 550,
                          "comfort": 600,
                          "luxury": 660,
                          "superior_luxury": 830
                      },
                      "srs": {
                          "economy": 120,
                          "comfort": 150,
                          "luxury": 180,
                          "superior_luxury": 230
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1400,
                          "superior_luxury": 1750
                      },
                      "2": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "3": {
                          "economy": 680,
                          "comfort": 750,
                          "luxury": 820,
                          "superior_luxury": 1030
                      },
                      "4": {
                          "economy": 660,
                          "comfort": 730,
                          "luxury": 800,
                          "superior_luxury": 1000
                      },
                      "5": {
                          "economy": 650,
                          "comfort": 710,
                          "luxury": 780,
                          "superior_luxury": 980
                      },
                      "6-7": {
                          "economy": 620,
                          "comfort": 690,
                          "luxury": 750,
                          "superior_luxury": 940
                      },
                      "srs": {
                          "economy": 130,
                          "comfort": 170,
                          "luxury": 210,
                          "superior_luxury": 260
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1350,
                          "comfort": 1480,
                          "luxury": 1630,
                          "superior_luxury": 2040
                      },
                      "2": {
                          "economy": 840,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1270
                      },
                      "3": {
                          "economy": 790,
                          "comfort": 870,
                          "luxury": 960,
                          "superior_luxury": 1200
                      },
                      "4": {
                          "economy": 770,
                          "comfort": 840,
                          "luxury": 930,
                          "superior_luxury": 1160
                      },
                      "5": {
                          "economy": 750,
                          "comfort": 820,
                          "luxury": 910,
                          "superior_luxury": 1130
                      },
                      "6-7": {
                          "economy": 720,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1090
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 300
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "The Ark Lodge",
              "Rhino Watch Safari Lodge",
              "Aberdare Cottages"
          ],
          "comfort": [
              "Aberdare Country Club",
              "Rhino Watch Safari Lodge",
              "The Ark Lodge"
          ],
          "luxury": [
              "Treetops Lodge",
              "The Ark Lodge",
              "Aberdare Country Club"
          ],
          "superior_luxury": [
              "Sangare Ranch",
              "Giraffe Ark Game Lodge",
              "Treetops Lodge"
          ]
      }
  },
  "4-day-meru-national-park-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2180
                      },
                      "2": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "3": {
                          "economy": 850,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "4": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "5": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "6-7": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1580,
                          "comfort": 1740,
                          "luxury": 1920,
                          "superior_luxury": 2400
                      },
                      "2": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "3": {
                          "economy": 930,
                          "comfort": 1020,
                          "luxury": 1130,
                          "superior_luxury": 1410
                      },
                      "4": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "5": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1330
                      },
                      "6-7": {
                          "economy": 850,
                          "comfort": 940,
                          "luxury": 1030,
                          "superior_luxury": 1290
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2180,
                          "superior_luxury": 2720
                      },
                      "2": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "3": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "4": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "5": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "6-7": {
                          "economy": 970,
                          "comfort": 1060,
                          "luxury": 1170,
                          "superior_luxury": 1460
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2090,
                          "comfort": 2300,
                          "luxury": 2530,
                          "superior_luxury": 3160
                      },
                      "2": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1970
                      },
                      "3": {
                          "economy": 1230,
                          "comfort": 1350,
                          "luxury": 1480,
                          "superior_luxury": 1860
                      },
                      "4": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1440,
                          "superior_luxury": 1800
                      },
                      "5": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1410,
                          "superior_luxury": 1760
                      },
                      "6-7": {
                          "economy": 1120,
                          "comfort": 1230,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Elsa's Kopje Meru",
              "Ikweta Safari Camp",
              "Rhino River Camp"
          ],
          "comfort": [
              "Ikweta Safari Camp",
              "Rhino River Camp",
              "Leopard Rock Lodge"
          ],
          "luxury": [
              "Leopard Rock Lodge",
              "Elsa's Kopje Meru",
              "Rhino River Camp"
          ],
          "superior_luxury": [
              "Offbeat Meru Camp",
              "Elsa's Kopje Meru",
              "Leopard Rock Lodge"
          ]
      }
  },
  "4-day-samburu-ol-pejeta-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1440,
                          "comfort": 1580,
                          "luxury": 1740,
                          "superior_luxury": 2180
                      },
                      "2": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "3": {
                          "economy": 850,
                          "comfort": 930,
                          "luxury": 1020,
                          "superior_luxury": 1280
                      },
                      "4": {
                          "economy": 820,
                          "comfort": 900,
                          "luxury": 990,
                          "superior_luxury": 1240
                      },
                      "5": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "6-7": {
                          "economy": 770,
                          "comfort": 850,
                          "luxury": 940,
                          "superior_luxury": 1170
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1580,
                          "comfort": 1740,
                          "luxury": 1920,
                          "superior_luxury": 2400
                      },
                      "2": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "3": {
                          "economy": 930,
                          "comfort": 1020,
                          "luxury": 1130,
                          "superior_luxury": 1410
                      },
                      "4": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1360
                      },
                      "5": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1070,
                          "superior_luxury": 1330
                      },
                      "6-7": {
                          "economy": 850,
                          "comfort": 940,
                          "luxury": 1030,
                          "superior_luxury": 1290
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1800,
                          "comfort": 1980,
                          "luxury": 2180,
                          "superior_luxury": 2720
                      },
                      "2": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "3": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "4": {
                          "economy": 1020,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "5": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "6-7": {
                          "economy": 970,
                          "comfort": 1060,
                          "luxury": 1170,
                          "superior_luxury": 1460
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2090,
                          "comfort": 2300,
                          "luxury": 2530,
                          "superior_luxury": 3160
                      },
                      "2": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1970
                      },
                      "3": {
                          "economy": 1230,
                          "comfort": 1350,
                          "luxury": 1480,
                          "superior_luxury": 1860
                      },
                      "4": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1440,
                          "superior_luxury": 1800
                      },
                      "5": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1410,
                          "superior_luxury": 1760
                      },
                      "6-7": {
                          "economy": 1120,
                          "comfort": 1230,
                          "luxury": 1360,
                          "superior_luxury": 1700
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Sweetwaters Serena Camp",
              "The Stables at Ol Pejeta"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Porini Rhino Camp",
              "Samburu Game Lodge"
          ],
          "luxury": [
              "Saruni Samburu",
              "Ol Pejeta Bush Camp",
              "Elephant Bedroom Camp"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Ol Pejeta House",
              "Samburu Intrepids Camp"
          ]
      }
  },
  "4-day-aberdares-ol-pejeta-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1280,
                          "comfort": 1410,
                          "luxury": 1550,
                          "superior_luxury": 1940
                      },
                      "2": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "3": {
                          "economy": 750,
                          "comfort": 830,
                          "luxury": 910,
                          "superior_luxury": 1140
                      },
                      "4": {
                          "economy": 730,
                          "comfort": 800,
                          "luxury": 880,
                          "superior_luxury": 1100
                      },
                      "5": {
                          "economy": 710,
                          "comfort": 780,
                          "luxury": 860,
                          "superior_luxury": 1080
                      },
                      "6-7": {
                          "economy": 690,
                          "comfort": 760,
                          "luxury": 830,
                          "superior_luxury": 1040
                      },
                      "srs": {
                          "economy": 140,
                          "comfort": 180,
                          "luxury": 220,
                          "superior_luxury": 280
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1410,
                          "comfort": 1550,
                          "luxury": 1700,
                          "superior_luxury": 2130
                      },
                      "2": {
                          "economy": 880,
                          "comfort": 970,
                          "luxury": 1060,
                          "superior_luxury": 1330
                      },
                      "3": {
                          "economy": 830,
                          "comfort": 910,
                          "luxury": 1000,
                          "superior_luxury": 1250
                      },
                      "4": {
                          "economy": 800,
                          "comfort": 880,
                          "luxury": 970,
                          "superior_luxury": 1210
                      },
                      "5": {
                          "economy": 780,
                          "comfort": 860,
                          "luxury": 950,
                          "superior_luxury": 1180
                      },
                      "6-7": {
                          "economy": 760,
                          "comfort": 830,
                          "luxury": 920,
                          "superior_luxury": 1140
                      },
                      "srs": {
                          "economy": 150,
                          "comfort": 200,
                          "luxury": 240,
                          "superior_luxury": 310
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 1600,
                          "comfort": 1760,
                          "luxury": 1940,
                          "superior_luxury": 2420
                      },
                      "2": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "3": {
                          "economy": 940,
                          "comfort": 1030,
                          "luxury": 1140,
                          "superior_luxury": 1420
                      },
                      "4": {
                          "economy": 910,
                          "comfort": 1000,
                          "luxury": 1100,
                          "superior_luxury": 1380
                      },
                      "5": {
                          "economy": 890,
                          "comfort": 980,
                          "luxury": 1080,
                          "superior_luxury": 1350
                      },
                      "6-7": {
                          "economy": 860,
                          "comfort": 950,
                          "luxury": 1040,
                          "superior_luxury": 1300
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 1860,
                          "comfort": 2040,
                          "luxury": 2250,
                          "superior_luxury": 2810
                      },
                      "2": {
                          "economy": 1160,
                          "comfort": 1280,
                          "luxury": 1400,
                          "superior_luxury": 1750
                      },
                      "3": {
                          "economy": 1090,
                          "comfort": 1200,
                          "luxury": 1320,
                          "superior_luxury": 1650
                      },
                      "4": {
                          "economy": 1060,
                          "comfort": 1160,
                          "luxury": 1280,
                          "superior_luxury": 1600
                      },
                      "5": {
                          "economy": 1030,
                          "comfort": 1140,
                          "luxury": 1250,
                          "superior_luxury": 1560
                      },
                      "6-7": {
                          "economy": 1000,
                          "comfort": 1100,
                          "luxury": 1210,
                          "superior_luxury": 1510
                      },
                      "srs": {
                          "economy": 200,
                          "comfort": 260,
                          "luxury": 320,
                          "superior_luxury": 410
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "The Ark Lodge",
              "Sweetwaters Serena Camp",
              "Rhino Watch Safari Lodge"
          ],
          "comfort": [
              "Aberdare Country Club",
              "Porini Rhino Camp",
              "The Ark Lodge"
          ],
          "luxury": [
              "Treetops Lodge",
              "Ol Pejeta Bush Camp",
              "Aberdare Country Club"
          ],
          "superior_luxury": [
              "Sangare Ranch",
              "Ol Pejeta House",
              "Segera Retreat"
          ]
      }
  },
  "5-day-samburu-aberdares-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 1680,
                          "comfort": 1850,
                          "luxury": 2030,
                          "superior_luxury": 2540
                      },
                      "2": {
                          "economy": 1050,
                          "comfort": 1160,
                          "luxury": 1270,
                          "superior_luxury": 1590
                      },
                      "3": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1190,
                          "superior_luxury": 1490
                      },
                      "4": {
                          "economy": 960,
                          "comfort": 1050,
                          "luxury": 1160,
                          "superior_luxury": 1450
                      },
                      "5": {
                          "economy": 930,
                          "comfort": 1030,
                          "luxury": 1130,
                          "superior_luxury": 1410
                      },
                      "6-7": {
                          "economy": 900,
                          "comfort": 990,
                          "luxury": 1090,
                          "superior_luxury": 1370
                      },
                      "srs": {
                          "economy": 180,
                          "comfort": 230,
                          "luxury": 280,
                          "superior_luxury": 350
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 1850,
                          "comfort": 2030,
                          "luxury": 2240,
                          "superior_luxury": 2800
                      },
                      "2": {
                          "economy": 1160,
                          "comfort": 1270,
                          "luxury": 1400,
                          "superior_luxury": 1750
                      },
                      "3": {
                          "economy": 1090,
                          "comfort": 1190,
                          "luxury": 1310,
                          "superior_luxury": 1640
                      },
                      "4": {
                          "economy": 1050,
                          "comfort": 1160,
                          "luxury": 1270,
                          "superior_luxury": 1590
                      },
                      "5": {
                          "economy": 1030,
                          "comfort": 1130,
                          "luxury": 1240,
                          "superior_luxury": 1550
                      },
                      "6-7": {
                          "economy": 990,
                          "comfort": 1090,
                          "luxury": 1200,
                          "superior_luxury": 1500
                      },
                      "srs": {
                          "economy": 190,
                          "comfort": 250,
                          "luxury": 300,
                          "superior_luxury": 390
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 2100,
                          "comfort": 2310,
                          "luxury": 2540,
                          "superior_luxury": 3180
                      },
                      "2": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1590,
                          "superior_luxury": 1990
                      },
                      "3": {
                          "economy": 1230,
                          "comfort": 1360,
                          "luxury": 1490,
                          "superior_luxury": 1870
                      },
                      "4": {
                          "economy": 1190,
                          "comfort": 1310,
                          "luxury": 1450,
                          "superior_luxury": 1810
                      },
                      "5": {
                          "economy": 1170,
                          "comfort": 1280,
                          "luxury": 1410,
                          "superior_luxury": 1770
                      },
                      "6-7": {
                          "economy": 1130,
                          "comfort": 1240,
                          "luxury": 1370,
                          "superior_luxury": 1710
                      },
                      "srs": {
                          "economy": 220,
                          "comfort": 280,
                          "luxury": 340,
                          "superior_luxury": 440
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 2440,
                          "comfort": 2680,
                          "luxury": 2950,
                          "superior_luxury": 3680
                      },
                      "2": {
                          "economy": 1520,
                          "comfort": 1670,
                          "luxury": 1840,
                          "superior_luxury": 2300
                      },
                      "3": {
                          "economy": 1430,
                          "comfort": 1570,
                          "luxury": 1730,
                          "superior_luxury": 2160
                      },
                      "4": {
                          "economy": 1390,
                          "comfort": 1520,
                          "luxury": 1680,
                          "superior_luxury": 2100
                      },
                      "5": {
                          "economy": 1360,
                          "comfort": 1490,
                          "luxury": 1640,
                          "superior_luxury": 2050
                      },
                      "6-7": {
                          "economy": 1310,
                          "comfort": 1440,
                          "luxury": 1580,
                          "superior_luxury": 1980
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 330,
                          "luxury": 400,
                          "superior_luxury": 510
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Ikweta Safari Camp",
              "Sweetwaters Serena Camp",
              "The Ark Lodge"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Rhino River Camp",
              "Porini Rhino Camp",
              "Aberdare Country Club"
          ],
          "luxury": [
              "Saruni Samburu",
              "Leopard Rock Lodge",
              "Ol Pejeta Bush Camp",
              "Treetops Lodge"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Offbeat Meru Camp",
              "Ol Pejeta House",
              "Sangare Ranch"
          ]
      }
  },
  "7-day-northern-kenya-grand-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 2400,
                          "comfort": 2640,
                          "luxury": 2900,
                          "superior_luxury": 3630
                      },
                      "2": {
                          "economy": 1500,
                          "comfort": 1650,
                          "luxury": 1820,
                          "superior_luxury": 2270
                      },
                      "3": {
                          "economy": 1410,
                          "comfort": 1550,
                          "luxury": 1710,
                          "superior_luxury": 2130
                      },
                      "4": {
                          "economy": 1370,
                          "comfort": 1500,
                          "luxury": 1650,
                          "superior_luxury": 2060
                      },
                      "5": {
                          "economy": 1340,
                          "comfort": 1470,
                          "luxury": 1620,
                          "superior_luxury": 2020
                      },
                      "6-7": {
                          "economy": 1290,
                          "comfort": 1420,
                          "luxury": 1560,
                          "superior_luxury": 1950
                      },
                      "srs": {
                          "economy": 250,
                          "comfort": 320,
                          "luxury": 390,
                          "superior_luxury": 490
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 2640,
                          "comfort": 2900,
                          "luxury": 3190,
                          "superior_luxury": 3990
                      },
                      "2": {
                          "economy": 1650,
                          "comfort": 1820,
                          "luxury": 2000,
                          "superior_luxury": 2500
                      },
                      "3": {
                          "economy": 1550,
                          "comfort": 1710,
                          "luxury": 1880,
                          "superior_luxury": 2350
                      },
                      "4": {
                          "economy": 1500,
                          "comfort": 1650,
                          "luxury": 1820,
                          "superior_luxury": 2270
                      },
                      "5": {
                          "economy": 1470,
                          "comfort": 1620,
                          "luxury": 1780,
                          "superior_luxury": 2220
                      },
                      "6-7": {
                          "economy": 1420,
                          "comfort": 1560,
                          "luxury": 1720,
                          "superior_luxury": 2150
                      },
                      "srs": {
                          "economy": 270,
                          "comfort": 350,
                          "luxury": 420,
                          "superior_luxury": 540
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 3000,
                          "comfort": 3300,
                          "luxury": 3630,
                          "superior_luxury": 4540
                      },
                      "2": {
                          "economy": 1880,
                          "comfort": 2060,
                          "luxury": 2270,
                          "superior_luxury": 2840
                      },
                      "3": {
                          "economy": 1760,
                          "comfort": 1940,
                          "luxury": 2130,
                          "superior_luxury": 2670
                      },
                      "4": {
                          "economy": 1710,
                          "comfort": 1880,
                          "luxury": 2060,
                          "superior_luxury": 2580
                      },
                      "5": {
                          "economy": 1670,
                          "comfort": 1840,
                          "luxury": 2020,
                          "superior_luxury": 2520
                      },
                      "6-7": {
                          "economy": 1610,
                          "comfort": 1770,
                          "luxury": 1950,
                          "superior_luxury": 2440
                      },
                      "srs": {
                          "economy": 310,
                          "comfort": 390,
                          "luxury": 480,
                          "superior_luxury": 610
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 3480,
                          "comfort": 3830,
                          "luxury": 4210,
                          "superior_luxury": 5260
                      },
                      "2": {
                          "economy": 2180,
                          "comfort": 2390,
                          "luxury": 2630,
                          "superior_luxury": 3290
                      },
                      "3": {
                          "economy": 2040,
                          "comfort": 2250,
                          "luxury": 2470,
                          "superior_luxury": 3090
                      },
                      "4": {
                          "economy": 1980,
                          "comfort": 2180,
                          "luxury": 2390,
                          "superior_luxury": 2990
                      },
                      "5": {
                          "economy": 1940,
                          "comfort": 2130,
                          "luxury": 2340,
                          "superior_luxury": 2930
                      },
                      "6-7": {
                          "economy": 1870,
                          "comfort": 2060,
                          "luxury": 2260,
                          "superior_luxury": 2830
                      },
                      "srs": {
                          "economy": 360,
                          "comfort": 460,
                          "luxury": 560,
                          "superior_luxury": 710
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Samburu Simba Lodge",
              "Ikweta Safari Camp",
              "Sweetwaters Serena Camp",
              "The Ark Lodge"
          ],
          "comfort": [
              "Samburu Sopa Lodge",
              "Rhino River Camp",
              "Porini Rhino Camp",
              "Aberdare Country Club"
          ],
          "luxury": [
              "Saruni Samburu",
              "Leopard Rock Lodge",
              "Ol Pejeta Bush Camp",
              "Treetops Lodge"
          ],
          "superior_luxury": [
              "Sasaab Lodge",
              "Offbeat Meru Camp",
              "Ol Pejeta House",
              "Sangare Ranch"
          ]
      }
  },
  "14-day-kenya-tanzania-9-parks-ultimate-safari": {
      "pricing": {
          "seasons": {
              "low": {
                  "dates": "1st Apr – 31st May",
                  "rates": {
                      "1": {
                          "economy": 9120,
                          "comfort": 10030,
                          "luxury": 11040,
                          "superior_luxury": 13790
                      },
                      "2": {
                          "economy": 5700,
                          "comfort": 6270,
                          "luxury": 6900,
                          "superior_luxury": 8620
                      },
                      "3": {
                          "economy": 5360,
                          "comfort": 5890,
                          "luxury": 6480,
                          "superior_luxury": 8100
                      },
                      "4": {
                          "economy": 5190,
                          "comfort": 5710,
                          "luxury": 6280,
                          "superior_luxury": 7850
                      },
                      "5": {
                          "economy": 5070,
                          "comfort": 5580,
                          "luxury": 6140,
                          "superior_luxury": 7670
                      },
                      "6-7": {
                          "economy": 4900,
                          "comfort": 5390,
                          "luxury": 5930,
                          "superior_luxury": 7410
                      },
                      "srs": {
                          "economy": 490,
                          "comfort": 630,
                          "luxury": 770,
                          "superior_luxury": 980
                      }
                  }
              },
              "shoulder_a": {
                  "dates": "3rd Jan – 31st Mar & 1st Jun – 30th Jun",
                  "rates": {
                      "1": {
                          "economy": 10030,
                          "comfort": 11040,
                          "luxury": 12140,
                          "superior_luxury": 15170
                      },
                      "2": {
                          "economy": 6270,
                          "comfort": 6900,
                          "luxury": 7590,
                          "superior_luxury": 9480
                      },
                      "3": {
                          "economy": 5890,
                          "comfort": 6480,
                          "luxury": 7130,
                          "superior_luxury": 8910
                      },
                      "4": {
                          "economy": 5710,
                          "comfort": 6280,
                          "luxury": 6900,
                          "superior_luxury": 8630
                      },
                      "5": {
                          "economy": 5580,
                          "comfort": 6140,
                          "luxury": 6750,
                          "superior_luxury": 8440
                      },
                      "6-7": {
                          "economy": 5390,
                          "comfort": 5930,
                          "luxury": 6520,
                          "superior_luxury": 8160
                      },
                      "srs": {
                          "economy": 540,
                          "comfort": 690,
                          "luxury": 850,
                          "superior_luxury": 1080
                      }
                  }
              },
              "shoulder_b": {
                  "dates": "1st Nov – 15th Dec",
                  "rates": {
                      "1": {
                          "economy": 11400,
                          "comfort": 12540,
                          "luxury": 13790,
                          "superior_luxury": 17240
                      },
                      "2": {
                          "economy": 7130,
                          "comfort": 7840,
                          "luxury": 8620,
                          "superior_luxury": 10780
                      },
                      "3": {
                          "economy": 6700,
                          "comfort": 7370,
                          "luxury": 8100,
                          "superior_luxury": 10130
                      },
                      "4": {
                          "economy": 6480,
                          "comfort": 7130,
                          "luxury": 7850,
                          "superior_luxury": 9810
                      },
                      "5": {
                          "economy": 6340,
                          "comfort": 6980,
                          "luxury": 7670,
                          "superior_luxury": 9590
                      },
                      "6-7": {
                          "economy": 6130,
                          "comfort": 6740,
                          "luxury": 7410,
                          "superior_luxury": 9270
                      },
                      "srs": {
                          "economy": 610,
                          "comfort": 790,
                          "luxury": 960,
                          "superior_luxury": 1230
                      }
                  }
              },
              "peak": {
                  "dates": "1st Jul – 31st Oct & 16th Dec – 2nd Jan",
                  "rates": {
                      "1": {
                          "economy": 13220,
                          "comfort": 14550,
                          "luxury": 16000,
                          "superior_luxury": 20000
                      },
                      "2": {
                          "economy": 8270,
                          "comfort": 9090,
                          "luxury": 10000,
                          "superior_luxury": 12500
                      },
                      "3": {
                          "economy": 7770,
                          "comfort": 8550,
                          "luxury": 9400,
                          "superior_luxury": 11750
                      },
                      "4": {
                          "economy": 7520,
                          "comfort": 8270,
                          "luxury": 9100,
                          "superior_luxury": 11380
                      },
                      "5": {
                          "economy": 7360,
                          "comfort": 8090,
                          "luxury": 8900,
                          "superior_luxury": 11130
                      },
                      "6-7": {
                          "economy": 7110,
                          "comfort": 7820,
                          "luxury": 8600,
                          "superior_luxury": 10750
                      },
                      "srs": {
                          "economy": 710,
                          "comfort": 910,
                          "luxury": 1120,
                          "superior_luxury": 1420
                      }
                  }
              }
          },
          "child_rates": "Children below 3: Free | Children 3-11: 75% of adult rate | Children 12+: Adult rate",
          "currency": "USD",
          "note": "Prices per person sharing in double/twin room"
      },
      "accommodations": {
          "economy": [
              "Amboseli Sopa Lodge",
              "Samburu Simba Lodge",
              "Sweetwaters Serena Camp",
              "Mara Chui Camp",
              "Seronera Wildlife Lodge",
              "Tarangire Safari Lodge"
          ],
          "comfort": [
              "Ol Tukai Lodge",
              "Samburu Sopa Lodge",
              "Porini Rhino Camp",
              "Mara Sopa Lodge",
              "Serengeti Sopa Lodge",
              "Ngorongoro Sopa Lodge"
          ],
          "luxury": [
              "Amboseli Serena Safari Lodge",
              "Saruni Samburu",
              "Ol Pejeta Bush Camp",
              "Mara Serena Safari Lodge",
              "Serengeti Serena Safari Lodge",
              "Tarangire Treetops"
          ],
          "superior_luxury": [
              "Tawi Lodge",
              "Sasaab Lodge",
              "Ol Pejeta House",
              "Karen Blixen Camp",
              "&Beyond Serengeti Under Canvas",
              "&Beyond Ngorongoro Crater Lodge"
          ]
      }
  }
};
