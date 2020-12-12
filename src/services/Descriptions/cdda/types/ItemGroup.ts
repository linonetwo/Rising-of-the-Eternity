export interface IItemGroup {
  type: 'item_group';
  subtype?: string;
  id: string;
  entries?: Array<
    | Entry
    | Entries2
    | Entries3
    | Entries4
    | Entries5
    | Entries6
    | Entries7
    | Entries8
    | Entries9
    | Entries10
    | Entries11
    | Entries12
    | Entries13
    | Entries14
    | Entries15
    | Entries16
    | Entries17
    | Entries18
    | Entries19
    | Entries20
    | Entries21
    | Entries22
    | Entries23
    | Entries24
    | Entries25
    | Entries26
    | Entries27
    | Entries28
    | Entries29
    | Entries30
    | Entries31
    | Entries32
    | Entries33
    | Entries34
    | Entries35
    | Entries36
    | Entries37
    | Entries38
    | Entries39
    | Entries40
    | Entries41
    | Entries42
    | Entries43
    | Entries44
    | Entries45
    | Entries46
    | Entries47
    | Entries48
    | Entries49
    | Entries50
    | Entries51
    | Entries52
    | Entries53
    | Entries54
    | Entries55
    | Entries56
    | Entries57
    | Entries58
    | Entries59
    | Entries60
    | Collection17
    | Entries62
    | Entries63
    | Entries64
    | Entries65
    | Entries66
    | Entries67
    | Entries68
    | Entries69
    | Entries70
    | Entries71
    | Entries72
    | Entries73
    | Entries74
    | Entries75
    | Entries76
    | Entries77
    | Entries78
    | Entries79
    | Entries80
    | Entries81
    | Entries82
    | Entries83
    | Distribution4
    | Entries85
    | Entries86
    | Entries87
    | Entries88
    | Entries89
    | Entries90
    | Entries91
    | Entries92
    | Entries93
    | Entries94
    | Entries95
    | Entries96
    | Entries97
    | Entries98
    | Collection13
    | Entries100
    | Entries101
    | Entries102
    | Entries103
    | Entries104
    | Entries105
    | Collection10
    | Entries107
    | Entries108
    | Entries109
    | Entries110
    | Collection8
    | Entries112
    | Entries113
    | Entries114
    | Entries115
    | Collection3
    | Entries117
    | Entries118
    | Entries119
    | Entries120
    | Entries121
    | Entries122
    | Entries123
    | Entries124
    | Entries125
    | Entries126
    | Entries127
    | Entries128
    | Entries129
    | Entries130
    | Entries131
    | Entries132
    | Entries133
    | Entries134
    | Entries135
    | Collection21
    | Collection14
    | Entries138
    | Entries139
    | Entries140
    | Entries141
    | Entries142
    | Distribution
    | Entries144
    | Collection
    | Entries146
    | Entries147
    | Entries148
    | Entries149
    | Entries150
    | Entries151
    | Entries152
    | Entries153
    | Entries154
    | Entries155
    | Entries156
    | Collection25
    | Entries158
    | Entries159
    | Entries160
    | Entries161
    | Entries162
    | Entries163
    | Entries164
    | Entries165
    | Entries166
    | Collection7
    | Distribution10
    | Entries169
    | Entries170
    | Entries171
    | Entries172
    | Entries173
    | Entries174
    | Entries175
    | Entries176
    | Entries177
    | Entries178
    | Entries179
    | Entries180
    | Entries181
  >;
  items?: Array<
    | Item
    | Entries2
    | Entries5
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items4
    | Items19
    | Entries8
    | Entries9
    | Items22
    | Items23
    | Items24
    | Items25
    | Entries24
    | Entries26
    | Items28
    | Entries31
    | Entries35
    | Items31
    | Items31
    | Items33
    | Items34
    | Items35
    | Entries41
    | Items37
    | Items38
    | Items38
    | Items38
    | Items38
    | Items38
    | Items43
    | Items44
    | Entries44
    | Entries44
    | Entries44
    | Entries44
    | Entries44
    | Entries44
    | Entries44
    | Entries46
    | Items53
    | Items53
    | Items55
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items56
    | Items83
    | Items84
    | Items85
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Entries67
    | Items109
    | Items110
    | Items111
    | Distribution30
    | Items113
    | Items113
    | Entries74
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries76
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Entries81
    | Distribution36
    | Items173
    | Items174
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Distribution4
    | Items189
    | Items190
    | Items191
    | Items192
    | Items193
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items194
    | Items205
    | Items206
    | Items207
    | Entries97
    | Collection13
    | Items210
    | Items211
    | Entries105
    | Items213
    | Entries110
    | Items215
    | Items216
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Entries120
    | Entries120
    | Entries120
    | Entries120
    | Entries120
    | Entries120
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries122
    | Entries124
    | Entries124
    | Entries124
    | Entries127
    | Entries127
    | Entries127
    | Entries127
    | Entries127
    | Entries127
    | Entries127
    | Items343
    | Items344
    | Items344
    | Items346
    | Items347
    | Items348
    | Items349
    | Entries135
    | Entries135
    | Entries135
    | Entries135
    | Entries135
    | Entries135
    | Entries135
    | Entries135
    | Collection27
    | Entries139
    | Entries142
    | Distribution
    | Distribution
    | Collection18
    | Items364
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Collection
    | Items414
    | Entries151
    | Items416
    | Items417
    | Items418
    | Items419
    | Collection25
    | Items421
    | Items422
    | Collection7
    | Items424
    | Items424
    | Distribution10
    | Distribution10
    | Distribution10
    | Items429
    | Items430
    | Items430
    | Items430
    | Items430
    | Items434
    | Items435
    | Items436
    | Items437
  >;
  '//'?: string;
  '//2'?: string;
  '//3'?: string;
  ammo?: number;
  magazine?: number;
  'container-item'?: string;
  on_overflow?: string;
  groups?: Array<Array<number | string> | string>;
  '//TODO'?: string;
}

