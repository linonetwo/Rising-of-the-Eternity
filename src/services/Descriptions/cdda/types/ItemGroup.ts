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
    | Distribution14
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
    | Entries84
    | Distribution4
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
    | Entries99
    | Entries100
    | Collection13
    | Entries102
    | Entries103
    | Entries104
    | Entries105
    | Entries106
    | Entries107
    | Entries108
    | Collection10
    | Entries110
    | Entries111
    | Entries112
    | Entries113
    | Entries114
    | Entries115
    | Collection8
    | Entries117
    | Entries118
    | Entries119
    | Entries120
    | Entries121
    | Collection3
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
    | Entries136
    | Entries137
    | Entries138
    | Entries139
    | Entries140
    | Collection21
    | Collection14
    | Entries143
    | Entries144
    | Entries145
    | Entries146
    | Distribution
    | Entries148
    | Collection
    | Entries150
    | Entries151
    | Entries152
    | Entries153
    | Entries154
    | Entries155
    | Entries156
    | Entries157
    | Entries158
    | Entries159
    | Entries160
    | Entries161
    | Collection25
    | Entries163
    | Entries164
    | Entries165
    | Entries166
    | Entries167
    | Entries168
    | Entries169
    | Collection7
    | Distribution10
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
    | Entries182
    | Entries183
    | Entries184
  >;
  items?: Array<
    | Item
    | Items2
    | Entries4
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
    | Entries7
    | Entries8
    | Items22
    | Items23
    | Items24
    | Items25
    | Entries23
    | Entries25
    | Items28
    | Entries30
    | Items30
    | Entries34
    | Items32
    | Items32
    | Items34
    | Items35
    | Items36
    | Entries40
    | Items38
    | Items39
    | Items39
    | Items39
    | Items39
    | Items39
    | Items44
    | Entries45
    | Items46
    | Items46
    | Distribution23
    | Entries57
    | Items50
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items51
    | Items78
    | Items79
    | Items80
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
    | Entries67
    | Items105
    | Items106
    | Distribution14
    | Items108
    | Distribution32
    | Items110
    | Items110
    | Entries75
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries77
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Entries82
    | Items169
    | Items170
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
    | Items185
    | Items186
    | Items187
    | Items188
    | Items189
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items190
    | Items202
    | Items203
    | Items204
    | Entries99
    | Collection13
    | Items207
    | Entries108
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Entries111
    | Items222
    | Entries114
    | Entries115
    | Entries115
    | Entries115
    | Entries115
    | Entries115
    | Entries115
    | Entries115
    | Entries115
    | Items232
    | Items233
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
    | Array<number | string>
    | Array<number | string>
    | Entries126
    | Entries126
    | Entries126
    | Entries126
    | Entries126
    | Entries126
    | Entries129
    | Entries129
    | Entries129
    | Entries132
    | Entries132
    | Entries132
    | Entries132
    | Entries132
    | Entries132
    | Entries132
    | Items349
    | Items350
    | Items350
    | Items352
    | Items353
    | Items354
    | Items355
    | Items356
    | Entries140
    | Entries140
    | Entries140
    | Entries140
    | Entries140
    | Entries140
    | Entries140
    | Entries140
    | Collection27
    | Entries144
    | Distribution
    | Distribution
    | Collection18
    | Items370
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
    | Collection
    | Items421
    | Entries155
    | Items423
    | Items424
    | Items425
    | Items426
    | Collection25
    | Items428
    | Items429
    | Collection7
    | Items431
    | Items431
    | Distribution10
    | Distribution10
    | Distribution10
    | Items436
    | Items437
    | Items437
    | Items437
    | Items437
    | Items441
    | Items442
    | Items443
    | Items444
  >;
  '//'?: string;
  'container-item'?: string;
  on_overflow?: string;
  '//2'?: string;
  '//3'?: string;
  magazine?: number;
  ammo?: number;
  groups?: Array<Array<number | string> | string>;
  '//TODO'?: string;
}

