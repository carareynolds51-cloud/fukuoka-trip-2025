




import { DayItinerary, EventType, HotelInfo, FlightInfo } from './types';

export const HOTEL_DATA: HotelInfo = {
  name: "Hakata Tokyu REI Hotel",
  address: "1 Chome-2-23 Hakata Ekimae, Hakata Ward, Fukuoka, 812-0011",
  phone: "092-451-0109",
  checkIn: "15:00",
  checkOut: "11:00"
};

export const FLIGHT_DATA: FlightInfo[] = [
  { code: "HX640", date: "2025/12/09", time: "09:40 - 13:55", type: 'DEPARTURE' },
  { code: "HX641", date: "2025/12/14", time: "14:55 - 17:55", type: 'RETURN' }
];

export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: "day1",
    date: "12月09日",
    dayOfWeek: "週二",
    title: "抵達 & 聖誕市集",
    hotelLeaveTime: "16:20", 
    items: [
      { id: "d1-1", time: "13:55", title: "抵達福岡機場 (FUK)", type: EventType.FLIGHT, description: "航班 HX640 抵達" },
      { 
        id: "d1-t1", time: "15:15", title: "前往博多市區", type: EventType.TRANSPORT, 
        transportInfo: "西鐵巴士 (直達)\n• 乘車處: 國際航廈 1F 巴士站\n• 路線: 往博多站 (Hakata Station)\n• 下車: 博多巴士總站 (Hakata Bus Terminal)",
        description: "預留約70-80分鐘入境與領取行李時間。出關後前往巴士站。"
      },
      { id: "d1-2", time: "16:00", title: "Check-in 酒店", type: EventType.HOTEL, location: "Hakata Tokyu REI Hotel", description: "辦理入住，放置行李 (博多口側)", suggestedLeaveTime: "16:20" },
      { 
        id: "d1-3", time: "16:30", title: "Yodobashi Camera", type: EventType.SHOPPING, location: "Yodobashi Hakata", 
        description: "前往筑紫口側。3F 遊戲區 / 4F Lopia 超市輕度採買", suggestedLeaveTime: "18:00",
        aiInsights: {
          story: "Yodobashi 博多店是當地最大的電器百貨之一，4樓新開的 Lopia 超市以「肉的超市」聞名，價格極具競爭力。",
          mustBuy: ["Lopia 自家製香腸", "日本草莓 (季節限定)", "Switch 遊戲周邊"],
          tips: ["Lopia 超市只收現金，請準備足夠日幣", "扭蛋區機台數量高達數百台，建議先換好百元零錢"]
        }
      },
      { 
        id: "d1-5", time: "18:15", title: "鳥貴族 博多筑紫口店", type: EventType.FOOD, location: "博多筑紫口", 
        description: "晚餐 (已訂) - 就在 Yodobashi 附近", reservationCode: "需確認預約信", suggestedLeaveTime: "19:45",
        aiInsights: {
          story: "均一價的連鎖燒鳥居酒屋，深受年輕人和上班族喜愛，性價比極高。",
          mustEat: ["貴族燒 (雞腿肉/雞胸肉)", "起司肉丸", "釜飯 (需等30分鐘)"],
          tips: ["釜飯建議一入座就先點，因為製作時間長", "使用平板點餐，有中文介面"]
        }
      },
      { 
        id: "d1-4", time: "20:00", title: "博多站前聖誕市集", type: EventType.ACTIVITY, location: "JR Hakata Station Plaza", 
        description: "吃飽後走回博多口消化一下。欣賞著名的藍色燈海。", suggestedLeaveTime: "20:45",
        aiInsights: {
          story: "福岡的聖誕市集規模在全日本數一數二，博多站前的「光之街」點燈活動使用了約80萬顆藍色LED燈。",
          mustEat: ["熱紅酒 (附紀念馬克杯)", "德式香腸", "吉拿棒"],
          tips: ["每年的熱紅酒馬克杯設計不同，值得收藏", "人潮眾多，拍照建議往二樓露台移動"]
        }
      },
      { id: "d1-6", time: "21:00", title: "Namco 博多巴士總站店", type: EventType.ACTIVITY, location: "Hakata Bus Terminal", description: "夾娃娃或回酒店休息" },
      { 
        id: "d1-7", time: "21:45", title: "星乃珈琲店 KITTE博多店", type: EventType.FOOD, location: "KITTE Hakata B1", 
        description: "營業至22:30，以厚舒芙蕾鬆餅聞名的復古咖啡店。", 
        closingTime: "22:30",
        aiInsights: {
          story: "發源於日本的復古喫茶店，以厚度驚人的舒芙蕾鬆餅(Pancake)聞名，口感蓬鬆濕潤。",
          mustEat: ["窯烤舒芙蕾熱蛋糕", "昭和布丁"],
          tips: ["位於 KITTE 地下一樓", "鬆餅現烤需等待20分鐘"]
        }
      },
    ]
  },
  {
    id: "day2",
    date: "12月10日",
    dayOfWeek: "週三",
    title: "運河城 & 天神",
    hotelLeaveTime: "09:40",
    items: [
      { 
        id: "d2-1", time: "10:00", title: "博多運河城 (Canal City)", type: EventType.SHOPPING, location: "Canal City Hakata", 
        description: "橡子共和國、Jump Shop、扭蛋百貨店", suggestedLeaveTime: "11:45",
        aiInsights: {
            story: "結合運河與建築的複合式商場，每小時有著名的水舞秀表演。",
            mustBuy: ["吉卜力周邊 (橡子共和國)", "JUMP動漫周邊", "福岡限定一番賞"],
            tips: ["B1的 Sun Plaza 定時有音樂水舞秀，建議整點前往觀賞", "外國遊客可憑護照在服務台領取優惠券"]
        }
      },
      { 
        id: "d2-t1", time: "11:45", title: "步行前往餐廳", type: EventType.TRANSPORT, 
        transportInfo: "步行\n• 路線: 沿著運河步行回博多站方向\n• 時間: 約 10-15 分鐘",
        description: "散步前往午餐地點"
      },
      { 
        id: "d2-2", time: "12:00", title: "麺屋いしヰ (Menya Ishii)", type: EventType.FOOD, location: "Hakata", 
        description: "午餐 (已訂)", suggestedLeaveTime: "13:15",
        aiInsights: {
            story: "隱藏在巷弄中的沾麵名店，以濃郁的豚骨魚介湯頭聞名。",
            mustEat: ["特製沾麵", "半熟蛋"],
            tips: ["麵條份量可選，建議一般食量選中碗即可", "吃完麵後可以請店員加高湯 (Soup Wari) 喝掉剩下的沾醬"]
        }
      },
      { 
        id: "d2-3", time: "13:30", title: "前往天神", type: EventType.TRANSPORT, 
        transportInfo: "地鐵空港線 (Kuko Line)\n• 上車: 博多站 (Hakata) | 2號月台\n• 方向: 往天神/姪浜\n• 下車: 天神站 (Tenjin)\n• 出口: 西口/7號出口 (直結 Parco)",
        description: "只需搭乘3站，班次非常頻繁。"
      },
      { 
        id: "d2-4", time: "14:00", title: "天神 PARCO (本館)", type: EventType.SHOPPING, location: "Tenjin Parco", 
        description: "8F Chiikawa Land, Kiddy Land, 7F One Piece", suggestedLeaveTime: "15:50",
        aiInsights: {
            story: "天神 PARCO 本館8樓是次文化的聖地，聚集了當紅角色專賣店。",
            mustBuy: ["Chiikawa 地域限定吊飾", "航海王草帽商店限定品"],
            tips: ["Chiikawa Land 假日人潮眾多，可能需要領取整理券", "7樓還有美少女戰士和任天堂周邊"]
        }
      },
      { 
        id: "d2-5", time: "16:00", title: "配眼鏡 & 地下街", type: EventType.SHOPPING, location: "Tenjin Underground Shopping Center", 
        description: "JINS/Zoff 配眼鏡，逛地下街", suggestedLeaveTime: "19:00",
        aiInsights: {
            story: "天神地下街設計靈感來自19世紀歐洲，全長600公尺，連接了各大百貨。",
            mustEat: ["RINGO 蘋果派", "BAKE 起司塔"],
            tips: ["JINS/Zoff 配眼鏡通常需等待30-60分鐘，建議先去驗光再去逛街", "地下街公廁非常乾淨且設計復古，值得一用"]
        }
      },
      { 
        id: "d2-6", time: "19:30", title: "One Karubi PREMIUM 中洲", type: EventType.FOOD, location: "Nakasu", 
        description: "國產牛燒肉吃到飽 (已訂)",
        aiInsights: {
            story: "比一般 One Karubi 更高級的 PREMIUM 版本，提供更高品質的日本國產牛。",
            mustEat: ["上等牛五花", "厚切牛舌", "石鍋拌飯"],
            tips: ["吃到飽有點餐時間限制，建議先點高單價肉品", "靠窗位置可欣賞中洲夜景"]
        }
      },
      { 
        id: "d2-7", time: "21:30", title: "ViTO (中洲川端店)", type: EventType.FOOD, location: "Nakasu", 
        description: "口感綿密清爽的義式冰淇淋 (Gelato)。", 
        closingTime: "02:00",
        aiInsights: {
          story: "強調素材原味的福岡義式冰淇淋名店，陳列如珠寶盒般華麗。",
          mustEat: ["開心果 (Pistachio)", "阿蘇澤西牛乳"],
          tips: ["燒肉後最適合的解膩甜點", "營業至深夜，是當地人最愛的續攤點"]
        }
      },
    ]
  },
  {
    id: "day3",
    date: "12月11日",
    dayOfWeek: "週四",
    title: "門司港 & 小倉",
    hotelLeaveTime: "09:30",
    items: [
      { 
        id: "d3-1", time: "10:00", title: "前往門司港", type: EventType.TRANSPORT, 
        transportInfo: "JR 鹿兒島本線 (快速/區間快速)\n• 上車: 博多站 | 參考改札口資訊\n• 方向: 往門司港 (Mojiko)\n• 下車: 門司港站 (終點站)\n• 備註: 適用 JR Pass (門司港-熊本區間皆免費)",
        description: "建議搭乘快速列車，車程約90分鐘，不用轉車。" 
      },
      { 
        id: "d3-2", time: "11:30", title: "門司港懷舊區", type: EventType.SIGHTSEEING, location: "Mojiko Retro", 
        description: "散步、拍照 (車站、舊海關)", suggestedLeaveTime: "12:30",
        aiInsights: {
            story: "大正時期的國際貿易港口，保留了大量紅磚洋房建築，充滿復古浪漫氛圍。",
            mustBuy: ["香蕉甜點 (門司港是日本香蕉叩賣發源地)"],
            tips: ["必拍景點：JR門司港車站外觀、藍翼門司吊橋 (整點會開橋)", "車站內的星巴克設計非常復古"]
        }
      },
      { 
        id: "d3-3", time: "12:30", title: "午餐：門司港燒咖哩", type: EventType.FOOD, location: "Mojiko Curry", 
        description: "推薦：BEAR FRUITS 或 伽哩本舖", suggestedLeaveTime: "13:40",
        aiInsights: {
            story: "門司港名物，源自昭和30年代將剩餘咖哩放入烤箱的意外美味。",
            mustEat: ["燒咖哩 (Yaki Curry)", "河豚料理"],
            tips: ["BEAR FRUITS 是上戶彩推薦名店，排隊人潮較多", "喜歡吃辣建議去伽哩本舖，可選辣度"]
        }
      },
      { 
        id: "d3-4", time: "14:00", title: "前往小倉", type: EventType.TRANSPORT, 
        transportInfo: "JR 鹿兒島本線\n• 上車: 門司港站\n• 方向: 往博多/久留米\n• 下車: 小倉站 (Kokura)",
        description: "車程僅需約 15 分鐘。"
      },
      { 
        id: "d3-5", time: "14:30", title: "小倉漫遊", type: EventType.SIGHTSEEING, location: "Kokura Castle", 
        description: "小倉城、魚町銀天街夾娃娃", suggestedLeaveTime: "17:45",
        aiInsights: {
            story: "小倉城是宮本武藏與佐佐木小次郎決鬥傳說之地，天守閣內互動設施豐富。",
            mustEat: ["揚子江肉包 (魚町銀天街)", "小倉鐵鍋餃子"],
            tips: ["平日人潮較少，現場購票即可", "小倉城旁邊的八坂神社也很靈驗", "魚町銀天街有許多夾娃娃機店"]
        }
      },
      { 
        id: "d3-6", time: "18:00", title: "返回博多", type: EventType.TRANSPORT, 
        transportInfo: "特急 Sonic (JR Pass OK)\n• 上車: 小倉站\n• 推薦: 特急 Sonic (持 Pass 可免費劃位)\n• 下車: 博多站\n• 警告: 持 Pass 不可搭此段新幹線",
        description: "特急 Sonic 車身藍色非常帥氣，車程約 45 分鐘。注意：此路段新幹線屬 JR 西日本，JR 北九州 Pass 不適用。"
      },
      { id: "d3-7", time: "19:00", title: "晚餐：博多拉麵街", type: EventType.FOOD, location: "Hakata Station", description: "Shin-Shin 或 一幸舍 (自由覓食)" },
      { 
        id: "d3-8", time: "20:30", title: "Il Forno del Mignon (需排隊)", type: EventType.FOOD, location: "Hakata Station", 
        description: "博多站內傳奇的可頌店，香氣逼人。", 
        closingTime: "23:00",
        aiInsights: {
          story: "幾乎所有福岡人都吃過的迷你可頌，排隊人潮是博多站的日常風景。",
          mustEat: ["巧克力口味", "地瓜口味"],
          tips: ["通常需排隊 15-20 分鐘，但隊伍前進很快", "按公克計價，推薦購買綜合口味", "當地人評價：冷掉也好吃"]
        }
      },
      { 
        id: "d3-9", time: "21:00", title: "Komeda's Coffee 博多巴士總站店", type: EventType.FOOD, location: "Hakata Bus Terminal", 
        description: "營業至23:00，名古屋發源的舒適喫茶店。", 
        closingTime: "23:00",
        aiInsights: {
          story: "著名的名古屋連鎖喫茶店，以寬敞的紅絲絨沙發聞名，招牌甜點「冰與火」是完美的宵夜選擇。",
          mustEat: ["冰與火 (Shiro-Noir)", "味噌豬排三明治"],
          tips: ["位於巴士總站內，位置便利", "甜點份量很大，建議分食", "紅絲絨沙發非常舒適"]
        }
      },
    ]
  },
  {
    id: "day4",
    date: "12月12日",
    dayOfWeek: "週五",
    title: "熊本 (文化與魯夫)",
    hotelLeaveTime: "09:30",
    items: [
      { 
        id: "d4-1", time: "10:00", title: "前往熊本", type: EventType.TRANSPORT, 
        transportInfo: "九州新幹線 (Sakura/Tsubame)\n• 上車: 博多站 新幹線月台\n• 方向: 往鹿兒島中央\n• 下車: 熊本站 (Kumamoto)\n• 備註: 適用 JR Pass (包含瑞穗號)",
        description: "最快僅需 32 分鐘即可抵達。"
      },
      { 
        id: "d4-t2", time: "10:45", title: "前往水前寺", type: EventType.TRANSPORT, 
        transportInfo: "熊本市電 A系統\n• 上車: 熊本站前 電車站\n• 方向: 往健軍町\n• 下車: 水前寺公園",
        description: "體驗復古的路面電車。"
      },
      { 
        id: "d4-2", time: "10:50", title: "水前寺成趣園", type: EventType.SIGHTSEEING, location: "Suizenji Jojuen Garden", 
        description: "日式庭園、抹茶體驗", suggestedLeaveTime: "11:45",
        aiInsights: {
            story: "江戶時代建造的迴遊式庭園，模仿東海道五十三次的美景，園內有「小富士山」。",
            mustEat: ["園內茶屋的抹茶與和菓子"],
            tips: ["出水神社內的「長壽之水」可以飲用", "園區不大，約40分鐘可逛完"]
        }
      },
      { 
         id: "d4-t3", time: "11:45", title: "前往縣廳", type: EventType.TRANSPORT, 
         transportInfo: "步行\n• 路線: 沿著縣道28號直行\n• 時間: 約 10-15 分鐘",
         description: "散步前往熊本縣廳"
      },
      { 
        id: "d4-3", time: "12:15", title: "熊本縣廳 (魯夫銅像)", type: EventType.SIGHTSEEING, location: "Kumamoto Prefectural Office", 
        description: "朝聖魯夫銅像 (銀杏大道)", suggestedLeaveTime: "12:45",
        aiInsights: {
            story: "為了感謝尾田榮一郎老師對熊本地震復興的貢獻而設立，魯夫聳立在縣廳前的銀杏大道。",
            tips: ["12月中旬銀杏可能已落葉，形成黃金地毯也很美", "銅像旁有紀念蓋章處"]
        }
      },
      { 
        id: "d4-t4", time: "12:45", title: "前往市區午餐", type: EventType.TRANSPORT, 
        transportInfo: "巴士/市電\n• 上車: 熊本縣廳前\n• 下車: 通町筋/辛島町 (市中心)",
        description: "前往最熱鬧的商店街區域。"
      },
      { 
        id: "d4-4", time: "13:15", title: "午餐：勝烈亭 或 菅乃屋", type: EventType.FOOD, location: "Kumamoto City", 
        description: "炸豬排 或 馬肉料理 (市區)", suggestedLeaveTime: "14:45",
        aiInsights: {
            story: "熊本美食雙璧：勝烈亭是米其林推薦的鹿兒島黑豚炸豬排；菅乃屋則是頂級馬肉料理專門店。",
            mustEat: ["勝烈亭：厚切腰內肉豬排", "菅乃屋：馬肉刺身拼盤"],
            tips: ["勝烈亭通常需排隊，建議避開尖峰或先去抽號碼牌", "吃豬排記得先磨芝麻加入醬汁"]
        }
      },
      { 
        id: "d4-5", time: "15:00", title: "熊本城 & 城彩苑", type: EventType.SIGHTSEEING, location: "Kumamoto Castle", 
        description: "參觀天守閣與城下町", suggestedLeaveTime: "17:30",
        aiInsights: {
            story: "日本三大名城之一，黑色外觀被稱為「武者返」，目前仍在震災修復中，但設有特殊參觀天空步道。",
            mustEat: ["城彩苑的海膽可樂餅", "いきなり団子 (紅豆番薯糰子)"],
            tips: ["強烈建議事先上網購票，可掃 QR Code 直接入場", "特別公開通道可以近距離看到石垣崩落的震撼景象", "天守閣內部已現代化，有冷氣和電梯"]
        }
      },
      { 
        id: "d4-6", time: "18:00", title: "返回博多", type: EventType.TRANSPORT, 
        transportInfo: "九州新幹線 (適用 JR Pass)\n• 上車: 熊本站\n• 下車: 博多站",
        description: "可以買個熊本熊便當在新幹線上吃。"
      },
      { 
        id: "d4-7", time: "19:00", title: "Shiroya (シロヤ) 博多站店", type: EventType.FOOD, location: "Hakata Station Ming", 
        description: "北九州小倉的靈魂麵包店 (位於 Ming 商店街)。", 
        closingTime: "21:00",
        aiInsights: {
          story: "來自北九州的昭和復古麵包店，以驚人的銅板價提供懷舊美味。",
          mustEat: ["薩尼麵包 (Sunny Pan / 煉乳麵包)", "歐姆雷 (Omelet / 鮮奶油蛋糕)"],
          tips: ["歐姆雷人氣極高，傍晚經常售罄 (要有心理準備)", "Sunny Pan 煉乳內餡會爆漿，請小心食用"]
        }
      },
      { 
        id: "d4-8", time: "19:45", title: "Campbell Early (坎貝爾早安)", type: EventType.FOOD, location: "JR Hakata City 9F", 
        description: "華麗的季節水果芭菲(Sundae)專門店。", 
        closingTime: "22:00",
        aiInsights: {
          story: "博多站著名的水果芭菲專門店，使用九州當地新鮮水果，外觀華麗。",
          mustEat: ["博多Amaou草莓芭菲", "綜合水果鬆餅"],
          tips: ["位於博多站上方9樓，交通方便", "晚上適合來吃豪華甜點"]
        }
      },
    ]
  },
  {
    id: "day5",
    date: "12月13日",
    dayOfWeek: "週六",
    title: "鰻魚、teamLab & 潮牌",
    hotelLeaveTime: "11:00",
    items: [
      { 
        id: "d5-1", time: "11:30", title: "ひつまぶし和食備長", type: EventType.FOOD, location: "Nakasu Kawabata", 
        description: "名古屋名物鰻魚飯三吃 (已訂)", suggestedLeaveTime: "12:50",
        aiInsights: {
            story: "源自名古屋的名店，主打關西風炭火直烤鰻魚，外皮酥脆肉質軟嫩。",
            mustEat: ["鰻魚飯三吃 (Hitsumabushi)"],
            tips: ["三吃法：1.吃原味 2.加蔥/海苔/芥末 3.加入高湯變茶泡飯", "餐廳位於河畔，環境優雅"]
        }
      },
      { 
        id: "d5-t1", time: "13:00", title: "前往 teamLab (E-ZO)", type: EventType.TRANSPORT, 
        transportInfo: "地鐵空港線 + 步行\n• 步行: 至中洲川端站\n• 地鐵: 往姪浜方向，唐人町站下車\n• 步行: 3號出口由天橋步行約15分至 E-ZO",
        description: "沿途會經過福岡PayPay巨蛋。"
      },
      { 
        id: "d5-2", time: "13:30", title: "teamLab Forest Fukuoka", type: EventType.ACTIVITY, location: "BOSS E・ZO FUKUOKA", 
        description: "沉浸式光影藝術，捕捉與森林的互動 (建議預先購票)", suggestedLeaveTime: "15:00",
        aiInsights: {
            story: "由兩大主題組成：「捕捉收集的森林」與「運動森林」，是結合藝術與體能的互動空間。",
            tips: ["採預約制，務必提前上網購票以免向隅", "務必穿著好走的平底鞋，禁止穿高跟鞋入場", "建議下載官方APP，可以在「捕捉森林」中用手機抓取動物"]
        }
      },
      { 
        id: "d5-3", time: "15:15", title: "前往天神大名", type: EventType.TRANSPORT, 
        transportInfo: "西鐵巴士\n• 上車: PayPay Dome 巴士站\n• 方向: 往天神\n• 下車: 天神北/天神三丁目",
        description: "直達天神商圈北側。"
      },
      { 
        id: "d5-4", time: "15:45", title: "天神大名潮牌巡禮", type: EventType.SHOPPING, location: "Daimyo, Chuo Ward", 
        description: "Onitsuka Tiger, The North Face, On (Billy's/Atmos)", suggestedLeaveTime: "19:00",
        aiInsights: {
            story: "大名區 (Daimyo) 是福岡的裏原宿，巷弄內充滿古著屋、潮牌店和個性咖啡廳。",
            mustBuy: ["Onitsuka Tiger 日本製系列 (Nippon Made)", "The North Face 紫標 (日本限定)"],
            tips: ["這區的小巷子很容易迷路，建議善用 Google Maps", "週末下午人潮最多，試穿鞋子可能要排隊"]
        }
      },
      { 
        id: "d5-5", time: "19:30", title: "博多華味鳥", type: EventType.FOOD, location: "Hakata", 
        description: "博多水炊雞肉鍋 (晚餐)",
        aiInsights: {
            story: "博多代表性鄉土料理，使用自家養殖的「華味鳥」，湯頭充滿膠原蛋白。",
            mustEat: ["水炊雞鍋套餐", "炸雞皮"],
            tips: ["第一口先喝加了少許鹽的雞湯原味", "最後的雜炊粥是精華，絕對不能錯過"]
        }
      },
      { 
        id: "d5-7", time: "21:30", title: "MaxValu / Sunny 超市巡禮", type: EventType.SHOPPING, location: "Hakata / Gion", 
        description: "體驗當地生活的24小時超市，最後補貨。", 
        closingTime: "24H",
        aiInsights: {
          story: "比便利商店更接地氣的選擇，是當地主婦與內行遊客的寶庫。",
          mustBuy: ["日清咚兵衛 (九州限定版)", "博多 Amaou 草莓", "各式調味料"],
          tips: ["晚上熟食區可能有特價貼紙", "請自備購物袋"]
        }
      },
      { id: "d5-8", time: "22:30", title: "打包行李", type: EventType.ACTIVITY, location: "Hotel", description: "準備回程，整理戰利品。" },
    ]
  },
  {
    id: "day6",
    date: "12月14日",
    dayOfWeek: "週日",
    title: "離開博多",
    hotelLeaveTime: "10:00",
    items: [
      { 
        id: "d6-0", time: "10:15", title: "FUK COFFEE", type: EventType.FOOD, location: "Gion / Hakata", 
        description: "離開前的儀式感：旅行主題咖啡廳。", 
        closingTime: "20:00",
        aiInsights: {
          story: "以機場代碼 FUK 為名的潮流咖啡廳，店內充滿飛機與旅行元素，布丁與拿鐵非常受歡迎。",
          mustEat: ["手工硬布丁", "香草冰淇淋拿鐵", "飛機餅乾"],
          tips: ["距離博多站步行約7-10分鐘", "店門口的行李箱貼紙牆是必拍景點"]
        }
      },
      { 
        id: "d6-1", time: "11:30", title: "博多站最後採買", type: EventType.SHOPPING, location: "Ming Station Mall", 
        description: "Ming 商店街買伴手禮", suggestedLeaveTime: "12:15",
        aiInsights: {
            story: "Ming 是博多站內最強伴手禮街，幾乎所有福岡名產都能在這裡買齊。",
            mustBuy: ["博多通饅頭 (通りもん)", "福砂屋長崎蛋糕", "明太子"],
            tips: ["建議預留至少40分鐘採買", "不想手提可以利用車站的置物櫃"]
        }
      },
      { 
        id: "d6-2", time: "12:30", title: "前往機場", type: EventType.TRANSPORT, 
        transportInfo: "地鐵/巴士\n• 推薦: 博多巴士總站 11號月台 直達巴士\n• 下車: 福岡機場國際線航廈", 
        description: "直達巴士可免去地鐵轉乘接駁車的麻煩。"
      },
      { id: "d6-3", time: "14:55", title: "航班 HX641 起飛", type: EventType.FLIGHT, description: "返回溫暖的家" },
    ]
  }
];
