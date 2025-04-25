import { Table, Header, Row, Data } from "../../../components/Table";

const IMG_BASE_PATH = "/compendium/dan-courses";

const COURSES = {
  "ac_11": {
    "01a": [
    {
      title: "緋色月下、狂咲ノ絶 (nayuta 2017 ver)",
      artist: "EastNewSound",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "神獄烙桜",
      artist: "かゆき",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.1-"
    },
    {
      title: "НУМЛ",
      artist: "Zutt",
      diff: "MXM 18",
      unlock: "PCB"
    },
  ],
  "01b": [
    {
      title: "Destr0yer",
      artist: "削除 feat. Nikki Simmons",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "SAMURAI TIGER",
      artist: "ぽんきち&ゆんゆん",
      diff: "MXM 18",
      unlock: "HEXA DIVER (666)"
    },
    {
      title: "ムーニャポヨポヨスッポコニャーゴ",
      artist: "全日本スッポコニャーゴ親衛隊",
      diff: "VVD 18",
      unlock: "BLASTER GATE"
    }
  ],
  "02": [
    {
      title: "OPEN MY GATE",
      artist: "ARM×狐夢想 feat. RINA (I've)",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.2-"
    },
    {
      title: "GALAXY BURST",
      artist: "かめりあ",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "MeteorA",
      artist: "Verseus",
      diff: "MXM 18",
      unlock: "PCB"
    }
  ],
  "03": [
    {
      title: "トマヨイ",
      artist: "Spacelectro feat.椎木レク",
      diff: "VVD 18",
      unlock: "BLASTER GATE"
    },
    {
      title: "祝福の色彩は想い結ぶ君たち迄",
      artist: "Yu-dachi",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.6-"
    },
    {
      title: "SuperMiracleEnsemble",
      artist: "fnylsp",
      diff: "MXM 18",
      unlock: "PCB"
    }
  ],
  "04a": [
    {
      title: "AIM HIGHER",
      artist: "U-ske feat. 棗いつき",
      diff: "MXM 18",
      unlock: "HEXA DIVER (XHRONOXAPSULΞ)"
    },
    {
      title: "THE HEAVEN",
      artist: "Juggernaut.",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.6-"
    },
    {
      title: "Completeness Under Incompleteness",
      artist: 'かめりあ as "Reverse of Riot"',
      diff: "GRV 18",
      unlock: "BLASTER GATE"
    }
  ],
  "04b": [
    {
      title: "まじかる生主＠りすなちゃん",
      artist: "DJ SHARPNEL feat. みらい",
      diff: "GRV 18",
      unlock: "BLASTER GATE"
    },
    {
      title: "LECTORIA",
      artist: "Cranky",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "All for One",
      artist: "CANVAS feat. Quimär",
      diff: "MXM 18",
      unlock: "HEXA DIVER (XHRONOXAPSULΞ)"
    }
  ],
  "05a": [
    {
      title: "Angels And Demons",
      artist: "すのうまん",
      diff: "EXH 18",
      unlock: "PCB"
    },
    {
      title: "Divine's:Bugscript",
      artist: "かゆき",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "XHAOS JUDGE",
      artist: "BlackYooh vs. siromaru",
      diff: "EXH 18",
      unlock: "PCB"
    }
  ],
  "05b": [
    {
      title: "EGOISM 440 (Ange;art remix)",
      artist: "Ange;art",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "MODEL FT4",
      artist: 'BEMANI Sound Team "Mutsuhiko Izumi"',
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "For UltraPlayers",
      artist: "cosMo@暴走P",
      diff: "EXH 18",
      unlock: "PCB"
    }
  ],
  "06": [
    {
      title: "Touch My Body",
      artist: "anubasu-anubasu",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "蝕",
      artist: "めと（Metomate）",
      diff: "MXM 18",
      unlock: "HEXA DIVER (MixxioN)"
    },
    {
      title: "trea→journey",
      artist: "CHUBAY",
      diff: "MXM 18",
      unlock: "BLASTER GATE"
    }
  ],
  "07": [
    {
      title: "Butterfly Twist",
      artist: "Yooh",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.8-"
    },
    {
      title: "Khionos TiARA",
      artist: "Ellim Gnirps vs よみぃ",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "Archangelio",
      artist: "Juggernaut.",
      diff: "MXM 18",
      unlock: "PCB"
    }
  ],
  "08": [
    {
      title: "CadenzaMaiden",
      artist: "u-z feat.紫咲ほたる",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "Test Flight",
      artist: "黒魔",
      diff: "MXM 18",
      unlock: "PCB"
    },
    {
      title: "サイコパスラビット",
      artist: "うさぎ愛好会PSYCHOPATH(cosMo×syuri22)",
      diff: "MXM 18",
      unlock: "ΩDimension -Phase.5-"
    }
  ],
  },
  "ac_inf": {
    "01a": [
      {
        title: "Cross Fire",
        artist: "Hommarju vs RoughSketch",
        diff: "MXM 19",
        unlock: "ΩDimension -Phase.6-"
      },
      {
        title: "ΑΩ",
        artist: "BlackY",
        diff: "GRV 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "Xronièr",
        artist: 'かめりあ as "fluX Xroisé"',
        diff: "MXM 20",
        unlock: "ΩDimension -Phase.5+-"
      },
    ],
    "01b": [
      {
        title: "ΛΛemoria",
        artist: "MisoilePunch♪",
        diff: "MXM 19",
        unlock: "HEXA DIVER (MAYHEM)"
      },
      {
        title: "onslaught -Retaliation of Bahamūt-",
        artist: "かめりあ",
        diff: "MXM 19",
        unlock: "PCB"
      },
      {
        title: "I",
        artist: "黒魔",
        diff: "MXM 20",
        unlock: "ΩDimension -Phase.3-"
      },
    ],
    "02": [
      {
        title: "Lisa-RICCIA",
        artist: "DJ YOSHITAKA",
        diff: "MXM 19",
        unlock: "PCB"
      },
      {
        title: "OUTERHEΛVEN",
        artist: "Juggernaut.",
        diff: "MXM 19",
        unlock: "ΩDimension -Phase.8-"
      },
      {
        title: "XHRONOXAPSULΞ",
        artist: "Silentroom",
        diff: "MXM 20",
        unlock: "HEXA DIVER (XHRONOXAPSULΞ)"
      },
    ],
    "03": [
      {
        title: "INSECTICIDE",
        artist: "Camellia",
        diff: "HVN 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "Lancelot ~Flame of the Rebellion~",
        artist: "ぺのれり",
        diff: "MXM 19",
        unlock: "ΩDimension -Phase.7-"
      },
      {
        title: "MixxioN",
        artist: "MisoilePunch♪",
        diff: "MXM 20",
        unlock: "HEXA DIVER (MixxioN)"
      },
    ],
    "04a": [
      {
        title: "GODHEART",
        artist: "BlackY",
        diff: "MXM 19",
        unlock: "ΩDimension -Phase.6-"
      },
      {
        title: "飄える翼追い掛けて",
        artist: "かめりあ feat. かめりあ",
        diff: "MXM 19",
        unlock: "HEXA DIVER (MAYHEM)"
      },
      {
        title: "FIN4LE ～終止線の彼方へ～",
        artist: "カモメサノエレクトリックオーケストラ",
        diff: "MXM 20",
        unlock: "ΩDimension -Phase.1-"
      },
    ],
    "04b": [
      {
        title: "DIABLOSIS::Nāga",
        artist: "sky_delta",
        diff: "GRV 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "Verse IV",
        artist: "ZOGRAPHOS (Yu_Asahina+Yamajet)",
        diff: "HVN 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "ΣmbryØ",
        artist: "かぼちゃ",
        diff: "MXM 20",
        unlock: "ΩDimension -Phase.6-"
      },
    ],
    "05a": [
      {
        title: "FLOWER",
        artist: "DJ YOSHITAKA",
        diff: "HVN 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "GERBERA-For Finalists-",
        artist: "remixed by cosMo@暴走P",
        diff: "MXM 19",
        unlock: "PCB"
      },
      {
        title: "Bl∞min'",
        artist: "MisoilePunch♪ -Forever-",
        diff: "MXM 20",
        unlock: "HEXA DIVER (Bl∞min')"
      },
    ],
    "05b": [
      {
        title: "ラクガキスト",
        artist: "cosMo＠暴走P feat.GUMI",
        diff: "VVD 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "色を喪った街",
        artist: "かめりあ feat. かめりあ",
        diff: "MXM 19",
        unlock: "HEXA DIVER (666)"
      },
      {
        title: "いまきみに",
        artist: 'Silentroom as "少年R"',
        diff: "MXM 20",
        unlock: "HEXA DIVER (いまきみに)"
      },
    ],
    "06": [
      {
        title: "Elemental Creation",
        artist: "dj TAKA meets DJ YOSHITAKA",
        diff: "MXM 19",
        unlock: "PCB"
      },
      {
        title: "Absolute Domination",
        artist: "Laur",
        diff: "MXM 19",
        unlock: "ΩDimension -Phase.5+-"
      },
      {
        title: "APØCALYPSE RAY",
        artist: "xi",
        diff: "MXM 20",
        unlock: "HEXA DIVER (APØCALYPSE RAY)"
      },
    ],
    "07": [
      {
        title: "Growth Memories",
        artist: "Hidra-Xjeil",
        diff: "GRV 19",
        unlock: "PCB"
      },
      {
        title: "All We Need is HAPPY END!!!",
        artist: "polysha",
        diff: "MXM 19",
        unlock: "BLASTER GATE"
      },
      {
        title: "HeaveИ's Rain",
        artist: "モリモリあつし",
        diff: "MXM 20",
        unlock: "HEXA DIVER (HeaveИ's Rain)"
      },
    ],
    "08": [
      {
        title: "XROSS INFECTION",
        artist: "BlackY vs. Yooh",
        diff: "GRV 19",
        unlock: "PCB"
      },
      {
        title: "ЯeviveR",
        artist: "Diceros Bicornis",
        diff: "MXM 19",
        unlock: "HEXA DIVER (666)"
      },
      {
        title: "Λkasha",
        artist: "BlackY feat. Risa Yuzuki",
        diff: "MXM 20",
        unlock: "HEXA DIVER (Λkasha)"
      },
    ],
  },
  "eac_11": {
    "02a": [
      {
        title: "Electric Injury",
        artist: "siqlo",
        diff: "VVD 18",
        unlock: "None"
      },
      {
        title: "Wings to fly high",
        artist: "Noah",
        diff: "MXM 18",
        unlock: "Music Pack Vol.17"
      },
      {
        title: "PUPA",
        artist: "モリモリあつし",
        diff: "MXM 18",
        unlock: "None"
      },
    ],
    "02b": [
      {
        title: "SACRIFICE feat.ayame",
        artist: "Alstroemeria Records",
        diff: "MXM 18",
        unlock: "None"
      },
      {
        title: "refluxio",
        artist: "Juggernaut.",
        diff: "MXM 18",
        unlock: "Music Pack Vol.17"
      },
      {
        title: "Over The Top",
        artist: "Ashrount",
        diff: "VVD 18",
        unlock: "None"
      },
    ],
    "03a": [
      {
        title: "Lost Parliament",
        artist: "Juggernaut.",
        diff: "MXM 18",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "Imperator",
        artist: "Xe (αirlemoneX)",
        diff: "MXM 18",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "Sayonara Planet Wars",
        artist: "黒魔",
        diff: "EXH 18",
        unlock: "None"
      },
    ],
    "03b": [
      {
        title: "極彩天奏",
        artist: "かゆき",
        diff: "MXM 18",
        unlock: "None"
      },
      {
        title: "夢幻泡影",
        artist: "wa.",
        diff: "MXM 18",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "光風霽月",
        artist: "影虎。",
        diff: "MXM 18",
        unlock: "Music Pack Vol.19"
      },
    ],
  },
  "eac_inf": {
    "02a": [
      {
        title: "Everlasting Message",
        artist: "ぺのれり",
        diff: "GRV 19",
        unlock: "None"
      },
      {
        title: "For UltraPlayers",
        artist: "cosMo@暴走P",
        diff: "HVN 19",
        unlock: "None"
      },
      {
        title: "XHRONOXAPSULΞ",
        artist: "Silentroom",
        diff: "MXM 20",
        unlock: "Music Pack Vol.17"
      },
    ],
    "02b": [
      {
        title: "AμreoLe ~for Triumph~",
        artist: "Ashrount",
        diff: "MXM 19",
        unlock: "Music Pack Vol.17"
      },
      {
        title: "EncorE & cALL",
        artist: "CHUBAY",
        diff: "MXM 19",
        unlock: "Music Pack Vol.17"
      },
      {
        title: "MixxioN",
        artist: "MisoilePunch♪",
        diff: "MXM 20",
        unlock: "Music Pack Vol.17"
      },
    ],
    "03a": [
      {
        title: "Avalanx",
        artist: "隣の庭は青い(庭師+Aoi)",
        diff: "MXM 19",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "紫焔双穿",
        artist: "かめりあ",
        diff: "MXM 19",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "Bl∞min'",
        artist: "MisoilePunch♪ -Forever-",
        diff: "MXM 20",
        unlock: "Music Pack Vol.19"
      },
    ],
    "03b": [
      {
        title: "Black Emperor",
        artist: "黒魔",
        diff: "GRV 19",
        unlock: "None"
      },
      {
        title: "赫焉",
        artist: "打打だいず vs. siromaru",
        diff: "MXM 19",
        unlock: "Music Pack Vol.19"
      },
      {
        title: "いまきみに",
        artist: 'Silentroom as "少年R"',
        diff: "MXM 20",
        unlock: "Music Pack Vol.19"
      },
    ],
  }
}

export function Course({ cat, name }) {
  if (!COURSES[cat] || !COURSES[cat][name]) {
    return;
  }

  return <div className="mt-4 mb-4">
    <Table className="w-full text-center">
      <thead>
        <Row>
          <Header>Song</Header>
          <Header>Difficulty</Header>
          <Header>Unlock Condition</Header>
        </Row>
      </thead>
      <tbody>
        {COURSES[cat][name].map(({ title, artist, diff, unlock}, i) => {
          const jacketName = `${name}_${(i + 1).toString().padStart(2, '0')}.jpg`

          return (<Row key={`${cat}_${name} entry ${i + 1}`}>
            <Data>
              <div className="flex flex-row items-center gap-x-4 text-left">
                <img className="w-16" src={`${IMG_BASE_PATH}/${cat}/${jacketName}`} alt={`${cat}_${jacketName}`} />
                <div>
                  <p>{title}</p>
                  <p className="text-sm">{artist}</p>
                </div>
              </div>
            </Data>
            <Data>{diff}</Data>
            <Data>{unlock}</Data>
          </Row>);
        })}
      </tbody>
    </Table>
  </div>;
}