interface Items444 {
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

interface Items443 {
  group?: string;
  item?: string;
  distribution?: Distribution44[];
  collection?: Items35[];
  prob?: number;
}

interface Items442 {
  group?: string;
  damage?: number[] | number;
  prob?: number;
  distribution?: Entries26[];
  item?: string;
}

interface Items441 {
  item: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Items437 {
  item: string;
  prob: number;
  'charges-min': number;
  'container-item': string;
  sealed: boolean;
}

interface Items436 {
  item: string;
  charges?: number;
  count?: number;
}

interface Items431 {
  group: string;
  prob: number;
  'count-min': number;
  'count-max': number;
}

interface Items429 {
  item: string;
  prob: number;
  charges?: number[];
  damage?: number[];
}

interface Items428 {
  item: string;
  prob: number;
  charges: number[] | number;
}

interface Items426 {
  item: string;
  prob: number;
  'container-group': string;
}

interface Items425 {
  item?: string;
  distribution?: Distribution4[];
}

interface Items424 {
  item: string;
  charges: number;
  'charges-min': number;
}

interface Items423 {
  group?: string;
  prob?: number;
  item?: string;
  distribution?: Distribution50[];
}

interface Distribution50 {
  collection?: Distribution[];
  prob: number;
  item?: string;
}

interface Items421 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution4[];
  group?: string;
  amount?: number[];
}

interface Items370 {
  item: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
}

interface Items356 {
  distribution?: Distribution4[];
  prob: number;
  group?: string;
}

interface Items355 {
  distribution?: Distribution4[];
  prob: number;
  collection?: Distribution4[];
}

interface Items354 {
  group?: string;
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  damage?: number[];
  'contents-item'?: string[];
}

interface Items353 {
  group?: string;
  item?: string;
  prob?: number;
  distribution?: Entries4[];
}

interface Items352 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
  'container-item': string;
  sealed?: boolean;
}

interface Items350 {
  item: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
  'container-item': string;
  sealed: boolean;
}

interface Items349 {
  item: string;
  count: number;
}

interface Items233 {
  item: string;
  'container-item'?: string;
  charges?: number;
  count?: number;
}

interface Items232 {
  item: string;
  charges: number[];
  'container-item': string;
  prob: number;
  sealed: boolean;
}

interface Items222 {
  item?: string;
  prob?: number;
  distribution?: Distribution49[];
}

interface Distribution49 {
  collection?: Collection3[];
  prob: number;
  item?: string;
}

interface Items207 {
  collection?: Collection32[];
  prob: number;
  item?: string;
  'charges-min'?: number;
}

interface Collection32 {
  item: string;
  'charges-min'?: number;
}

interface Items204 {
  group: string;
  'count-min': number;
  'count-max': number;
}

interface Items203 {
  distribution: Distribution48[];
}

interface Distribution48 {
  item: string;
  prob: number;
  damage?: number[];
}

interface Items202 {
  group?: string;
  item?: string;
  prob?: number;
  collection?: Collection3[];
  distribution?: Entries4[];
}

interface Items190 {
  item: string;
  prob: number;
  'custom-flags': string[];
}

interface Items189 {
  distribution: Entries34[];
  prob: number;
}

interface Items188 {
  distribution?: Distribution47[];
  group?: string;
  prob?: number;
}

interface Distribution47 {
  collection?: Distribution[];
  prob: number;
  group?: string;
}

interface Items187 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
}

interface Items186 {
  item: string;
  count?: number[] | number;
  charges?: number[];
}

interface Items185 {
  group?: string;
  item?: string;
  distribution?: Distribution44[];
}

interface Items170 {
  group?: string;
  prob: number;
  distribution?: Entries19[];
}

interface Items169 {
  item: string;
  prob: number;
  'charges-max': number;
}

interface Items110 {
  distribution: Distribution[];
  prob: number;
}

interface Items108 {
  item: string;
  prob: number;
  'charges-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Items106 {
  collection: Collection13[];
  prob: number;
}

interface Items105 {
  item: string;
  count: number;
  prob: number;
}

interface Items80 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
  'custom-flags'?: string[];
}

interface Items79 {
  distribution: Collection[];
  prob: number;
}

interface Items78 {
  distribution: Distribution46[];
}

interface Distribution46 {
  item?: string;
  prob: number;
  collection?: Entries45[];
}

interface Items51 {
  item: string;
  prob: number;
  'charges-min': number;
}