interface Items437 {
  item?: string;
  collection?: Collection33[];
  prob?: number;
  group?: string;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
}

interface Collection33 {
  item: string;
  'count-min'?: number;
  'count-max'?: number;
}

interface Items436 {
  group?: string;
  item?: string;
  distribution?: Distribution43[];
  collection?: Items34[];
  prob?: number;
}

interface Items435 {
  group?: string;
  damage?: number[] | number;
  prob?: number;
  distribution?: Entries27[];
  item?: string;
}

interface Items434 {
  item: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Items430 {
  item: string;
  prob: number;
  'charges-min': number;
  'container-item': string;
  sealed: boolean;
}

interface Items429 {
  item: string;
  charges?: number;
  count?: number;
}

interface Items424 {
  group: string;
  prob: number;
  'count-min': number;
  'count-max': number;
}

interface Items422 {
  item: string;
  prob: number;
  charges?: number[];
  damage?: number[];
}

interface Items421 {
  item: string;
  prob: number;
  charges: number[] | number;
}

interface Items419 {
  item: string;
  prob: number;
  'container-group': string;
}

interface Items418 {
  item?: string;
  distribution?: Distribution4[];
}

interface Items417 {
  item: string;
  charges: number;
  'charges-min': number;
}

interface Items416 {
  group?: string;
  prob?: number;
  item?: string;
  distribution?: Distribution49[];
}

interface Distribution49 {
  collection?: Distribution[];
  prob: number;
  item?: string;
}

interface Items414 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution4[];
  group?: string;
  amount?: number[];
}

interface Items364 {
  item: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
}

interface Items349 {
  distribution?: Distribution4[];
  prob: number;
  group?: string;
}

interface Items348 {
  distribution?: Distribution4[];
  prob: number;
  collection?: Distribution4[];
}

interface Items347 {
  group?: string;
  item?: string;
  prob?: number;
  distribution?: Entries5[];
}

interface Items346 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
  'container-item': string;
  sealed?: boolean;
}

interface Items344 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
  'container-item': string;
  sealed: boolean;
}

interface Items343 {
  item: string;
  count: number;
}

interface Items216 {
  item: string;
  'container-item'?: string;
  charges?: number;
  count?: number;
}

interface Items215 {
  item: string;
  charges: number[];
  'container-item': string;
  prob: number;
  sealed: boolean;
}

interface Items213 {
  item?: string;
  prob?: number;
  distribution?: Distribution48[];
}

interface Distribution48 {
  collection?: Collection3[];
  prob: number;
  item?: string;
}

interface Items211 {
  collection?: Collection32[];
  prob: number;
  item?: string;
  'charges-min'?: number;
}

interface Collection32 {
  item: string;
  'charges-min'?: number;
}

interface Items210 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
  group?: string;
}

