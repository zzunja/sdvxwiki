import { Table, Header, Row, Data } from "../../../components/Table";

const IMG_BASE_PATH = "/compendium/dan-courses";

const COURSES = {
  "ac_11": {
    "01a": [
    {
      title: "Ok!! Hug Me",
      artist: "はるなば",
      diff: "MXM 18",
      unlock: "無"
    },
    {
      title: "Imitated Visions",
      artist: "荒谷サトル",
      diff: "MXM 18",
      unlock: "BLASTER GATE"
    },
    {
      title: "天鯨譚",
      artist: "テヅカ x otoshi.b",
      diff: "MXM 18",
      unlock: "BLASTER GATE"
    },
  ],
  "01b": [
    {
      title: "Kontrol Line",
      artist: "Yooh",
      diff: "MXM 18",
      unlock: "BLC"
    },
    {
      title: "Break Through Δpex",
      artist: "Halv feat.Kuroa*",
      diff: "MXM 18",
      unlock: "BLASTER GATE"
    },
    {
      title: "ムーニャポヨポヨスッポコニャーゴ",
      artist: "全日本スッポコニャーゴ親衛隊",
      diff: "VVD 18",
      unlock: "無"
    }
  ],
  },
  "ac_inf": {
    "01a": [
      {
        title: "αzalea",
        artist: "BlackY",
        diff: "MXM 19",
        unlock: "BLC"
      },
      {
        title: "シュレーディンガーの猫",
        artist: "Cait Sith",
        diff: "GRV 19",
        unlock: "BLC"
      },
      {
        title: "You Are My Best RivaL!!",
        artist: 'cosMo＠暴走P',
        diff: "MXM 20",
        unlock: "BLC"
      },
    ],
    "01b": [
      {
        title: "L2 -Reminiscence- (SDVX ver.)",
        artist: "Ice",
        diff: "MXM 19",
        unlock: "BLC"
      },
      {
        title: "卑弥呼",
        artist: "朱雀 VS 玄武",
        diff: "MXM 19",
        unlock: "BLC"
      },
      {
        title: "I",
        artist: "黒魔",
        diff: "MXM 20",
        unlock: "BLC"
      },
    ],
  },
  "eac_11": {
    "02a": [
      {
        title: "Electric Injury",
        artist: "siqlo",
        diff: "VVD 18",
        unlock: "無"
      },
      {
        title: "Wings to fly high",
        artist: "Noah",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.17"
      },
      {
        title: "PUPA",
        artist: "モリモリあつし",
        diff: "MXM 18",
        unlock: "無"
      },
    ],
    "02b": [
      {
        title: "SACRIFICE feat.ayame",
        artist: "Alstroemeria Records",
        diff: "MXM 18",
        unlock: "無"
      },
      {
        title: "refluxio",
        artist: "Juggernaut.",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.17"
      },
      {
        title: "Over The Top",
        artist: "Ashrount",
        diff: "VVD 18",
        unlock: "無"
      },
    ],
    "03a": [
      {
        title: "Lost Parliament",
        artist: "Juggernaut.",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "Imperator",
        artist: "Xe (αirlemoneX)",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "Sayonara Planet Wars",
        artist: "黒魔",
        diff: "EXH 18",
        unlock: "無"
      },
    ],
    "03b": [
      {
        title: "極彩天奏",
        artist: "かゆき",
        diff: "MXM 18",
        unlock: "無"
      },
      {
        title: "夢幻泡影",
        artist: "wa.",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "光風霽月",
        artist: "影虎。",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
    ],
    "04": [
      {
        title: "Lost Parliament",
        artist: "Juggernaut.",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "Imperator",
        artist: "Xe (αirlemoneX)",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "Sayonara Planet Wars",
        artist: "黒魔",
        diff: "EXH 18",
        unlock: "無"
      },
    ],
    "05": [
      {
        title: "BLISS",
        artist: "ミハイル + K.key",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "Enter The Rave",
        artist: "Tatsunoshin",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "MEGALOVANIA",
        artist: "Toby Fox",
        diff: "MXM 18",
        unlock: "無"
      },
    ],
    "06": [
      {
        title: "リュミレイラ",
        artist: "後藤 feat. nayuta",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "XROSS THE XOUL",
        artist: "BlackY vs. Yooh",
        diff: "GRV 18",
        unlock: "無"
      },
      {
        title: "劇場版ムーニャポヨポヨスッポコニャーゴ~侵略だいず帝国！ドラマティック宇宙大戦争~",
        artist: "打打だいず",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.21"
      },
    ],
    "07": [
      {
        title: "ドリームエンド・サバイバー(Hidra-Xjeil Remix)",
        artist: "Hidra-Xjeil",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.22"
      },
      {
        title: "White Stream",
        artist: "BEMANI Sound Team ”ZAQUVA”",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.22"
      },
      {
        title: "=∴NOMADE∵OTION=",
        artist: "qfeileadh + yuichi NAGAO",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.22"
      },
    ],
    "08": [
      {
        title: "ミュージックプレイヤー （J-pop Remix）",
        artist: "technoplanet feat. Risa Yuzuki",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.24"
      },
      {
        title: "Imitated Visions",
        artist: "荒谷サトル",
        diff: "MXM 18",
        unlock: "歌曲包 Vol.24"
      },
      {
        title: "Doppelganger",
        artist: "LeaF",
        diff: "MXM 18",
        unlock: "無"
      },
    ],
  },
  "eac_inf": {
    "02a": [
      {
        title: "Everlasting Message",
        artist: "ぺのれり",
        diff: "GRV 19",
        unlock: "無"
      },
      {
        title: "For UltraPlayers",
        artist: "cosMo@暴走P",
        diff: "HVN 19",
        unlock: "無"
      },
      {
        title: "XHRONOXAPSULΞ",
        artist: "Silentroom",
        diff: "MXM 20",
        unlock: "歌曲包 Vol.17"
      },
    ],
    "02b": [
      {
        title: "AμreoLe ~for Triumph~",
        artist: "Ashrount",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.17"
      },
      {
        title: "EncorE & cALL",
        artist: "CHUBAY",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.17"
      },
      {
        title: "MixxioN",
        artist: "MisoilePunch♪",
        diff: "MXM 20",
        unlock: "歌曲包 Vol.17"
      },
    ],
    "03a": [
      {
        title: "Avalanx",
        artist: "隣の庭は青い(庭師+Aoi)",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "紫焔双穿",
        artist: "かめりあ",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "Bl∞min'",
        artist: "MisoilePunch♪ -Forever-",
        diff: "MXM 20",
        unlock: "歌曲包 Vol.19"
      },
    ],
    "03b": [
      {
        title: "Black Emperor",
        artist: "黒魔",
        diff: "GRV 19",
        unlock: "無"
      },
      {
        title: "赫焉",
        artist: "打打だいず vs. siromaru",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.19"
      },
      {
        title: "いまきみに",
        artist: 'Silentroom as "少年R"',
        diff: "MXM 20",
        unlock: "歌曲包 Vol.19"
      },
    ],
    "04": [
      {
        title: "BLACK or WHITE?",
        artist: "BlackYooh vs. siromaru",
        diff: "GRV 19",
        unlock: "無"
      },
      {
        title: "Spectacular“V”Adventure!",
        artist: "Enterskip",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "APØCALYPSE RAY",
        artist: 'xi',
        diff: "MXM 20",
        unlock: "歌曲包 Vol.21"
      },
    ],
    "05": [
      {
        title: "Breakneck Pursuit",
        artist: "Ashrount",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "and After the Merry BADEND",
        artist: "polysha",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.21"
      },
      {
        title: "HeaveИ's Rain",
        artist: 'モリモリあつし',
        diff: "MXM 20",
        unlock: "歌曲包 Vol.21"
      },
    ],
    "06": [
      {
        title: "OVEЯ+TUЯE",
        artist: "kanone VS nora2r",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.22"
      },
      {
        title: "perditus†paradisus",
        artist: "iconoclasm",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.22"
      },
      {
        title: "Λkasha",
        artist: 'BlackY feat. Risa Yuzuki',
        diff: "MXM 20",
        unlock: "歌曲包 Vol.22"
      },
    ],
    "07": [
      {
        title: "Xinca",
        artist: " 隣の庭は青い(庭師+Aoi)",
        diff: "MXM 19",
        unlock: "歌曲包 Vol.24"
      },
      {
        title: "Bad Elixir",
        artist: "xi",
        diff: "MXM 19",
        unlock: "無"
      },
      {
        title: "Don't you dare play GOD",
        artist: 'technoplanet feat. Tamako Kinoshita',
        diff: "MXM 20",
        unlock: "歌曲包 Vol.24"
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
          <Header>歌曲</Header>
          <Header>難度</Header>
          <Header>解鎖條件</Header>
        </Row>
      </thead>
      <tbody>
        {COURSES[cat][name].map(({ title, artist, diff, unlock}, i) => {
          const jacketName = `${name}_${(i + 1).toString().padStart(2, '0')}.webp`

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