interface Items50 {
  group?: string;
  item?: string;
  prob?: number;
  distribution?: Distribution44[];
}

interface Items46 {
  collection: Collection31[];
  prob: number;
}

interface Collection31 {
  item?: string;
  prob: number;
  distribution?: Entries82[];
}

interface Items44 {
  item: string;
  'contents-group'?: string;
  'container-item'?: string;
}

interface Items39 {
  item: string;
  prob: number;
  'container-item': string;
  sealed: boolean;
}

interface Items38 {
  item?: string;
  count?: number;
  charges?: number;
  'container-item'?: string;
  group?: string;
  sealed?: boolean;
}

interface Items36 {
  group?: string;
  prob: number;
  damage?: number[];
  count?: number[];
  item?: string;
}

interface Items35 {
  distribution: Distribution4[];
}

interface Items34 {
  distribution: Entries100[];
}

interface Items32 {
  distribution: Entries82[];
  prob: number;
}

interface Items30 {
  item: string;
  prob: number;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  'contents-group'?: string;
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
  distribution: Distribution45[];
}

interface Distribution45 {
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
  distribution?: Distribution44[];
  prob?: number;
  charges?: number[];
}

interface Distribution44 {
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

interface Items2 {
  item?: string;
  prob: number;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
}

interface Item {
  item: string;
  charges: number[];
}

interface Entries184 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Entries183 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution43[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
}

interface Distribution43 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
  charges?: number;
  count?: number[];
  distribution?: Distribution27[];
}

interface Entries182 {
  item: string;
  'count-min': number;
  'count-max': number;
}

interface Entries181 {
  distribution?: Distribution4[];
  item?: string;
  prob?: number;
  count?: number[];
  collection?: Collection3[];
}

interface Entries180 {
  item: string;
  count?: number[];
  prob?: number;
  'charges-min'?: number;
}

interface Entries179 {
  group?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  item?: string;
  count?: number[];
}

interface Entries178 {
  item: string;
  prob: number;
  charges?: number[] | number;
  'charges-min'?: number;
}

interface Entries177 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution42[];
}

interface Distribution42 {
  collection: Collection30[];
}

interface Collection30 {
  distribution?: Distribution41[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Distribution41 {
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
  distribution?: Distribution15[];
}

interface Entries176 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution40[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Distribution40 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  collection?: Collection22[];
  count?: number[];
}

interface Entries175 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
  charges?: number;
  'container-item'?: string;
}

interface Entries174 {
  item: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
}

interface Entries173 {
  group?: string;
  damage?: number[];
  distribution?: Collection[];
  prob?: number;
  item?: string;
}

interface Entries172 {
  item?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution39[];
  'charges-min'?: number;
  collection?: Collection28[];
}

interface Collection28 {
  item: string;
  count?: number[];
  'charges-min': number;
}

interface Distribution39 {
  item?: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
}

interface Entries169 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
}