interface Items207 {
  group: string;
  'count-min': number;
  'count-max': number;
}

interface Items206 {
  distribution: Distribution47[];
}

interface Distribution47 {
  item: string;
  prob: number;
  damage?: number[];
}

interface Items205 {
  group?: string;
  item?: string;
  prob?: number;
  collection?: Collection3[];
  distribution?: Entries5[];
}

interface Items194 {
  item: string;
  prob: number;
  'custom-flags': string[];
}

interface Items193 {
  distribution: Entries35[];
  prob: number;
}

interface Items192 {
  distribution?: Distribution46[];
  group?: string;
  prob?: number;
}

interface Distribution46 {
  collection?: Distribution[];
  prob: number;
  group?: string;
}

interface Items191 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
}

interface Items190 {
  item: string;
  count?: number[] | number;
  charges?: number[];
}

interface Items189 {
  group?: string;
  item?: string;
  distribution?: Distribution43[];
}

interface Items174 {
  group?: string;
  prob: number;
  distribution?: Entries20[];
}

interface Items173 {
  item: string;
  prob: number;
  'charges-max': number;
}

interface Items113 {
  distribution: Distribution[];
  prob: number;
}

interface Items111 {
  item: string;
  prob: number;
  'charges-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Items110 {
  collection: Collection13[];
  prob: number;
}

interface Items109 {
  item: string;
  count: number;
  prob: number;
}

interface Items85 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
  'custom-flags'?: string[];
}

interface Items84 {
  distribution: Collection[];
  prob: number;
}

interface Items83 {
  distribution: Distribution45[];
}

interface Distribution45 {
  item?: string;
  prob: number;
  collection?: Entries46[];
}

interface Items56 {
  item: string;
  prob: number;
  'charges-min': number;
}

interface Items55 {
  group?: string;
  item?: string;
  prob?: number;
  distribution?: Distribution43[];
}

interface Items53 {
  collection: Collection31[];
  prob: number;
}

interface Collection31 {
  item?: string;
  prob: number;
  distribution?: Entries81[];
}

interface Items44 {
  item: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
  'contents-group'?: string;
}

interface Items43 {
  item: string;
  'contents-group'?: string;
  'container-item'?: string;
}

interface Items38 {
  item: string;
  prob: number;
  'container-item': string;
  sealed: boolean;
}

interface Items37 {
  item?: string;
  count?: number;
  charges?: number;
  'container-item'?: string;
  group?: string;
  sealed?: boolean;
}

interface Items35 {
  group?: string;
  prob: number;
  damage?: number[];
  count?: number[];
  item?: string;
}

interface Items34 {
  distribution: Distribution4[];
}

interface Items33 {
  distribution: Entries98[];
}

interface Items31 {
  distribution: Entries81[];
  prob: number;
}

interface Items28 {
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
}

interface Items25 {
  distribution: Distribution10[];
}

interface Items24 {
  distribution: Distribution44[];
}

interface Distribution44 {
  item?: string;
  prob: number;
  charges?: number[];
  collection?: Collection13[];
}

interface Items23 {
  item?: string;
  prob: number;
  group?: string;
  'custom-flags'?: string[];
}

interface Items22 {
  group: string;
  prob: number;
  damage?: number[];
}

interface Items19 {
  group?: string;
  item?: string;
  distribution?: Distribution43[];
  prob?: number;
  charges?: number[];
}

interface Distribution43 {
  item?: string;
  prob?: number;
  collection?: Collection13[];
  distribution?: Collection13[];
}

interface Items4 {
  item: string;
  prob: number;
  charges: number;
}

interface Item {
  item: string;
  charges: number[];
}

interface Entries181 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Entries180 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution42[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
}

interface Distribution42 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
  charges?: number;
  count?: number[];
  distribution?: Distribution25[];
}

interface Entries179 {
  item: string;
  'count-min': number;
  'count-max': number;
}

interface Entries178 {
  distribution?: Distribution4[];
  item?: string;
  prob?: number;
  count?: number[];
  collection?: Collection3[];
}

interface Entries177 {
  item: string;
  count?: number[];
  prob?: number;
  'charges-min'?: number;
}

interface Entries176 {
  group?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  item?: string;
  count?: number[];
}

interface Entries175 {
  item: string;
  prob: number;
  charges?: number[] | number;
  'charges-min'?: number;
}

interface Entries174 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution41[];
}

interface Distribution41 {
  collection: Collection30[];
}

