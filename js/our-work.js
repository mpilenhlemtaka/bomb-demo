// ─── DATA ────────────────────────────────────────────────────────────────
const PROJECTS = [

  // TV 10
  { cat:'TV', title:'SHAKA ILEMBE', date:'2023–2025', img:'/html/assets/lemogang-tsipa-plays-shaka.jpg', size:'tall',
    synopsis:'An epic historical drama tracing the rise of Shaka, the legendary Zulu king who transformed a small clan into one of the most powerful empires in African history. A landmark production that redefined South African period television.',
    director:'Angus Gibson', network:'Mzansi Magic', seasons:'2', genre:'Historical Drama', tags:['Period Drama','Epic','Zulu History','Award Winner'] },

  { cat:'TV', title:'THE ROAD', date:'2015–2016', img:'/html/assets/The_Road_03.jpg', size:'wide',
    synopsis:'A gripping road thriller that follows a desperate father traversing post-apartheid South Africa in search of his missing son, confronting the fractures of a nation still finding itself.',
    director:'Various', network:'SABC 3', seasons:'1', genre:'Thriller', tags:['Road Film','Drama','Post-Apartheid'] },

  { cat:'TV', title:'ISITHEMBISO', date:'2017–2020', img:'/html/assets/isthembiso_mzansi-magic-cast.png', size:'square',
    synopsis:'A provocative drama set in the world of township ambition and survival, following young women navigating love, loyalty and the pursuit of a better life in Johannesburg.',
    director:'Various', network:'Mzansi Magic', seasons:'3', genre:'Drama', tags:['Township Life','Drama','Youth'] },

  { cat:'TV', title:'AYEYE', date:'2015–2021', img:'/html/assets/Ayeye_08-940x527.jpg', size:'wide',
    synopsis:'South Africa\'s beloved comedy series. An irreverent look at modern black urban life — relationships, friendships, and the chaos of adulting in Jozi. Six seasons of laughter.',
    director:'Various', network:'Comedy Central Africa', seasons:'6', genre:'Comedy', tags:['Comedy','Urban','Relationships'] },

  { cat:'TV', title:'ISIBAYA', date:'2013–2025', img:'/html/assets/isibaya__34-940x527.jpg', size:'tall',
    synopsis:'One of South Africa\'s longest-running and most beloved dramas. A sweeping saga of two rival families in rural KwaZulu-Natal whose fates are inextricably bound by love, cattle and blood.',
    director:'Various', network:'Mzansi Magic', seasons:'9', genre:'Family Saga', tags:['Soap Opera','Rural','Family','Landmark'] },

  { cat:'TV', title:'SOUL BUDDYZ', date:'2007–2013', img:'/html/assets/soulb__01-940x527.jpg', size:'square',
    synopsis:'An educational drama series following a group of South African children navigating school, friendships and life lessons. Winner of international awards for children\'s television.',
    director:'Various', network:'SABC', seasons:'5', genre:'Children\'s Drama', tags:['Children','Educational','Award Winner'] },

  { cat:'TV', title:'SHUGA', date:'2009–2023', img:'/html/assets/shuga__05-940x527.jpg', size:'wide',
    synopsis:'MTV\'s groundbreaking HIV awareness drama. Set initially in Nairobi and expanding across the continent, Shuga changed the conversation about sexual health and youth behaviour across Africa.',
    director:'Various', network:'MTV Africa', seasons:'8', genre:'Drama / Public Health', tags:['Pan-African','HIV Awareness','Youth','MTV'] },

  { cat:'TV', title:"JACOB'S CROSS", date:'2007–2013', img:'/html/assets/jacobs__37-940x527.jpg', size:'tall',
    synopsis:'A razor-sharp corporate thriller set against Johannesburg\'s black elite. Jacob Cross navigates a world of power, betrayal and empire-building with surgical precision.',
    director:'Various', network:'M-Net', seasons:'6', genre:'Corporate Thriller', tags:['Corporate','Black Elite','Thriller','Drama'] },

  { cat:'TV', title:'ZONE 14', date:'2005–2010', img:'/html/assets/zone__48-940x527.jpg', size:'wide',
    synopsis:'Football is life. Zone 14 follows the Beautiful Game through the eyes of a talented township youth whose football dreams collide with the harsh realities of South African life.',
    director:'Various', network:'SABC 1', seasons:'5', genre:'Sports Drama', tags:['Football','Youth','Township','Sports'] },

  { cat:'TV', title:'YIZO-YIZO', date:'1999–2004', img:'/html/assets/yizo__21-940x527.jpg', size:'square',
    synopsis:'The series that broke South African television. An uncompromising look at violence, gangsterism and survival inside a township school. Controversial, raw, and unforgettable.',
    director:'Angus Gibson & Various', network:'SABC 1', seasons:'3', genre:'Social Realism', tags:['Landmark','Controversial','Township','SABC'] },





  // FILM 6
  { cat:'FILM', title:'BACK OF THE MOON', date:'2019', img:'/html/assets/Back-of-the-Moon-pic.jpg', size:'tall',
    synopsis:'Set in the feverish, jazz-soaked world of 1950s Sophiatown, a shebeen queen must choose between the love of her life and the survival of everything she has built as apartheid forces close in.',
    director:'Angus Gibson', genre:'Period Drama', runtime:'98 min', language:'English / Zulu', tags:['Sophiatown','Period','Jazz','Apartheid','Film'] },

  { cat:'FILM', title:'LOVE & BROKEN BONES', date:'2016', img:'/html/assets/LoveandBrokenBones_06.jpg', size:'wide',
    synopsis:'A tender, honest portrayal of a fractured relationship reassembled through music, memory and the stubborn persistence of love. Shot across Johannesburg and Cape Town.',
    director:'Various', genre:'Romantic Drama', runtime:'86 min', language:'English', tags:['Romance','Drama','Music','Cape Town'] },

  { cat:'FILM', title:'SEKALI LE MEOKGO', date:'2006', img:'/html/assets/sekalli__13-940x527.jpg', size:'square',
    synopsis:'A quiet, devastating film about two brothers torn apart by circumstance, reunited by a death in the family — and forced to reckon with a shared history neither wants to remember.',
    director:'Various', genre:'Drama', runtime:'91 min', language:'Setswana / English', tags:['Family','Drama','Setswana'] },

  { cat:'FILM', title:'TRANSIT CAFE', date:'2001', img:'/html/assets/transitC_03-940x527.jpg', size:'wide',
    synopsis:'A transient cast of strangers converge at a roadside cafe in the Karoo. Over one night, lives intersect, secrets unravel, and the desert offers no easy salvation.',
    director:'Various', genre:'Ensemble Drama', runtime:'82 min', language:'English / Afrikaans', tags:['Karoo','Ensemble','Indie','Road'] },

  { cat:'FILM', title:'PORTRAIT OF A YOUNG MAN DROWNING', date:'1999', img:'/html/assets/portrait-meshack-940x527.jpg', size:'tall',
    synopsis:'An intimate portrait of a young man on the edge — caught between a life of crime and the chance at redemption, played out against the backdrop of apartheid\'s violent final years.',
    director:'Various', genre:'Drama', runtime:'79 min', language:'English / Zulu', tags:['Crime','Drama','Apartheid','Debut'] },

  { cat:'FILM', title:'IN DESERT & WILDERNESS', date:'2001', img:'/html/assets/In-desert-1-640x359.jpg', size:'wide',
    synopsis:'A lush adaptation of Henryk Sienkiewicz\'s beloved adventure novel, relocated to the African landscape. A story of survival, friendship and extraordinary courage.',
    director:'Gavin Hood', genre:'Adventure', runtime:'115 min', language:'English', tags:['Adventure','Adaptation','Africa','Epic'] },




  // DOCUMENTARIES 8
  { cat:'DOCUMENTARIES', title:'42 UP', date:'2021', img:'/html/assets/ChatGPT-Image-Aug-15-2025-10_47_02-AM-640x640.png', size:'square',
    synopsis:'A South African contribution to the iconic Up documentary series. Revisiting the same subjects every seven years, 42 Up asks what life has made of us — and what we have made of it.',
    director:'Angus Gibson', genre:'Long-form Documentary', runtime:'Feature', language:'English / isiZulu', tags:['Long-form','Portraits','Society','Archive'] },

  { cat:'DOCUMENTARIES', title:'FREEDOM SQUARE & BACK OF THE MOON', date:'2021', img:'/html/assets/freedom_sq_03.jpg', size:'wide',
    synopsis:'A documentary companion to the feature film — an immersive journey into Sophiatown\'s lost world, told through the voices of those who lived it before the bulldozers came.',
    director:'Angus Gibson', genre:'Historical Documentary', runtime:'52 min', language:'English', tags:['Sophiatown','History','Archive','Music'] },

  { cat:'DOCUMENTARIES', title:'LA TOMA (THE SIEGE)', date:'2021', img:'/html/assets/latoma__03-940x527.jpg', size:'tall',
    synopsis:'Inside the dramatic occupation of a factory in Argentina, workers refuse to leave as the company collapses around them. A study in collective action, dignity, and resistance.',
    director:'Various', genre:'Political Documentary', runtime:'80 min', language:'Spanish / English', tags:['Argentina','Labour','Political','International'] },

  { cat:'DOCUMENTARIES', title:'BURNING MAN', date:'2019', img:'/html/assets/burnm__03-940x527.jpg', size:'wide',
    synopsis:'An immersive portrait of the world\'s most radical arts experiment in the Nevada desert — exploring community, creativity, and the ephemeral nature of human connection.',
    director:'Various', genre:'Arts Documentary', runtime:'65 min', language:'English', tags:['Arts','Festival','Community','Nevada'] },

  { cat:'DOCUMENTARIES', title:'7, 14, 21, 28 — UP SOUTH AFRICA', date:'2021', img:'/html/assets/71421__01-940x480.jpg', size:'wide',
    synopsis:'The seminal South African longitudinal documentary series. Children photographed at age seven, revisited every seven years — a mirror held up to the nation itself.',
    director:'Angus Gibson', genre:'Longitudinal Documentary', runtime:'Feature Series', language:'English / Zulu / Afrikaans', tags:['Landmark','Archive','South Africa','Society'] },

  { cat:'DOCUMENTARIES', title:'AMANDLA! A REVOLUTION IN FOUR PART HARMONY', date:'2002', img:'/html/assets/amandla-800-800-450-450-crop-fill.jpg', size:'square',
    synopsis:'Sundance Grand Jury Prize winner. Music as a weapon of liberation — the story of how South Africans sang their way through the darkness of apartheid.',
    director:'Lee Hirsch', genre:'Music Documentary', runtime:'103 min', language:'English / Zulu / Xhosa', tags:['Sundance','Music','Liberation','Award Winner'] },

  { cat:'DOCUMENTARIES', title:'SOWETO: A HISTORY', date:'2021', img:'/html/assets/Soweto-1-800x800.jpg', size:'tall',
    synopsis:'A definitive documentary portrait of Soweto — the city within a city. From its forced creation to its role as the heartbeat of South African resistance and culture.',
    director:'Various', genre:'Historical Documentary', runtime:'Feature', language:'English / Zulu', tags:['Soweto','History','Culture','Archive'] },

  { cat:'DOCUMENTARIES', title:'MANDELA, SON OF AFRICA, FATHER OF A NATION', date:'1996', img:'/html/assets/Mandela (1996)_files/MV5BMTQzNTkwODY5MV5BMl5BanBnXkFtZTcwMTg0NzgwMw@@._V1_.jpg', size:'wide',
    synopsis:'The authorised documentary portrait of Nelson Mandela, released in the year of his presidency. An extraordinary record of one of history\'s great lives, told in his own words.',
    director:'Joe Menell & Angus Gibson', genre:'Portrait Documentary', runtime:'118 min', language:'English', tags:['Mandela','History','Icon','Archive','Award Winner'] },



  // COMMERCIAL 26
   // COMMERCIAL
  { cat:'COMMERCIAL', title:'WONI - MUSIC', date:'2019', img:'/html/assets/woni_music_video-640x359.jpg', size:'wide',
    synopsis:'A vibrant commercial production blending music and visual storytelling for Woni — capturing the infectious energy of contemporary South African sound with cinematic precision.',
    director:'Angus Gibson', genre:'Commercial / Music', runtime:'60 sec', language:'English', tags:['Music','Commercial','South Africa'] },

  { cat:'COMMERCIAL', title:'WAR CHILD', date:'1993', img:'/html/assets/war_child-640x359.jpg', size:'square',
    synopsis:'One of the earliest productions from the b•mb archive. An unflinching campaign spot for War Child, bringing the human cost of conflict to South African audiences at the dawn of democracy.',
    director:'Angus Gibson', genre:'Campaign Film', runtime:'90 sec', language:'English', tags:['Campaign','Social Impact','Archive','1990s'] },

  { cat:'COMMERCIAL', title:'SOWETO ALL STARS', date:'2009', img:'/html/assets/Soweto_all_Stars-640x359.jpg', size:'wide',
    synopsis:'A celebratory commercial uniting Soweto\'s greatest cultural icons in a single frame — a love letter to the township that gave South Africa its heartbeat.',
    director:'Angus Gibson', genre:'Commercial', runtime:'60 sec', language:'English / Zulu', tags:['Soweto','Culture','Icons'] },

  { cat:'COMMERCIAL', title:'BHEKI', date:'2011', img:'/html/assets/Bheki-640x359.jpg', size:'tall',
    synopsis:'An intimate character portrait built around Bheki — a commercial that eschews hard sell in favour of quiet authenticity, letting personality and place carry the narrative weight.',
    director:'Angus Gibson', genre:'Character Commercial', runtime:'45 sec', language:'Zulu / English', tags:['Character','Portrait','Intimate'] },

  { cat:'COMMERCIAL', title:'MTN - MARVIN', date:'2016', img:'/html/assets/MTN_Marvin-640x359.jpg', size:'wide',
    synopsis:'Marvin became one of MTN\'s most beloved brand characters — a disarming everyman navigating the digital age with warmth and wit. A defining chapter in South African advertising.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['MTN','Brand','Character','Advertising'] },

  { cat:'COMMERCIAL', title:'TIA', date:'', img:'/html/assets/TIA-640x359.jpg', size:'square',
    synopsis:'A bold, Africa-first campaign spot. TIA — This Is Africa — captures the continent\'s contradictions and extraordinary spirit in under a minute of precise, charged filmmaking.',
    director:'Angus Gibson', genre:'Commercial', runtime:'60 sec', language:'English', tags:['Africa','Campaign','Bold'] },

  { cat:'COMMERCIAL', title:'VODACOM - SUMMER LOVING', date:'1994', img:'/html/assets/Vodacom_Summer_Loving-640x359.jpg', size:'wide',
    synopsis:'One of Vodacom\'s earliest campaign films — shot at the height of South Africa\'s democratic dawn. Summer Loving captured a nation\'s optimism and a brand\'s first steps into the market.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'30 sec', language:'English', tags:['Vodacom','Archive','1990s','Democracy'] },

  { cat:'COMMERCIAL', title:'MTN - COMMUNITY TABLES', date:'1999', img:'/html/assets/MTN_Community_Tables-640x359.jpg', size:'tall',
    synopsis:'Community Tables brought MTN\'s Pan-African mission to life — a film about connection, conversation and the table as a universal meeting point across the continent.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English / Multilingual', tags:['MTN','Pan-African','Community'] },

  { cat:'COMMERCIAL', title:'NEDBANK - SHARLTO', date:'2009', img:'/html/assets/Nedbank-Sharlto-640x359.jpg', size:'wide',
    synopsis:'Featuring South African actor Sharlto Copley ahead of his international breakthrough, this Nedbank spot deployed star power with characteristic b•mb restraint and craft.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['Nedbank','Sharlto Copley','Finance','Casting'] },

  { cat:'COMMERCIAL', title:'NEDBANK - JOHN KANI', date:'2004', img:'/html/assets/Nedbank_John_Kani-640x359.jpg', size:'square',
    synopsis:'Theatrical legend John Kani lends gravitas and humanity to this Nedbank campaign — a masterclass in trusting the performer, stripping the production back and letting truth fill the frame.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['Nedbank','John Kani','Theatre','Finance'] },

  { cat:'COMMERCIAL', title:'SAB BE THE MENTOR', date:'2000', img:'/html/assets/SAB_Be_a_Mentor-640x359.jpg', size:'wide',
    synopsis:'South African Breweries\' landmark social responsibility campaign — calling on South African men to step up as mentors in a country still finding its post-apartheid footing.',
    director:'Angus Gibson', genre:'Social Campaign', runtime:'90 sec', language:'English', tags:['SAB','Mentorship','Social Impact','2000s'] },
    
  { cat:'COMMERCIAL', title:'MORVITE', date:'2008', img:'/html/assets/morevite-640x359.jpg', size:'tall',
    synopsis:'A warmly observed slice-of-life commercial for Morvite — rooted in the rhythms of South African morning ritual, family and the nourishment of everyday moments.',
    director:'Angus Gibson', genre:'Commercial', runtime:'30 sec', language:'English / Zulu', tags:['FMCG','Family','Everyday','Warmth'] },

  { cat:'COMMERCIAL', title:'MTN - UGANDA', date:'2002', img:'/html/assets/mtn_uganda-640x359.jpg', size:'wide',
    synopsis:'Shot on location in Uganda, this MTN regional campaign extended b•mb\'s Pan-African reach — bringing the same cinematic quality to East African storytelling.',
    director:'Angus Gibson', genre:'Regional Campaign', runtime:'60 sec', language:'English / Luganda', tags:['MTN','Uganda','East Africa','Pan-African'] },

  { cat:'COMMERCIAL', title:'PLAY', date:'2007', img:'/html/assets/play-640x359.jpg', size:'square',
    synopsis:'A kinetic, joyful campaign built around the simple act of play — an antidote to over-produced advertising, shot with energy and an instinctive feel for movement and spontaneity.',
    director:'Angus Gibson', genre:'Commercial', runtime:'45 sec', language:'English', tags:['Youth','Energy','Play','Campaign'] },

  { cat:'COMMERCIAL', title:'SASOL', date:'2010', img:'/html/assets/sasol-640x359.jpg', size:'wide',
    synopsis:'A prestige corporate campaign for Sasol during the 2010 FIFA World Cup year — positioning a South African energy giant on the global stage with ambition and scale.',
    director:'Angus Gibson', genre:'Corporate Film', runtime:'90 sec', language:'English', tags:['Sasol','Energy','Corporate','2010 World Cup'] },

  { cat:'COMMERCIAL', title:'AMSTEL APPRENTICE', date:'2003', img:'/html/assets/Amstel_Apprentice-640x359.jpg', size:'tall',
    synopsis:'An entertaining character-driven spot for Amstel that riffed on the reality TV format before it became ubiquitous — sharp, playful and ahead of its time.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['Amstel','Beer','Comedy','Character'] },

  { cat:'COMMERCIAL', title:'ENGEN FRIENDS', date:'2009', img:'/html/assets/Engen-Friends-640x359.jpg', size:'wide',
    synopsis:'Engen Friends captured the spirit of South African friendship and road culture — a commercial built on genuine chemistry between cast members and a deep feel for the country\'s landscapes.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['Engen','Friendship','Road','South Africa'] },

  { cat:'COMMERCIAL', title:'VODACOM SUMMER LOVIN', date:'2011', img:'/html/assets/Vodacom-Summer-Lovin-640x359.jpg', size:'square',
    synopsis:'A sun-drenched sequel to the original Summer Loving campaign — revisiting Vodacom\'s signature warmth and optimism for a new generation of South African consumers.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['Vodacom','Summer','Brand','Sequel'] },

  { cat:'COMMERCIAL', title:'DSTV RAP BATTLE', date:'2010', img:'/html/assets/DSTV-Rap-Battle-640x359.jpg', size:'wide',
    synopsis:'A bold, energetic campaign for DStv that tapped into South Africa\'s burgeoning hip-hop culture — turning the brand into a cultural participant rather than a corporate sponsor.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'English', tags:['DStv','Hip-Hop','Music','Culture','2010'] },

  { cat:'COMMERCIAL', title:'VODACOM 20TH ANNIVERSARY', date:'2009', img:'/html/assets/Vodacom-20th-Anniversary-640x359.jpg', size:'tall',
    synopsis:'Vodacom\'s 20th anniversary campaign — a sweeping retrospective of brand, nation and technology, woven together with the craft and emotional intelligence that defines b•mb\'s best work.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'2 min', language:'English', tags:['Vodacom','Anniversary','Legacy','Heritage'] },
    
  { cat:'COMMERCIAL', title:'IMC 2', date:'2009', img:'/html/assets/IMC_2-640x359.jpg', size:'wide',
    synopsis:'A second outing for an ambitious integrated marketing campaign — building on the original with greater confidence and a sharper sense of its audience.',
    director:'Angus Gibson', genre:'Campaign Film', runtime:'60 sec', language:'English', tags:['Campaign','Integrated','Marketing'] },

  { cat:'COMMERCIAL', title:'MTN DOORMAN', date:'2013', img:'/html/assets/MTN_Doorman-640x359.jpg', size:'square',
    synopsis:'Doorman became one of MTN\'s most memorable campaign characters — a dry, deadpan study in brand consistency and comic timing that rewarded repeat viewing.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'30 sec', language:'English', tags:['MTN','Comedy','Character','Doorman'] },

  { cat:'COMMERCIAL', title:'MTN FIFA LOVE STORY', date:'2010', img:'/html/assets/MTN_lovestory-640x359.jpg', size:'wide',
    synopsis:'Made for the 2010 FIFA World Cup on home soil — MTN\'s Love Story united football passion and African romance in a campaign that resonated across the continent during South Africa\'s greatest sporting moment.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'90 sec', language:'English', tags:['MTN','FIFA 2010','World Cup','Football','Pan-African'] },

  { cat:'COMMERCIAL', title:'PEAK MILK', date:'1999', img:'/html/assets/peak_milk-640x359.jpg', size:'tall',
    synopsis:'A warm, family-centred campaign for Peak Milk — one of West Africa\'s most enduring brands. Produced as part of b•mb\'s expanding Pan-African commercial footprint.',
    director:'Angus Gibson', genre:'FMCG Commercial', runtime:'30 sec', language:'English', tags:['Peak Milk','Nigeria','West Africa','FMCG','Family'] },

  { cat:'COMMERCIAL', title:'PRIMUS', date:'2001', img:'/html/assets/Primus-640x359.jpg', size:'wide',
    synopsis:'Primus beer — shot in Central Africa with the swagger and energy the brand demanded. A visceral, immersive commercial that put b•mb\'s continental reach on full display.',
    director:'Angus Gibson', genre:'Brand Commercial', runtime:'60 sec', language:'French / English', tags:['Primus','Beer','Central Africa','DRC'] },

  { cat:'COMMERCIAL', title:'FNB - AN ODE TO THE MAINSTREAM MARKET', date:'2012', img:'/html/assets/FNB_An_Ode-640x359.jpg', size:'wide',
    synopsis:'A rare, poetic corporate film for FNB — a lyrical ode to South Africa\'s emerging mainstream market. Intelligent, empathetic and uncommonly beautiful for the financial sector.',
    director:'Angus Gibson', genre:'Corporate / Brand Film', runtime:'3 min', language:'English', tags:['FNB','Finance','Poetry','South Africa','Mainstream'] },


  // MUSIC VIDEO 11
  { cat:'MUSIC VIDEO', title:'MNATEBAWEN - KHULI CHANA', date:'2012', img:'/html/assets/KHULI.jpeg', size:'wide',
    synopsis:'A visceral, street-level video for Khuli Chana\'s Mnatebawen — one of South Africa\'s most gifted lyricists shot at the height of his powers. Raw township imagery cut against the precision of his flow.',
    director:'Angus Gibson', genre:'Hip-Hop', runtime:'4 min', language:'Setswana / English', tags:['Khuli Chana','Hip-Hop','Kwaito','Motswako'] },

  { cat:'MUSIC VIDEO', title:'POWA - TUMI', date:'2011', img:'/html/assets/POWA.jpeg', size:'square',
    synopsis:'Tumi\'s Powa captured — a kinetic, cerebral video for one of South African hip-hop\'s most thoughtful voices. Bold visual language matched to verses that demand attention.',
    director:'Angus Gibson', genre:'Hip-Hop', runtime:'3 min 45 sec', language:'English', tags:['Tumi','Hip-Hop','Conscious Rap','South Africa'] },

  { cat:'MUSIC VIDEO', title:'TEMPERATURE RISING - LES NUBIANS', date:'2003', img:'/html/assets/LES.jpeg', size:'tall',
    synopsis:'An international co-production with French-Chadian duo Les Nubians — a lush, sensual video that bridged the African diaspora with the continent, shot with warmth and cinematic beauty.',
    director:'Angus Gibson', genre:'R&B / Neo-Soul', runtime:'4 min 10 sec', language:'French / English', tags:['Les Nubians','France','Diaspora','Neo-Soul','International'] },

  { cat:'MUSIC VIDEO', title:'NKAIKETSANG - THEMBI SEETE', date:'2001', img:'/html/assets/download (1).jpeg', size:'wide',
    synopsis:'A graceful, narrative-driven video for Thembi Seete — one of South Africa\'s most beloved entertainers. Character and story elevated above spectacle, with Seete commanding every frame.',
    director:'Angus Gibson', genre:'Afropop', runtime:'3 min 30 sec', language:'Setswana', tags:['Thembi Seete','Afropop','Narrative','Kwaito'] },

  { cat:'MUSIC VIDEO', title:'GHETTO FABULOUS - ZOLA', date:'2000', img:'/html/assets/download.jpeg', size:'square',
    synopsis:'Zola. The name alone carries weight. Ghetto Fabulous put the Brrr! king on screen with the swagger and dignity of a township icon — a video that felt less like a commission and more like a document.',
    director:'Angus Gibson', genre:'Kwaito', runtime:'3 min 55 sec', language:'Zulu / Tsotsi Taal', tags:['Zola','Kwaito','Township','Icon','2000s'] },

  { cat:'MUSIC VIDEO', title:'BLOMA NICE (SURE NTOMBAZANA) - THEMBI & WANDA', date:'2000', img:'/html/assets/sddefault.jpg', size:'wide',
    synopsis:'A joyful, buoyant collaboration between Thembi Seete and Wanda — capturing the spirit of late-90s South African pop at its most effervescent. Light on its feet, warm in its soul.',
    director:'Angus Gibson', genre:'Kwaito / Afropop', runtime:'3 min 20 sec', language:'Zulu / English', tags:['Thembi Seete','Wanda','Kwaito','Collaboration'] },

  { cat:'MUSIC VIDEO', title:'UN GAOU À PARIS - MAGIC SYSTEM', date:'2001', img:'/html/assets/51GrCINlDZL._UF894,1000_QL80_.jpg', size:'tall',
    synopsis:'A landmark Pan-African collaboration — bringing Ivory Coast\'s Magic System to the screen with all the colour and rhythm of zouglou, set against a Parisian backdrop that underscored the diaspora\'s push and pull.',
    director:'Angus Gibson', genre:'Zouglou / Afropop', runtime:'4 min', language:'French / Dioula', tags:['Magic System','Côte d\'Ivoire','Zouglou','Paris','Pan-African'] },

  { cat:'MUSIC VIDEO', title:'VICTORY LAP - AKA', date:'2011', img:'/html/assets/1636655953-47_AKA_Victory_Lap_Remix_Lyrics_3.jpeg', size:'wide',
    synopsis:'AKA before the stadium shows — Victory Lap caught him mid-ascent. A sleek, ambitious video that matched the rapper\'s relentless hunger and signalled exactly what was coming.',
    director:'Angus Gibson', genre:'Hip-Hop / Rap', runtime:'3 min 50 sec', language:'English', tags:['AKA','Hip-Hop','Rap','South Africa','Rise'] },

  { cat:'MUSIC VIDEO', title:'SHAYIZANDLA - THEMBI SEETE', date:'1999', img:'/html/assets/images.jpeg', size:'square',
    synopsis:'Shayizandla was an earlier chapter in a fruitful creative partnership with Thembi Seete — bold, danceable and shot with an instinctive feel for rhythm and movement that mirrors the track itself.',
    director:'Angus Gibson', genre:'Kwaito', runtime:'3 min 15 sec', language:'Zulu', tags:['Thembi Seete','Kwaito','Dance','1990s'] },

  { cat:'MUSIC VIDEO', title:'HAZZADAZZ MOVE - KHULI CHANA', date:'2012', img:'/html/assets/khulichana-ep215.jpg', size:'wide',
    synopsis:'A second collaboration with Khuli Chana in the same year — Hazzadazz Move leaned into the playful, strutting side of the MC\'s range. Confident filmmaking that matched the track\'s infectious swagger.',
    director:'Angus Gibson', genre:'Hip-Hop / Motswako', runtime:'3 min 40 sec', language:'Setswana / English', tags:['Khuli Chana','Hip-Hop','Motswako','Swagger'] },

  { cat:'MUSIC VIDEO', title:'MPINTSHI MPONTSHO - MDU', date:'2002', img:'/html/assets/500x500-000000-80-0-0.jpg', size:'tall',
    synopsis:'MDU — a cornerstone of South African kwaito — given the cinematic treatment. Mpintshi Mpontsho distilled the essence of the genre: community, celebration and the irreducible joy of the township.',
    director:'Angus Gibson', genre:'Kwaito', runtime:'3 min 30 sec', language:'Zulu / Tsotsi Taal', tags:['MDU','Kwaito','Township','2000s','Classic'] },



  // MUSEUM INSTALLATIONS 3
  { cat:'MUSEUM INSTALLATIONS', title:'LILLIESLEAF MUSEUM', date:'2009', img:'/html/assets/lillies-leaf-House-view-2-800x738.jpg', size:'tall',
    synopsis:'An immersive audiovisual installation for Lilliesleaf Farm — the Rivonia hide-out where Nelson Mandela and the ANC high command were arrested in 1963. A memorial experience that brings one of South Africa\'s most charged historical sites to life for a new generation.',
    director:'Angus Gibson', genre:'Museum Installation', runtime:'Permanent', language:'English / Zulu / Afrikaans', tags:['Lilliesleaf','Rivonia','Mandela','Liberation','Heritage'] },

  { cat:'MUSEUM INSTALLATIONS', title:'HECTOR PIETERSON MUSEUM', date:'2002', img:'/html/assets/hector__01-940x480.jpg', size:'wide',
    synopsis:'A foundational installation for the Hector Pieterson Museum in Soweto — marking the site of the 1976 student uprising. Conceived to honour the children who changed history, the work weaves testimony, image and sound into an experience of profound collective memory.',
    director:'Angus Gibson', genre:'Museum Installation', runtime:'Permanent', language:'English / Zulu / Sotho', tags:['Hector Pieterson','Soweto Uprising','1976','Heritage','Memory'] },

  { cat:'MUSEUM INSTALLATIONS', title:'APARTHEID MUSEUM', date:'2004', img:'/html/assets/apart__09-940x480.jpg', size:'wide',
    synopsis:'A major contribution to the Apartheid Museum\'s permanent collection — one of the world\'s most visited human rights museums. The installation transforms archival footage, testimony and photography into a visceral, navigable experience of South Africa\'s darkest chapter and its extraordinary transcendence.',
    director:'Angus Gibson', genre:'Museum Installation', runtime:'Permanent', language:'English / Afrikaans / Zulu / Xhosa', tags:['Apartheid Museum','Human Rights','Archive','Johannesburg','World-Class'] },
];

const CATS = ['ALL','TV','FILM','DOCUMENTARIES','COMMERCIAL','MUSIC VIDEO','MUSEUM INSTALLATIONS'];

// ─── STATE ────────────────────────────────────────────────────────────────
let activeCat = 'ALL';

// ─── GRAIN ────────────────────────────────────────────────────────────────
const gc = document.getElementById('grain');
const gx = gc.getContext('2d');
gc.width = window.innerWidth; gc.height = window.innerHeight;
window.addEventListener('resize', () => { gc.width = window.innerWidth; gc.height = window.innerHeight; });
(function grain() {
  const w = gc.width, h = gc.height;
  const d = gx.createImageData(w, h);
  for (let i = 0; i < d.data.length; i += 4) {
    const v = Math.random() * 255 | 0;
    d.data[i] = d.data[i+1] = d.data[i+2] = v;
    d.data[i+3] = Math.random() < 0.55 ? 20 + (Math.random() * 45 | 0) : 0;
  }
  gx.putImageData(d, 0, 0);
  requestAnimationFrame(grain);
})();

// ─── SPROCKETS ────────────────────────────────────────────────────────────
function buildSprockets() {
  ['sp-l','sp-r'].forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = '';
    const n = Math.ceil(window.innerHeight / 24);
    for (let i = 0; i < n; i++) {
      const h = document.createElement('div');
      h.className = 'sp-hole'; el.appendChild(h);
    }
  });
}
buildSprockets();
window.addEventListener('resize', buildSprockets);

// ─── FILTER ────────────────────────────────────────────────────────────────
const filterBar = document.getElementById('filter-bar');
function buildFilters() {
  filterBar.innerHTML = '';
  CATS.forEach(cat => {
    const count = cat === 'ALL'
      ? PROJECTS.filter(p => p.img).length
      : PROJECTS.filter(p => p.cat === cat && p.img).length;
    const btn = document.createElement('button');
    btn.className = 'f-btn' + (cat === activeCat ? ' active' : '');
    btn.innerHTML = `${cat}<span class="f-count">${count > 0 ? count : '—'}</span>`;
    btn.addEventListener('click', () => {
      activeCat = cat;
      buildFilters();
      renderGrid();
    });
    filterBar.appendChild(btn);
  });
}

// ─── GRID ─────────────────────────────────────────────────────────────────
const grid = document.getElementById('work-grid');
const showingCount = document.getElementById('showing-count');
const totalCount = document.getElementById('total-count');
const activeCatLabel = document.getElementById('active-cat-label');

const SIZES = ['wide','square','tall','wide','wide','square','tall','short','wide','square'];

function renderGrid() {
  grid.innerHTML = '';
  const filtered = activeCat === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.cat === activeCat);

  const visible = filtered.filter(p => p.img);
  const empty   = filtered.filter(p => !p.img);

  showingCount.textContent = filtered.length;
  activeCatLabel.textContent = activeCat === 'ALL' ? 'All Categories' : activeCat;
  totalCount.textContent = PROJECTS.length;

  let frameIdx = 0;

  visible.forEach((proj, i) => {
    const size = SIZES[i % SIZES.length];
    const card = document.createElement('div');
    card.className = `card ${size}`;
    card.style.animationDelay = `${i * 0.04}s`;
    card.innerHTML = `
      <img src="${proj.img}" alt="${proj.title}" loading="lazy" />
      <div class="card-frame">▣ ${String(++frameIdx).padStart(4,'0')}</div>
      <div class="card-overlay">
        <div class="card-cat">${proj.cat}</div>
        <div class="card-title">${proj.title}</div>
        <div class="card-date">${proj.date}</div>
        <div class="card-cta">View Project</div>
      </div>
    `;
    card.addEventListener('click', () => openModal(proj, frameIdx));
    grid.appendChild(card);
  });

  // placeholder cards for empty
  empty.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'card wide empty';
    card.style.animationDelay = `${(visible.length + i) * 0.04}s`;
    card.innerHTML = `
      <div class="empty-label">
        ${proj.cat}<br/>
        <span style="color:rgba(200,184,130,0.2);font-size:7px;margin-top:6px;display:block;">Images arriving soon</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ─── MODAL ────────────────────────────────────────────────────────────────
const backdrop    = document.getElementById('modal-backdrop');
const modalClose  = document.getElementById('modal-close');
const modalImg    = document.getElementById('modal-img');
const modalCat    = document.getElementById('modal-cat');
const modalTitle  = document.getElementById('modal-title');
const modalDate   = document.getElementById('modal-date');
const modalSyn    = document.getElementById('modal-synopsis');
const modalMeta   = document.getElementById('modal-meta-grid');
const modalTags   = document.getElementById('modal-tags');
const modalFrameL = document.getElementById('modal-frame-l');
const modalStrip  = document.getElementById('modal-strip');

function buildModalStrip() {
  modalStrip.innerHTML = '';
  const n = Math.ceil(window.innerHeight / 22);
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span'); modalStrip.appendChild(s);
  }
}
buildModalStrip();

function openModal(proj, frameIdx) {
  modalImg.src    = proj.img || '';
  modalImg.alt    = proj.title;
  modalCat.textContent   = proj.cat;
  modalTitle.textContent = proj.title;
  modalDate.textContent  = proj.date;
  modalSyn.textContent   = proj.synopsis;
  modalFrameL.textContent = `FRAME ${String(frameIdx).padStart(4,'0')} — 35mm`;

  // meta grid
  const metaFields = [
    { label: 'Director',  value: proj.director || '—' },
    { label: 'Year',      value: proj.date },
    { label: proj.network ? 'Network' : (proj.runtime ? 'Runtime' : 'Format'),
      value: proj.network || proj.runtime || '—' },
    { label: 'Genre',     value: proj.genre || '—' },
    { label: 'Language',  value: proj.language || '—' },
    { label: proj.seasons ? 'Seasons' : 'Category',
      value: proj.seasons ? `${proj.seasons} seasons` : proj.cat },
  ];
  modalMeta.innerHTML = metaFields.map(f => `
    <div class="meta-item">
      <label>${f.label}</label>
      <span>${f.value}</span>
    </div>
  `).join('');

  // tags
  modalTags.innerHTML = (proj.tags || []).map(t =>
    `<span class="tag">${t}</span>`
  ).join('');

  backdrop.classList.add('open');
  backdrop.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ─── INIT ─────────────────────────────────────────────────────────────────
buildFilters();
renderGrid();