interface Entries168 {
  group?: string;
  damage?: number[];
  distribution?: Distribution38[];
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Distribution38 {
  group?: string;
  damage?: number[];
  prob: number;
  collection?: Collection27[];
  distribution?: Entries19[];
}

interface Collection27 {
  group: string;
  damage: number[];
  prob: number;
}

interface Entries167 {
  item?: string;
  prob: number;
  charges?: number[];
  count?: number[];
  group?: string;
}

interface Entries166 {
  group?: string;
  item?: string;
  damage?: number;
}

interface Entries165 {
  item: string;
  prob: number;
  'charges-min'?: number;
  charges?: number;
  'container-item'?: string;
}

interface Entries164 {
  item: string;
  prob?: number;
  'ammo-item'?: string;
  charges?: number;
  count?: number;
}

interface Entries163 {
  distribution?: Collection[];
  group?: string;
  count?: number[];
  prob?: number;
}

interface Entries161 {
  distribution?: Distribution36[];
  group?: string;
  prob?: number;
  'damage-min'?: number;
  'damage-max'?: number;
  collection?: Collection26[];
  item?: string;
  count?: number[];
}

interface Collection26 {
  distribution: Distribution37[];
  prob?: number;
}

interface Distribution37 {
  group?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  item?: string;
  collection?: Entries45[];
}

interface Distribution36 {
  item?: string;
  prob: number;
  'damage-min'?: number;
  'damage-max'?: number;
  group?: string;
}

interface Entries160 {
  item: string;
  count?: number[] | number;
  charges?: number[] | number;
  prob?: number;
  'ammo-item'?: string;
  'charges-min'?: number;
}

interface Entries159 {
  group?: string;
  prob: number;
  item?: string;
  'charges-min'?: number;
  'container-item'?: string;
  'charges-max'?: number;
  charges?: number;
}

interface Entries158 {
  item?: string;
  prob: number;
  count?: number[];
  collection?: Distribution4[];
}

interface Entries157 {
  group: string;
  count: number[];
}

interface Entries156 {
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

interface Entries155 {
  item: string;
  prob: number;
  count?: number[];
}

interface Entries154 {
  distribution: Distribution35[];
}

interface Distribution35 {
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

interface Entries153 {
  item?: string;
  prob: number;
  collection?: Distribution4[];
  group?: string;
  count?: number[];
}

interface Entries152 {
  distribution?: Distribution34[];
  prob?: number;
  group?: string;
  count?: number[];
}

interface Distribution34 {
  group: string;
  damage?: number[];
  prob?: number;
  'contents-item'?: string;
}

interface Entries151 {
  distribution?: Distribution[];
  prob: number;
  item?: string;
  charges?: number[];
}

interface Entries150 {
  group?: string;
  'contents-group'?: string;
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries148 {
  group?: string;
  damage?: number[];
  collection?: Collection[];
  prob?: number;
}

interface Entries146 {
  distribution: Distribution33[];
}

interface Distribution33 {
  item?: string;
  prob?: number;
  charges?: number[];
  collection?: Collection24[];
}

interface Collection24 {
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution32[];
}

interface Distribution32 {
  item: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries145 {
  distribution?: Distribution4[];
  prob: number;
  item?: string;
  'container-item'?: string;
}

interface Entries144 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
}

interface Entries143 {
  distribution: Distribution31[];
}

interface Distribution31 {
  distribution?: Distribution4[];
  prob: number;
  collection?: Collection23[];
  item?: string;
}

interface Collection23 {
  distribution?: Entries129[];
  item?: string;
}

interface Entries140 {
  item: string;
  prob: number;
  charges: number;
  'container-item': string;
}

interface Entries139 {
  distribution?: Distribution30[];
  prob?: number;
  collection?: Entries25[];
}

interface Distribution30 {
  distribution?: Distribution29[];
  prob: number;
  collection?: Collection19[];
  item?: string;
  'container-item'?: string;
}

interface Distribution29 {
  item: string;
  'contents-item'?: string;
  prob: number;
}

interface Entries138 {
  group?: string;
  damage?: number[];
  prob?: number;
  dirt?: number[];
  item?: string;
}

interface Entries137 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[] | number;
}

interface Entries136 {
  item?: string;
  collection?: Entries45[];
  prob?: number;
}

interface Entries135 {
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

interface Entries134 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[];
  'charges-min'?: number;
}

interface Entries133 {
  group?: string;
  prob?: number;
  '//'?: string;
  item?: string;
  'damage-min'?: number;
  'damage-max'?: number;
  damage?: number;
}

interface Entries132 {
  item: string;
  prob: number;
  'count-min': number;
  'count-max': number;
}

interface Entries131 {
  group?: string;
  count?: number[];
  prob: number;
  distribution?: Distribution28[];
  item?: string;
  'charges-min'?: number;
  'count-min'?: number;
  'count-max'?: number;
  'container-item'?: string;
  sealed?: boolean;
}

interface Distribution28 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  distribution?: Distribution27[];
  count?: number[];
}

interface Distribution27 {
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

interface Entries130 {
  group?: string;
  prob: number;
  item?: string;
  'count-min'?: number;
  'count-max'?: number;
  'custom-flags'?: string[];
  charges?: number[] | number;
}

interface Entries129 {
  distribution: Distribution4[];
  prob: number;
}

interface Entries128 {
  item?: string;
  prob: number;
  damage?: number[];
  group?: string;
}

interface Entries127 {
  distribution?: Distribution3[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Entries126 {
  group: string;
  count: number[];
  prob: number;
}

interface Entries125 {
  item?: string;
  count?: number[];
  prob?: number;
  collection?: Entries40[];
}

interface Entries124 {
  item?: string;
  count?: number[];
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  group?: string;
}

interface Entries123 {
  group?: string;
  prob?: number;
  damage?: number[];
  distribution?: Distribution26[];
}

interface Distribution26 {
  collection: Collection21[];
}

interface Collection21 {
  group: string;
  prob?: number;
  damage?: number[];
}

interface Entries121 {
  item: string;
  count: number;
  prob: number;
  charges?: number;
}

interface Entries120 {
  group?: string;
  count: number[];
  prob: number;
  item?: string;
}

interface Entries119 {
  item: string;
  'count-min': number;
  'count-max': number;
  prob?: number;
}

interface Entries118 {
  item: string;
  'count-min'?: number;
  'count-max'?: number;
  prob?: number;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries117 {
  item?: string;
  prob: number;
  group?: string;
  'charges-min'?: number;
}

interface Entries115 {
  item: string;
  prob: number;
  'container-item': string;
  'charges-min': number;
  'charges-max': number;
}

interface Entries114 {
  item: string;
  prob: number;
  'count-min'?: number;
  'count-max'?: number;
}

interface Entries113 {
  item?: string;
  damage?: number[];
  group?: string;
  prob?: number;
}

interface Entries112 {
  collection: Collection17[];
}

interface Entries111 {
  item: string;
  'container-item': string;
  prob: number;
}

interface Entries110 {
  group?: string;
  damage?: number[];
  prob?: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  distribution?: Distribution25[];
}

interface Distribution25 {
  item?: string;
  group?: string;
  prob?: number;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries108 {
  item: string;
  count?: number[];
  prob?: number;
}

interface Entries107 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'charges-max'?: number;
  group?: string;
  charges?: number[] | number;
  count?: number[];
}

interface Entries106 {
  distribution?: Distribution24[];
  item?: string;
  prob?: number;
}

interface Distribution24 {
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

interface Entries105 {
  distribution?: Distribution23[];
  prob: number;
  item?: string;
  'charges-min'?: number;
  'container-item'?: string;
  'charges-max'?: number;
}

interface Distribution23 {
  item: string;
  prob: number;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries104 {
  distribution?: Entries16[];
  prob: number;
  collection?: Entries82[];
}

interface Entries103 {
  item: string;
  'ammo-item': string;
  charges: number;
  'container-item': string;
}

interface Entries102 {
  group?: string;
  damage?: number[];
  item?: string;
  prob?: number;
  'container-item'?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries100 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  group?: string;
  charges?: number[] | number;
}

interface Entries99 {
  group?: string;
  count?: number[];
  prob?: number;
  item?: string;
}

interface Entries98 {
  group?: string;
  'damage-min'?: number;
  'damage-max'?: number;
  prob?: number;
  item?: string;
  damage?: number;
}

interface Entries97 {
  item?: string;
  damage?: number[];
  count?: number[];
  group?: string;
  prob?: number;
}

interface Entries96 {
  item?: string;
  count?: number[];
  prob: number;
  collection?: Entries82[];
}

interface Entries95 {
  item: string;
  'container-item': string;
  prob: number;
  charges: number[];
}

interface Entries94 {
  distribution?: Collection[];
  item?: string;
}

interface Entries93 {
  group?: string;
  distribution?: Collection[];
}

interface Entries92 {
  collection: Entries4[];
  prob: number;
}

interface Entries91 {
  distribution: Distribution22[];
}

interface Distribution22 {
  collection?: Collection19[];
  prob: number;
  group?: string;
}

interface Collection19 {
  item: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries90 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Distribution21[];
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Distribution21 {
  group?: string;
  prob?: number;
  damage?: number[];
  distribution?: Distribution20[];
}

interface Distribution20 {
  group: string;
  damage: number[];
  prob: number;
  'contents-item'?: string;
}

interface Entries89 {
  group?: string;
  damage?: number[];
  item?: string;
  prob?: number;
  charges?: number[];
  count?: number[];
}

interface Entries88 {
  group: string;
  'count-min': number;
  'count-max': number;
  prob?: number;
}

interface Entries87 {
  group: string;
  'count-min'?: number;
  'count-max'?: number;
  prob?: number;
}

interface Entries86 {
  item: string;
  count?: number[];
  prob: number;
  charges?: number[];
}

interface Entries84 {
  group?: string;
  count?: number[];
  prob: number;
  item?: string;
  'container-item'?: string;
  charges?: number[];
}

interface Entries83 {
  distribution?: Distribution19[];
  group?: string;
  damage?: number[];
}

interface Distribution19 {
  item: string;
  count: number;
  damage?: number[];
  prob: number;
}

interface Entries82 {
  item: string;
  count: number[];
  prob: number;
}

interface Entries81 {
  group: string;
  prob: number;
  'charges-min': number;
  'charges-max': number;
}

interface Entries80 {
  group?: string;
  prob: number;
  item?: string;
  'container-item'?: string;
  sealed?: boolean;
  charges?: number[] | number;
  'charges-min'?: number;
}

interface Entries79 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number[];
  count?: number[];
  collection?: Distribution4[];
}

interface Entries78 {
  item: string;
  charges: number[];
  'container-item': string;
}

interface Entries77 {
  item: string;
  prob: number;
  charges: number[];
}

interface Entries76 {
  item?: string;
  group?: string;
  count?: number[];
}

interface Entries75 {
  item: string;
  'ammo-item': string;
  charges: number;
  'contents-item': string[];
}

interface Entries74 {
  group?: string;
  damage?: number[];
  item?: string;
}

interface Entries73 {
  item?: string;
  prob: number;
  'charges-min'?: number;
  'container-item'?: string;
  sealed?: boolean;
  group?: string;
  charges?: number;
}

interface Entries72 {
  item: string;
  prob: number;
  'container-item'?: string;
}

interface Entries71 {
  item?: string;
  count?: number[];
  prob?: number;
  collection?: Collection3[];
}

interface Entries70 {
  collection: Collection18[];
}

interface Collection18 {
  distribution?: Distribution4[];
  prob: number;
  item?: string;
}

interface Entries69 {
  distribution?: Distribution18[];
  prob: number;
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  damage?: number[];
  charges?: number[];
  group?: string;
}

interface Distribution18 {
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
  distribution?: Distribution17[];
}

interface Distribution17 {
  collection: Collection16[];
}

interface Collection16 {
  distribution?: Distribution16[];
  group?: string;
  damage?: number[];
  prob?: number;
}

interface Distribution16 {
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
  distribution?: Distribution15[];
  item?: string;
}

interface Distribution15 {
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
  prob?: number;
  item?: string;
  distribution?: Distribution14[];
}

interface Distribution14 {
  group?: string;
  prob: number;
  item?: string;
}

interface Entries56 {
  group?: string;
  damage?: number[];
  item?: string;
  'contents-group'?: string;
  prob?: number;
}

interface Entries55 {
  item?: string;
  prob?: number;
  charges?: number[];
  count?: number[];
  collection?: Distribution4[];
}

interface Entries54 {
  group?: string;
  damage?: number[];
  prob?: number;
  dirt?: number[];
  collection?: Distribution4[];
}

interface Entries53 {
  item: string;
  prob: number;
  charges?: number;
  'charges-min'?: number;
}

interface Entries52 {
  item: string;
  'charges-min'?: number;
  'charges-max'?: number;
  count?: number[];
}

interface Entries51 {
  distribution: Entries8[];
}

interface Entries50 {
  item: string;
  damage: number[];
  count?: number[];
}

interface Entries49 {
  item: string;
  count?: number[] | number;
  'charges-min'?: number;
  'charges-max'?: number;
  charges?: number[] | number;
  prob?: number;
  'ammo-item'?: string;
}

interface Entries48 {
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

interface Entries47 {
  distribution?: Distribution[];
  prob: number;
  item?: string;
  collection?: Collection13[];
}

interface Collection13 {
  item: string;
}

interface Entries46 {
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
  collection?: Entries26[];
}

interface Distribution10 {
  item: string;
  prob: number;
  damage: number[];
}

interface Entries45 {
  group?: string;
  item?: string;
}

interface Entries44 {
  distribution?: Collection[];
  prob: number;
  item?: string;
  charges?: number[];
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
  group?: string;
  damage?: number[];
  item?: string;
  'charges-min'?: number;
  'charges-max'?: number;
  prob?: number;
  count?: number[];
}

interface Entries40 {
  item: string;
  count: number[];
}

interface Entries39 {
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

interface Entries38 {
  item: string;
  'custom-flags'?: string[];
}

interface Entries37 {
  item?: string;
  prob: number;
  group?: string;
  'container-item'?: string;
  sealed?: boolean;
}

interface Entries36 {
  item: string;
  'container-item': string;
  charges: number;
}

interface Entries35 {
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

interface Entries34 {
  group: string;
  count?: number[];
  prob: number;
}

interface Entries33 {
  item: string;
  prob: number;
  'contents-group'?: string;
}

interface Entries32 {
  collection: Collection9[];
  prob: number;
}

interface Collection9 {
  item: string;
  charges?: number[];
  prob?: number;
}

interface Entries31 {
  item?: string;
  prob: number;
  group?: string;
  charges?: number[] | number;
  count?: number[];
}

interface Entries30 {
  group: string;
  damage: number[];
}

interface Entries29 {
  item: string;
  'container-item'?: string;
  sealed?: boolean;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries28 {
  item?: string;
  damage?: number[];
  count?: number[];
  group?: string;
}

interface Entries27 {
  item?: string;
  count?: number[];
  prob: number;
  collection?: Collection8[];
}

interface Collection8 {
  item: string;
  count?: number[];
}

interface Entries26 {
  item: string;
  damage: number[];
}

interface Entries25 {
  group?: string;
  item?: string;
  prob?: number;
}

interface Entries24 {
  group?: string;
  damage?: number[];
  prob?: number;
  distribution?: Collection[];
}

interface Entries23 {
  item?: string;
  count?: number[];
  prob: number;
  group?: string;
}

interface Entries22 {
  item: string;
  charges?: number[];
  'container-item'?: string;
  count?: number[];
  prob?: number;
  'charges-min'?: number;
}

interface Entries21 {
  item: string;
  prob?: number;
  'container-item'?: string;
}

interface Entries20 {
  group?: string;
  distribution?: Distribution4[];
  prob?: number;
  item?: string;
}

interface Entries19 {
  group: string;
  prob: number;
  'contents-item'?: string;
}

interface Entries18 {
  collection: Collection7[];
  prob: number;
}

interface Collection7 {
  group: string;
  prob?: number;
}

interface Entries17 {
  collection: Collection6[];
}

interface Collection6 {
  distribution: Distribution4[];
  prob?: number;
}

interface Entries16 {
  item: string;
  prob: number;
  charges?: number;
}

interface Entries15 {
  group?: string;
  item?: string;
  charges?: number;
  damage?: number[];
}

interface Entries14 {
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

interface Entries13 {
  item: string;
  'container-item'?: string;
  count?: number;
  charges?: number;
  'ammo-item'?: string;
}

interface Entries12 {
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

interface Entries11 {
  item: string;
  prob: number;
  'custom-flags'?: string[];
}

interface Entries10 {
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

interface Entries9 {
  item: string;
  count?: number[];
  charges?: number[] | number;
  prob?: number;
  'charges-min'?: number;
  'container-item'?: string;
}

interface Entries8 {
  group?: string;
  prob: number;
  item?: string;
  charges?: number;
}

interface Entries7 {
  item?: string;
  prob: number;
  group?: string;
  'charges-min'?: number;
  'charges-max'?: number;
}

interface Entries6 {
  item: string;
  prob: number;
  charges?: number[];
  'contents-item'?: string;
}

interface Entries5 {
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

interface Entries4 {
  item?: string;
  prob: number;
  group?: string;
  charges?: number[];
}

interface Entries3 {
  item: string;
  'ammo-item': string;
  charges: number;
}

interface Entries2 {
  item: string;
  'charges-min': number;
  'charges-max': number;
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