interface Collection30 {
  distribution?: Distribution40[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Distribution40 {
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  collection?: Collection29[];
}

interface Collection29 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution14[];
}

interface Entries173 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution39[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Distribution39 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  collection?: Collection22[];
  count?: number[];
}

interface Entries172 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
  'container-item'?: string;
}

interface Entries171 {
  item: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
}

interface Entries170 {
  group?: string;
  damage?: number[];
  distribution?: Collection[];
  prob?: number;
  item?: string;
}

interface Entries169 {
  item?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution38[];
  'charges-min'?: number;
  collection?: Collection28[];
}

interface Collection28 {
  item: string;
  count?: number[];
  'charges-min': number;
}

interface Distribution38 {
  item?: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
}

interface Entries166 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
}

interface Entries165 {
  group?: string;
  damage?: number[];
  distribution?: Distribution37[];
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Distribution37 {
  group?: string;
  damage?: number[];
  prob: number;
  collection?: Collection27[];
  distribution?: Entries20[];
}

interface Collection27 {
  group: string;
  damage: number[];
  prob: number;
}

interface Entries164 {
  distribution?: Distribution36[];
  prob: number;
  item?: string;
  'charges-min'?: number;
  'container-item'?: string;
  'charges-max'?: number;
}

interface Distribution36 {
  item: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
}

interface Entries163 {
  item?: string;
  prob: number;
  charges?: number[];
  count?: number[];
  group?: string;
}

interface Entries162 {
  group?: string;
  item?: string;
  damage?: number;
}

interface Entries161 {
  item: string;
  prob: number;
  'charges-min'?: number;
  charges?: number;
  'container-item'?: string;
}

interface Entries160 {
  item: string;
  'count-min'?: number;
  'count-max'?: number;
  prob?: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
}

interface Entries159 {
  item: string;
  prob?: number;
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Entries158 {
  distribution?: Collection[];
  group?: string;
  count?: number[];
  prob?: number;
}

interface Entries156 {
  distribution?: Distribution34[];
  group?: string;
  prob?: number;
  'damage-min'?: number;
  'damage-max'?: number;
  collection?: Collection26[];
  item?: string;
  count?: number[];
}

interface Collection26 {
  distribution: Distribution35[];
  prob?: number;
}

interface Distribution35 {
  group?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  item?: string;
  collection?: Entries46[];
}

interface Distribution34 {
  item?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  group?: string;
}

interface Entries155 {
  item: string;
  count?: number[] | number;
  charges?: number[] | number;
  prob?: number;
  'ammo-item'?: string;
  'charges-min'?: number;
}

interface Entries154 {
  item?: string;
  prob: number;
  count?: number[];
  collection?: Distribution4[];
}

interface Entries153 {
  group: string;
  count: number[];
}

interface Entries152 {
  group: string;
  artifact: Artifact;
  prob: number;
}

interface Artifact {
  procgen_id: string;
  rules: Rules;
}

interface Rules {
  power_level: number;
  max_attributes: number;
  max_negative_power: number;
}

interface Entries151 {
  item: string;
  prob: number;
  count?: number[];
}

interface Entries150 {
  distribution: Distribution33[];
}

interface Distribution33 {
  collection?: Collection25[];
  prob: number;
  item?: string;
}

interface Collection25 {
  item: string;
  prob?: number;
  charges?: number[];
  count?: number[];
}

interface Entries149 {
  item?: string;
  prob: number;
  collection?: Distribution4[];
  group?: string;
  count?: number[];
}

interface Entries148 {
  distribution?: Distribution32[];
  prob?: number;
  group?: string;
  count?: number[];
}

interface Distribution32 {
  group: string;
  damage?: number[];
  prob?: number;
  'contents-item'?: string;
}

interface Entries147 {
  distribution?: Distribution[];
  prob: number;
  item?: string;
  charges?: number[];
}

interface Entries146 {
  group?: string;
  'contents-group'?: string;
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries144 {
  group?: string;
  damage?: number[];
  collection?: Collection[];
  prob?: number;
}

interface Entries142 {
  group?: string;
  prob?: number;
  item?: string;
  distribution?: Entries2[];
}

interface Entries141 {
  distribution: Distribution31[];
}

interface Distribution31 {
  item?: string;
  prob?: number;
  charges?: number[];
  collection?: Collection24[];
}

interface Collection24 {
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution30[];
}

interface Distribution30 {
  item: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries140 {
  distribution?: Distribution4[];
  prob: number;
  item?: string;
  'container-item'?: string;
}

interface Entries139 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
}

interface Entries138 {
  distribution: Distribution29[];
}

interface Distribution29 {
  distribution?: Distribution4[];
  prob: number;
  collection?: Collection23[];
  item?: string;
}

interface Collection23 {
  distribution?: Entries124[];
  item?: string;
}

interface Entries135 {
  item: string;
  prob: number;
  charges: number;
  'container-item': string;
}

interface Entries134 {
  distribution?: Distribution28[];
  prob?: number;
  collection?: Entries26[];
}

interface Distribution28 {
  distribution?: Distribution27[];
  prob: number;
  collection?: Collection19[];
  item?: string;
  'container-item'?: string;
}

interface Distribution27 {
  item: string;
  'contents-item'?: string;
  prob: number;
}

interface Entries133 {
  group?: string;
  damage?: number[];
  prob?: number;
  dirt?: number[];
  item?: string;
}

interface Entries132 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[] | number;
}

interface Entries131 {
  item?: string;
  collection?: Entries46[];
  prob?: number;
}

interface Entries130 {
  group?: string;
  count?: number[] | number;
  item?: string;
  prob?: number;
  'container-item'?: string;
  charges?: number[] | number;
  'ammo-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries129 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[];
  'charges-min'?: number;
}

interface Entries128 {
  group?: string;
  prob?: number;
  '//'?: string;
  item?: string;
  'damage-min'?: number;
  'damage-max'?: number;
  damage?: number;
}

interface Entries127 {
  item: string;
  prob: number;
  'count-min': number;
  'count-max': number;
}

interface Entries126 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution26[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Distribution26 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  distribution?: Distribution25[];
  count?: number[];
}

interface Distribution25 {
  collection?: Collection22[];
  prob: number;
  item?: string;
  count?: number[];
  'charges-min'?: number;
  'container-item'?: string;
}

interface Collection22 {
  item: string;
  charges?: number;
  'container-item': string;
  prob?: number;
  sealed: boolean;
  count?: number[];
}

interface Entries125 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
  'custom-flags'?: string[];
  charges?: number[] | number;
}

interface Entries124 {
  distribution: Distribution4[];
  prob: number;
}

interface Entries123 {
  item?: string;
  prob: number;
  damage?: number[];
  group?: string;
}

interface Entries122 {
  item: string;
  prob: number;
  'container-item': string;
}

interface Entries121 {
  distribution?: Distribution3[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Entries120 {
  group: string;
  count: number[];
  prob: number;
}

interface Entries119 {
  item?: string;
  count?: number[];
  prob?: number;
  collection?: Entries41[];
}

interface Entries118 {
  item?: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  group?: string;
}

interface Entries117 {
  group?: string;
  prob?: number;
  damage?: number[];
  distribution?: Distribution24[];
}

interface Distribution24 {
  collection: Collection21[];
}

interface Collection21 {
  group: string;
  prob?: number;
  damage?: number[];
}

interface Entries115 {
  item: string;
  count: number;
  prob: number;
  charges?: number;
}

interface Entries114 {
  group?: string;
  count: number[];
  prob: number;
  item?: string;
}

interface Entries113 {
  item: string;
  'count-min': number;
  'count-max': number;
  prob?: number;
}

interface Entries112 {
  item?: string;
  prob: number;
  group?: string;
  'charges-min'?: number;
}

interface Entries110 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
}

interface Entries109 {
  item?: string;
  damage?: number[];
  group?: string;
  prob?: number;
}

interface Entries108 {
  collection: Collection17[];
}

interface Entries107 {
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution23[];
}

interface Distribution23 {
  item?: string;
  group?: string;
  prob?: number;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries105 {
  item: string;
  count?: number[];
  prob?: number;
}

interface Entries104 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
  charges?: number[] | number;
  count?: number[];
}

interface Entries103 {
  distribution?: Distribution22[];
  item?: string;
  prob?: number;
}

interface Distribution22 {
  collection?: Collection20[];
  prob: number;
  item?: string;
  count?: number[];
}

interface Collection20 {
  item?: string;
  count?: number[];
  prob?: number;
  charges?: number;
  group?: string;
}

interface Entries102 {
  group?: string;
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
  charges?: number;
}

interface Entries101 {
  distribution?: Entries17[];
  prob: number;
  collection?: Entries81[];
}

interface Entries100 {
  item: string;
  'ammo-item': string;
  charges: number;
  'container-item': string;
}

interface Entries98 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  group?: string;
  charges?: number[] | number;
}

interface Entries97 {
  group?: string;
  count?: number[];
  prob?: number;
  item?: string;
}

interface Entries96 {
  group?: string;
  'damage-min'?: number;
  'damage-max'?: number;
  prob?: number;
  item?: string;
  damage?: number;
}

interface Entries95 {
  item?: string;
  damage?: number[];
  count?: number[];
  group?: string;
  prob?: number;
}

interface Entries94 {
  item?: string;
  count?: number[];
  prob: number;
  collection?: Entries81[];
}

interface Entries93 {
  item: string;
  'container-item': string;
  prob: number;
  charges: number[];
}

interface Entries92 {
  distribution?: Collection[];
  item?: string;
}

interface Entries91 {
  group?: string;
  distribution?: Collection[];
}

interface Entries90 {
  collection: Entries5[];
  prob: number;
}

interface Entries89 {
  distribution: Distribution21[];
}

interface Distribution21 {
  collection?: Collection19[];
  prob: number;
  group?: string;
}

interface Collection19 {
  item: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries88 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution20[];
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Distribution20 {
  group?: string;
  prob?: number;
  damage?: number[];
  distribution?: Distribution19[];
}

interface Distribution19 {
  group: string;
  damage: number[];
  prob: number;
  'contents-item'?: string;
}

interface Entries87 {
  group: string;
  'count-min': number;
  'count-max': number;
  prob?: number;
}

interface Entries86 {
  group: string;
  'count-min'?: number;
  'count-max'?: number;
  prob?: number;
}

interface Entries85 {
  item: string;
  count?: number[];
  prob: number;
  charges?: number[];
}

interface Entries83 {
  group?: string;
  count?: number[];
  prob: number;
  item?: string;
  'container-item'?: string;
  charges?: number[];
}

interface Entries82 {
  distribution?: Distribution18[];
  group?: string;
  damage?: number[];
}

interface Distribution18 {
  item: string;
  count: number;
  damage?: number[];
  prob: number;
}

interface Entries81 {
  item: string;
  count: number[];
  prob: number;
}

interface Entries80 {
  group: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
}

interface Entries79 {
  group?: string;
  prob: number;
  item?: string;
  'container-item'?: string;
  sealed?: boolean;
  charges?: number[] | number;
  'charges-min'?: number;
}

interface Entries78 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[];
  count?: number[];
  collection?: Distribution4[];
}

interface Entries77 {
  item: string;
  charges: number[];
  'container-item': string;
}

interface Entries76 {
  item: string;
  prob: number;
  charges: number[];
}

interface Entries75 {
  item?: string;
  group?: string;
  count?: number[];
}

interface Entries74 {
  item: string;
  'ammo-item': string;
  charges: number;
  'contents-item': string[];
}

interface Entries73 {
  group?: string;
  damage?: number[];
  item?: string;
}

interface Entries72 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  group?: string;
  charges?: number;
}

interface Entries71 {
  item: string;
  prob: number;
  'container-item'?: string;
}

interface Entries70 {
  item?: string;
  count?: number[];
  prob?: number;
  collection?: Collection3[];
}

interface Entries69 {
  collection: Collection18[];
}

interface Collection18 {
  distribution?: Distribution4[];
  prob: number;
  item?: string;
}

interface Entries68 {
  distribution?: Distribution17[];
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  damage?: number[];
  charges?: number[];
  group?: string;
}

interface Distribution17 {
  item?: string;
  prob?: number;
  'charges-min'?: number;
  'charges-max'?: number;
  collection?: Collection17[];
  distribution?: Distribution4[];
  charges?: number[];
}

interface Entries67 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
}

interface Entries66 {
  item: string;
  'container-item': string;
  'charges-min': number;
  'charges-max': number;
}

interface Entries65 {
  item: string;
  prob: number;
  charges?: number;
  'container-item'?: string;
}

interface Entries64 {
  item: string;
  charges: number;
}

interface Entries63 {
  item?: string;
  prob: number;
  group?: string;
  charges?: number;
  'container-item'?: string;
}

interface Entries62 {
  item?: string;
  prob: number;
  charges?: number[];
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
}

interface Entries60 {
  collection?: Collection17[];
  prob?: number;
  item?: string;
  distribution?: Distribution7[];
}

interface Collection17 {
  item?: string;
  prob?: number;
  distribution?: Distribution4[];
}

interface Entries59 {
  group?: string;
  prob?: number;
  damage?: number[];
  distribution?: Distribution16[];
}

interface Distribution16 {
  collection: Collection16[];
}

interface Collection16 {
  distribution?: Distribution15[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Distribution15 {
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  collection?: Collection15[];
}

interface Collection15 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution14[];
  item?: string;
}

interface Distribution14 {
  distribution?: Distribution10[];
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
}

interface Entries58 {
  distribution?: Distribution4[];
  prob: number;
  group?: string;
  item?: string;
  collection?: Collection14[];
}

interface Collection14 {
  item: string;
  prob: number;
  charges?: number[];
}

interface Entries57 {
  group?: string;
  damage?: number[];
  item?: string;
  'contents-group'?: string;
  prob?: number;
}

interface Entries56 {
  item?: string;
  prob?: number;
  charges?: number[];
  count?: number[];
  collection?: Distribution4[];
}

interface Entries55 {
  group?: string;
  damage?: number[];
  prob?: number;
  dirt?: number[];
  collection?: Distribution4[];
}

interface Entries54 {
  item: string;
  prob: number;
  charges?: number;
  'charges-min'?: number;
}

interface Entries53 {
  item: string;
  'charges-min'?: number;
  'charges-max'?: number;
  count?: number[];
}

interface Entries52 {
  distribution: Entries9[];
}

interface Entries51 {
  item: string;
  damage: number[];
  count?: number[];
}

interface Entries50 {
  item: string;
  count?: number[] | number;
  'charges-min'?: number;
  'charges-max'?: number;
  charges?: number[] | number;
  prob?: number;
  'ammo-item'?: string;
}

interface Entries49 {
  item?: string;
  prob: number;
  group?: string;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  sealed?: boolean;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
}

interface Entries48 {
  distribution?: Distribution[];
  prob: number;
  item?: string;
  collection?: Collection13[];
}

interface Collection13 {
  item: string;
}

interface Entries47 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution13[];
}

interface Distribution13 {
  collection?: Collection12[];
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
}

interface Collection12 {
  distribution?: Distribution12[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Distribution12 {
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  collection?: Collection11[];
}

interface Collection11 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution11[];
  item?: string;
}

interface Distribution11 {
  distribution?: Distribution10[];
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  collection?: Entries27[];
}

interface Distribution10 {
  item: string;
  prob: number;
  damage: number[];
}

interface Entries46 {
  group?: string;
  item?: string;
}

interface Entries45 {
  distribution?: Collection[];
  prob: number;
  item?: string;
  charges?: number[];
}

interface Entries44 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
  'container-item': string;
}

interface Entries43 {
  item?: string;
  prob: number;
  charges?: number[];
  'charges-min'?: number;
  count?: number[];
  'container-item'?: string;
  distribution?: Distribution9[];
}

interface Distribution9 {
  item: string;
  'charges-min': number;
}

interface Entries42 {
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
  'count-min'?: number;
  'count-max'?: number;
}

interface Entries41 {
  item: string;
  count: number[];
}

interface Entries40 {
  distribution?: Distribution8[];
  item?: string;
  count?: number[];
  prob?: number;
}

interface Distribution8 {
  collection?: Collection10[];
  prob: number;
  item?: string;
  'charges-min'?: number;
}

interface Collection10 {
  item: string;
  prob: number;
  'charges-min'?: number;
}

interface Entries39 {
  item: string;
  'custom-flags'?: string[];
}

interface Entries38 {
  item?: string;
  prob: number;
  group?: string;
  'container-item'?: string;
  sealed?: boolean;
}

interface Entries37 {
  item: string;
  'container-item': string;
  charges: number;
}

interface Entries36 {
  distribution?: Distribution7[];
  prob?: number;
  item?: string;
  count?: number[];
  charges?: number[];
  'container-item'?: string;
  sealed?: boolean;
  group?: string;
}

interface Distribution7 {
  item: string;
  charges?: number[];
  'container-item'?: string;
  prob: number;
  sealed?: boolean;
  count?: number[];
}

interface Entries35 {
  group: string;
  count?: number[];
  prob: number;
}

interface Entries34 {
  item: string;
  prob: number;
  'contents-group'?: string;
}

interface Entries33 {
  collection: Collection9[];
  prob: number;
}

interface Collection9 {
  item: string;
  charges?: number[];
  prob?: number;
}

interface Entries32 {
  item?: string;
  prob: number;
  group?: string;
  charges?: number[] | number;
  count?: number[];
}

interface Entries31 {
  group: string;
  damage: number[];
}

interface Entries30 {
  item: string;
  'container-item'?: string;
  sealed?: boolean;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries29 {
  item?: string;
  damage?: number[];
  count?: number[];
  group?: string;
}

interface Entries28 {
  item?: string;
  count?: number[];
  prob: number;
  collection?: Collection8[];
}

interface Collection8 {
  item: string;
  count?: number[];
}

interface Entries27 {
  item: string;
  damage: number[];
}

interface Entries26 {
  group?: string;
  item?: string;
  prob?: number;
}

interface Entries25 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Collection[];
}

interface Entries24 {
  item?: string;
  count?: number[];
  prob: number;
  group?: string;
}

interface Entries23 {
  item: string;
  charges?: number[];
  'container-item'?: string;
  count?: number[];
  prob?: number;
  'charges-min'?: number;
}

interface Entries22 {
  item: string;
  prob?: number;
  'container-item'?: string;
}

interface Entries21 {
  group?: string;
  distribution?: Distribution4[];
  prob?: number;
  item?: string;
}

interface Entries20 {
  group: string;
  prob: number;
  'contents-item'?: string;
}

interface Entries19 {
  collection: Collection7[];
  prob: number;
}

interface Collection7 {
  group: string;
  prob?: number;
}

interface Entries18 {
  collection: Collection6[];
}

interface Collection6 {
  distribution: Distribution4[];
  prob?: number;
}

interface Entries17 {
  item: string;
  prob: number;
  charges?: number;
}

interface Entries16 {
  group?: string;
  item?: string;
  charges?: number;
  damage?: number[];
}

interface Entries15 {
  distribution?: Distribution6[];
  item?: string;
  prob?: number;
}

interface Distribution6 {
  collection?: Collection5[];
  prob: number;
  item?: string;
  count?: number[];
}

interface Collection5 {
  item?: string;
  count?: number[];
  prob?: number;
  group?: string;
  charges?: number;
  'charges-min'?: number;
}

interface Entries14 {
  item: string;
  'container-item'?: string;
  count?: number;
  charges?: number;
  'ammo-item'?: string;
}

interface Entries13 {
  distribution?: Distribution5[];
  item?: string;
  collection?: Distribution4[];
}

interface Distribution5 {
  collection?: Collection4[];
  distribution?: Distribution4[];
}

interface Distribution4 {
  item: string;
  prob: number;
}

interface Collection4 {
  collection?: Collection3[];
  item?: string;
}

interface Collection3 {
  item: string;
  prob?: number;
}

interface Entries12 {
  item: string;
  prob: number;
  'custom-flags'?: string[];
}

interface Entries11 {
  distribution?: Distribution3[];
  group?: string;
  damage?: number[];
}

interface Distribution3 {
  group?: string;
  damage?: number[];
  prob: number;
  collection?: Collection2[];
}

interface Collection2 {
  group: string;
  damage: number[];
  prob?: number;
}

interface Entries10 {
  item: string;
  count?: number[];
  charges?: number[] | number;
  prob?: number;
  'charges-min'?: number;
  'container-item'?: string;
}

interface Entries9 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number;
}

interface Entries8 {
  item?: string;
  prob: number;
  group?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries7 {
  item: string;
  prob: number;
  charges?: number[];
  'contents-item'?: string;
}

interface Entries6 {
  distribution?: Distribution2[];
  prob?: number;
  group?: string;
  count?: number[];
  collection?: Collection[];
}

interface Collection {
  group: string;
  prob: number;
}

interface Distribution2 {
  group: string;
  damage?: number[];
  prob: number;
  'contents-group'?: string;
  'contents-item'?: string;
}

interface Entries5 {
  item?: string;
  prob: number;
  group?: string;
  charges?: number[];
}

interface Entries4 {
  item: string;
  'ammo-item': string;
  charges: number;
}

interface Entries3 {
  item: string;
  'charges-min': number;
  'charges-max': number;
}

interface Entries2 {
  item?: string;
  prob: number;
  group?: string;
}

interface Entry {
  group?: string;
  prob: number;
  item?: string;
  distribution?: Distribution[];
}

interface Distribution {
  group: string;
}
