export const guides = [
  {
    id: 'cookingdom-game-level-1',
    title: 'Cookingdom Level 1<br />Unang Pizza',
    pageTitle: 'Cookingdom Level 1 - Gabay sa Unang Pizza',
    pageSubtitle:
      'Masterin ang mga pangunahing kaalaman sa Cookingdom sa pamamagitan ng paggawa ng iyong unang pizza sa Level 1.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_01.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-1' } },
    iframeUrl: 'https://www.youtube.com/embed/ItLXkQrpelU',
    seo: {
      title: 'Gabay sa Cookingdom Level 1 - Unang Pizza',
      description:
        'Matutong maghanda, magluto, at maghain ng unang pizza sa Cookingdom Level 1. Alamin ang mga batayan ng pagluluto at serbisyo sa customer.',
      keywords: 'cookingdom, level 1, unang pizza, gabay, pangunahing kaalaman, tutorial',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_01.webp',
      levelInfoHtml:
        '<h3>Unang Pizza</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 1 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom Level 2<br/>Simpleng Salad',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Level 11<br/>Popcorn',
          imageUrl: '/images/guides_11.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
        },
      ],
    },
    detailsHtml: `<h2>Panimula ng Laro</h2>
<p>Sa Level 1 ng Cookingdom, matututunan ng mga manlalaro ang paggawa at paghahain ng pizza, isa sa mga pinakapangunahing putahe sa laro. Pokus ng lebel na ito ang pagpapakilala sa proseso ng pagluluto, paghahanda ng sangkap, at pangunahing ritmo ng operasyon ng restawran.</p>

<h2>Layunin ng Level 1</h2>
<p>Kailangan mong gumawa at maghain ng unang pizza sa isang customer. Ang paggawa ng pizza ay may ilang hakbang kabilang ang paghahanda ng sangkap, pagluluto sa oven, at paghahain. Ang layunin ay matugunan ang pangangailangan ng customer nang mabilis at wasto upang makumpleto ang gawain.</p>

<h2>Proseso ng Paggawa ng Pizza</h2>
<h3>Handa ang mga Sangkap ng Pizza:</h3>
<p>Una, tipunin ang mga pangunahing sangkap: pizza base, tomato sauce, keso, at iba pang toppings (tulad ng sausage, kabute).</p>
<ul>
  <li><strong>Pizza Base:</strong> Kumuha ng pizza base mula sa lugar ng sangkap.</li>
  <li><strong>Tomato Sauce:</strong> Ikalat ang tomato sauce nang pantay-pantay sa base.</li>
  <li><strong>Keso:</strong> Budburan ng keso nang pantay-pantay.</li>
</ul>

<h3>Magdagdag ng Toppings:</h3>
<p>Sa Level 1, simple lang ang mga toppings. Gumamit ng mga pangunahing toppings tulad ng sausage o kabute.</p>
<ul>
  <li>Ilagay ang mga toppings sa pizza nang pantay-pantay. Nakakadagdag ito sa lasa at kasiyahan ng customer.</li>
</ul>

<h3>Iluto ang Pizza sa Oven:</h3>
<p>Ilagay ang pizza sa oven.</p>
<p><strong>Paalala:</strong> Mahalaga ang oras ng pagluluto. Ang sobrang pagluto ay magsusunog sa pizza, habang ang kulang ay mag-iiwan ng hilaw na pizza.</p>

<h3>Suriin ang Pagkaluto ng Pizza:</h3>
<p>Obserbahan ang hitsura ng pizza. Kapag ito ay naging golden brown at mabango, handa na ito.</p>
<p>Ang sobrang lutong pizza ay magiging maitim at may masamang lasa, na maaaring magdulot ng pagkabigo sa customer.</p>

<h3>Ihain ang Pizza:</h3>
<p>Kunin ang pizza mula sa oven at ihain agad sa mesa ng customer.</p>
<p>Mahalaga ang timing: Ang matagal na paghihintay ay magbabawas sa kasiyahan ng customer at apektado ang iyong iskor.</p>

<h2>Mga Tip at Teknik</h2>
<ul>
  <li><strong>Pamamahala ng Oras:</strong> Sanayin ang pagsabay-sabay na gawain lalo na sa pagluluto at paghahanda.</li>
  <li><strong>Maghanda Nang Maaga:</strong> Habang naghihintay sa pizza, maghanda ng iba pang sangkap o maglinis ng kusina.</li>
  <li><strong>Paggamit ng Oven:</strong> Pag-aralan ang tamang temperatura para sa bawat pagkain.</li>
  <li><strong>Pasensya ng Customer:</strong> Ang bawat customer ay may limitadong pasensya - bilisan ang serbisyo.</li>
  <li><strong>Pagsasabay-sabay ng Gawain:</strong> Samantalahin ang oras habang nagluluto para sa iba pang preparasyon.</li>
</ul>

<h2>Buod</h2>
<p>Ang paggawa ng unang pizza ay isang panimulang gawain para ipakilala ang mga pangunahing konsepto ng laro. Sa pagtatapos ng Level 1, makakakuha ka ng mga gantimpalang barya at puntos para sa mas masalimuot na mga lebel.</p>`,
  },
  {
    id: 'cookingdom-game-level-2',
    title: 'Cookingdom Level 2<br />Simpleng Salad',
    pageTitle: 'Cookingdom Level 2 - Gabay sa Simpleng Salad',
    pageSubtitle: 'Matutong gumawa ng mabilis at madaling salad sa Cookingdom Level 2.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_02.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
    iframeUrl: 'https://www.youtube.com/embed/9o1UmXbb_JU',
    seo: {
      title: 'Gabay sa Cookingdom Level 2 - Simpleng Salad',
      description:
        'Masterin ang recipe ng simpleng salad sa Cookingdom Level 2. Alamin ang tamang kombinasyon ng sangkap, dressing, at mabilis na serbisyo sa customer.',
      keywords: 'cookingdom, level 2, simpleng salad, gabay, oras ng paghahanda',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_02.webp',
      levelInfoHtml:
        '<h3>Simpleng Salad</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 1.5 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-1',
          title: 'Cookingdom Level 1<br/>Unang Pizza',
          imageUrl: '/images/guides_01.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-1' } },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Level 11<br/>Popcorn',
          imageUrl: '/images/guides_11.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
        },
      ],
    },
    detailsHtml: `<h2>Pagbabago sa Gameplay</h2>
<p>Sa Level 2 ng Cookingdom, mas maraming customer at mas mabilis na pag-ikot ng mga order. Ang salad ay nangangailangan ng mas maraming paghahanda ng gulay at tamang pagpili ng dressing.</p>

<h2>Mga Detalyadong Hakbang sa Paggawa ng Salad</h2>
<h3>Handa ang mga Sangkap:</h3>
<p>Ang pangunahing sangkap ay lettuce, pipino, kamatis, carrot, at iba pa. Maaaring magkaiba ang gusto ng bawat customer (hal. mas maraming lettuce, kaunting pipino).</p>
<ul>
  <li>Pumili ng tamang gulay batay sa order at ilagay sa salad bowl.</li>
</ul>

<h3>Magdagdag ng Dressing:</h3>
<p>Pumili sa pagitan ng Thousand Island, Vinaigrette, o iba pang dressing ayon sa kagustuhan ng customer.</p>
<ul>
  <li><strong>Tip:</strong> Ang maling dressing ay magdudulot ng pagkabigo sa customer.</li>
</ul>

<h3>Haluin ang Salad:</h3>
<p>Siguraduhing pantay-pantay ang paghahalo ng mga sangkap at dressing para sa pinakamainam na lasa.</p>

<h3>Ihain sa Customer:</h3>
<p>Dalahin agad ang salad sa mesa ng customer sa loob ng kanilang oras ng paghihintay.</p>

<h2>Mga Advanced na Teknik</h2>
<ul>
  <li><strong>Batch Preparation:</strong> Maghanda ng maraming sangkap nang sabay-sabay para sa sunod-sunod na order</li>
  <li><strong>Memorya ng Order:</strong> Tandaan ang mga espesyal na kahilingan (hal. walang croutons) nang walang pagtingin sa menu</li>
  <li><strong>Strategic Upgrades:</strong> Unahin ang pag-upgrade ng cutting board para sa mas mabilis na paghiwa ng gulay</li>
</ul>

<h2>Mga Karagdagang Tip</h2>
<ul>
  <li>Gumamit ng timer function para subaybayan ang multiple na order</li>
  <li>Panatilihing malinis ang work station para maiwasan ang pagkalito</li>
  <li>Magsanay ng "drag and drop" na teknik para sa mas mabilis na paghahalo</li>
</ul>

<h2>Mahalagang Paalala</h2>
<p>Ang Level 2 ay naghahanda sa iyo para sa mas kumplikadong mga recipe. Ang pag-master sa salad preparation ay magbibigay-daan sa iyong magkaroon ng muscle memory para sa mas mabibigat na lebel.</p>`,
  },
  {
    id: 'cookingdom-game-level-3',
    title: 'Cookingdom Level 3<br />Patatas na Pinirito',
    pageTitle: 'Cookingdom Level 3 - Gabay sa Patatas na Pinirito',
    pageSubtitle:
      'Matutunan kung paano gumawa ng malutong na patatas na pinirito sa Cookingdom Level 3.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_03.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-3' } },
    iframeUrl: 'https://www.youtube.com/embed/oWpl7YwOYbw',
    seo: {
      title: 'Cookingdom Level 3 Gabay - Patatas na Pinirito',
      description:
        'Masterin ang paggawa ng patatas na pinirito sa Cookingdom Level 3. Alamin ang mga teknik sa pagprito, pamamahala ng oras, at kahusayan sa kusina.',
      keywords:
        'cookingdom, level 3, patatas na pinirito, gabay, pagprito, pamamahala ng oras, kahusayan sa kusina',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_03.webp',
      levelInfoHtml:
        '<h3>Patatas na Pinirito</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Est. Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-1',
          title: 'Cookingdom Level 1<br/>Unang Pizza',
          imageUrl: '/images/guides_01.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-1' } },
        },
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom Level 2<br/>Simpleng Salad',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
        },
      ],
    },
    detailsHtml: `<h2>Pagpapakilala sa Laro</h2>
<p>Sa Level 3, matututunan ng mga manlalaro kung paano gumawa ng Patatas na Pinirito. Bagamat medyo madali, nangangailangan ito ng tamang pamamahala ng oras at mas detalyadong operasyon, lalo na kapag maraming kumplikadong kahilingan mula sa mga customer. Itinuturo ng level na ito ang proseso ng pagprito, kung paano gamitin ang mga gamit sa kusina upang mapabilis ang pagluluto at makapaghatid ng masarap na fries.</p>
<h2>Layunin ng Level 3</h2>
<ul>
  <li><strong>Gumawa ng Patatas na Pinirito:</strong> Matutunan ang tamang proseso ng pagprito gamit ang fryer, kahit na hindi kasing kumplikado ng paggamit ng oven.</li>
  <li><strong>Mag-handle ng Maraming Customer:</strong> Magkakaroon ng mas maraming customer kumpara sa mga nakaraang level, kaya kailangan ng mabilis na paghawak ng maraming order at epektibong serbisyo.</li>
  <li><strong>Pagbutihin ang Kahusayan sa Kusina:</strong> Matutunan kung paano gamitin ang mga gamit sa kusina nang mahusay, tulad ng mabilis na paghahanda ng patatas at pagpapabilis ng prito.</li>
</ul>
<h2>Mga Hakbang sa Pag-gawa ng Patatas na Pinirito</h2>
<h3>Maghanda ng Patatas:</h3>
<p>Kunin ang patatas mula sa ingredient area at hiwain ito ng pahaba. Puwede mong iprepara ito nang maaga o kapag may pumasok na order.</p>
<ul>
  <li><strong>Tip:</strong> Ang paghahanda ng patatas nang maaga ay nagpapababa ng oras ng paghihintay ng customer, lalo na kapag sabay-sabay na dumating ang maraming customer.</li>
</ul>
<h3>Ipirito ang Patatas:</h3>
<p>Ilagay ang hiniwang patatas sa fryer. Kontrolin ang oras ng pagprito upang matiyak na malutong sa labas at malambot sa loob.</p>
<ul>
  <li>Obserbahan ang pagbabago ng patatas habang piniprito upang maiwasan ang sobrang prito (maging sunog o mataba).</li>
  <li><strong>Tip:</strong> Karaniwang handa na ang patatas kapag nagkulay gintong kayumanggi at lumutang sa ibabaw; alisin ito agad.</li>
</ul>
<h3>Magdagdag ng Panimpla:</h3>
<p>Pagkatapos iprito, magdagdag ng mga pampalasa tulad ng asin o paminta upang mapabuti ang lasa at kasiyahan ng customer.</p>
<h3>Ihatid sa Customer:</h3>
<p>Ihatid agad ang patatas na pinirito. Bagamat mabilis itong gawin, kailangan pa rin ng tamang oras upang maiwasan ang matagal na paghihintay.</p>
<h2>Mga Tips at Tricks</h2>
<ul>
  <li><strong>Maghanda ng mga Sangkap nang Maaga:</strong> Sa mga pagkakataong madalas ang pangangailangan ng customer, ang paghahanda ng patatas at fryer ay mahalaga sa kahusayan. Ang paghahanda ay nakakatipid ng maraming oras, lalo na kung maraming customer ang naghihintay.</li>
  <li><strong>Masterin ang Oras ng Pagprito:</strong> Panatilihin ang oras ng pagprito sa tamang saklaw. Kung masyadong matagal, magiging mataba o sunog ang patatas; kung masyadong maikli, hindi ito magiging malutong. Panuorin ang hitsura at pagbabago ng patatas sa fryer.</li>
  <li><strong>Gamitin ang mga Kagamitan sa Kusina:</strong> Puwede kang makakuha ng mga booster o kagamitan tulad ng mabilis na fryer. Gamitin ito upang mapabilis ang pagluluto sa mga oras ng peak time.</li>
  <li><strong>Bigyan ng Prioridad ang mga Order ng Customer:</strong> Puwedeng dumating nang sabay-sabay ang maraming customer. Bigyan ng prayoridad ang mga matagal nang naghihintay upang matanggap nila ang kanilang pagkain nang mabilis.</li>
  <li><strong>Maghatid ng Mabilis:</strong> Panatilihin ang mabilis na serbisyo upang mabawasan ang oras ng paghihintay. Dahil mabilis lang gawin ang fries, gamitin ang oras na nasave upang maghanda ng susunod na putahe o maglinis ng kusina.</li>
</ul>
<h2>Buod</h2>
<p>Ang paggawa ng patatas na pinirito sa Level 3 ay simple ngunit nangangailangan ng mahusay na pamamahala ng kusina at kontrol sa oras. Matututunan mong gamitin ang mga kagamitan sa pagprito at hawakan ang mga pangangailangan ng maraming customer. Habang umuusad ang laro, haharapin mo ang mas maraming iba't ibang putahe at kumplikadong mga gawain, kaya't ang pagpapabuti ng kahusayan sa kusina ay mahalaga para sa tagumpay.</p>
<p>Ang pagtatapos ng Level 3 ay magbubukas ng mas maraming recipe at kagamitan, na maghahanda sa iyo para sa mga mas mataas na level na may higit na kahirapan.</p>`,
  },
  {
    id: 'cookingdom-game-level-4',
    title: 'Cookingdom Level 4:<br>Rolled Ice-cream',
    pageTitle: 'Cookingdom Level 4 - Gabay sa Rolled Ice-cream',
    pageSubtitle:
      'Matutunan ang sining ng paggawa ng perpektong Rolled Ice-cream sa Cookingdom Level 4.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_04.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-4' } },
    iframeUrl: 'https://www.youtube.com/embed/ndEW4RcERyI',
    seo: {
      title: 'Cookingdom Level 4 Gabay: Rolled Ice-cream | Mga Tips at Estratehiya',
      description:
        'Masterin ang Level 4 sa Cookingdom! Alamin kung paano gumawa ng masarap na Rolled Ice-cream gamit ang aming step-by-step na gabay, mga tips sa pagyeyelo, at kombinasyon ng mga sangkap.',
      keywords: 'cookingdom, level 4, rolled ice-cream, gabay, pagyeyelo, toppings, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_04.webp',
      levelInfoHtml:
        '<h3>Rolled Ice-cream</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Est. Oras:</strong> 2.5 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-1',
          title: 'Cookingdom Level 1<br/>Unang Pizza',
          imageUrl: '/images/guides_01.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-1' } },
        },
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom Level 2<br/>Simpleng Salad',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
        },
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom Level 3<br/>Patatas na Pinirito',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-3' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pagpapakilala sa Laro</h2>
<p>Sa Level 4 ng Cookingdom, matututunan ng mga manlalaro kung paano gumawa ng Rolled Ice-cream. Kumpara sa mga nakaraang putahe, mas detalyado ang proseso ng paggawa ng rolled ice-cream, kabilang ang mga operasyon ng pagyeyelo at mga clever na kombinasyon ng mga sangkap. Layunin ng level na ito na masterin ang teknik ng pagyeyelo ng ice-cream at mabilis na maghanda at maghatid ng rolled ice-cream kapag may order ang customer.</p>

<h2 id="goal">Mga Layunin ng Level 4</h2>
<ul>
    <li><strong>Gumawa ng Rolled Ice-cream:</strong> Mas kumplikado ang paggawa ng rolled ice-cream kaysa sa regular na ice-cream, kinakailangan ng mga manlalaro na gumamit ng freezing platform, pamahalaan ang proseso ng pagpapalamig, at igulong ito sa magagandang rolls ng ice-cream.</li>
    <li><strong>Kontrolin ang Oras ng Pagyeyelo:</strong> Kailangang maingat na kontrolin ang oras ng pagyeyelo ng rolled ice-cream upang matiyak na ang texture at hugis ng ice-cream rolls ay tama.</li>
    <li><strong>Mag-handle ng Maraming Customer:</strong> Habang umuusad ang laro, mas maraming customer ang darating sa Level 4, kaya't kailangan ng mahusay na pamamahala ng oras at kakayahang hawakan ang maraming order.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Pag-gawa ng Rolled Ice-cream</h2>
<ol>
    <li>
        <h3>Maghanda ng Base ng Ice-cream:</h3>
        <p>Sa kusina, piliin ang pangunahing base ng ice-cream na angkop para sa paggawa ng rolled ice-cream (karaniwan ay gatas, asukal, vanilla, atbp.). Ibuhos ang base sa freezing platform.</p>
        <p>Ito ang unang hakbang sa paggawa ng rolled ice-cream. Tiyaking tama ang ratio ng base upang makuha ang makinis na texture ng ice-cream.</p>
    </li>
    <li>
        <h3>Pumili ng Toppings:</h3>
        <p>Sa freezing platform, maaari kang magdagdag ng iba't ibang toppings ayon sa request ng customer, tulad ng prutas, chocolate chips, mani, atbp.</p>
        <p><strong>Tip:</strong> Piliin ang mga toppings na hinihiling ng customer at tiyaking pantay-pantay ang pagkakalagay nito sa ice-cream. Ang iba't ibang toppings ay makakaapekto sa lasa at hitsura ng ice-cream, at ang magagandang dekorasyon ay nakakatulong upang dagdagan ang kasiyahan ng customer.</p>
    </li>
    <li>
        <h3>Pagyeyelo at Pagbuo ng Ice-cream Rolls:</h3>
        <p>Pagkatapos pagsamahin ang base ng ice-cream at toppings, simulan ang pagyeyelo. Sa freezing platform, mabilis na magiging matigas ang ice-cream at kailangan mong gamitin ang spatula upang igulong ito sa maayos na rolls.</p>
        <p><strong>Technique:</strong> Siguraduhin na pantay ang galaw ng spatula upang hindi mabasag o magkaroon ng hindi pantay na hugis ang ice-cream.</p>
    </li>
    <li>
        <h3>Ilagay sa Plato at Ihatid:</h3>
        <p>Alisin ang rolled ice-cream mula sa freezing platform, maingat na ilagay ito sa plato, at lagyan ng mga extra toppings o syrup.</p>
        <p>Kapag handa na, agad na ihatid ang rolled ice-cream sa mesa ng customer upang matanggap nila ang kanilang pagkain nang mabilis at sa loob ng oras ng paghihintay.</p>
    </li>
</ol>

<h2 id="tips">Mga Tips at Tricks</h2>
<ul>
    <li>
        <strong>Kontrolin ang Oras ng Pagyeyelo:</strong> Mahalaga ang oras ng pagyeyelo sa paggawa ng rolled ice-cream. Kung masyadong mahaba, mahirap igulong ang ice-cream; kung masyadong maikli, magiging malambot ito at hindi magagawang hugisin. Obserbahan ang mga pagbabago sa freezing platform at alamin ang estado ng ice-cream batay doon.
    </li>
    <li>
        <strong>Kombinasyon ng Toppings:</strong> Sa Level 4, maaaring humiling ang mga customer ng iba't ibang toppings. Tandaan na magdagdag ng angkop na prutas, mani, o kendi ayon sa kanilang pangangailangan. Ang sobrang dami o kakulangan ng toppings ay maaaring makaapekto sa hitsura at lasa. Subukan ang paggamit ng iba't ibang toppings upang makaakit ng pansin ng customer.
    </li>
    <li>
        <strong>Siguraduhin ang Pantay na Rolls:</strong> Kapag kinakalat ang ice-cream sa rolls, tiyaking pantay-pantay ang laki at hugis ng bawat roll. Ang pantay-pantay na rolls ay mas kaakit-akit at nagpapataas ng kasiyahan ng customer.
    </li>
    <li>
        <strong>Gamitin ang mga Kagamitan sa Kusina:</strong> Kung ang laro ay nag-aalok ng mga speed-up na gamit o kagamitan, gamitin ito upang pabilisin ang proseso ng pagyeyelo o paghahanda ng mga sangkap. Ang tamang paggamit ng mga gamit na ito ay makakatulong upang mapabuti ang kahusayan at matulungan kang hawakan ang mga order sa peak time.
    </li>
    <li>
        <strong>Maghatid ng Mabilis:</strong> Bagamat tumatagal ng kaunting oras upang gumawa ng rolled ice-cream, mabilis lang ito. Siguraduhin ang tamang oras ng paggawa at paghahatid upang maiwasan ang hindi kasiyahan ng customer dahil sa matagal na paghihintay.
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Ang Level 4 ng Cookingdom ay nagpapakilala ng mas maraming kasanayan sa operasyon sa paggawa ng rolled ice-cream, lalo na sa proseso ng pagyeyelo at kombinasyon ng mga toppings. Ang mastery sa oras ng pagyeyelo, teknik ng spatula, at mga kombinasyon ng toppings ay susi sa tagumpay. Habang umuusad ang laro, haharapin mo ang mas iba't ibang putahe at mga pangangailangan ng customer, kaya't ang pagpapabuti ng kahusayan sa kusina at mastering multitasking ay magiging mahalagang kasanayan upang makapasa sa level.</p>
<p>Matapos makumpleto ang Level 4, makakakuha ka ng mas maraming recipe at kagamitan sa kusina, na maghahanda sa iyo upang harapin ang mga mas mahihirap na tasks.</p>
`,
  },
  {
    id: 'cookingdom-game-level-5',
    title: 'Cookingdom Level 5:<br>Inihaw na Isda',
    pageTitle: 'Cookingdom Level 5 - Gabay sa Inihaw na Isda',
    pageSubtitle: 'Masterin ang sining ng pag-iihaw ng isda sa Cookingdom Level 5.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_05.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-5' } },
    iframeUrl: 'https://www.youtube.com/embed/8CdDamlaEHA',
    seo: {
      title: 'Cookingdom Level 5 Gabay: Inihaw na Isda | Mga Tips at Estratehiya',
      description:
        'Alamin kung paano mag-ihaw ng isda nang perpekto sa Cookingdom Level 5. Makakuha ng mga tips tungkol sa kontrol sa init, tamang oras, at pamamahala ng mga order ng customer.',
      keywords:
        'cookingdom, level 5, inihaw na isda, gabay, pag-iihaw, kontrol sa init, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_05.webp',
      levelInfoHtml:
        '<h3>Inihaw na Isda</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Oras na Kinakailangan:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-2',
          title: 'Cookingdom Level 2<br/>Simpleng Salad',
          imageUrl: '/images/guides_02.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-2' } },
        },
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom Level 3<br/>Pritong Patatas',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-3' } },
        },
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom Level 4<br/>Rolled Ice-cream',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-4' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, bawat level ay nagtatampok ng bagong hamon sa pagluluto, at sa Level 5, ang mga manlalaro ay may tungkuling magluto ng Inihaw na Isda. Kumpara sa mga nakaraang level, ang pag-iihaw ng isda ay nangangailangan ng maingat na pagpapansin sa oras at kontrol sa init. Kailangan mong matutunan ang mga teknik sa pag-iihaw, tiyakin na ang isda ay luto nang tama, at ihain ang pagkain sa customer nang mabilis upang panatilihing masaya sila.</p>
<p>Habang umuusad ka sa Cookingdom, may mga bagong kakayahan na mare-release, at sa bawat bagong level, makakaranas ka ng mas komplikadong mga resipe at pangangailangan ng customer. Ang level na ito ay nagtatampok ng pag-iihaw bilang pangunahing teknik at susubok sa iyong kakayahang pamahalaan ang oras nang maayos sa kusina.</p>

<h2 id="goal">Mga Layunin ng Level 5</h2>
<ul>
    <li><strong>Magluto ng Inihaw na Isda:</strong> Sa level na ito, matututo kang mag-ihaw ng isda nang perpekto. Bibigyan ka ng Cookingdom ng mga kinakailangang kagamitan upang kontrolin ang temperatura ng grill, ngunit kailangan mong bantayan ang isda nang mabuti upang maiwasan itong masunog o maluto ng hindi tama. Ang layunin ay mag-ihaw ng isda nang pantay at makuha ang tamang texture at lasa.</li>
    <li><strong>Kontrolin ang Init:</strong> Ang pag-iihaw ng isda ay nangangailangan ng eksaktong kontrol sa init. Kailangan mong i-ihaw ang isda ng sapat na oras upang magkaroon ng crispy at gintong exterior habang ang loob nito ay malambot at moist. Kung sobra itong maluto o kulang, magdudulot ito ng hindi kasiyahan sa mga customer.</li>
    <li><strong>Maglingkod ng Mabilis sa mga Customer:</strong> Habang dumadami ang mga customer, kailangan mong pamahalaan ang maraming orders nang sabay-sabay. Susubok ang Cookingdom sa iyong kakayahang pamahalaan ang oras at mag-prioritize ng mga order habang tinitiyak na ang bawat pagkain ay lutong-luto.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Pagluto ng Inihaw na Isda</h2>
<ol>
    <li>
        <h3>Ihanda ang Isda:</h3>
        <p>Una, kunin ang isda mula sa ingredients area at ilagay ito sa grill. Sa Cookingdom, may iba't ibang uri ng isda na maaaring available, kaya siguraduhin na piliin ang tamang isda batay sa mga request ng customer.</p>
        <p><strong>Tip:</strong> Kung may partikular na uri ng isda na hinihingi ang customer, ihanda ito agad upang maiwasan ang pagka-antala.</p>
    </li>
    <li>
        <h3>Season ang Isda:</h3>
        <p>Kapag nailagay na ang isda sa grill, idagdag ang tamang seasonings. Karaniwang seasonings ay asin, paminta, o iba pang pampalasa na nakabatay sa preference ng customer.</p>
        <p><strong>Tip:</strong> Ang tamang seasoning ay nagpapahusay sa lasa ng isda. Mag-ingat na huwag maglagay ng labis, dahil maaari nitong matabunan ang natural na lasa ng isda.</p>
    </li>
    <li>
        <h3>Pag-ihaw ng Isda:</h3>
        <p>Bantayan ang grill habang nagluluto ang isda. Kailangan mong kontrolin ang oras ng pag-ihaw upang matiyak na lutong-luto ito ngunit hindi sosobra. Dapat magkaroon ng gintong kulay at crispy exterior ang isda, at ang loob nito ay moist at malambot.</p>
        <p><strong>Tip:</strong> Kung makita mong nagiging golden brown o medyo kumukulo ang isda, oras na upang suriin ito. Huwag maghintay ng matagal, dahil ang sobrang lutong isda ay mawawala ang malambot nitong texture.</p>
    </li>
    <li>
        <h3>Ihain ang Isda:</h3>
        <p>Kapag ang isda ay inihaw nang perpekto, tanggalin ito mula sa grill at ilagay sa plato. Maari mong dagdagan ng garnishes tulad ng lemon wedges, herbs, o side dish upang mapaganda ang presentation.</p>
        <p>Ihain agad ito sa customer upang maiwasan ang pagbaba ng kanilang kasiyahan dahil sa matagal na paghihintay.</p>
    </li>
</ol>

<h2 id="tips">Mga Tips at Tricks</h2>
<ul>
    <li><strong>Pagsasanay sa Pag-control ng Oras ng Pag-ihaw:</strong> Ang susi sa pag-iihaw ng isda sa Cookingdom ay tamang oras. Kung iwanan mo ang isda sa grill nang matagal, matutuyo ito at masusobrahan sa pagluto. Kung kulang naman sa lutong, magiging hilaw pa ito. Panuorin ang gintong-brown na kulay at mga kumukulong gilid upang malaman kung handa na ang isda.</li>
    <li><strong>Mahusay na Pamamahala ng Order:</strong> Habang tumatagal ang laro, dumarami ang mga customer, kaya't mahalaga na mahusay mong pamahalaan ang kanilang mga order. I-prioritize ang mga order batay sa kanilang waiting times at maghanda ng mga ingredients nang maaga upang makatipid ng oras sa panahon ng mataas na demand.</li>
    <li><strong>Pag-upgrade ng Kagamitan sa Kusina:</strong> Habang umuusad ka sa Cookingdom, maaari mong i-unlock ang mga bagong kagamitan sa kusina. Ang pag-upgrade ng iyong grill o iba pang kagamitan sa pagluluto ay makakatulong sa iyo na magluto ng mas mabilis at mas epektibo, na mahalaga sa pamamahala ng maraming customer at kanilang mga order.</li>
    <li><strong>Paggamit ng Boosters at Speedups:</strong> Sa ilang level, maaari mong gamitin ang boosters o speed-up items upang mapabilis ang pagluto ng isda o paghahanda ng ibang mga ingredients. Ang mga tool na ito ay makakatulong lalo na kung marami kang orders na kailangang asikasuhin nang sabay-sabay.</li>
    <li><strong>Kasiyahan ng Customer:</strong> Tandaan na ang Cookingdom ay tungkol sa kasiyahan ng customer. Ang mas mabilis mong maihain ang kanilang pagkain at ang pagiging perpekto ng luto, mas mataas ang iyong score. Ang maagap na serbisyo at tamang pagluluto ay magpapanatili sa mga customer mong masaya at mataas ang iyong rating.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Ang Level 5 sa Cookingdom ay nagpapakilala ng hamon ng pag-iihaw ng isda. Ang susi sa tagumpay ay ang pagkontrol sa temperatura ng grill at oras ng pagluto upang matiyak na ang isda ay perpektong luto. Ang pamamahala ng maraming order, pag-upgrade ng kagamitan sa kusina, at paggamit ng boosters ay makakatulong sa iyong matagumpay na pagtapos ng level na ito.</p>
<p>Kapag natapos mo na ang level na ito, magbubukas ka ng mga bagong upgrade sa kusina at mga bagong resipe na mag-aangat sa iyong kasanayan sa pagluluto sa susunod na mga level. Patuloy na pagbutihin ang iyong kakayahan sa pagluluto at pamamahala ng oras upang manatiling nangunguna sa laro!</p>
`,
  },
  {
    id: 'cookingdom-game-level-6',
    title: 'Cookingdom Level 6:<br>Café Espresso',
    pageTitle: 'Cookingdom Level 6 - Gabay sa Café Espresso',
    pageSubtitle: 'Matutong magtimpla ng perpektong espresso sa Cookingdom Level 6.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_06.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-6' } },
    iframeUrl: 'https://www.youtube.com/embed/OTKpJ9M7to',
    seo: {
      title: 'Cookingdom Level 6 Gabay: Café Espresso | Mga Tip at Estratehiya',
      description:
        'Masterin ang sining ng paggawa ng Café Espresso sa Cookingdom Level 6. Mga tip tungkol sa paggiling, oras ng paggawa, at pamamahala ng mga order.',
      keywords:
        'cookingdom, level 6, café espresso, espresso, gabay, kape, paggawa, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_06.webp',
      levelInfoHtml:
        '<h3>Café Espresso</h3><p><strong>Kahirapan:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 1.5 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-3',
          title: 'Cookingdom Level 3<br/>Fried Potatoes',
          imageUrl: '/images/guides_03.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-3' } },
        },
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom Level 4<br/>Rolled Ice-cream',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-4' } },
        },
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom Level 5<br/>Grilled Fish',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-5' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang bawat level ay nagdadala ng mga bagong hamon at resipe na kailangang pag-aralan. Sa Level 6, haharapin mo ang gawain ng paggawa ng Café Espresso, isang mahalagang kasanayan upang mapalawak ang iyong mga alok sa café at mapataas ang kasiyahan ng mga customer. Ang level na ito ay nakatuon sa pagkatuto kung paano magtimpla ng perpektong espresso shot, isang susi sa mga inuming nakabase sa kape na madalas na lilitaw habang ikaw ay sumusulong sa laro.</p>
<p>Habang ikaw ay sumusulong sa level na ito, magsisimula ka ring harapin ang mas kumplikadong mga order ng customer at kakailanganin mong pamahalaan ang maraming inumin nang sabay-sabay. Panahon na upang paghusayin ang iyong kasanayan sa pamamahala ng oras at mapabuti ang iyong kahusayan sa kusina!</p>

<h2 id="goal">Mga Layunin ng Level 6</h2>
<ul>
    <li><strong>Maghanda ng Café Espresso:</strong> Sa level na ito, magtutuon ka sa paggawa ng perpektong espresso. Ang proseso ay medyo simple ngunit nangangailangan ng precision upang makuha ang tamang balanse. Kakailanganin mong gamitin ang coffee machine, kontrolin ang paggiling ng mga beans, at tiyakin na ang tamang dami ng tubig ay dumadaan sa kape.</li>
    <li><strong>Pamahalaan ang Maraming Order:</strong> Habang nagsisimulang mag-order ang mga customer ng kape at espresso, kailangan mong subaybayan ang maraming inumin nang sabay-sabay. Kabilang dito ang paghahanda ng iba't ibang inumin habang tinitiyak ang kalidad ng bawat isa.</li>
    <li><strong>Ihain ng Maayos at Mabilis:</strong> Dahil ang espresso shots ay nangangailangan ng maikling oras ng paggawa, kailangan mong ihain ito ng mabilis. Ang pagsubaybay sa maraming order at paghahatid ng bawat isa nang mabilis ay magiging susi sa pagpapataas ng kasiyahan ng customer.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paggawa ng Café Espresso</h2>
<ol>
    <li>
        <h3>Gilingin ang Coffee Beans:</h3>
        <p>Ang unang hakbang sa paggawa ng isang mahusay na Café Espresso ay ang pagpili at paggiling ng tamang coffee beans. Sa Cookingdom, ang coffee grinder ay magagamit. Siguraduhin na i-adjust ang grind size ng tama, dahil ang espresso ay nangangailangan ng mas pinong paggiling kaysa sa ibang mga inumin ng kape.</p>
        <p><strong>Tip:</strong> Kung masyadong magaspang ang paggiling, magiging mahina ang espresso. Kung masyadong pino, maaaring magmukhang mapait ang kape.</p>
    </li>
    <li>
        <h3>Ihanda ang Espresso Machine:</h3>
        <p>Kapag ang coffee beans ay giling na, ilagay ang grounds sa portafilter ng espresso machine. Siguraduhin na pantay ang pagkakalagay at tamped ang grounds upang maiwasan ang hindi pantay na extraction.</p>
        <p><strong>Tip:</strong> Ang maayos na pagpuno ng portafilter ay nagsisiguro ng pantay na extraction, na mahalaga para sa isang balanseng espresso shot.</p>
    </li>
    <li>
        <h3>Pagtimpla ng Espresso:</h3>
        <p>Ilagay ang portafilter sa espresso machine at simulan ang proseso ng paggawa. Pipilitin ng makina na dumaan ang mainit na tubig sa pinong giling na kape upang lumikha ng isang mayaman at mabangong espresso shot.</p>
        <p><strong>Tip:</strong> Pansinin ang oras ng paggawa. Karaniwan, ang isang espresso shot ay tumatagal ng mga 25-30 segundo. Dapat mayaman ang espresso at may golden foam (crema) sa ibabaw.</p>
    </li>
    <li>
        <h3>Ihain ang Espresso:</h3>
        <p>Kapag natapos na ang paggawa, ihain ang espresso sa isang maliit na tasa. Sa Cookingdom, maaaring may opsyon kang magdagdag ng garnish, tulad ng isang cube ng asukal o cinnamon stick, ngunit sa tradisyon, ang espresso ay inihahain nang plain.</p>
        <p><strong>Tip:</strong> Mahalaga ang bilis! Dahil ang espresso ay isang mabilis na inumin, siguraduhing ihain ito kaagad upang hindi mapaghintay ang mga customer.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trik</h2>
<ul>
    <li><strong>Kontrolin ang Grind:</strong> Ang paggiling ng iyong coffee beans ay may malaking epekto sa lasa ng iyong espresso. Siguraduhin na ang paggiling ay pino upang magkaroon ng tamang extraction, ngunit hindi sobrang pino upang hindi mabigyan ng sapat na tubig ang kape. Ang balanseng paggiling ay magsisiguro ng isang mayaman at masarap na espresso shot.</li>
    <li><strong>Oras ng Pagtimpla:</strong> Ang oras ng paggawa ng espresso ay karaniwang nasa pagitan ng 25-30 segundo. Kung masyadong mabilis ang proseso, maaaring magmukhang watery o kulang sa lasa ang espresso. Kung masyadong mabagal, maaari itong magmukhang mapait. Ang timing ay susi sa pagpapahusay ng iyong espresso.</li>
    <li><strong>Subaybayan ang Maraming Order:</strong> Habang dumadami ang mga customer, kakailanganin mong pamahalaan ang maraming order nang sabay-sabay. Hahamonin ka ng Cookingdom sa mga sabayang order ng iba't ibang inumin, kaya maghanda upang pamahalaan ang maraming gawain nang sabay-sabay. Magbigay-priyoridad sa mga order batay sa pasensya ng customer at pagiging kumplikado ng inumin.</li>
    <li><strong>Mag-upgrade ng Iyong Kagamitan sa Kape:</strong> Habang sumusulong ka sa Cookingdom, ang pag-upgrade ng iyong espresso machine o grinder ay magpapataas ng iyong kahusayan at pagpapabuti ng kalidad ng iyong espresso shots. Ang pamumuhunan sa mas magandang kagamitan ay makakatulong sa iyo upang mapamahalaan ang mas maraming order nang mas mabilis.</li>
    <li><strong>Ihain ng Mabilis upang Palakasin ang Kasiyahan:</strong> Nagiging hindi masaya ang mga customer sa Cookingdom kung maghihintay sila ng matagal para sa kanilang order. Dahil ang espresso ay mabilis na inumin, siguraduhing ihain ito agad upang mapanatili ang kasiyahan ng mga customer at mapataas ang iyong rating.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 6 ng Cookingdom, ang paggawa ng perpektong Café Espresso ay tungkol sa pagkontrol ng paggiling ng kape, oras ng pagtimpla, at paghahatid ng mabilis. Habang dumadami ang mga customer na nag-oorder ng mga inumin, kakailanganin mong pamahalaan ang iyong oras nang mahusay, mag-multitask, at magbigay-priyoridad sa mga order upang matiyak ang maayos na operasyon. Ang pagiging bihasa sa espresso ay magbubukas ng iba't ibang mga inumin ng kape at hamon na lilitaw sa mga susunod na level.</p>
<p>Ang level na ito ay isang mahusay na pagpapakilala sa mga mas advanced na resipe ng kape, na naghahanda sa iyo para sa mas kumplikadong mga order na darating sa mga susunod na yugto ng laro. Sa pagtatapos ng level na ito, magkakaroon ka ng solidong pang-unawa sa paghahanda ng kape at magiging handa sa pagharap sa mga mas advanced na teknik sa pagluluto at paggawa ng inumin.</p>
`,
  },
  {
    id: 'cookingdom-game-level-7',
    title: 'Cookingdom Level 7:<br>Sunny Eggs',
    pageTitle: 'Cookingdom Level 7 - Gabay sa Sunny Eggs',
    pageSubtitle:
      'Matutunan kung paano magluto ng perpektong sunny-side-up na itlog sa Cookingdom Level 7.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_07.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-7' } },
    iframeUrl: 'https://www.youtube.com/embed/IiwEmCzNwYM',
    seo: {
      title: 'Cookingdom Level 7 Gabay: Sunny Eggs | Mga Tip & Estratehiya',
      description:
        'Mastering sunny-side-up na itlog sa Cookingdom Level 7. Mga tip sa kontrol ng init, pag-iwas sa sirang yolk, at mabilis na serbisyo.',
      keywords:
        'cookingdom, level 7, sunny eggs, gabay, sunny side up, itlog, kontrol ng init, pamamahala ng oras',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_07.webp',
      levelInfoHtml:
        '<h3>Sunny Eggs</h3><p><strong>Kahirapan:</strong> Madali</p><p><strong>Inaasahang Oras:</strong> 1 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-4',
          title: 'Cookingdom Level 4<br/>Rolled Ice-cream',
          imageUrl: '/images/guides_04.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-4' } },
        },
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom Level 5<br/>Grilled Fish',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-5' } },
        },
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom Level 6<br/>Café Espresso',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-6' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, bawat level ay nagdadala ng mga bagong hamon sa pagluluto at mga resipe na sumusubok sa iyong kasanayan sa pagluluto at pamamahala ng oras. Ang Level 7 ay nakatuon sa paghahanda ng Sunny Eggs, isang simpleng ngunit maselang ulam na nangangailangan ng tumpak na kontrol upang matiyak na mananatiling buo ang yolk ng itlog habang niluluto. Habang umuusad ka sa Cookingdom, kailangan mong mamaster ang ulam na ito upang matugunan ang lumalaking demand ng iyong mga customer na maghahanap ng perpektong sunny-side-up na itlog.</p>
<p>Ang level na ito ay nagpapakilala ng mas kumplikadong multitasking habang hawak mo ang maraming order, ngunit huwag mag-alala — sa tamang pamamaraan, kaya mong hawakan ito. Halina't tuklasin ang mga hakbang upang magluto ng perpektong sunny eggs!</p>

<h2 id="goal">Mga Layunin ng Level 7</h2>
<ul>
    <li><strong>Magluto ng Sunny Eggs:</strong> Sa Cookingdom, ang sunny eggs ay isang klasikong ulam sa agahan. Ang layunin ng level na ito ay magluto ng perpektong itlog na may buo pa ring yolk habang iniiwasang masyadong maluto ang whites. Ang tamang antas ng pagkakaluto ng itlog ang magiging susi sa tagumpay sa level na ito.</li>
    <li><strong>Pamahalaan ang Maramihang Order ng Epektibo:</strong> Gaya ng sa mga naunang level, kailangan mong hawakan ang maraming order nang sabay-sabay. Sa level na ito, ang sunny eggs ay magiging paboritong item sa menu, kaya kailangan mong bantayan ang oras at ihain ang bawat ulam sa tamang oras.</li>
    <li><strong>Ihain nang Mabilis at Tumpak:</strong> Ang mga customer ng Cookingdom ay hindi mahihirapang maghintay, at inaasahan nilang luto ang kanilang sunny eggs nang tama. Kung masyadong maluto ang itlog o ihahain ng huli, bababa ang iyong score, kaya't mahalaga ang tamang oras at kahusayan.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paghahanda ng Sunny Eggs</h2>
<ol>
    <li>
        <h3>Maghanda ng Kawali:</h3>
        <p>Upang magluto ng sunny eggs, simulan sa pagpapainit ng kawali. Kapag mainit na ang kawali, maglagay ng kaunting langis o mantikilya upang maiwasan ang pagkakadikit ng itlog. Siguraduhing pantay ang pagkakalat ng langis sa ibabaw ng kawali.</p>
        <p><strong>Tip:</strong> Mas mainam ang non-stick na kawali para sa sunny eggs upang maiwasan ang pagkabasag ng yolk.</p>
    </li>
    <li>
        <h3>I-crack ang mga Itlog:</h3>
        <p>Maingat na i-crack ang mga itlog at ilagay ang mga ito sa kawali. Siguraduhing hindi mababasag ang yolk. Bibigyan ka ng Cookingdom ng opsyon na mag-crack ng mga itlog isa-isa, kaya't mag-ingat at tiyaking buo ang yolk ng bawat itlog habang inilalagay sa kawali.</p>
        <p><strong>Tip:</strong> Kung magluluto ka ng maraming itlog, tiyaking may sapat na espasyo ang mga ito upang maiwasang magdikit at magkadikit.</p>
    </li>
    <li>
        <h3>Magluto ng Itlog:</h3>
        <p>Hayaan ang mga itlog na maluto sa katamtamang init sa loob ng ilang minuto hanggang ang mga puti ay maayos nang maluto at ang yolk ay nananatiling malambot. Ang susi dito ay lutuin ang mga puti ng itlog nang buo nang hindi nasisira ang yolk. Ang mga itlog ay dapat magkaroon ng malambot na yolk na may gintong kulay sa gitna.</p>
        <p><strong>Tip:</strong> Huwag i-flip ang mga itlog! Ang sunny eggs ay niluluto lamang sa isang side, at ang pag-flip ay maaaring magdulot ng pagkabasag ng yolk.</p>
    </li>
    <li>
        <h3>Ihain ang Sunny Eggs:</h3>
        <p>Kapag luto na ang mga itlog, maingat na ilagay ito sa isang plato. Sa Cookingdom, maaari mong dagdagan ang mga itlog ng herbs o ihain kasama ng side dish, depende sa order ng customer.</p>
        <p><strong>Tip:</strong> Ihain agad ang itlog upang mapanatili itong fresh at maiwasan ang hindi pagkakasiyahan ng customer dulot ng matagal na paghihintay.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trik</h2>
<ul>
    <li><strong>Mag-ingat sa Pag-kontrol ng Init:</strong> Sa Cookingdom, ang pagkontrol sa init ay susi upang makagawa ng perpektong sunny eggs. Kung masyadong mataas ang init, mabilis maluluto ang mga itlog at maaaring magdulot ng pagkasunog ng puti bago maluto ang yolk. Panatilihing katamtaman ang init upang makuha ang tamang gintong yolk at lutong puti.</li>
    <li><strong>Huwag Magmadali:</strong> Bagamat mukhang madali lang magluto ng itlog, ang pagmamadali ay maaaring magresulta sa sirang yolk o overcooked na itlog. Maglaan ng oras at tutukan ang pagluluto ng itlog nang maayos. Mahalaga sa mga customer ng Cookingdom ang kalidad ng kanilang pagkain.</li>
    <li><strong>Multitasking:</strong> Subok ang iyong multitasking skills sa Cookingdom, dahil madalas kailangan mong magluto ng sunny eggs habang may ibang order na naghihintay. Tiyaking bigyan ng prioridad ang mga order ayon sa oras at hirap, at huwag kalimutang check-in ang mga itlog habang nagtatrabaho sa iba pang mga ulam.</li>
    <li><strong>Gamitin ang mga Boosters para sa Kahusayan:</strong> Habang umuusad ka sa Cookingdom, makakakuha ka ng mga boosters at speed-ups na makakatulong sa iyo na magluto ng mas mabilis o mapabuti ang iyong kahusayan. Gamitin ang mga tool na ito nang may estratehiya upang matulungan kang tapusin ang mga order sa tamang oras, lalo na kapag maraming customer ang nag-order ng sunny eggs.</li>
    <li><strong>Satisfaksyon ng Customer:</strong> Laging magtangkang ihain ang itlog sa tamang oras at kalidad upang maiwasan ang pagkadismaya ng mga customer. Ang perpektong pagluluto at mabilis na paghahatid ng mga itlog ay magdadala sa iyo ng mataas na rating.</li>
</ul>

<h2 id="summary">Pagbubuod</h2>
<p>Ang Level 7 sa Cookingdom ay nakatuon sa pagpapabuti ng iyong kasanayan sa pagluluto ng sunny eggs. Ang susi sa tagumpay ay ang pagkontrol ng init, pagluluto ng itlog ng tama nang hindi overcooking ang mga ito, at paghahatid ng itlog agad pagkatapos maluto. Ang pamamahala ng oras at multitasking ay mahalaga habang nagluluto ka ng sunny eggs at iba pang mga ulam.</p>
<p>Sa tamang teknika at mabilis na serbisyo, madali mong matatapos ang level na ito at mapapasaya ang iyong mga customer. Habang umuusad ka sa Cookingdom, makakaranas ka pa ng mas kumplikadong mga resipe at order mula sa mga customer, kaya't ang mastery ng sunny eggs ay maghahanda sa iyo para sa tagumpay sa mga susunod na level.</p>
`,
  },
  {
    id: 'cookingdom-game-level-8',
    title: 'Cookingdom Level 8:<br>Steak',
    pageTitle: 'Cookingdom Level 8 - Gabay sa Steak',
    pageSubtitle: 'Matutunan kung paano magluto ng perpektong steak sa Cookingdom Level 8.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_08.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-8' } },
    iframeUrl: 'https://www.youtube.com/embed/vrGNwEY_6hE',
    seo: {
      title: 'Gabay sa Cookingdom Level 8: Steak | Mga Tip at Istratehiya',
      description:
        'Masterin ang pagluluto ng steak (rare, medium, well-done) sa Cookingdom Level 8. Mga tip sa timing, init, at pamamahala ng order.',
      keywords:
        'cookingdom, level 8, steak, gabay, grilling, searing, doneness, rare, medium, well-done, time management',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_08.webp',
      levelInfoHtml:
        '<h3>Steak</h3><p><strong>Dificultad:</strong> Katamtaman</p><p><strong>Oras na Inaasahan:</strong> 3.5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-5',
          title: 'Cookingdom Level 5<br/>Grilled Fish',
          imageUrl: '/images/guides_05.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-5' } },
        },
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom Level 6<br/>Café Espresso',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-6' } },
        },
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom Level 7<br/>Sunny Eggs',
          imageUrl: '/images/guides_07.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-7' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang bawat bagong level ay hamon sa iyo na magluto ng mas komplikadong ulam. Ang Level 8 ay hindi naiiba, dahil ang iyong gawain ay maghanda ng perpektong Steak. Ang ulam na ito ay nangangailangan ng tamang timing, kontrol sa init, at maingat na atensyon sa mga order ng customer. Habang ikaw ay sumusulong sa Cookingdom, ang pagluluto ng steak ay magiging pangunahing bahagi ng iyong menu, at ang paghawak sa mga kumplikadong antas ng doneness ng steak ay magiging mahalaga upang mapanatili ang kasiyahan ng iyong mga customer.</p>
<p>Sa level na ito, kailangan mong pamahalaan ang iyong kusina nang mahusay habang tinitiyak na ang bawat steak ay lutong tama, maging ito man ay rare, medium, o well-done. Halina't tuklasin ang mga detalye ng paggawa ng perpektong steak!</p>

<h2 id="goal">Mga Layunin sa Level 8</h2>
<ul>
    <li><strong>Magluto ng Steak ng Perpekto:</strong> Ang Cookingdom ay nangangailangan sa iyo na magluto ng steak sa iba't ibang antas ng doneness: rare, medium, at well-done. Ang bawat customer ay may kani-kaniyang preference, at mahalaga na lutuin ang bawat steak ayon sa kanilang kagustuhan.</li>
    <li><strong>Pamahalaan ang Maramihang Order ng Steak:</strong> Gaya ng mga nakaraang level, ang pamamahala sa maraming order ay kritikal. Susubukan ng Cookingdom ang iyong kakayahan sa paghawak ng mas kumplikadong order nang sabay-sabay habang tinitiyak na ang bawat steak ay luto ng maayos.</li>
    <li><strong>Ihatid ang Steak ng Agad:</strong> Mabilis mawalan ng pasensya ang mga customer sa Cookingdom, kaya't ang paghahain ng bawat steak agad pagkatapos itong maluto ay mahalaga. Ang timing ay susi sa pagtamo ng pinakamataas na rating.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paghahanda ng Steak</h2>
<ol>
    <li>
        <h3>Ihanda ang Pan o Grill:</h3>
        <p>Bago magluto, painitin ang iyong pan o grill sa mataas na temperatura. Ang susi sa isang magandang steak ay ang pagkuha ng pan o grill na sapat ang init upang mag-sear ng labas habang pinapanatili ang katas sa loob. Magdagdag ng konting langis o mantikilya sa pan upang hindi dumikit ang steak.</p>
        <p><strong>Tip:</strong> Mahalagang mainit ang pan o grill upang makuha ang masarap na crust ng steak.</p>
    </li>
    <li>
        <h3>Seasonsahan ang Steak:</h3>
        <p>Kapag mainit na ang pan, season-an ang steak ng asin, paminta, at iba pang spices o herbs na gusto mo. Maaaring may mga partikular na seasoning na hiling ang ilang customer sa Cookingdom, kaya siguraduhing tignan ang kanilang order para sa mga preference.</p>
        <p><strong>Tip:</strong> Gumamit ng sapat na seasoning upang mapalasa ang steak. Huwag kalimutang season-an ang magkabilang panig ng steak.</p>
    </li>
    <li>
        <h3>Iluto ang Steak:</h3>
        <p>Ilagay ang steak sa mainit na pan o grill. Ayon sa doneness na gusto ng customer, lutuin ang steak sa mga sumusunod na oras:</p>
        <ul>
            <li>Rare: 2-3 minuto sa bawat gilid.</li>
            <li>Medium: 4-5 minuto sa bawat gilid.</li>
            <li>Well-Done: 6-7 minuto sa bawat gilid.</li>
        </ul>
        <p><strong>Tip:</strong> I-flip lamang ang steak isang beses upang hindi mawalan ng katas. Gamitin ang mga tongs upang maingat na i-flip ang steak.</p>
    </li>
    <li>
        <h3>Suriin ang Doneness:</h3>
        <p>Gamitin ang mga visual at tactile cues upang suriin ang doneness ng steak:</p>
        <ul>
            <li>Rare: Malamig sa pakiramdam at pula sa gitna.</li>
            <li>Medium: Bahagyang matigas na may pink na gitna.</li>
            <li>Well-Done: Matigas at browned sa buong steak, walang pink sa loob.</li>
        </ul>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari ring makita mo ang visual indicator o timer na magpapakita kung kailan handa na ang steak, na makakatulong upang maiwasang maluto ito nang sobra.</p>
    </li>
    <li>
        <h3>Pahingahin ang Steak:</h3>
        <p>Kapag ang steak ay luto na ayon sa tamang doneness, alisin ito sa pan o grill at hayaang mag-rest ng isang minuto o dalawa. Makakatulong ito upang maibalik ang katas at gawing malambot at juicy ang steak.</p>
        <p><strong>Tip:</strong> Huwag palampasin ang hakbang na ito! Ang pagpapahinga ng steak ay mahalaga upang mapanatili ang lasa at moisture nito.</p>
    </li>
    <li>
        <h3>Ihatid ang Steak:</h3>
        <p>Kapag ang steak ay nakapag-rest na, ilagay ito sa isang plato at ihain sa customer. Maaari mong dagdagan ang steak ng mga sides tulad ng mashed potatoes, gulay, o sauces, depende sa order.</p>
        <p><strong>Tip:</strong> Ihain ang steak agad kapag ito ay handa na upang mapanatili ang kasiyahan ng customer at maiwasan ang anumang dissatisfaction dahil sa mabagal na serbisyo.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Tricks</h2>
<ul>
    <li><strong>Mastering Steak Doneness:</strong> Sa Cookingdom, ang pagluluto ng steak ayon sa tamang level ng doneness ay mahalaga. Ang mga customer ay magtatalaga kung paano nila gusto ang kanilang steak, at kung maihahain ito ng perpekto ay makakakuha ka ng mataas na rating. Magtulungan sa mga order ng customer at gamitin ang tamang cooking times upang makuha ang perpektong steak.</li>
    <li><strong>Efficient Order Management:</strong> Habang dumadami ang mga customer, kailangan mong pamahalaan ang maraming order ng steak nang sabay-sabay. Bigyan ng prayoridad ang mga customer ayon sa kung gaano katagal na silang naghihintay. Siguraduhing suriin ang doneness ng bawat steak at maiwasang maluto ang mga ito nang sobra habang pinamamahalaan ang iba pang mga ulam.</li>
    <li><strong>Upgrades and Equipment:</strong> Habang ikaw ay sumusulong sa Cookingdom, maaari mong i-upgrade ang iyong mga gamit sa pagluluto. Ang mas mataas na kalidad na grill o pan ay magpapabilis sa pagluto ng steak. Isaalang-alang ang pag-upgrade ng iyong mga gamit upang mapabilis ang proseso ng pagluluto at mapabuti ang iyong mga resulta.</li>
    <li><strong>Use Speed Boosts and Boosters:</strong> Nagbibigay ang Cookingdom ng mga speed boosts at boosters upang matulungan kang pamahalaan ang abalang mga oras. Gamitin ito upang mapabilis ang pagluluto o paghahatid ng iyong mga customer, lalo na kung maraming order ng steak ang kailangan mong pamahalaan nang sabay.</li>
    <li><strong>Customer Satisfaction:</strong> Ang pasensya ng customer ay isang malaking factor sa Cookingdom. Kung matagal mong pinaghihintay ang mga customer para sa kanilang steak, maaari silang umalis nang hindi masaya. Palaging aim na ihain ang steak na mainit at agad upang mapanatili ang kasiyahan ng customer para sa pinakamahusay na resulta.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 8 ng Cookingdom, ang paghahanda ng perpektong Steak ay tungkol sa pagkontrol sa mga oras ng pagluluto at tinitiyak na ang steak ng bawat customer ay luto ayon sa kanilang kagustuhan. Kailangan mong masterin ang mga grilling at pan-searing techniques, pamahalaan ang maramihang order nang sabay, at ihain ang steak habang ito ay sariwa at juicy.</p>
<p>Sa pagtatapos ng level na ito, magkakaroon ka ng mga mahalagang kasanayan sa paghahanda ng steak na makakatulong sa iyo na malutas ang mas kumplikadong mga ulam sa mga susunod na level. Sa pamamagitan ng tamang atensyon sa detalye at mabilis na serbisyo, magagawa mong hawakan ang mga order ng steak nang propesyonal at panatilihing bumabalik ang iyong mga customer para sa higit pa!</p>
`,
  },
  {
    id: 'cookingdom-game-level-9',
    title: 'Cookingdom Level 9:<br>Spaghetti',
    pageTitle: 'Cookingdom Level 9 - Gabay sa Spaghetti',
    pageSubtitle: 'Masterin ang sining ng pagluluto ng perpektong spaghetti sa Cookingdom Level 9.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: true,
    imageUrl: '/images/guides_09.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-9' } },
    iframeUrl: 'https://www.youtube.com/embed/SOGzuHCsQkQ',
    seo: {
      title: 'Gabay sa Cookingdom Level 9: Spaghetti | Mga Tips & Strategy',
      description:
        'Matutong magluto ng perpektong spaghetti (al dente!) kasama ang tamang sarsa sa Cookingdom Level 9. Mga tips sa tamang oras, paghahanda ng sarsa, at multitasking.',
      keywords:
        'cookingdom, level 9, spaghetti, gabay, pasta, sarsa, al dente, pamamahala ng oras, multitasking',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_09.webp',
      levelInfoHtml:
        '<h3>Spaghetti</h3><p><strong>Antas ng Kahirapan:</strong> Katamtaman</p><p><strong>Inaasahang Oras:</strong> 2.5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-6',
          title: 'Cookingdom Level 6<br/>Café Espresso',
          imageUrl: '/images/guides_06.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-6' } },
        },
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom Level 7<br/>Sunny Eggs',
          imageUrl: '/images/guides_07.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-7' } },
        },
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom Level 8<br/>Steak',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-8' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang bawat level ay nagdadala ng mga bagong putahe at mas mahihirap na customer. Sa Level 9, ang iyong tungkulin ay maghanda ng Spaghetti, isang klasikong Italian na putahe na nangangailangan ng maingat na pagluluto at tamang oras. Ang pagluluto ng spaghetti at paghahanda ng sarsa ay simula pa lamang. Para mapanatili ang kasiyahan ng iyong mga customer, kailangan mong bigyan pansin ang mga detalye, mula sa tamang luto ng pasta hanggang sa pagpili ng sarsa at mga toppings.</p>
<p>Habang ikaw ay umuusad sa Cookingdom, makakaranas ka ng mas kumplikadong mga order, at ang paghahanda ng spaghetti ay magpapakita ng iyong kakayahan sa multitasking at pamamahala ng oras. Halina't maglakbay sa mga hakbang upang matutunan ang perpektong lutong spaghetti!</p>

<h2 id="goal">Mga Layunin ng Level 9</h2>
<ul>
    <li><strong>Lutoin ang Spaghetti nang Perpekto:</strong> Ang pangunahing layunin ng level na ito ay malutong spaghetti—al dente! Mahalaga ang tamang pagluluto ng pasta para sa kasiyahan ng mga customer. Kung sobra itong malambot o masyadong matigas, maaapektuhan ang iyong score.</li>
    <li><strong>Maghanda ng Sarsa:</strong> Hindi lang ang noodles ang mahalaga sa spaghetti. Sa Cookingdom, kailangan mong maghanda ng tamang sarsa para sa iyong pasta, tulad ng tomato sauce, cream-based sauce, o pesto. Ang sarsa ay dapat may lasa at tamang kombinasyon sa spaghetti.</li>
    <li><strong>Maghatid ng Mabilis:</strong> Tulad ng ibang mga level, ang bilis at pagiging tumpak ay susi. Naghihintay ang iyong mga customer, at ang paghahatid ng perpektong spaghetti sa tamang temperatura ay mahalaga para makakuha ng mataas na rating.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paghahanda ng Spaghetti</h2>
<ol>
    <li>
        <h3>Pakuloyin ang Tubig:</h3>
        <p>Una, maglagay ng tubig sa isang kaldereta at pakuluan ito. Siguraduhing sapat ang dami ng tubig para maluto ang spaghetti ng maayos, kaya tiyaking sapat ang laki ng kaldereta.</p>
        <p><strong>Tip:</strong> Ang pagdagdag ng asin sa tubig ay tumutulong sa pagpapalasa ng pasta at nagpapaganda ng texture nito.</p>
    </li>
    <li>
        <h3>Lutoin ang Spaghetti:</h3>
        <p>Kapag kumulo na ang tubig, idagdag ang spaghetti noodles. Siguraduhing lubos na nakalubog ang noodles sa tubig upang magluto ng pantay. Sa Cookingdom, ang pasta ay lulutuin sa loob ng mga 7-10 minuto, depende sa iyong nais na pagkakaluto.</p>
        <p><strong>Tip:</strong> Haluing paminsan-minsan ang pasta para maiwasang magsama-sama. Bantayan ang timer, dahil ang sobrang luto na pasta ay magiging malambot at malasa.</p>
    </li>
    <li>
        <h3>Maghanda ng Sarsa:</h3>
        <p>Habang niluluto ang pasta, maghanda ng sarsa. Ang Cookingdom ay may iba't ibang uri ng sarsa, kaya tiyakin na tama ang paghahanda ng sarsa batay sa order ng customer. Para sa tomato sauce, igisa ang mga sibuyas at bawang sa olive oil, magdagdag ng canned tomatoes, at pakuluan. Para sa cream sauce, tunawin ang mantikilya at cream, at saka i-season gamit ang asin at paminta.</p>
        <p><strong>Tip:</strong> Pakuluin ang sarsa ng ilang minuto upang magdevelop ang mga lasa. Maaari ka ring magdagdag ng mga halamang pampalasa tulad ng basil, oregano, o parsley upang palakasin ang lasa ng sarsa.</p>
    </li>
    <li>
        <h3>I-drain at Ihalo:</h3>
        <p>Kapag naluto na ang pasta, i-drain ito nang maingat, at tiyakin na magtabi ng kaunting pasta water (para sa adjustment ng sarsa kung kinakailangan). Idagdag ang pasta sa pan na may sarsa, at ihalo ng mabuti upang matakpan ng sarsa ang lahat ng noodles.</p>
        <p><strong>Tip:</strong> Kung masyadong makapal ang sarsa, magdagdag ng kaunting pasta water para ma-loosen ito at magdikit ng mas mabuti.</p>
    </li>
    <li>
        <h3>Ihatid ang Spaghetti:</h3>
        <p>Kapag maayos na ang pasta at sarsa, ilagay ito sa plato. Garnish na may karagdagang toppings tulad ng grated cheese, sariwang herbs, o isang patak ng olive oil. Sa Cookingdom, may ilang customer na humihiling ng partikular na toppings, kaya tiyaking tingnan ang kanilang order ng mabuti.</p>
        <p><strong>Tip:</strong> Ihatid ang spaghetti agad upang maiwasang magluto pa o lumamig. Nais ng mga customer sa Cookingdom na mainit at sariwa ang pagkain, kaya't mahalaga ang mabilis na paghahatid.</p>
    </li>
</ol>

<h2 id="tips">Mga Tips & Tricks</h2>
<ul>
    <li><strong>Perpektong Oras:</strong> Ang pinakaimportanteng aspeto ng pagluluto ng spaghetti ay ang tamang oras. Kung paglulutoin mo ito ng sobra, magiging malata, at kung kulang naman sa luto, magiging matigas. May timer sa Cookingdom para sa bawat putahe, kaya magbantay at huwag kalimutan tingnan ang pasta.</li>
    <li><strong>Paghahanda ng Sarsa:</strong> Ang sarsa ay kasing halaga ng pasta! Tiyaking malasa at well-seasoned ang iyong sarsa. Sa Cookingdom, madalas na may mga partikular na uri ng sarsa o garnish na hinahanap ang mga customer, kaya't maging maingat sa kanilang mga order.</li>
    <li><strong>Pag-upgrade ng Kagamitan sa Kusina:</strong> Habang umuusad ka sa Cookingdom, maaari mong i-unlock ang mga bagong kagamitan sa kusina na magpapabilis at magpapadali ng iyong pagluluto ng pasta. Ang pagpapalakas ng iyong stove o pagdagdag ng mas malaking kaldereta ay makakatulong sa paghahanda ng maraming order ng spaghetti sabay-sabay.</li>
    <li><strong>Paghawak ng Maramihang Order:</strong> Sa Cookingdom, madalas kang maghahandle ng higit sa isang order nang sabay. Maghanda ng spaghetti at sarsa para sa bawat order at ihatid ang mga ito sa sandaling matapos. I-prioritize ang mga order na matagal nang naghihintay at tiyaking tama ang sarsa para sa bawat customer.</li>
    <li><strong>Kasiyahan ng Customer:</strong> Mahigpit ang mga customer sa Cookingdom tungkol sa kalidad at bilis ng kanilang order. Para panatilihing masaya sila, ihatid agad ang spaghetti at tiyaking lutong-luto ito ayon sa kanilang nais. Ang sobrang luto na pasta ay magdudulot ng pagkadismaya, at ang kulang sa luto ay magdudulot ng reklamo.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 9 ng Cookingdom, ang paghahanda ng perpektong Spaghetti ay nangangailangan ng maingat na pagtingin sa mga detalye. Mula sa pagpapakulo ng pasta hanggang sa paghahanda ng sarsa at paghahatid ng mainit, ang tamang oras at kahusayan ay susi para makuha ang mataas na rating. Habang ikaw ay nag-ha-handle ng maramihang order, tiyaking ang bawat plato ng spaghetti ay ihahain ng perpekto, may tamang sarsa at toppings.</p>
<p>Sa pagpapahusay ng dish na ito, magbubukas ka ng mas kumplikadong mga recipe at patuloy na mapapalago ang iyong kasanayan sa Cookingdom. Perpekto ang iyong teknik sa pagluluto ng pasta at magpatuloy na mag-advance sa laro upang harapin ang mga bagong at kapanapanabik na hamon sa pagluluto!</p>
`,
  },
  {
    id: 'cookingdom-game-level-10',
    title: 'Cookingdom Level 10:<br>Salmon Sushi',
    pageTitle: 'Cookingdom Level 10 - Gabay sa Salmon Sushi',
    pageSubtitle: 'Matutunan kung paano gumawa ng perpektong Salmon Sushi sa Cookingdom Level 10.',
    category: '01-10',
    publishDate: '2025-05-03',
    isSpecial: false,
    imageUrl: '/images/guides_10.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-10' } },
    iframeUrl: 'https://www.youtube.com/embed/sR03duivZNM',
    seo: {
      title: 'Cookingdom Level 10 Gabay: Salmon Sushi | Mga Tips at Estratehiya',
      description:
        'Masterin ang paggawa ng Salmon Sushi sa Cookingdom Level 10. Mga tips para sa perpektong kanin, paghiwa ng salmon, pag-roll ng sushi, at presentasyon.',
      keywords:
        'cookingdom, level 10, salmon sushi, gabay sa sushi, sushi rice, paghiwa ng isda, pag-roll ng sushi, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_10.webp',
      levelInfoHtml:
        '<h3>Salmon Sushi</h3><p><strong>Hirap:</strong> Mahirap</p><p><strong>Tinatayang Oras:</strong> 4.5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-7',
          title: 'Cookingdom Level 7<br>Sunny Eggs',
          imageUrl: '/images/guides_07.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-7' } },
        },
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom Level 8<br>Steak',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-8' } },
        },
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom Level 9<br>Pasta',
          imageUrl: '/images/guides_09.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-9' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang pag-abot sa Level 10 ay nangangahulugang natutunan mo na ang mga pangunahing hakbang at ngayon ay papasok ka sa mas advanced na mga putahe. Ang Level 10 ay nagdadala ng mas pinong hamon sa paggawa ng Salmon Sushi — isang putahe na nagsasama ng sining ng perpektong pagluto ng kanin, paghiwa ng isda, at ang pagsasama nito sa isang magandang sushi roll. Hindi tulad ng iba pang mga level, ang Salmon Sushi ay nangangailangan ng eksaktong pagsunod sa paghahanda at presentasyon.</p>
<p>Sa puntong ito ng Cookingdom, inaasahan ng mga customer ang mabilis at perpektong paghahatid ng kanilang mga order, at kakailanganin mong hawakan ang mga maselan na bahagi ng sushi. Oras na para paghusayin ang iyong mga kasanayan sa paggamit ng kutsilyo at pagluluto ng kanin!</p>

<h2 id="goal">Layunin ng Level 10</h2>
<ul>
    <li><strong>Magluto ng Sushi Rice:</strong> Ang pundasyon ng bawat mahusay na sushi ay ang perpektong lutong kanin. Sa Cookingdom, kailangan mong maghanda ng sushi rice, na kinabibilangan ng paghuhugas, pagluluto, at pag-season nito gamit ang suka, asukal, at asin.</li>
    <li><strong>Hiwain ang Freskong Salmon:</strong> Ang salmon ang pangunahing bahagi ng putahe na ito, at ang kal freshness at kapal nito ay mahalaga para makagawa ng isang authentic na karanasan sa sushi. Kailangan mong maingat na hiwain ang salmon sa tamang kapal at presentasyon.</li>
    <li><strong>Pagbuo ng Sushi:</strong> Kapag handa na ang kanin at salmon, oras na para buuin ang sushi. Sa Cookingdom, kailangan mong i-roll ang kanin at salmon nang magkasama, tinitiyak na ang lahat ay maayos na naka-align at malinis.</li>
    <li><strong>Ihain ang Sushi:</strong> Gaya ng anumang putahe sa Cookingdom, mahalaga ang tamang oras. Ihain agad ang sushi upang maiwasang mawalan ito ng freshness.</li>
</ul>

<h2 id="steps">Mga Hakbang para Gumawa ng Salmon Sushi</h2>
<ol>
    <li>
        <h3>Maghanda ng Sushi Rice:</h3>
        <p>Ang unang hakbang sa paggawa ng Salmon Sushi ay ang paghahanda ng sushi rice. Simulan sa pamamagitan ng paghuhugas ng kanin nang maigi upang matanggal ang sobrang almirol. Makakatulong ito upang hindi maging sobrang malagkit ang kanin.</p>
        <p><strong>Tip:</strong> Hugasan ang kanin ng maraming beses hanggang ang tubig ay malinaw upang makuha ang perpektong texture.</p>
        <p>Pakuluan ang kanin sa rice cooker o kaserola. Kapag naluto na ang kanin, ilipat ito sa isang malaking mangkok at hayaang lumamig. Pagkatapos lumamig ng kaunti ang kanin, i-season ito ng isang halo ng rice vinegar, asukal, at asin upang magkaroon ito ng signature na lasa.</p>
        <p><strong>Tip:</strong> Huwag kalimutang haluin nang mahinahon ang kanin gamit ang isang kahoy na kutsara upang maiwasan ang pagdurog sa mga butil. Hayaang lumamig nang buo bago ito gamitin para sa sushi.</p>
    </li>
    <li>
        <h3>Hiwain ang Freskong Salmon:</h3>
        <p>Habang lumalamig ang kanin, oras na para ihanda ang salmon. Ang Cookingdom ay nangangailangan na hiwain mo ang salmon sa manipis at pantay-pantay na hiwa. Gumamit ng matalim na kutsilyo upang makamit ang malinis at makinis na hiwa. Ang bawat hiwa ay dapat nasa 1/8-inch ang kapal para sa pinakamahusay na texture ng sushi.</p>
        <p><strong>Tip:</strong> Gumamit ng fresh at mataas na kalidad na salmon para sa pinakamahusay na lasa. Sa Cookingdom, magkakaroon ka ng pagkakataon na pumili ng pinakasariwang mga sangkap, kaya tiyaking pumili ng top-quality na salmon.</p>
    </li>
    <li>
        <h3>Pagbuo ng Sushi:</h3>
        <p>Ngayon, oras na para buuin ang sushi. Ilatag ang isang maliit na halaga ng sushi rice sa isang bamboo mat o malinis na ibabaw. Maingat na ikalat ang kanin upang bumuo ng isang manipis at pantay na layer.</p>
        <p><strong>Tip:</strong> Huwag pilitin ang kanin nang masyado; dahan-dahang ikalat ito upang matiyak na ang sushi ay magaan at fluffy.</p>
        <p>Ilagay ang isang hiwa ng freskong salmon sa ibabaw ng kanin, tinitiyak na ito ay nakasentro at pantay-pantay ang pagkakalagay.</p>
        <p><strong>Tip:</strong> Kung may pagpipilian sa Cookingdom ng mga garnishes tulad ng wasabi o pickled ginger, huwag kalimutang idagdag ang mga ito para sa isang authentic na karanasan.</p>
    </li>
    <li>
        <h3>Pag-roll ng Sushi:</h3>
        <p>Gamitin ang bamboo mat upang i-roll ang kanin at salmon nang mahigpit. Tiyaking hindi sobrang higpit ang pag-roll, upang matulungan itong manatiling buo nang hindi napipiga ang kanin.</p>
        <p><strong>Tip:</strong> Dahan-dahan at maingat na i-roll ang sushi upang matiyak na ang kanin at salmon ay manatiling magkasama.</p>
    </li>
    <li>
        <h3>Hiwain at Ihain ang Sushi:</h3>
        <p>Kapag natapos na ang iyong sushi, hiwain ito sa mga kagat-kagat na piraso. Sa Cookingdom, ang hiwa ay dapat malinis at makinis, hindi magaspang. Mahalagang matalim na kutsilyo upang makuha ang perpektong hiwa ng sushi.</p>
        <p><strong>Tip:</strong> Para sa authentic na hitsura, tiyaking pantay ang laki at hugis ng bawat hiwa.</p>
        <p>Agad na Ihain:</p>
        <p>Gaya ng lahat ng putahe sa Cookingdom, mas gusto ng mga customer ang kanilang sushi na fresh. Ihain agad ang sushi pagkatapos itong hiwain upang matiyak na nasa pinakamahusay nitong kalagayan.</p>
    </li>
</ol>

<h2 id="tips">Mga Tips at Trik</h2>
<ul>
    <li>
        <strong>Perpektong Sushi Rice:</strong> Ang sushi rice ay ang pundasyon ng mahusay na sushi, kaya siguraduhing makuha ito ng tama. Sundin ang mga hakbang sa paghuhugas, pagluluto, at pag-season ng kanin. Sa Cookingdom, maaari mong i-tune ang seasoning ng rice, kaya mag-eksperimento hanggang makuha ang tamang timpla ng suka, asukal, at asin.
    </li>
    <li>
        <strong>Gumamit ng Matalim na Kutsilyo sa Paghiwa:</strong> Ang susi sa malinis at pantay-pantay na mga hiwa ng salmon ay isang matalim na kutsilyo. Kung ang kutsilyo ay mapurol, maaaring madurog o magsama-sama ang salmon imbes na makuha ang malinis na hiwa.
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mong i-upgrade ang iyong kutsilyo habang ikaw ay umuusad, kaya isaalang-alang ang pagpapabuti ng iyong mga kagamitan upang matiyak ang perpektong mga hiwa ng sushi.</p>
    </li>
    <li>
        <strong>Huwag I-overfill ang Sushi Roll:</strong> Habang tempting na lagyan ng maraming salmon ang sushi, huwag labis na punuin ito. Ang sobrang marami sa palaman ay maaaring magpahirap sa pag-roll ng sushi nang maayos at pantay. Ang perpektong sushi roll ay may balanseng halaga ng kanin at isda.
        <p><strong>Tip:</strong> Panatilihing sentro ang palaman at maghinay-hinay sa pag-roll upang mapanatili ang hugis ng sushi.</p>
    </li>
    <li>
        <strong>Multitasking:</strong> Habang dumarami ang mga order, maaari kang hingin na maghanda ng iba pang mga putahe kasabay ng iyong sushi. Sa Cookingdom, mahalaga ang multitasking. Habang lumalamig ang kanin, maaari kang magsimulang maghanda ng ibang mga sangkap o mag-assemble ng iba pang mga putahe.
    </li>
    <li>
        <strong>Pag-garnish at Presentasyon:</strong> Pinapalakas ng Cookingdom ang magandang presentasyon. Magdagdag ng mga garnishes tulad ng pickled ginger o wasabi upang itaas ang iyong putahe. Tiyaking maayos ang pagka-plato ng sushi upang mapabuti ang kasiyahan ng customer at makuha ang mas mataas na rating.
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 10 ng Cookingdom, ang paggawa ng
Salmon Sushi ay isang hamon na sumusubok sa iyong pagiging tumpak, pamamahala ng oras, at kasanayan sa multitasking. Mula sa pagluluto ng kanin hanggang sa paghiwa ng isda at paggawa ng sushi, bawat hakbang ay nangangailangan ng pansin sa detalye. Ang susi sa tagumpay ay ang freshness, katumpakan, at mabilis na serbisyo.</p>

<p>Ang pagiging master sa sushi ay maghahanda sa iyo para sa tagumpay sa mga susunod na level, dahil inaasahan ng mga customer ang mas kumplikado at mas maselang mga putahe. Sa pamamagitan ng pagsasanay, matutunan mong gumawa ng perpektong sushi rolls na magpapasaya sa iyong mga customer at magpapalago ng iyong restaurant.</p>`,
  },
  {
    id: 'cookingdom-game-level-11',
    title: 'Cookingdom Level 11:<br>Popcorn',
    pageTitle: 'Cookingdom Level 11 - Gabay sa Popcorn',
    pageSubtitle: 'Matutunan kung paano gumawa ng perpektong popcorn sa Cookingdom Level 11.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: true,
    imageUrl: '/images/guides_11.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
    iframeUrl: 'https://www.youtube.com/embed/5mFzPngHJF8',
    seo: {
      title: 'Cookingdom Level 11 Gabay: Popcorn | Mga Tips at Estratehiya',
      description:
        'Masterin ang paggawa ng popcorn sa Cookingdom Level 11. Mga tips para sa tamang oras ng pagpapapop, pampalasa, at mabilis na serbisyo.',
      keywords:
        'cookingdom, level 11, popcorn, gabay, pagpapapop, pampalasa, time management, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_11.webp',
      levelInfoHtml:
        '<h3>Popcorn</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Oras:</strong> 1.5 minuto</p><p><strong>Gantimpala:</strong> 3 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-8',
          title: 'Cookingdom Level 8<br>Steak',
          imageUrl: '/images/guides_08.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-8' } },
        },
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom Level 9<br>Pasta',
          imageUrl: '/images/guides_09.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-9' } },
        },
        {
          id: 'cookingdom-game-level-10',
          title: 'Cookingdom Level 10<br>Salmon Sushi',
          imageUrl: '/images/guides_10.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-10' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
<p>Sa Cookingdom, ang Level 11 ay nagdadala ng isang magaan ngunit mahalagang hamon: ang paggawa ng perpektong Popcorn. Bagamat mukhang simple, kailangan nito ng tamang timing at atensyon sa detalye, lalo na kapag naghahanda ng maraming batch para sa mga customer. Ang popcorn ay isang paboritong meryenda, at sa Cookingdom, susubok nito ang iyong kakayahan sa pamamahala ng init, pampalasa, at bilis sa ilalim ng presyon.</p>
<p>Habang umuusad ka sa laro, ang Cookingdom ay magpapakilala ng mga putaheng mukhang madali ngunit nangangailangan ng mahusay na multitasking upang makasabay sa lumalaking demand ng customer. Maghanda nang maayos upang mapapop ang mga kernels sa perpekto!</p>

<h2 id="goal">Mga Layunin sa Level 11</h2>
<ul>
    <li><strong>Pop ang mga Kernels ng Mais:</strong> Ang pangunahing gawain sa level na ito ay ang pagpapapop ng mga kernel ng mais sa tamang temperatura at oras. Kailangan mong tiyakin na ang bawat batch ay magpop nang hindi nasusunog.</li>
    <li><strong>Magdagdag ng Pampalasa:</strong> Matapos magpop ang mga kernels, kailangan mong timplahan ang popcorn nang perpekto. Kung butter, keso, o caramel man, ang pagpapalasa ng popcorn ay magpapataas sa kalidad ng putahe.</li>
    <li><strong>Maglingkod ng Mabilis:</strong> Inaasahan ng mga customer sa Cookingdom ang mabilis na serbisyo. Tiyakin na ang freshly popped at may pampalasa na popcorn ay agad na maihain.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paggawa ng Popcorn</h2>
<ol>
    <li>
        <h3>Painitin ang Popcorn Machine:</h3>
        <p>Simulan sa pagpainit ng popcorn machine o kawali. Sa Cookingdom, bibigyan ka ng popper o kalan upang lutuin ang popcorn. Tiyakin na ang makina ay preheated na, dahil ito ay makakatulong na magpop ang mga kernels nang pantay at makakaiwas sa pagkasunog.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mo ring ma-upgrade ang iyong kagamitan upang mapabilis ang proseso ng pagpapapop. Ang pagpapahusay ng popcorn machine ay makakatipid sa oras at makakapagpababa ng mga pagkakamali.</p>
    </li>
    <li>
        <h3>Idagdag ang Kernels ng Mais:</h3>
        <p>Kapag mainit na ang makina, maingat na ilagay ang mga kernel ng mais. Tiyakin na pantay-pantay ang pagkakalagay ng mga kernels upang matiyak ang pantay na pagpapapop. Kung masyadong maraming kernels, maaaring magdulot ng pagsisikip at hindi pantay na pagpapapop, habang kung kaunti naman ay mag-aaksaya ng espasyo at magdudulot ng pagkaantala.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, makikita mo ang visual indicator o timer na nagpapakita kung kailan ang popcorn ay nagpapapop. Pakinggan ang tunog at sundan ang visual cues upang malaman kung kailan itigil ang pagpapapop.</p>
    </li>
    <li>
        <h3>Maghintay sa Pagpapapop:</h3>
        <p>Hayaan ang mga kernels na magpop, at makinig nang mabuti sa tunog ng pagpapapop na bumabagal. Ito ang hudyat na itigil ang proseso. Ang sobrang pagpapapop ay maaaring magsunog ng popcorn, habang ang kulang na pagpapapop ay magiiwan ng ilang kernels na hindi nagpop.</p>
        <p><strong>Tip:</strong> Huwag iwanang hindi binabantayan ang makina! Sa Cookingdom, maaaring kailanganin mong pamahalaan ang iba't ibang gawain, kaya't siguraduhing nakabantay ka sa iyong popcorn.</p>
    </li>
    <li>
        <h3>Papalasa ang Popcorn:</h3>
        <p>Kapag ang popcorn ay handa na, oras na upang lagyan ng pampalasa. Sa Cookingdom, mayroon kang iba't ibang pampalasa tulad ng butter, asin, keso, o caramel. Siguraduhin na tama ang pampalasa para sa bawat order ng customer.</p>
        <p><strong>Tip:</strong> Maaari mong magdagdag ng maraming layers ng pampalasa upang mapabuti ang lasa. Halimbawa, mag-umpisa sa butter, at pagkatapos ay magdagdag ng asin o keso para sa dagdag na lasa.</p>
    </li>
    <li>
        <h3>Maglingkod ng Popcorn:</h3>
        <p>Kapag ang popcorn ay nalagyan na ng pampalasa, oras na upang ihain ito. Siguraduhin na mainit at sariwa pa ang popcorn kapag ibinibigay ito sa customer.</p>
        <p><strong>Tip:</strong> Mas sariwa ang popcorn, mas mataas ang ratings na matatanggap mo. Ang mga customer sa Cookingdom ay masyadong particular sa pagiging fresh ng kanilang pagkain.</p>
    </li>
</ol>

<h2 id="tips">Mga Tips at Trik</h2>
<ul>
    <li>
        <strong>Perpektong Oras ng Pagpapapop:</strong> Ang timing ay mahalaga sa pagpapapop ng popcorn. Ang sobrang init o matagal na paghihintay ay maaaring magsunog ng popcorn, habang ang kulang na init ay mag-iiwan ng hindi nagpapop na kernels. Pakinggan ang tunog ng pagpapapop at tiyaking itigil ang proseso kapag nagsimula nang bumagal ang tunog.</li>
    <li>
        <strong>Pag-customize ng Pampalasa:</strong> Sa Cookingdom, ang susi sa tagumpay ay ang pagpapasadya sa mga kagustuhan ng iyong mga customer. Ang ilang mga customer ay nais ng plain popcorn, habang ang iba naman ay nais ng buttery, cheesy, o caramel-coated na popcorn. Siguraduhing basahin ang bawat order ng maigi at gamitin ang tamang pampalasa upang mapanatili ang kasiyahan ng iyong mga customer.</li>
    <li>
        <strong>Pag-upgrade ng Kagamitan:</strong> Habang umuusad ka sa Cookingdom, isaalang-alang ang pag-upgrade ng iyong popcorn machine. Ang mas mabilis na popper ay magpapahintulot sa iyong maglingkod ng mas maraming customer sa mas maikling oras, pinapalakas ang iyong kahusayan at ratings.</li>
    <li>
        <strong>Bilis at Kahusayan:</strong> Ang Cookingdom ay nangangailangan ng mabilis na serbisyo, at hindi ito naiiba sa Level 11. Subukang maglingkod ng popcorn agad kapag ito ay na-pop at nalagyan ng pampalasa. Mas mabilis kang maglingkod, mas mataas ang tsansa mong makakuha ng magandang rating mula sa mga customer.</li>
    <li>
        <strong>Pamamahala ng Maramihang Order:</strong> Habang dumadami ang mga customer, kailangan mong maghanda ng maraming order ng popcorn nang sabay. I-manage ng maayos ang proseso ng pagpapapop at iwasang iwanang masyadong matagal ang popcorn sa makina. Lagi mong i-serve ang pinakasariwang popcorn upang maiwasan ang reklamo.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 11 ng Cookingdom, ang paggawa ng Popcorn ay tila madali ngunit nangangailangan ng atensyon sa detalye sa timing at pampalasa. Ang perpektong pagpapapop ng mga kernels, tamang dami ng pampalasa, at mabilis na serbisyo ay magtitiyak na ang iyong mga customer ay aalis na masaya. Kung ito man ay isang simpleng order o isang request ng dagdag na butter at keso, susubok ang iyong kahusayan at multitasking skills.</p>
<p>Habang nagpapatuloy ka sa Cookingdom, tataas ang komplikasyon ng pamamahala ng mga order, ngunit ang pagiging eksperto sa popcorn ay magbibigay sa iyo ng pundasyon upang harapin ang mas kumplikadong mga putahe. Magpatuloy sa pag-upgrade ng iyong kagamitan, pamahalaan ang maramihang order, at mag-focus sa paghahatid ng sariwa at masarap na popcorn upang patuloy na magbalik ang iyong mga customer!</p>
`,
  },
  {
    id: 'cookingdom-game-level-12',
    title: 'Cookingdom Level 12:<br>Ramen',
    pageTitle: 'Cookingdom Level 12 - Gabay sa Ramen',
    pageSubtitle:
      'Matutunan kung paano magluto ng masarap at komplikadong Ramen sa Cookingdom Level 12.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: true,
    imageUrl: '/images/guides_12.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-12' } },
    iframeUrl: 'https://www.youtube.com/embed/OhB019qY8Fc', // Placeholder
    seo: {
      title: 'Cookingdom Level 12 Gabay: Ramen | Mga Tip at Estratehiya',
      description:
        'Pag-aralan kung paano magluto ng perpektong Ramen sa Cookingdom Level 12. Mga tip para sa tamang sabaw, noodles, toppings, at mabilis na serbisyo.',
      keywords:
        'cookingdom, level 12, ramen, gabay, sabaw, noodles, toppings, pamamahala ng oras, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_12.webp', // Placeholder
      levelInfoHtml:
        '<h3>Ramen</h3><p><strong>Kahirapan:</strong> Mahirap</p><p><strong>Inaasahang Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimasyon
      featuredGuides: [
        {
          id: 'cookingdom-game-level-9',
          title: 'Cookingdom Level 9<br>Pasta',
          imageUrl: '/images/guides_09.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-9' } },
        },
        {
          id: 'cookingdom-game-level-10',
          title: 'Cookingdom Level 10<br>Salmon Sushi',
          imageUrl: '/images/guides_10.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-10' } },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Level 11<br>Popcorn',
          imageUrl: '/images/guides_11.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang Level 12 ay nagdadala ng isang masarap at komplikadong ulam: Ramen. Ang paboritong pagkaing Hapones na ito ay nangangailangan ng maraming sangkap na ihanda nang sabay-sabay: ang sabaw, noodles, at mga toppings. Sa Cookingdom, ang layunin mo ay lumikha ng perpektong mangkok ng ramen na magpapabalik-balikan sa iyong mga customer. Kailangan mong balansehin ang oras, mag-multitask, at magbigay pansin sa mga detalye upang matiyak na ang bawat mangkok ng ramen ay masarap, mainit, at perpektong pinapalamutian.</p>
<p>Ang Ramen sa Cookingdom ay isang pagkakataon upang ipakita ang iyong kasanayan sa pagluluto at presentasyon, dahil ang mga customer ay may partikular na mga kagustuhan para sa kanilang mangkok ng ramen. Halina't alamin natin ang mga hakbang upang ihanda ang komplikadong pagkaing ito!</p>

<h2 id="goal">Mga Layunin ng Level 12</h2>
<ul>
    <li><strong>Ihanda ang Sabaw ng Ramen:</strong> Ang sabaw ay ang pundasyon ng bawat mahusay na ramen, at sa Cookingdom, mahalaga na makuha ito nang tama para sa kasiyahan ng customer. Kailangan mong tiyakin na ang sabaw ay malasa at tamang-tama ang lasa.</li>
    <li><strong>Lutuin ang Noodles ng Ramen:</strong> Mabilis maluto ang ramen noodles ngunit kailangan itong tamang-tama ang oras. Kung lutuin ng matagal, magiging malambot na ito; kung kulang naman sa oras, magiging matigas.</li>
    <li><strong>Magdagdag ng Toppings:</strong> Ang mga huling patong ng ramen ay kasing halaga ng noodles at sabaw. Kailangan mong maghanda ng mga toppings tulad ng itlog, gulay, at karne, at ilagay ang mga ito nang maayos upang magkaroon ng kaakit-akit na presentasyon.</li>
    <li><strong>I-serve ng Mabilis:</strong> Mahalagang mabilis mag-serve sa Cookingdom, at ang ramen ay pinakamahusay na ihain nang mainit at sariwa. Kung mabilis mong maihahain ang ramen, mas magiging masaya ang iyong mga customer.</li>
</ul>

<h2 id="steps">Mga Hakbang sa Paghahanda ng Ramen</h2>
<ol>
    <li>
        <h3>Ihanda ang Sabaw ng Ramen:</h3>
        <p>Ang unang hakbang sa paggawa ng Ramen ay ang paghahanda ng sabaw. Gabay ang Cookingdom sa proseso ng pagdagdag ng mga sangkap sa isang palayok upang lumikha ng perpektong sabaw. Karaniwan, ang masarap at malasa na sabaw ay gawa mula sa kombinasyon ng tubig, soy sauce, miso, at/o sabaw ng manok.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mong ayusin ang lasa sa pamamagitan ng pagdagdag ng mga sangkap tulad ng bawang, luya, o sibuyas. Siguraduhing pakuluan ang sabaw sa tamang oras upang maging malasa at masarap.</p>
        <p><strong>Tip:</strong> Bantayan ang temperatura. Kung masyadong mainit o malamig ang sabaw, maaaring mawalan ito ng tamang consistency. Haluin paminsan-minsan upang maiwasan ang pagkasunog o labis na pag-kulo.</p>
    </li>
    <li>
        <h3>Lutuin ang Noodles ng Ramen:</h3>
        <p>Habang pinapalambot ang sabaw, simulan na ang pagluto ng ramen noodles. Sa Cookingdom, mabilis maluto ang noodles, karaniwan sa ilang minuto lamang. Ilagay ang noodles sa kumukulong tubig at tiyaking hindi magsama-sama ang mga ito.</p>
        <p><strong>Tip:</strong> Haluing paminsan-minsan ang noodles upang maiwasang magdikit. Malalaman mong luto na ang noodles kapag malambot na ito ngunit matigas pa rin sa kagat.</p>
        <p><strong>Tip:</strong> Mahalaga ang oras dito! Kung kulang sa luto ang noodles, magiging malutong ito, at kung labis naman sa luto, magiging malata. Bantayan ang timer upang matiyak na tamang-tama ang luto ng noodles.</p>
    </li>
    <li>
        <h3>Ihanda ang mga Toppings:</h3>
        <p>Habang pinapalambot ang sabaw at niluluto ang noodles, oras na upang ihanda ang mga toppings para sa ramen. Sa Cookingdom, may iba't ibang toppings na pwedeng gamitin, tulad ng pinakuluang itlog, hiniwang baboy, seaweed, mais, at gulay.</p>
        <p><strong>Tip:</strong> Ang soft-boiled eggs ay isang sikat na topping ng ramen. Upang ihanda ito, lutuin ang itlog ng 6-7 minuto upang magkaroon ng bahagyang malapot na pula, at pagkatapos ay balatan nang maingat.</p>
        <p><strong>Tip:</strong> Maaari ka ring magdagdag ng gulay tulad ng spinach, bok choy, o kabute. I-sauté ng bahagya o ihain nang sariwa, depende sa iyong recipe sa Cookingdom.</p>
    </li>
    <li>
        <h3>Pagsamahin ang Ramen:</h3>
        <p>Kapag handa na ang sabaw, noodles, at mga toppings, oras na upang pagsamahin ang ramen. Magsimula sa pagbuhos ng sabaw sa isang mangkok, pagkatapos ay ilagay ang nilutong noodles. Maingat na ayusin ang mga toppings sa ibabaw upang matiyak na maganda at balansyado ang presentasyon ng ulam.</p>
        <p><strong>Tip:</strong> Mahalagang maayos ang presentasyon sa Cookingdom. Ayusin nang maayos ang mga toppings at isaalang-alang ang mga kulay at tekstura upang maging kaakit-akit ang ramen. Ang magandang presentasyon ay magbibigay ng mas mataas na rating mula sa customer.</p>
    </li>
    <li>
        <h3>I-serve ang Ramen:</h3>
        <p>Kapag perpekto na ang iyong ramen, oras na upang ihain! Siguraduhing mainit pa ito kapag inihahain, dahil ang mga customer sa Cookingdom ay inaasahan ang kanilang pagkain na sariwa at mainit.</p>
        <p><strong>Tip:</strong> Huwag hayaang matagal ang ramen bago ihain. Habang tumatagal ito, lumalamig ito, at ang malamig na ramen ay maaaring magdisappoint sa mga customer.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trik</h2>
<ul>
    <li>
        <strong>Perpektong Sabaw:</strong> Ang sabaw ay kaluluwa ng ramen, kaya't siguraduhing tama ang lasa. Mag-experiment sa iba't ibang sangkap upang ayusin ang lasa ayon sa iyong gusto. Sa Cookingdom, maaari mong i-tweak ang sabaw upang tumugma sa mga kagustuhan ng customer (e.g., mas maalat, mas maanghang).
        <p><strong>Tip:</strong> Magdagdag ng kaunting soy sauce o miso para sa mas malalim na lasa. Isaalang-alang din ang pagpapakulo ng sabaw ng mas matagal upang maging mas malasa.</p>
    </li>
    <li>
        <strong>Oras ng Pagluluto ng Noodles:</strong> Sinusubok ka ng Cookingdom sa pagluto ng ramen noodles ng tamang-tama. Bantayan ang timer at haluin ang noodles upang maiwasang magdikit. Kung mag-o-overcook ang noodles, mawawala ang texture nito at hindi magiging masaya ang iyong mga customer.
    </li>
    <li>
        <strong>Varayti ng Toppings:</strong> Maaaring humiling ng iba't ibang toppings ang mga customer sa Cookingdom, kaya't maging handa na i-customize ang kanilang ramen ayon sa kanilang kagustuhan. Kung itlog, hiniwang baboy, o sariwang gulay man, palaging tingnan ang order upang maiwasan ang pagkakamali.
        <p><strong>Tip:</strong> Ang mga makukulay na sangkap ay maaaring magdagdag sa presentasyon at lasa ng ramen. Ang mga sibuyas na berdeng gulay, sesame seeds, o chili flakes ay magagandang dagdag.</p>
    </li>
    <li>
        <strong>Mag-upgrade ng Iyong Kagamitan sa Kusina:</strong> Habangumuusad ka sa Cookingdom, maaari mong i-unlock ang mga upgrade para sa iyong kusina. Isaalang-alang ang pag-upgrade ng iyong palayok para sa mas mabilis na paghahanda ng sabaw o isang mas malaking kalan upang mas mabilis magluto ng noodles. Makakatulong ito upang makatipid ka ng oras at mabilis na matugunan ang mga pangangailangan ng customer.
</li>
<li>
<strong>Multitasking:</strong> Sa Cookingdom, malamang na may ilang orders na kailangan mong pamahalaan nang sabay-sabay. Simulan ang sabaw nang maaga at magluto ng noodles habang inihahanda ang toppings upang makatipid ng oras. Mahalaga ang pamamahala ng maraming elemento ng sabay-sabay upang magtagumpay.
</li>

</ul> <h2 id="summary">Buod</h2> <p>Sa Level 12 ng Cookingdom, ang paggawa ng Ramen ay isang mahusay na balanse ng pagluluto ng sabaw, paghahanda ng noodles, at pagdagdag ng tamang toppings. Isa itong multi-step na ulam na nangangailangan ng oras, precision, at bilis. Ang susi sa tagumpay ay ang tiyakin na lahat ay niluto nang perpekto at inihain ng mainit. Sa pagsasanay, matututuhan mong harapin ang masarap na pagkaing ito at panatilihin ang kasiyahan ng iyong mga customer sa tamang kombinasyon ng sangkap.</p> <p>Habang patuloy kang umuusad sa Cookingdom, magiging mas mahirap ang mga hamon, ngunit ang pagpapahusay sa ramen ay maghuhubog sa iyo upang maging isang mahusay na chef sa laro. Panatilihin ang kasiyahan ng iyong mga customer sa tamang sabaw, malambot na noodles, at sariwang toppings, at patuloy kang aangat sa ranggo ng Cookingdom!</p> `,
  },
  {
    id: 'cookingdom-game-level-13',
    title: 'Cookingdom Level 13:<br>Hotdog',
    pageTitle: 'Cookingdom Level 13 - Gabay sa Hotdog',
    pageSubtitle: 'Alamin kung paano gumawa ng perpektong Hotdog sa Cookingdom Level 13.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: true,
    imageUrl: '/images/guides_13.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-13' } },
    iframeUrl: 'https://www.youtube.com/embed/-at0GKqanSg', // Placeholder
    seo: {
      title: 'Cookingdom Level 13 Gabay: Hotdog | Mga Tip at Estratehiya',
      description:
        'Masterin ang Hotdog sa Cookingdom Level 13. Mga tip para magluto ng sausage, mag-grill ng buns, magdagdag ng mga condiments, at mabilis na serbisyo.',
      keywords:
        'cookingdom, level 13, hotdog, gabay, sausage, bun, condiments, fast food, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_13.webp', // Placeholder
      levelInfoHtml:
        '<h3>Hotdog</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>', // Estimasyon
      featuredGuides: [
        {
          id: 'cookingdom-game-level-10',
          title: 'Cookingdom Level 10<br>Salmon Sushi',
          imageUrl: '/images/guides_10.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-10' } },
        },
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Level 11<br>Popcorn',
          imageUrl: '/images/guides_11.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
        },
        {
          id: 'cookingdom-game-level-12',
          title: 'Cookingdom Level 12<br>Ramen',
          imageUrl: '/images/guides_12.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-12' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
<p>Sa Cookingdom, ang Level 13 ay nagpapakita ng isang minamahal na fast food classic: ang Hotdog. Bagamat mukhang simple, ang paggawa ng perpektong hotdog ay nangangailangan ng atensyon sa detalye, lalo na sa pamamahala ng mga order ng customer at sa tamang timing. Sa level na ito, kailangan mong mag-focus sa pagluluto ng perpektong sausage, pag-grill ng buns, at pagdagdag ng tamang mga condiments para mapasaya ang iyong mga customer.</p>
<p>Ang hamon sa Cookingdom ay ang pagsabay sa tumataas na demand ng mga customer habang tinitiyak na bawat hotdog ay maihahain nang mabilis at perpekto. Handa ka na bang harapin ang masarap na hamon na ito? Halina't pag-usapan natin kung paano gumawa ng perpektong hotdog!</p>

<h2 id="goal">Mga Layunin ng Level 13</h2>
<ul>
    <li><strong>Magluto ng Sausages:</strong> Ang sausage ang pangunahing sangkap ng hotdog. Kailangan mong i-grill ito sa tamang antas ng crispiness nang hindi ito overcooking.</li>
    <li><strong>Mag-grill ng Buns:</strong> Kailangang lightly toasted ang buns upang magdagdag ng tamis at crunch sa hotdog.</li>
    <li><strong>Magdagdag ng Condiments at Toppings:</strong> I-customize ang bawat hotdog gamit ang mga popular na condiments tulad ng ketchup, mustard, relish, sibuyas, at iba pang toppings. Siguraduhing ang bawat order ay tumutugma sa gusto ng customer.</li>
    <li><strong>Maghain ng Mabilis:</strong> Tulad ng lahat ng putahe sa Cookingdom, ang mabilis na paghahain ng hotdog ay susi. Ang mas mabilis mong paghahain, mas masaya ang mga customer.</li>
</ul>

<h2 id="steps">Mga Hakbang para Gawin ang Hotdog</h2>
<ol>
    <li>
        <h3>Magluto ng Sausages:</h3>
        <p>Simulan sa pagluluto ng sausages. Sa Cookingdom, bibigyan ka ng grill o stovetop upang painitin ang sausages. Siguraduhing bantayan ang oras ng pagluluto — kung sobrang tagal, magiging sunog ito, kung kulang naman, hilaw pa.</p>
        <p><strong>Tip:</strong> Pansinin ang mga visual cues tulad ng browning o pagsisizzle upang malaman kung kailan handa na ang sausages. Patuloy itong paikutin upang matiyak na luto ito sa lahat ng bahagi.</p>
    </li>
    <li>
        <h3>Mag-grill ng Buns:</h3>
        <p>Habang niluluto ang sausages, maaari mong i-toast ang buns. Ilagay ang mga buns sa grill o griddle, at tiyaking magiging lightly browned at medyo crispy ito. Sa Cookingdom, ang buns ay dapat malambot sa loob ngunit may konting crunch sa labas.</p>
        <p><strong>Tip:</strong> Huwag gawing sobrang toasted ang buns! Gusto mong maging warm at crisp ang buns, ngunit hindi sunog. Bantayan ang mga ito upang hindi maging madilim ang kulay.</p>
    </li>
    <li>
        <h3>Maghanda ng Condiments at Toppings:</h3>
        <p>Sa Cookingdom, maaari mong idagdag ang iba't ibang condiments sa iyong hotdog. Kabilang sa mga karaniwang opsyon ay:</p>
        <ul>
            <li>Ketchup</li>
            <li>Mustard</li>
            <li>Relish</li>
            <li>Sibuyas</li>
            <li>Sauerkraut</li>
            <li>Keso</li>
            <li>Pickles</li>
            <li>Jalapeños</li>
        </ul>
        <p>Siguraduhing basahin nang mabuti ang bawat order ng customer upang matiyak na mailalagay ang tamang condiments at toppings. May mga customer na nais ng simpleng hotdog, at may iba namang nais ng maraming toppings.</p>
        <p><strong>Tip:</strong> Maaari mong dagdagan ng maraming toppings para sa isang mas masarap at masalimuot na hotdog. Siguraduhing pantay-pantay ang pagkakalagay ng toppings upang maging balansyado ang lasa.</p>
    </li>
    <li>
        <h3>Pag-isahin ang Hotdog:</h3>
        <p>Kapag ang sausage ay luto na at ang buns ay toasted na, oras na upang pagsamahin ang hotdog. Ilagay ang sausage sa bun at idagdag ang mga hinihinging condiments at toppings. Pinapayagan ka ng Cookingdom na i-customize ang bawat order, kaya't magbigay pansin sa mga detalye!</p>
        <p><strong>Tip:</strong> Huwag gawing sobrang taas ang hotdog. Kailangan lang ng kaunting condiments, at ang sobrang toppings ay maaaring magpawala ng lasa ng sausage.</p>
    </li>
    <li>
        <h3>Maghain ng Hotdog:</h3>
        <p>Pagkatapos pagsamahin ang hotdog, oras na upang ihain ito. Siguraduhing mainit at sariwa pa. Inaasahan ng mga customer sa Cookingdom na ang kanilang pagkain ay mainit at masarap, kaya't huwag hayaang matagal ito sa ilalim ng heat lamp.</p>
        <p><strong>Tip:</strong> Ang mas sariwa at mabilis na paghahain ng hotdog, mas mataas ang iyong rating.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trick</h2>
<ul>
    <li><strong>Bantayan ang Oras ng Pagluluto:</strong> Mahalagang tiyakin na hindi overcooked o undercooked ang sausages at buns. Bantayan ang oras ng pagluluto upang makuha ang tamang balanse.</li>
    <li><strong>Customization ay Mahalaga:</strong> Maraming mga customer ang may espesyal na hiling para sa kanilang hotdog. Siguraduhing basahin ang bawat order ng customer upang maging tugma sa kanilang hiling.</li>
    <li><strong>Gumamit ng Matalim na Kutsilyo sa Toppings:</strong> Kapag naglalagay ng mga toppings tulad ng sibuyas o pickles, tiyaking manipis ang pagkakatabas. Sa Cookingdom, mahalaga ang presentasyon, at ang maganda at malinis na pagkakatabas ng toppings ay nakakadagdag sa appeal ng hotdog.</li>
    <li><strong>Upgrade ang Iyong Kagamitan:</strong> Habang umaabante sa Cookingdom, mag-upgrade ng grill o stove upang mapabilis ang pagluluto. Makakatulong ito upang mas madali mong matugunan ang tumataas na demand ng mga customer.</li>
    <li><strong>Maghain ng Mabilis:</strong> Ang mabilis na paghahain ng hotdog ay makakatulong upang madagdagan ang kasiyahan ng customer. Huwag hayaang maging matagal ang paghahain ng pagkain.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 13 ng Cookingdom, ang paggawa ng perpektong Hotdog ay nakabase sa tamang timing at customization. Ang pagluluto ng sausages at buns nang tama, pagdagdag ng tamang condiments, at mabilis na paghahain ay susi sa tagumpay. Tulad ng lahat ng levels sa Cookingdom, mahalaga ang multitasking. Panatilihing sabay na nagtatrabaho ang grill at bun toaster habang inihahanda ang toppings upang mapabilis ang proseso.</p>
<p>Sa pag-master ng fast food classic na ito, magpapatuloy ka sa pag-unlad sa Cookingdom. Kung ikaw man ay nagse-serve ng simpleng hotdog o may mga toppings, ang atensyon sa detalye at bilis ay magiging susi upang makuha ang mataas na rating mula sa mga customer.</p>
`,
  },
  {
    id: 'cookingdom-game-level-14',
    title: 'Cookingdom Level 14:<br>Salmon na may Minestrone',
    pageTitle: 'Cookingdom Level 14 - Gabay sa Salmon na may Minestrone',
    pageSubtitle:
      'Alamin kung paano gumawa ng sopistikadong Salmon na may Minestrone sa Cookingdom Level 14.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_14.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-14' } },
    iframeUrl: 'https://www.youtube.com/embed/osxEv217AuU', // Placeholder
    seo: {
      title: 'Cookingdom Level 14 Gabay: Salmon na may Minestrone | Mga Tip at Estratehiya',
      description:
        'Masterin ang Salmon na may Minestrone sa Cookingdom Level 14. Mga tip sa pagluluto ng salmon, paghahanda ng minestrone soup, at balanse ng mga komplikadong putahe.',
      keywords:
        'cookingdom, level 14, salmon, minestrone, soup, gabay, pagluluto ng isda, italian soup, estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_14.webp', // Placeholder
      levelInfoHtml:
        '<h3>Salmon na may Minestrone</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 4 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimasyon
      featuredGuides: [
        {
          id: 'cookingdom-game-level-11',
          title: 'Cookingdom Level 11<br>Popcorn',
          imageUrl: '/images/guides_11.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-11' } },
        },
        {
          id: 'cookingdom-game-level-12',
          title: 'Cookingdom Level 12<br>Ramen',
          imageUrl: '/images/guides_12.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-12' } },
        },
        {
          id: 'cookingdom-game-level-13',
          title: 'Cookingdom Level 13<br>Hotdog',
          imageUrl: '/images/guides_13.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-13' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
<p>Sa Cookingdom, ang Level 14 ay magdadala sa iyo ng isang mas sopistikadong ulam na nagtatampok ng Salmon na may Minestrone. Ang masalimuot na putaheng ito ay nagsasama ng perpektong lutong isda at isang masarap at malasa na Italian soup. Kakailanganin mong magluto ng salmon at paghanda ng minestrone, pati na rin ang tamang timing upang maiwasan ang overcooking. Alamin ang mga hakbang at estratehiya upang makapaghain ng perpektong salmon na may minestrone!</p>
<p>Ang hamon sa Cookingdom Level 14 ay ang magbalanse ng mga proseso ng pagluluto ng dalawang bahagi ng putahe—ang salmon at minestrone. Kailangang iwasan ang overcooking ng salmon at tiyakin na ang minestrone ay makakakuha ng tamang lasa at init. Kasama sa mga challenge ang tamang timing at pamamahala ng bawat bahagi ng pagkain.</p>

<h2 id="goal">Mga Layunin ng Level 14</h2>
<ul>
    <li><strong>Magluto ng Salmon:</strong> Ang pangunahing sangkap ng putaheng ito ay ang salmon, na kailangang maihanda ng tama upang makuha ang perpektong lutong. Kailangang bantayan ang oras ng pagluluto upang maging juicy at malasa ito.</li>
    <li><strong>Maghanda ng Minestrone Soup:</strong> Ang minestrone ay isang masarap at malasa na Italian vegetable soup na kailangang lutuin ng tama. Kakailanganin mong magdagdag ng mga gulay, pasta, at sabaw na nagbibigay ng kumplikadong lasa.</li>
    <li><strong>Maghatid ng Balansyadong Pagkain:</strong> Ang tamang paghatid ng salmon at minestrone ng sabay ay susi upang makuha ang mataas na rating mula sa mga customer. Tiyakin na pareho silang mainit at perpekto sa bawat order.</li>
</ul>

<h2 id="steps">Mga Hakbang para Gawin ang Salmon na may Minestrone</h2>
<ol>
    <li>
        <h3>Magluto ng Salmon:</h3>
        <p>Ang salmon ay kailangang i-grill o i-pan fry ng tama upang makuha ang tamang lutong at juiciness. Tiyakin na hindi ito overcooked, dahil ang salmon ay madaling matuyo. Pansinin ang mga visual cues upang malaman kung ito ay handa na.</p>
        <p><strong>Tip:</strong> Gumamit ng mantika o butter upang makuha ang magandang pagkakaprito ng salmon. Tiyakin na hindi ito nasusunog sa ibabaw at luto ang loob.</p>
    </li>
    <li>
        <h3>Maghanda ng Minestrone Soup:</h3>
        <p>Habang niluluto ang salmon, maghanda ng minestrone. Kailangan mong ilagay ang mga gulay, pasta, at sabaw sa tamang ratio. Pakuluan ito at tiyakin na ang mga gulay ay malutong at ang pasta ay al dente. Ang minestrone ay dapat may masarap at matamis na lasa mula sa mga sariwang sangkap.</p>
        <p><strong>Tip:</strong> Huwag hayaan na matuyo ang sabaw ng minestrone. Magdagdag ng higit pang sabaw kung kinakailangan upang mapanatili ang pagkakabalanse ng lasa.</p>
    </li>
    <li>
        <h3>Pag-isahin ang Salmon at Minestrone:</h3>
        <p>Kapag ang salmon ay luto na at ang minestrone ay handa na, ilagay ang mga ito sa serving plate. Ang salmon ay dapat na nakapatong sa tabi ng minestrone upang magbigay ng magandang visual presentation. Ang parehong ulam ay dapat mainit at malasa upang masiyahan ang mga customer.</p>
        <p><strong>Tip:</strong> Siguraduhing may tamang porsyon ng salmon at minestrone sa bawat serving upang matugunan ang kagustuhan ng bawat customer.</p>
    </li>
    <li>
        <h3>Maghain ng Salmon na may Minestrone:</h3>
        <p>Pagkatapos pagsamahin ang salmon at minestrone, oras na upang ihain ito. Siguraduhing mainit ang pagkain kapag inihahain ito sa mga customer, at tiyakin na ang presentation ay maayos.</p>
        <p><strong>Tip:</strong> Ang mga customer ay gusto ng mainit at sariwang pagkain, kaya't hindi ito dapat matagal sa ilalim ng heat lamp. Maghain agad upang masiyahan sila.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trick</h2>
<ul>
    <li><strong>Bantayan ang Oras ng Pagluluto ng Salmon:</strong> Ang tamang timing ay kritikal sa pagluluto ng salmon. Huwag itong lutuin ng sobra upang maiwasan ang pagkatuyo.</li>
    <li><strong>Magdagdag ng Tamang Mga Sangkap sa Minestrone:</strong> Siguraduhin na ang sabaw ng minestrone ay may sapat na lasa mula sa mga gulay at spices. Ang mga gulay ay dapat malutong at hindi overcooked.</li>
    <li><strong>Pag-ayos ng Presentation:</strong> Ang tamang presentation ay mahalaga. Ayusin ang salmon at minestrone sa plate upang maging kaakit-akit at masarap tingnan.</li>
    <li><strong>Huwag Magmadali:</strong> Bagamat ang parehong pagkain ay kailangang ihain nang mabilis, hindi mo dapat madaliin ang pagluluto ng salmon o minestrone. Ang tamang timing ay susi sa perfectong ulam.</li>
    <li><strong>Upang Magtagumpay sa Lahat ng Antas:</strong> Sa bawat level, tandaan na ang multitasking at tamang pamamahala ng oras ay makakatulong upang magtagumpay sa Cookingdom.</li>
</ul>

<h2 id="summary">Buod</h2>
<p>Ang Level 14 ng Cookingdom ay isang pagsubok sa iyong kakayahan sa pagluluto ng masalimuot na putahe. Ang Salmon na may Minestrone ay nangangailangan ng tamang pagsasanib ng dalawang bahagi ng pagkain upang magtagumpay. Ang pagtutok sa tamang timing, pag-iwas sa overcooking ng salmon, at paghawak ng tamang flavor balance sa minestrone ay magbibigay sa iyo ng tagumpay. Tiyakin na ang bawat order ay mainit, malasa, at presentable upang mapanatili ang mataas na satisfaction ng iyong mga customer.</p>
<p>Sa pamamagitan ng mastering ng recipe na ito, patuloy kang umuusad sa mundo ng Cookingdom, at magbabalik ang iyong mga customer para sa higit pang mga masarap na pagkain.</p>
`,
  },
  {
    // Magdagdag ng entry para sa Level 15
    id: 'cookingdom-game-level-15',
    title: 'Cookingdom Level 15:<br>Fried na Manok',
    pageTitle: 'Cookingdom Level 15 - Gabay sa Fried na Manok',
    pageSubtitle:
      'Matutunan kung paano magluto ng malutong at malasa na Fried na Manok sa Level 15 ng Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_15.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-15' } },
    iframeUrl: 'https://www.youtube.com/embed/clZlGkI5iOI', // Placeholder
    seo: {
      title: 'Cookingdom Level 15 Gabay: Fried na Manok | Mga Tip at Estratehiya',
      description:
        'Masterin ang Fried na Manok sa Cookingdom Level 15. Makakuha ng mga tip kung paano magluto ng malutong na manok, pamahalaan ang mga side dishes (puré na patatas, coleslaw, fries), at maghain ng mabilis.',
      keywords:
        'Cookingdom, Level 15, Fried na Manok, Fried Chicken, Gabay, Malutong na Manok, Sides, Puré na Patatas, Coleslaw, Fries, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_15.webp', // Placeholder
      levelInfoHtml:
        '<h3>Fried na Manok</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 3.5 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Tinatayang
      featuredGuides: [
        {
          id: 'cookingdom-game-level-12',
          title: 'Cookingdom Level 12<br>Ramen',
          imageUrl: '/images/guides_12.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-12' } },
        },
        {
          id: 'cookingdom-game-level-13',
          title: 'Cookingdom Level 13<br>Hot Dog',
          imageUrl: '/images/guides_13.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-13' } },
        },
        {
          id: 'cookingdom-game-level-14',
          title: 'Cookingdom Level 14<br>Salmon with Minestrone',
          imageUrl: '/images/guides_14.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-14' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ipinakikilala ng Level 15 ang isang klasikong comfort food: Fried na Manok. Ang level na ito ay hamon sa iyo upang magluto ng malutong, golden-brown na fried chicken, kasabay ng mga tamang side dishes upang makagawa ng masarap na pagkain. Maaaring mukhang madali, ngunit may mga hamon na kinikilala ang laro upang tiyakin na laging alerto ka. Ang tamang oras, temperatura, at pampalasa ay may malaking papel sa paggawa ng manok na malutong at juicy habang pinapanatili ang kasiyahan ng mga customer.</p>
<p>Ang pagluluto ng perfect na Fried na Manok sa Cookingdom ay nangangailangan ng focus at bilis. Tara, alamin natin ang mga hakbang upang magtagumpay sa paghahanda ng putaheng ito!</p>

<h2 id="goal">Mga Layunin ng Level 15</h2>
<ul>
    <li>
        <strong>Maghanda ng Manok:</strong> Ang manok ay kailangang balutan ng pampalasa at iprito hanggang maging golden perfection. Ang pamamahala ng temperatura ng mantika ay mahalaga upang maiwasan ang hindi pagkakaluto o pagkasunog ng manok.
    </li>
    <li>
        <strong>Magluto ng mga Side Dishes:</strong> Karaniwang inihahain ang Fried na Manok na may kasamang side dishes tulad ng puré na patatas, coleslaw, o fries. Kailangan mong balansehin ang paghahanda ng mga side dish habang piniprito ang manok.
    </li>
    <li>
        <strong>Maghain ng Mabilis:</strong> Tulad ng lahat ng level sa Cookingdom, mahalaga ang mabilis na paghahain upang matiyak ang kasiyahan ng customer. Ang mga sariwa at mainit na pagkain ay magbibigay ng mas mataas na rating.
    </li>
</ul>

<h2 id="steps">Mga Hakbang sa Pagluto ng Fried na Manok</h2>
<ol>
    <li>
        <h3>Maghanda ng Manok:</h3>
        <p>Simulan sa pag-season ng mga piraso ng manok. Sa Cookingdom, ibabad ang manok sa isang pampalasa na batter bago ilagay ito sa mainit na frying pan o deep fryer.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay ang pagkakapahid ng batter sa manok upang makuha ang malutong at golden exterior. I-season ang batter upang mapaganda ang lasa, at tiyaking tama ang temperatura ng mantika. Kung masyadong mainit ang mantika, masusunog ang batter habang hilaw pa ang loob ng manok.</p>
        <p><strong>Tip:</strong> I-turn ang mga piraso ng manok paminsan-minsan habang piniprito upang matiyak na pantay ang pagkakaluto at makuha ang perfect na malutong na texture.</p>
    </li>
    <li>
        <h3>Magluto ng mga Side Dishes:</h3>
        <p>Habang piniprito ang manok, kailangan mong maghanda ng mga side dishes. Ang mga karaniwang side dishes para sa Fried na Manok ay:</p>
        <ul>
            <li><strong>Puré na Patatas:</strong> Sa Cookingdom, kailangan mong pakuluan at durugin ang mga patatas, at magdagdag ng mantikilya, gatas, at pampalasa.</li>
            <li><strong>Coleslaw:</strong> Maaari mong mabilis na ihanda ang coleslaw sa pamamagitan ng pag-chop ng mga gulay at paghalo sa isang creamy dressing.</li>
            <li><strong>Fries:</strong> Kung fries ang nasa menu, tiyaking iprito ito hanggang maging malutong at golden brown.</li>
        </ul>
        <p><strong>Tip:</strong> Maaari mong ihanda ang mga side dishes habang piniprito ang manok. Kung multitasking ka, siguraduhing walang side dishes na labis na luto o hilaw.</p>
    </li>
    <li>
        <h3>I-assemble ang Pagkain:</h3>
        <p>Kapag ang manok ay perfecto na at ang mga side dishes ay handa na, oras na upang i-plate ang pagkain. Ayusin ang fried na manok sa plato at ilagay ang mga side dishes, siguraduhing maayos ang presentation. Maaari kang magdagdag ng garnishes tulad ng parsley o isang drizzle ng gravy para sa dagdag na lasa.</p>
        <p><strong>Tip:</strong> Panatilihing balanse ang mga side dishes at fried na manok upang magmukhang kaakit-akit ang pagkain. Ang maayos na pagkaka-plate ay magbibigay ng magandang impresyon sa mga customer.</p>
    </li>
    <li>
        <h3>Maghain ng Fried na Manok:</h3>
        <p>Pagkatapos i-plate, ihain agad ang pagkain habang mainit pa. Inaasahan ng mga customer sa Cookingdom ang sariwang nilutong pagkain, at mas mataas na rating ang makukuha mo kung mabilis kang maghain.</p>
        <p><strong>Tip:</strong> Huwag hayaang tumagal bago maghain. Ang fried na manok ay pinakamahusay kapag mainit pa, dahil maaari itong mawalan ng lutong kapag lumamig.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Trik</h2>
<ul>
    <li>
        <h3>Perpektong Fried na Manok:</h3>
        <p>Ang susi sa perpektong fried na manok ay ang tamang temperatura ng mantika. Kung masyadong mainit ang mantika, masusunog ang batter bago maluto ang manok. Kung malamig naman, masyadong iinumin ng manok ang mantika at magiging malansa.</p>
        <p><strong>Tip:</strong> Panatilihing steady ang temperatura ng mantika. Maaari mong subukan ang mantika sa pamamagitan ng pagpapalit ng maliit na piraso ng batter; dapat mag-bubble agad ito nang hindi nasusunog.</p>
    </li>
    <li>
        <h3>Pamahalaan ang mga Side Dishes:</h3>
        <p>Hamunin ka ng Cookingdom na mag-multitask, kaya't mahalaga ang pamamahala sa pagluluto ng mga side dishes. Siguraduhing bantayan ang timer upang walang masyadong luto.</p>
        <p><strong>Tip:</strong> Simulan ang paghahanda ng mga side dishes kapag ang manok ay nasa fryer na. Mabilis na maluluto ang puré na patatas at fries, habang ang coleslaw ay maaaring ihanda nang maaga.</p>
    </li>
    <li>
        <h3>Pampalasa:</h3>
        <p>Ang pampalasa ay mahalaga sa Cookingdom. Dapat may tamang balanse ng asin, paminta, at pampalasa ang batter ng manok. Huwag kalimutang i-season ang mga side dishes din para sa balanced na lasa.</p>
        <p><strong>Tip:</strong> Maaari mong baguhin ang pampalasa batay sa kagustuhan ng customer, tulad ng pagdagdag ng extra spice sa batter para sa mga mahilig sa maanghang.</p>
    </li>
    <li>
        <h3>Upgrade ang Iyong Kagamitan:</h3>
        <p>Habang umuusad ka sa Cookingdom, isaalang-alang ang pag-upgrade ng iyong fryer at stove. Ang mas mabilis na proseso ng pagluluto ay makakatulong sa iyo na hawakan ang dumadami na mga order sa mga susunod na level.</p>
        <p><strong>Tip:</strong> Ang upgrades sa iyong kagamitan sa kusina ay makakatulong sa pagpapabilis ng proseso ng pagprito at siguraduhing mabilis na maluluto ang iyong mga side dishes.</p>
    </li>
    <li>
        <h3>Huwag Hayaang Lumamig ang Mantika:</h3>
        <p>Ang Cookingdom ay nangangailangan ng mataas na temperatura ng mantika upang maluto nang maayos ang manok. Kung masyadong malamig ang mantika, ang manok ay mag-aabsorb ng mas maraming mantika at mawalan ng lutong. Bantayan ang temperatura at i-adjust ito kung kinakailangan.</p>
</li>

</ul> <h2 id="summary">Buod</h2> <p>Sa Level 15 ng Cookingdom, ang paghahanda ng Fried na Manok ay nangangailangan ng tamang pagprito ng manok upang maging malutong at ang pamamahala ng mga side dishes tulad ng puré na patatas, coleslaw, o fries. Mahalaga ang oras at multitasking, dahil kailangan mong hawakan ang parehong proseso ng pagprito at paghahanda ng side dishes nang sabay.</p> <p>Ang perpektong manok na may tamang pampalasa, malutong na fries, at makinis na puré na patatas ay magpapa-balik-balik sa iyong mga customer. Tulad ng laging sinasabi sa Cookingdom, mahalaga ang bilis at presentation, kaya siguraduhing ihain ang lahat nang sariwa at mainit!</p> <p>Sa pamamagitan ng mastering ng Fried na Manok at pagpapabuti ng iyong multitasking, magpapatuloy ka sa pag-level up at haharapin ang mas kumplikadong mga putahe sa Cookingdom.</p> `,
  },

  {
    // Magdagdag ng entry para sa Level 16
    id: 'cookingdom-game-level-16',
    title: 'Cookingdom Level 16:<br>Texas BBQ',
    pageTitle: 'Cookingdom Level 16 - Gabay sa Texas BBQ',
    pageSubtitle: 'Masterin ang malasa at smoky na Texas BBQ sa Level 16 ng Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_16.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-16' } },
    iframeUrl: 'https://www.youtube.com/embed/KyijXpwgOn8', // Placeholder
    seo: {
      title: 'Cookingdom Level 16 Gabay: Texas BBQ | Mga Tip at Istratehiya',
      description:
        'Matutunan kung paano magluto ng Texas BBQ (ribs, brisket) sa Cookingdom Level 16. Kumuha ng mga tip sa mabagal na pagluluto, BBQ sauce, mga side dish (cornbread, beans, coleslaw), at timing.',
      keywords:
        'Cookingdom, Level 16, Texas BBQ, Gabay sa BBQ, Ribs, Brisket, BBQ Sauce, Cornbread, Baked Beans, Coleslaw, Slow Cooking, Istratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_16.webp', // Placeholder
      levelInfoHtml:
        '<h3>Texas BBQ</h3><p><strong>Antas ng Hirap:</strong> Mahirap</p><p><strong>Tinatayang Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Tinatayang
      featuredGuides: [
        {
          id: 'cookingdom-game-level-13',
          title: 'Cookingdom Level 13<br>Hot Dog',
          imageUrl: '/images/guides_13.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-13' } },
        },
        {
          id: 'cookingdom-game-level-14',
          title: 'Cookingdom Level 14<br>Salmon na may Minestrone',
          imageUrl: '/images/guides_14.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-14' } },
        },
        {
          id: 'cookingdom-game-level-15',
          title: 'Cookingdom Level 15<br>Fried Chicken',
          imageUrl: '/images/guides_15.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-15' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom, ang Level 16 ay nagdadala ng bold at masarap na Texas BBQ sa kusina. Ang level na ito ay hinahamon ka na maghanda ng masarap at smoky na BBQ na pagkain gamit ang iba't ibang karne, sauces, at mga side dish. Ang Texas BBQ ay tungkol sa mabagal na pagluluto ng karne na may malalim na smoky na lasa, at ang susi sa tagumpay dito ay ang tamang timing at seasoning para sa masarap na pagkain.</p>
<p>Sa level na ito, maghahanda ka ng BBQ meats tulad ng ribs o brisket, at ipapares ito sa mga klasikong side dish ng BBQ tulad ng cornbread, baked beans, at coleslaw. Ang hamon sa Cookingdom ay ang pagbalanse ng mga oras ng pagluluto ng karne at mga side dish habang sinisiguradong mainit at masarap ang lahat ng pagkain.</p>
<p>Simulan na natin at masterin ang Texas BBQ sa Level 16!</p>

<h2 id="goal">Mga Layunin sa Level 16</h2>
<ul>
    <li>
        <strong>Magluto ng BBQ Meat (Ribs o Brisket):</strong> Kailangan mong magluto ng karne nang perpekto, tiyaking malasa, malambot, at puno ng smoky na lasa. Ang prosesong ito ay maaaring magtagal, kaya ang pamamahala sa oras ng pagluluto ay susi.
    </li>
    <li>
        <strong>Maghanda ng BBQ Sauce:</strong> Mahalaga ang tamang BBQ sauce para sa tunay na lasa ng Texas. Kailangan mong tiyakin na ang sauce ay well-seasoned at bagay sa karne.
    </li>
    <li>
        <strong>Magluto ng Mga Side Dish:</strong> Karaniwang inihahain ang Texas BBQ kasama ng mga side dish tulad ng cornbread, baked beans, at coleslaw. Kailangan mong pamahalaan ang mga side dish habang inaalagaan ang mga BBQ meats.
    </li>
    <li>
        <strong>Maghatid Nang Mabilis:</strong> Tulad ng lagi sa Cookingdom, mahalaga ang paghahatid ng iyong BBQ na pagkain na mainit at sariwa para makuha ang mataas na rating mula sa mga customer. Ang mas mabilis mong maghatid, mas mataas ang iyong customer satisfaction.
    </li>
</ul>

<h2 id="steps">Mga Hakbang Para Magluto ng Texas BBQ</h2>
<ol>
    <li>
        <h3>Magluto ng BBQ Meat (Ribs o Brisket):</h3>
        <p>Simulan sa pamamagitan ng pagpapalasa ng iyong piniling karne (ribs o brisket) gamit ang dry rub o marinade. Sa Cookingdom, ang seasoning ay ibibigay na, kaya ang iyong trabaho ay tiyaking pantay-pantay ang pag-aplay nito sa karne.</p>
        <p>Kapag ang karne ay na-season na, ilagay ito sa smoker o grill. Gumagamit ang Cookingdom ng mabagal na pagluluto, kaya ang prosesong ito ay maaaring magtagal. Bantayan ang pagluluto upang tiyaking malambot at perpekto ang pagkakaluto ng karne.</p>
        <p><strong>Tip:</strong> Baliktarin ang karne ng regular upang tiyaking pantay ang pagkakaluto sa lahat ng bahagi. Ang perpektong BBQ meat ay magiging crispy sa labas at malasa at malambot sa loob.</p>
        <p><strong>Tip:</strong> Huwag i-overcook ang karne! Sa Cookingdom, ang tamang pagkakaluto ay magbibigay ng pinakamagandang texture at lasa.</p>
    </li>
    <li>
        <h3>Maghanda ng BBQ Sauce:</h3>
        <p>Habang niluluto ang karne, mag-focus sa paggawa ng BBQ sauce. Sa Cookingdom, ang sauce ay karaniwang pinaghalong maasim, matamis, at smoky na lasa, madalas ay base ng ketchup o tomato sauce, suka, at brown sugar.</p>
        <p>Kailangan mong paghaluin ang mga sangkap at pakuluan hanggang maging makapal at malasa. Kapag handa na ang sauce, ilalagay ito sa karne habang niluluto o pagkatapos nitong mailagay sa plato.</p>
        <p><strong>Tip:</strong> Huwag hayaang masunog ang sauce! Haluin ito paminsan-minsan upang hindi dumikit sa ilalim ng kawali. Dapat ay makapal ang sauce, ngunit hindi malabnaw.</p>
    </li>
    <li>
        <h3>Magluto ng Mga Side Dish:</h3>
        <p>Habang tutok ka sa BBQ meat at sauce, huwag kalimutan ang mga side dish! Karaniwang inihahain ang Texas BBQ kasama ang:</p>
        <ul>
            <li><strong>Cornbread:</strong> Isang bahagyang matamis at moist na tinapay na bumabagay sa savory BBQ na lasa.</li>
            <li><strong>Baked Beans:</strong> Mabagal na nilutong beans sa isang rich na sauce, kadalasang may BBQ sauce o bacon.</li>
            <li><strong>Coleslaw:</strong> Isang malamig at malutong na side dish na bumabalanse sa richness ng BBQ.</li>
        </ul>
        <p><strong>Tip:</strong> Lutuin ang mga side dish habang ang karne ay ini-smoke o ini-grill. Tiyaking ang cornbread ay golden at moist, ang baked beans ay malambot, at ang coleslaw ay fresh at malutong.</p>
    </li>
    <li>
        <h3>I-assemble ang Dish:</h3>
        <p>Kapag ang karne ay niluto nang perpekto at handa na ang mga side dish, oras na para i-plate ang Texas BBQ. Magsimula sa pamamagitan ng paglalagay ng BBQ meat sa plato, pagkatapos ay idagdag ang mga side dish tulad ng cornbread, baked beans, at coleslaw.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay ang pagkakalagay ng BBQ sauce sa karne. Maaari ka ring magdagdag ng extra sauce sa mga side dish kung gusto mo, pero huwag labis. Panatilihing malinis at maayos ang presentation.</p>
    </li>
    <li>
        <h3>I-serve ang Texas BBQ:</h3>
        <p>Pagkatapos ma-assemble ang dish, ihatidito sa customer habang mainit at sariwa. Bilisan ang paghahatid upang makuha ang mataas na rating at mas maraming Coins at Stars.</p>
</li>

</ol> <h2 id="tips">Mga Tip at Istratehiya</h2> <ul> <li><strong>Gamitin ang Parehong BBQ Sauce sa Karne at Beans:</strong> Para makatipid ng oras, gamitin ang parehong BBQ sauce para sa iyong karne at baked beans. Magbibigay ito ng consistency at babawasan ang dami ng pagluluto.</li> <li><strong>Panatilihing Umiikot ang mga Meat Timer:</strong> Laging bantayan ang karne habang niluluto. Kung hindi mo ito babaliktarin o babantayan, maaari itong masunog at makaapekto sa iyong score.</li> <li><strong>Gamitin ang Side Dish Queue:</strong> Maghanda ng maraming servings ng cornbread at coleslaw nang sabay. Magagamit mo ito para mabilis na mag-serve ng mga susunod na order.</li> <li><strong>Panatilihin ang Init:</strong> I-serve ang pagkain agad pagkatapos itong maluto upang mapanatili ang mataas na kalidad at freshness na kailangan para sa mataas na score.</li> </ul> <h2 id="summary">Buod</h2> <p>Ang Level 16 ng Cookingdom ay nagpapakilala sa isang masarap na culinary challenge: Texas BBQ. Sa pamamagitan ng mabagal at maingat na pagluluto ng ribs o brisket, paggawa ng masarap na BBQ sauce, at pagsama ng mga classic na side dish, kailangan mong tiyakin na ang bawat plato ay masarap, maayos ang presentation, at ihahatid nang tama sa oras.</p> <p>Sa mga tip sa itaas, maaari mong maperpekto ang iyong BBQ skills at makuha ang pinakamataas na rating sa level na ito.</p> <p>Handa ka na bang manalo sa Texas BBQ showdown?🔥</p> `,
  },

  {
    id: 'cookingdom-game-level-17',
    title: 'Cookingdom Level 17:<br>Café Macchiato',
    pageTitle: 'Cookingdom Level 17 - Gabay sa Café Macchiato',
    pageSubtitle:
      'Matutunan kung paano gumawa ng perpektong Café Macchiato sa Level 17 ng Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: true,
    imageUrl: '/images/guides_17.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-17' } },
    iframeUrl: 'https://www.youtube.com/embed/9vMHRRYFPMg',
    seo: {
      title: 'Gabay sa Cookingdom Level 17: Café Macchiato | Mga Tip at Estratehiya',
      description:
        'Masterin ang paggawa ng Café Macchiato sa Cookingdom Level 17. Alamin kung paano magtimpla ng espresso, mag-foam ng gatas nang tama, at balansehin ang lasa para sa klasikong inuming ito.',
      keywords:
        'Cookingdom, Level 17, Café Macchiato, Gabay, Espresso, Foam ng Gatas, Kape, Brewing, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_17.webp',
      levelInfoHtml:
        '<h3>Café Macchiato</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 4 na Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-14',
          title: 'Cookingdom Level 14<br>Salmon na may Minestrone',
          imageUrl: '/images/guides_14.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-14' } },
        },
        {
          id: 'cookingdom-game-level-15',
          title: 'Cookingdom Level 15<br>Piniritong Manok',
          imageUrl: '/images/guides_15.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-15' } },
        },
        {
          id: 'cookingdom-game-level-16',
          title: 'Cookingdom Level 16<br>Texas BBQ',
          imageUrl: '/images/guides_16.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-16' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Level 17, ipakikilala sa iyo ang isang masarap at eleganteng inumin: ang Café Macchiato. Layunin ng antas na ito na mapagsabay mong maisagawa ang perpektong timpla ng espresso at creamy na foam ng gatas. Isang klasikong inuming pambreakfast café, ang Café Macchiato ay nangangailangan ng tamang timing at detalye sa bawat hakbang.</p>
  <p>Bilang isa sa mga paboritong inumin sa mga coffee shop sa buong mundo, ang tamang paghahanda nito ay siguradong makakapagpasaya sa mga customer at makakatulong sa iyong umangat sa Cookingdom. Narito ang gabay para makamit ang perpektong Café Macchiato.</p>
  
  <h2 id="goal">Layunin sa Level 17</h2>
  <ul>
    <li><strong>Ihanda ang Espresso:</strong> Ito ang base ng inumin — dapat itong malasa, matapang, at tama ang timpla.</li>
    <li><strong>Gumawa ng Foam ng Gatas:</strong> Kailangan itong creamy, magaan, at may tamang temperatura. Ang sobrang init ay sisira sa lasa.</li>
    <li><strong>I-serve ang Inumin:</strong> Pagsamahin ang espresso at milk foam sa tamang proporsyon at ihain habang mainit pa.</li>
    <li><strong>Mag-serve nang Mabilis:</strong> Bilis at pagiging sariwa ang susi para sa mataas na score sa Cookingdom.</li>
  </ul>
  
  <h2 id="steps">Mga Hakbang sa Paggawa ng Café Macchiato</h2>
  <ol>
    <li>
      <h3>Ihanda ang Espresso:</h3>
      <p>Gamitin ang espresso machine upang makagawa ng mahusay na shot ng kape. Tiyaking pantay ang pagkaka-tamp ng ground coffee bago i-brew.</p>
      <p><strong>Tip:</strong> Bantayan ang extraction — ang tamang espresso ay may crema (gintong foam) sa ibabaw.</p>
    </li>
    <li>
      <h3>I-foam ang Gatas:</h3>
      <p>Froth-in ang gatas gamit ang steamer hanggang ito ay maging malambot, creamy, at may maliliit na bula. Huwag hayaang masyadong uminit.</p>
      <p><strong>Tip:</strong> Ang ideal na temperatura ay humigit-kumulang 65°C. Higit pa rito ay maaaring maging mapait ang lasa.</p>
    </li>
    <li>
      <h3>Pagsamahin ang Espresso at Milk Foam:</h3>
      <p>Ibuhos ang espresso sa tasa, pagkatapos ay lagyan ng isang kutsara ng milk foam sa ibabaw. Dapat makuha ang balanse ng matapang na espresso at banayad na gatas.</p>
    </li>
    <li>
      <h3>I-serve ang Café Macchiato:</h3>
      <p>Habang mainit pa, agad itong ihain sa customer. Siguraduhin na sariwa at buo pa ang foam.</p>
    </li>
  </ol>
  
  <h2 id="tips">Mga Tip at Teknik</h2>
  <ul>
    <li>
      <h3>Perpektong Espresso Shot:</h3>
      <p>Ang espresso ang puso ng Café Macchiato. Ayusin ang grind, tamping, at brewing time para sa balanseng lasa.</p>
    </li>
    <li>
      <h3>Foam na Tamang Texture:</h3>
      <p>Ang gatas ay dapat hindi sobrang bula. Dapat itong maging makinis at malambot na parang velvet.</p>
    </li>
    <li>
      <h3>Timing ay Mahalagang Elemento:</h3>
      <p>Habang nagba-brew ng espresso, maaari nang i-foam ang gatas upang makatipid sa oras.</p>
    </li>
    <li>
      <h3>Wag Sobrahan ang Milk Foam:</h3>
      <p>Ang Café Macchiato ay dapat pa ring matapang sa lasa. Isang kutsara lang ng foam ang kailangan.</p>
    </li>
    <li>
      <h3>I-serve Habang Mainit:</h3>
      <p>Agad na ihain matapos buuin ang inumin upang mapanatili ang init at tamang lasa.</p>
    </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Level 17 ng Cookingdom, ang paggawa ng Café Macchiato ay isang pagsubok ng tiyaga at kasanayan. Ang perpektong espresso at tamang milk foam ay magbibigay sa iyo ng pinakamahusay na score.</p>
  <p>Gamitin ang tamang timing, multitasking, at tiyaga sa detalye para mapasaya ang iyong mga customer at mapataas ang iyong Cookingdom rating!</p>
  `,
  },
  {
    id: 'cookingdom-game-level-18',
    title: 'Cookingdom Antas 18:<br>Ratatouille',
    pageTitle: 'Cookingdom Antas 18 - Gabay sa Ratatouille',
    pageSubtitle: 'Matutong gumawa ng klasikong French Ratatouille sa Antas 18 ng Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_18.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-18' } },
    iframeUrl: 'https://www.youtube.com/embed/YADKwUHp4XY',
    seo: {
      title: 'Gabay sa Cookingdom Antas 18: Ratatouille | Mga Tip at Estratehiya',
      description:
        'Masterin ang Ratatouille sa Cookingdom Antas 18. Alamin ang tamang paghihiwa ng mga gulay (talong, zucchini, sili, kamatis), pagluluto, at pagpapakulo ng sarsa.',
      keywords:
        'Cookingdom, Antas 18, Ratatouille, Lutuing Pranses, Mga Gulay, Gabay, Gisa, Pakulo, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_18.webp',
      levelInfoHtml:
        '<h3>Ratatouille</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Inaasahang Oras:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-15',
          title: 'Cookingdom Antas 15<br>Manok na Pinirito',
          imageUrl: '/images/guides_15.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-15' } },
        },
        {
          id: 'cookingdom-game-level-16',
          title: 'Cookingdom Antas 16<br>Texas BBQ',
          imageUrl: '/images/guides_16.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-16' } },
        },
        {
          id: 'cookingdom-game-level-17',
          title: 'Cookingdom Antas 17<br>Café Macchiato',
          imageUrl: '/images/guides_17.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-17' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Antas 18, ihahain mo ang masustansya at masarap na putaheng Pranses: Ratatouille. Binubuo ito ng iba't ibang gulay tulad ng talong, zucchini, sili, at kamatis, na niluluto sa mabangong tomato sauce. Ang susi sa tagumpay sa antas na ito ay ang maayos na paghihiwa at pagluluto ng bawat gulay upang mapanatili ang kanilang lasa at tamang pagkakaluto.</p>
  <p>Sa antas na ito, kailangang mahusay kang mag-multitask at maging eksakto. Dapat sabay-sabay mong maihanda at maluto ang iba’t ibang gulay habang pinananatili ang wastong init at oras ng luto. Tara na’t alamin kung paano makakamit ang perpektong Ratatouille at mapahanga ang iyong mga kostumer!</p>
  
  <h2 id="goal">Mga Layunin sa Antas 18</h2>
  <ul>
      <li><strong>Ihanda ang mga Gulay:</strong> Pumili ng sariwang talong, zucchini, sili, at kamatis. Hiwain ang mga ito nang pantay-pantay para sa sabayang pagkaluto.</li>
      <li><strong>Igisa ang mga Gulay:</strong> Gamitin ang olive oil, bawang, at damo upang igisa ang mga gulay. Dapat maluto ang mga ito nang hindi nadudurog.</li>
      <li><strong>Pakuluin ang Sarsa:</strong> Gamit ang simpleng tomato sauce na may thyme, basil, at rosemary, hayaang lumapot at sumarap ang timpla.</li>
      <li><strong>Ihain ang Ratatouille:</strong> Kapag luto na ang lahat, ayusin sa pinggan at ihain agad. Bilis at ganda ng presentasyon ang susi sa mataas na rating!</li>
  </ul>
  
  <h2 id="steps">Mga Hakbang sa Paggawa ng Ratatouille</h2>
  <ol>
      <li>
          <h3>Ihanda ang mga Gulay:</h3>
          <p>Hiwain nang pantay ang bawat gulay — talong, zucchini, sili, at kamatis. Mas manipis, mas maganda ang lutong lalabas.</p>
          <p><strong>Tip:</strong> Gamitin ang mandoline slicer kung mayroon para sa pantay at mabilis na hiwa.</p>
      </li>
      <li>
          <h3>Igisa ang mga Gulay:</h3>
          <p>Sa mainit na kawali, idagdag ang olive oil at bawang. Pagkatapos, isa-isang idagdag ang hiniwang gulay at igisa hanggang maging malambot pero buo pa ang hugis.</p>
          <p><strong>Tip:</strong> Huwag sobrahan ang init. Haluin paminsan-minsan upang hindi masunog.</p>
      </li>
      <li>
          <h3>Pakuluin ang Sarsa:</h3>
          <p>Gumawa ng tomato sauce na may thyme, rosemary, at basil. Isama ang gulay sa sarsa at pakuluin sa banayad na apoy.</p>
          <p><strong>Tip:</strong> Hayaang kumulo ng 10-15 minuto para mas humalo ang mga lasa. Haluin paminsan-minsan.</p>
      </li>
      <li>
          <h3>Ihanda ang Pinggan:</h3>
          <p>Ayusin ang mga gulay sa gitna ng pinggan. Lagyan ng kaunting sarsa sa ibabaw.</p>
          <p><strong>Tip:</strong> Maaari kang mag-garnish ng sariwang basil o parsley para sa dagdag kulay at lasa.</p>
      </li>
      <li>
          <h3>Ihain agad:</h3>
          <p>Ihain ang Ratatouille habang mainit pa. Sa Cookingdom, mabilisang serbisyo ay mahalaga!</p>
          <p><strong>Tip:</strong> Maaari ring isama sa tinapay o kanin upang maging mas busog ang kostumer.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Tip at Teknik</h2>
  <ul>
      <li>
          <h3>Hiwain Nang Pantay:</h3>
          <p>Mahalaga ang pagkakapantay ng hiwa para sa sabayang pagkakaluto.</p>
          <p><strong>Tip:</strong> Gumamit ng mandoline para sa pantay na hiwa.</p>
      </li>
      <li>
          <h3>Huwag Sobrang Luto:</h3>
          <p>Dapat ay malambot ang gulay pero buo pa ang anyo. Iwasan ang pagka-mushy.</p>
          <p><strong>Tip:</strong> Bantayan ang init at haluin nang madalas.</p>
      </li>
      <li>
          <h3>Ayusin ang Sarsa:</h3>
          <p>Dapat ay balanse ang lasa ng sarsa at may sapat na damo.</p>
          <p><strong>Tip:</strong> Kung malabnaw, dagdagan ang oras ng pakulo. Kung makapal, lagyan ng kaunting tubig o sabaw.</p>
      </li>
      <li>
          <h3>Garnish at Presentasyon:</h3>
          <p>Magandang presentasyon ang nagbibigay dagdag puntos.</p>
          <p><strong>Tip:</strong> Maglagay ng basil, parsley, o olive oil sa ibabaw.</p>
      </li>
      <li>
          <h3>I-upgrade ang Kusina:</h3>
          <p>Mag-upgrade ng kagamitan upang mapabilis ang pagluluto.</p>
          <p><strong>Tip:</strong> Mas mahusay na kawali o kalan = mas mabilis na serbisyo.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Antas 18 ng Cookingdom, ang perpektong Ratatouille ay nangangailangan ng maayos na hiwa, tamang luto, at masarap na sarsa. Simple man ang sangkap, ang resulta ay isang nakakabusog at malinamnam na putahe. Gamit ang tamang oras, multitasking, at detalye, makakamit mo ang 5 bituin at matutuwa ang mga kostumer.</p>
  <p>Masterin ang paghahanda ng gulay at tamang pagpapakulo — at handa ka na sa mas mahihirap na antas sa Cookingdom!</p>
  `,
  },
  {
    id: 'cookingdom-game-level-19',
    title: 'Cookingdom Antas 19:<br>Kalabasa Pie',
    pageTitle: 'Cookingdom Antas 19 - Gabay sa Kalabasa Pie',
    pageSubtitle:
      'Alamin kung paano maghurno ng perpektong Kalabasa Pie sa Antas 19 ng Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_19.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-19' } },
    iframeUrl: 'https://www.youtube.com/embed/CoSI8csqCbc',
    seo: {
      title: 'Gabay sa Cookingdom Antas 19: Kalabasa Pie | Mga Tip at Estratehiya',
      description:
        'Masterin ang Kalabasa Pie sa Antas 19 ng Cookingdom. Alamin ang mga tip sa paggawa ng perpektong crust, makinis na palaman, pagbe-bake, at pag-serve ng klasikong panghimagas na ito.',
      keywords:
        'Cookingdom, Antas 19, Kalabasa Pie, Panghimagas, Pagbe-bake, Pie Crust, Kalabasa na Palaman, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_19.webp',
      levelInfoHtml:
        '<h3>Kalabasa Pie</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Inaasahang Oras:</strong> 4 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-16',
          title: 'Cookingdom Antas 16<br>Texas BBQ',
          imageUrl: '/images/guides_16.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-16' } },
        },
        {
          id: 'cookingdom-game-level-17',
          title: 'Cookingdom Antas 17<br>Caffè Macchiato',
          imageUrl: '/images/guides_17.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-17' } },
        },
        {
          id: 'cookingdom-game-level-18',
          title: 'Cookingdom Antas 18<br>Ratatouille',
          imageUrl: '/images/guides_18.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-18' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom, ipinapakilala sa Antas 19 ang isang matamis at masarap na panghimagas: Kalabasa Pie. Ang klasikong panghimagas na ito ay paborito sa maraming kultura, lalo na tuwing taglagas. Sa Cookingdom, kailangan mong gumawa ng makinis na kalabasa na palaman, perpektong pie crust, at i-bake ito hanggang sa maging gintong kayumanggi. Ang tiyempo, tamang balanse ng sangkap, at presentasyon ay mahalaga upang makamit ang pinakamataas na kasiyahan ng kostumer.</p>
  <p>Sa Antas 19, kailangan mong maayos na pamahalaan ang mga sangkap at hakbang sa pagluluto upang masiguradong parehong tama ang crust at palaman. Halina’t alamin ang mga hakbang at tip sa paggawa ng ultimate Kalabasa Pie!</p>
  
  <h2 id="goal">Mga Layunin sa Antas 19</h2>
  <ul>
      <li><strong>Ihanda ang Pie Crust:</strong> Ang unang hakbang ay ang paggawa ng buttery at flaky na crust. Kailangan mong ihalo ang mga sangkap upang makabuo ng dough, igulong ito, at ilagay sa pie dish.</li>
      <li><strong>Gawin ang Kalabasa na Palaman:</strong> Gamit ang pureed kalabasa, itlog, asukal, at pampalasa tulad ng cinnamon, nutmeg, at luya, bubuuin ang makinis at malinamnam na palaman.</li>
      <li><strong>I-assemble at I-bake ang Pie:</strong> Pagkatapos ihanda ang crust at palaman, i-assemble ang pie at i-bake ito hanggang sa maging kayumanggi at matatag.</li>
      <li><strong>Ihain ang Kalabasa Pie:</strong> Pagkaluto, ihain ito nang mainit, sariwa, at maayos na hiwa para sa pinakamahusay na karanasan ng kostumer.</li>
  </ul>
  
  <h2 id="steps">Mga Hakbang sa Paggawa ng Kalabasa Pie</h2>
  <ol>
    <li>
      <h3>Ihanda ang Pie Crust:</h3>
      <p>Simulan sa paggawa ng crust gamit ang harina, mantikilya, at kaunting tubig upang bumuo ng dough. Haluin nang dahan-dahan at igulong hanggang sa maging pantay.</p>
      <p><strong>Tip:</strong> Kung masyadong malagkit ang dough, dagdagan ng harina. Kung masyadong tuyo, magdagdag ng kaunting tubig. Ang tamang texture ay magreresulta sa malutong na crust.</p>
      <p>Ilagay ang dough sa pie dish, tapyasin ang sobrang gilid, at dahan-dahang pindutin upang mabuo ang border.</p>
      <p><strong>Tip:</strong> Maaari mong palamigin muna ang dough ng 15 minuto bago ito i-bake upang makatulong sa hugis nito.</p>
    </li>
    <li>
      <h3>Gawin ang Kalabasa na Palaman:</h3>
      <p>Paghaluin ang pureed kalabasa, itlog, asukal, at mga pampalasa. Siguraduhing makinis at malasa ang resulta.</p>
      <p><strong>Tip:</strong> Gamitin ang blender o hand mixer para maiwasan ang buo-buong palaman.</p>
      <p><strong>Tip:</strong> Timplahan ayon sa panlasa pero iwasan ang sobrang tamis.</p>
    </li>
    <li>
      <h3>I-assemble ang Pie:</h3>
      <p>Ilagay ang palaman sa crust at pantayin ang ibabaw gamit ang spatula.</p>
      <p><strong>Tip:</strong> Huwag punuin nang labis. Mag-iwan ng kaunting espasyo para sa pagtaas habang nagbe-bake.</p>
    </li>
    <li>
      <h3>I-bake ang Kalabasa Pie:</h3>
      <p>I-preheat ang oven sa 190°C at i-bake hanggang maging matatag ang palaman at kayumanggi ang crust.</p>
      <p><strong>Tip:</strong> Kung mabilis masunog ang gilid ng crust, takpan ng foil.</p>
    </li>
    <li>
      <h3>Palamigin at Ihain:</h3>
      <p>Hayaan itong lumamig ng ilang minuto bago hiwain. Ihain nang mainit pero hindi sobrang init.</p>
      <p><strong>Tip:</strong> Maaaring lagyan ng whipped cream o cinnamon sa ibabaw para sa magandang presentasyon.</p>
    </li>
    <li>
      <h3>Ihain ang Kalabasa Pie:</h3>
      <p>Pagkatapos hiwain, ihain kaagad. Dagdagan ng whipped cream o vanilla ice cream para mas maging espesyal.</p>
      <p><strong>Tip:</strong> Ang mainit na hiwa ng Kalabasa Pie ay siguradong magpapasaya sa iyong mga kostumer!</p>
    </li>
  </ol>
  
  <h2 id="tips">Mga Tip at Teknik</h2>
  <ul>
    <li>
      <h3>Perpektong Pie Crust:</h3>
      <p>Ang malamig na dough at mahinhing paghahalo ay susi sa flaky na crust.</p>
      <p><strong>Tip:</strong> Palamigin ang dough bago igulong at siguraduhing lutong-luto ito.</p>
    </li>
    <li>
      <h3>Makinis at Malinamnam na Palaman:</h3>
      <p>Siguraduhing pantay ang timpla ng palaman at walang buo-buong sangkap.</p>
      <p><strong>Tip:</strong> Gumamit ng blender o hand mixer para sa perpektong texture.</p>
    </li>
    <li>
      <h3>Tamang Pagbe-bake:</h3>
      <p>Ang pagbe-bake ay mahalaga sa texture. Hindi dapat sobrang luto o kulang sa luto ang palaman.</p>
      <p><strong>Tip:</strong> Kapag banayad ang galaw ng palaman sa pag-alog, luto na ito.</p>
    </li>
    <li>
      <h3>Garnish at Presentasyon:</h3>
      <p>Ang magandang itsura ng pie ay dagdag puntos. Lagyan ng whipped cream, cinnamon, o pumpkin seeds.</p>
      <p><strong>Tip:</strong> Kaunting dekorasyon ay makakadagdag sa rating mo!</p>
    </li>
    <li>
      <h3>Ihain nang Mainit at Sariwa:</h3>
      <p>Siguraduhing mainit at bagong hango ang pie bago ihain sa iyong mga kostumer.</p>
    </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Antas 19 ng Cookingdom, ang paggawa ng Kalabasa Pie ay nangangailangan ng kasanayan sa bawat hakbang — mula sa crust, palaman, hanggang baking. Sa tamang tiyempo at teknik, makakagawa ka ng pie na magugustuhan ng lahat.</p>
  <p>Kapag natutunan mo ito, magiging handa ka nang gumawa ng mas maraming masasarap na dessert sa susunod na mga antas. Huwag kalimutang maggarnish para sa dagdag na puntos!</p>
  `,
  },
  {
    // Add entry for Level 20
    id: 'cookingdom-game-level-20',
    title: 'Cookingdom Level 20:<br>Roast Turkey',
    pageTitle: 'Cookingdom Level 20 - Roast Turkey Guide',
    pageSubtitle: 'Learn how to prepare the perfect Roast Turkey in Level 20 of Cookingdom.',
    category: '11-20',
    publishDate: '2025-05-04',
    isSpecial: false,
    imageUrl: '/images/guides_20.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-20' } },
    iframeUrl: 'https://www.youtube.com/embed/Rp9i4GwAC6E', // Placeholder
    seo: {
      title: 'Cookingdom Level 20 Guide: Roast Turkey | Tips & Strategy',
      description:
        'Master Roast Turkey in Level 20 of Cookingdom. Get tips on seasoning, roasting, basting, and serving this festive dish.',
      keywords:
        'Cookingdom, Level 20, Roast Turkey, Festive Dish, Roasting, Basting, Turkey Guide, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_20.webp', // Placeholder
      levelInfoHtml:
        '<h3>Roast Turkey</h3><p><strong>Difficulty:</strong> Medium-High</p><p><strong>Approx. Time:</strong> 5 mins</p><p><strong>Rewards:</strong> 5 Stars</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-17',
          title: 'Cookingdom Level 17<br>Caffè Macchiato',
          imageUrl: '/images/guides_17.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-17' } },
        },
        {
          id: 'cookingdom-game-level-18',
          title: 'Cookingdom Level 18<br>Ratatouille',
          imageUrl: '/images/guides_18.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-18' } },
        },
        {
          id: 'cookingdom-game-level-19',
          title: 'Cookingdom Level 19<br>Pumpkin Pie',
          imageUrl: '/images/guides_19.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-19' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Game Overview</h2>
<p>In Cookingdom, Level 20 introduces a festive and flavorful dish: Roast Turkey. As one of the most popular and traditional dishes, especially for celebrations and feasts, Roast Turkey requires a careful balance of seasoning, preparation, and timing. This level is all about roasting the turkey to perfection while also ensuring that the sides and garnishes complement the dish.</p>
<p>In Cookingdom, mastering the art of roasting turkey will require you to manage multiple steps simultaneously, such as marinating, basting, and ensuring the meat cooks evenly. With careful attention, you'll serve up a golden, juicy turkey that will impress your customers and help you advance to the next level!</p>

<h2 id="goal">Level 20 Goals</h2>
<ul>
    <li>
        <strong>Prepare the Turkey:</strong> Start by preparing the turkey. You'll need to clean, season, and stuff the bird with aromatic herbs and spices to infuse flavor.
    </li>
    <li>
        <strong>Roast the Turkey:</strong> Once the turkey is seasoned, it's time to roast it. This requires careful attention to heat and timing to ensure the turkey is cooked through, golden brown, and juicy.
    </li>
    <li>
        <strong>Baste the Turkey:</strong> Throughout the roasting process, you'll need to baste the turkey to keep it moist and flavorful.
    </li>
    <strong>Serve the Roast Turkey:</strong> Once the turkey is perfectly roasted, carve it into portions and serve it quickly to keep it fresh and juicy for your customers.
    </li>
</ul>

<h2 id="steps">Steps to Make Roast Turkey</h2>
<ol>
    <li>
        <h3>Prepare the Turkey:</h3>
        <p>Start by prepping the turkey. In Cookingdom, this step includes cleaning the bird, removing any giblets, and patting it dry with paper towels. The drier the skin, the crispier it will become during roasting.</p>
        <p><strong>Tip:</strong> For extra flavor, rub the turkey inside and out with a mixture of olive oil, garlic, salt, and pepper. Add fresh herbs like rosemary, thyme, and sage for an aromatic boost.</p>
        <p><strong>Tip:</strong> You can stuff the turkey with a variety of ingredients such as onions, garlic, and citrus fruits like lemon or orange. These will infuse the meat with moisture and flavor as it roasts.</p>
    </li>
    <li>
        <h3>Season the Turkey:</h3>
        <p>After preparing the turkey, it's time to season it. Generously rub the outside of the turkey with a seasoning mixture of your choice. Popular choices include a blend of herbs like rosemary, thyme, and sage, along with salt, pepper, and garlic.</p>
        <p><strong>Tip:</strong> Make sure to season the cavity of the turkey as well. This ensures the flavor penetrates the meat thoroughly, making each bite flavorful.</p>
        <p><strong>Tip:</strong> If you have time, let the turkey marinate for a few hours or overnight in the refrigerator. This will allow the flavors to penetrate the meat more deeply.</p>
    </li>
    <li>
        <h3>Roast the Turkey:</h3>
        <p>Preheat your oven to the recommended temperature (usually around 350°F or 175°C). Place the turkey on a roasting rack or a baking tray lined with foil to catch the drippings.</p>
        <p><strong>Tip:</strong> To prevent the turkey from drying out, cover the bird loosely with aluminum foil at the start of roasting. This helps it retain moisture while it cooks.</p>
        <p><strong>Tip:</strong> Roast the turkey for around 13-15 minutes per pound, or until the internal temperature reaches 165°F (75°C) when checked with a meat thermometer.</p>
        <p><strong>Tip:</strong> If you notice that the turkey is browning too quickly, reduce the oven temperature slightly to allow the meat to cook more evenly.</p>
    </li>
    <li>
        <h3>Baste the Turkey:</h3>
        <p>Every 30-45 minutes, baste the turkey with its own juices or a marinade of melted butter and broth to keep the skin moist and flavorful.</p>
        <p><strong>Tip:</strong> Basting is key to achieving that beautiful, golden-brown skin and keeping the meat juicy. Be sure to avoid opening the oven door too often, as this can cause the temperature to fluctuate.</p>
    </li>
    <li>
        <h3>Check the Turkey's Doneness:</h3>
        <p>After several hours of roasting, check the internal temperature of the turkey. Insert the meat thermometer into the thickest part of the thigh, making sure it doesn't touch the bone.</p>
        <p><strong>Tip:</strong> Once the turkey reaches an internal temperature of 165°F (75°C), it's ready to be removed from the oven. If it's not quite there yet, continue roasting and baste again to ensure even cooking.</p>
    </li>
    <li>
        <h3>Rest the Turkey:</h3>
        <p>Once the turkey is done roasting, remove it from the oven and let it rest for about 15-20 minutes before carving. This helps the juices redistribute throughout the meat, keeping it moist.</p>
        <p><strong>Tip:</strong> Don't carve the turkey immediately after removing it from the oven, as the juices will run out, making the meat dry. Let it rest to retain its moisture.</p>
    </li>
    <li>
        <h3>Carve the Turkey:</h3>
        <p>After the turkey has rested, carve it into portions using a sharp knife. Slice the breast meat and separate the drumsticks and wings.</p>
        <p><strong>Tip:</strong> Serve the turkey in neat portions for an attractive presentation. Arrange the slices on a platter and garnish with fresh herbs or cranberry sauce.</p>
    </li>
    <li>
        <h3>Serve the Roast Turkey:</h3>
        <p>Once carved, serve the Roast Turkey quickly to keep it fresh and juicy. Pair it with traditional sides like mashed potatoes, stuffing, gravy, and cranberry sauce for a complete meal.</p>
        <p><strong>Tip:</strong> Serving the turkey with its drippings or gravy will enhance the flavor and make the dish even more satisfying.</p>
    </li>
</ol>

<h2 id="tips">Tips & Tricks</h2>
<ul>
    <li>
        <h3>Perfect Roasting Temperature:</h3>
        <p>The key to roasting the perfect turkey is controlling the temperature. Don't roast at too high a temperature or you risk over-browning the skin while leaving the inside raw.</p>
        <p><strong>Tip:</strong> Cover the turkey with foil for the first part of the roasting, then remove it during the last 30 minutes to allow the skin to become crispy and golden.</p>
    </li>
    <li>
        <h3>Don't Overcook the Turkey:</h3>
        <p>Overcooking can lead to dry turkey. Use a meat thermometer to ensure that the turkey is cooked through but not overdone. Once it reaches 165°F (75°C), it's time to take it out of the oven.</p>
        <p><strong>Tip:</strong> If the turkey is small, it might cook faster than expected. Keep an eye on the clock, and don't be afraid to adjust the roasting time.</p>
    </li>
    <li>
        <h3>Baste for Moisture:</h3>
        <p>Basting the turkey periodically ensures a juicy bird. Use melted butter, chicken broth, or turkey drippings to baste the turkey, keeping the skin moist and flavorful.</p>
        <p><strong>Tip:</strong> Don't skip this step! The basting process adds flavor and moisture, helping you achieve that perfectly crispy skin and tender meat.</p>
    </li>
    <li>
        <h3>Rest the Turkey After Roasting:</h3>
        <p>Letting the turkey rest after it comes out of the oven is one of the most important steps in achieving a juicy bird. Resting allows the juices to redistribute throughout the meat, preventing dryness.</p>
        <p><strong>Tip:</strong> Tent the turkey with foil while it rests to keep it warm.</p>
    </li>
    <li>
        <h3>Carve with Precision:</h3>
        <p>When carving, use a sharp knife and be precise with your cuts. Slice the meat against the grain for the most tender, juicy slices.</p>
        <p><strong>Tip:</strong> If you're serving a large crowd, make sure to carve the turkey into neat portions to make serving easier and more efficient.</p>
    </li>
</ul>

<h2 id="summary">Summary</h2>
<p>In Level 20 of Cookingdom, preparing the Roast Turkey requires attention to detail, timing, and the right technique. From seasoning the bird to perfectly roasting and basting it, this level is a true test of your culinary skills. With proper temperature control and careful basting, you'll create a golden, juicy turkey that will delight your customers and elevate your Cookingdom experience.</p>
<p>Master the art of roasting turkey, and you'll be well on your way to handling even more complex dishes in future levels!</p>
`,
  },
  {
    // Add entry for Level 21
    id: 'cookingdom-game-level-21',
    title: 'Cookingdom Level 21:<br> Boba Milk Tea',
    pageTitle: 'Cookingdom Level 21 - Gabay sa Boba Milk Tea',
    pageSubtitle:
      'Matutunan kung paano gumawa ng perpektong Boba Milk Tea sa Level 21 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05', // Updated category
    isSpecial: false,
    imageUrl: '/images/guides_21.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
    iframeUrl: 'https://www.youtube.com/embed/sT6G1wBptko', // Placeholder
    seo: {
      title: 'Cookingdom Level 21 Gabay: Boba Milk Tea | Mga Tip at Estratehiya',
      description:
        'Masterhin ang Boba Milk Tea sa Level 21 ng Cookingdom. Makakuha ng mga tip sa pagluluto ng boba pearls, pagbubrew ng tsaa, pagtutok sa tamang milk, at paghahain ng trendy na inumin.',
      keywords:
        'Cookingdom, Level 21, Boba Milk Tea, Bubble Tea, Taiwanese na Inumin, Gabay sa Tsaa, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_21.webp', // Placeholder
      levelInfoHtml:
        '<h3>Boba Milk Tea</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-18',
          title: 'Cookingdom Level 18<br>Ratatouille',
          imageUrl: '/images/guides_18.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-18' } },
        },
        {
          id: 'cookingdom-game-level-19',
          title: 'Cookingdom Level 19<br>Pie ng Kalabasa',
          imageUrl: '/images/guides_19.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-19' } },
        },
        {
          id: 'cookingdom-game-level-20',
          title: 'Cookingdom Level 20<br>Inihaw na Pabo',
          imageUrl: '/images/guides_20.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-20' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Pagtingin sa Laro</h2>
<p>Sa Cookingdom, ipinapakilala sa Level 21 ang isang trendy at refreshing na inumin: Boba Milk Tea. Ang sikat na inuming Taiwanese na tinatawag ding bubble tea ay gawa sa tsaa, gatas, at chewy na tapioca pearls. Ang hamon sa level na ito ay ang tamang balanse ng tsaa, gatas, at asukal habang sinisiguro na ang boba pearls ay lutong-luto para sa isang masarap at masustansiyang inumin.</p>
<p>Sa Cookingdom, ang susi sa tagumpay sa Level 21 ay ang precision sa pagbubrew ng tsaa, pagluluto ng boba pearls, at mabilis na pagsasama ng inumin. Tara at alamin ang mga hakbang at mga tip para makagawa ng perpektong Boba Milk Tea at makuha ang pinakamataas na rating!</p>

<h2 id="goal">Mga Layunin ng Level 21</h2>
<ul>
    <li>
        <strong>Ihanda ang Boba Pearls:</strong> Ang unang hakbang sa paggawa ng Boba Milk Tea ay ang pagluluto ng tapioca pearls. Ang mga pearls na ito ay kailangang maluto nang perpekto upang makuha ang tamang texture – malambot at chewy sa loob, at medyo matigas sa labas.
    </li>
    <li>
        <strong>Mag-brew ng Tsaa:</strong> Pagkatapos, mag-brew ng malakas na base ng tsaa. Karaniwan, itim na tsaa ang ginagamit, ngunit maaari kang pumili ng berdeng tsaa o oolong tsaa depende sa iyong preference.
    </li>
    <li>
        <strong>Ihanda ang Gatas:</strong> Magdagdag ng gatas o dairy-free na alternatibo sa tsaa upang lumikha ng creamy at makinis na texture. Ang tamang balanse ng gatas at tsaa ay mahalaga sa lasa ng inumin.
    </li>
    <li>
        <strong>Pagsamahin at Ihain:</strong> Pagsamahin ang nilutong boba pearls, brewed na tsaa, at gatas sa isang baso, at ihain ito nang malamig na may yelo at malawak na straw para sa pag-inom ng boba pearls.
    </li>
</ul>

<h2 id="steps">Mga Hakbang para Gawin ang Boba Milk Tea</h2>
<ol>
    <li>
        <h3>Magluto ng Boba Pearls:</h3>
        <p>Simulan sa pagluluto ng tapioca pearls. Sa Cookingdom, kailangan mong pakuluan ang isang malaking palayok ng tubig. Kapag kumukulo na ang tubig, idagdag ang tapioca pearls at dahan-dahan itong haluin upang maiwasan ang pagdikit-dikit.</p>
        <p><strong>Tip:</strong> Lutuin ang pearls ayon sa mga tagubilin sa pakete (karaniwan ay 20-30 minuto). Siguraduhing luto ang pearls ngunit chewy pa rin. Ang labis na pagluto ay magpapalambot dito, at ang hindi sapat na pagluto ay mag-iiwan ng matigas na bahagi sa gitna.</p>
        <p><strong>Tip:</strong> Pagkatapos magluto, banlawan ang pearls sa malamig na tubig upang mapigilan ang pagluluto at maiwasan ang pagtikit-tikit.</p>
    </li>
    <li>
        <h3>Mag-brew ng Tsaa:</h3>
        <p>Habang niluluto ang boba pearls, mag-brew ng tsaa. Sa Cookingdom, gumamit ng malakas na itim na tsaa (o anumang tsaa na nais mo). I-steep ang tsaa ng 3-5 minuto upang makuha ang malakas at masarap na base.</p>
        <p><strong>Tip:</strong> Para sa mas masarap na lasa, maaari mong gawing mas malakas ang pag-brew ng tsaa. Makakatulong ito na dumaloy ang lasa ng tsaa kahit na may milk at asukal.</p>
        <p><strong>Tip:</strong> Kung nais mo ng kakaibang lasa, subukang gumamit ng flavored teas tulad ng jasmine o oolong, ngunit ang itim na tsaa pa rin ang pinaka-tradisyonal na pagpipilian.</p>
    </li>
    <li>
        <h3>Ihanda ang Gatas:</h3>
        <p>Kapag na-brew na ang tsaa, idagdag ang iyong napiling gatas. Maaari kang gumamit ng whole milk, almond milk, o anumang dairy o non-dairy alternative na nais mo.</p>
        <p><strong>Tip:</strong> Para sa extra creamy na texture, gamitin ang whole milk o coconut milk. Para sa magaan na inumin, subukan ang skim milk o oat milk.</p>
        <p><strong>Tip:</strong> Idagdag ang gatas nang dahan-dahan at tikman upang matiyak ang tamang balanse ng tsaa at gatas. Gusto mong maging creamy ang inumin pero mananatiling matamis ang lasa ng tsaa.</p>
    </li>
    <li>
        <h3>Sweeten ang Tsaa:</h3>
        <p>Sa Cookingdom, mahalaga ang tamis ng inumin. Magdagdag ng asukal o sweetener sa brewed na tsaa at haluin nang mabuti upang matunaw. Ang dami ng asukal ay nakadepende sa iyong personal na preference, ngunit dapat itong mag-complement sa mapait na lasa ng tsaa.</p>
        <p><strong>Tip:</strong> Maaari mo ring gamitin ang honey, syrup, o ibang sweeteners kaysa sa regular na asukal. I-adjust ang tamis upang tumugma sa panlasa ng iyong customer.</p>
    </li>
    <li>
        <h3>Pagsamahin ang Inumin:</h3>
        <p>Ngayon ay oras na para pagsamahin ang Boba Milk Tea. Sa Cookingdom, ilagay muna ang nilutong tapioca pearls sa isang baso. Pagkatapos, magdagdag ng yelo upang mapanatiling malamig at refreshing ang inumin.</p>
        <p><strong>Tip:</strong> Kung ang inumin ay ihahain na malamig, siguraduhing gumamit ng maraming yelo upang mapanatili ang kalamigan ng tsaa. Iwasan ang sobrang yelo, dahil maaari nitong diluin ang inumin.</p>
        <p>Ibuhos ang pinaghalong tsaa at gatas sa ibabaw ng pearls at yelo.</p>
        <p><strong>Tip:</strong> Para sa dagdag na visual appeal, maaari mong magdagdag ng syrup o honey sa ibabaw ng tsaa bago ihain.</p>
    </li>
    <li>
        <h3>Ihain ang Boba Milk Tea:</h3>
        <p>Kapag naihanda na ang Boba Milk Tea, ihain ito gamit ang malawak na straw upang madali itong inumin. Siguraduhing ihain ito nang malamig at huwag kalimutang haluin bago inumin upang maghalo ang gatas, tsaa, at boba.</p>
        <p><strong>Tip:</strong> Magdagdag ng extra boba pearls o kahit prutas tulad ng hiwa ng lemon o sprig ng mint para sa karagdagang lasa at presentation.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Tricks</h2>
<ul>
    <li>
        <h3>Perfect na Boba Pearls:</h3>
        <p>Ang susi sa magandang Boba Milk Tea ay ang texture ng tapioca pearls. Dapat itong malambot at chewy, na may tamang pagka-matigas sa labas.</p>
        <p><strong>Tip:</strong> Huwag i-overcook ang pearls; dapat mayroon itong kaunting chew. Kung matagal na ang pearls pagkatapos magluto, maaari itong magdikit, kaya't ihain ito nang sariwa.</p>
    </li>
    <li>
        <h3>Balansihin ang Gatas at Tsaa:</h3>
        <p>Ang tamang balanse ng gatas at tsaa ay mahalaga sa Boba Milk Tea. Ang sobrang gatas ay magpapawala ng lasa ng tsaa, habang ang kakulangan sa gatas ay magpapait sa inumin.</p>
        <p><strong>Tip:</strong> Tikman ang tsaa pagkatapos magdagdag ng gatas at i-adjust ang ratio batay sa iyong preference. Ang ideal na ratio ay creamy ngunit patuloy na nagpapakita ng lasa ng tsaa.</p>
    </li>
    <li>
        <h3>Ang Tamis ay Mahalaga:</h3>
        <p>Ang tamis ng Boba Milk Tea ay mahalaga, ngunit huwag itong gawing sobra. Ang kaunting tamis ay nagpapahusay sa lasa nang hindi pinapalakas ang asukal.</p>
        <p><strong>Tip:</strong> Palaging tikman ang tsaa bago ihain upang tiyakin na tama ang tamis. Kung sobra ang tamis, magdagdag ng higit pang tsaa; kung kulang sa tamis, magdagdag ng kaunting asukal.</p>
    </li>
    <li>
        <h3>Palamigin ang Tsaa at Boba:</h3>
        <p>Siguraduhing malamig ang parehong tsaa at boba pearls bago ihain. Ang malamig na inumin ay mas refreshing at masarap, lalo na sa mainit na panahon.</p>
        <p><strong>Tip:</strong> Kung nagmamadali, maaari mong palamigin ang brewed na tsaa sa refrigerator bago ihain at itago ang lutong boba pearls sa refrigerator hanggang gamitin.</p>
    </li>
    <li>
        <h3>Creative Variations:</h3>
        <p>Maaari kang magdagdag ng karagdagang toppings tulad ng red bean paste, prutas, o kahit pudding upang gawing mas exciting at unique ang iyong Boba Milk Tea.</p>
        <p><strong>Tip:</strong> Mag-experiment sa iba't ibang flavors ng tsaa, tulad ng jasmine, oolong, o green tea, upang makagawa ng signature na inumin na tatak sa iyong Cookingdom journey.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 21 ng Cookingdom, ang paggawa ng perpektong Boba Milk Tea ay nangangailangan ng precision sa pagluluto ng tapioca pearls, pagbubrew ng tsaa, at pagbabalanse ng gatas at tamis. Bigyan ng pansin ang texture ng boba at tiyakin na ang tsaa at gatas ay magkasama para sa isang masarap at malasa na inumin.</p>
<p>Sa tamang paghahanda ng boba pearls at kaunting creativity, makakapag-impress ka sa iyong mga customer at magpapatuloy sa iyong paglalakbay sa Cookingdom!</p>
`,
  },
  {
    // Add entry for Level 22
    id: 'cookingdom-game-level-22',
    title: 'Cookingdom Level 22:<br>Madaling Smoothie',
    pageTitle: 'Cookingdom Level 22 - Gabay sa Madaling Smoothie',
    pageSubtitle:
      'Matutunan kung paano gumawa ng perpektong Madaling Smoothie sa Level 22 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_22.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
    iframeUrl: 'https://www.youtube.com/embed/_h0bTaAM-0o', // Placeholder
    seo: {
      title: 'Cookingdom Level 22 Gabay: Madaling Smoothie | Mga Tip at Estratehiya',
      description:
        'Masterin ang Madaling Smoothie sa Level 22 ng Cookingdom. Kumuha ng mga tip sa pagpili ng prutas, pag-blend, pagtamo ng tamang konsistensya, at paghahain.',
      keywords:
        'Cookingdom, Level 22, Madaling Smoothie, Healthy Drink, Pag-blend, Fruit Smoothie, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_22.webp', // Placeholder
      levelInfoHtml:
        '<h3>Madaling Smoothie</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-19',
          title: 'Cookingdom Level 19<br>Pie ng Kalabasa',
          imageUrl: '/images/guides_19.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-19' } },
        },
        {
          id: 'cookingdom-game-level-20',
          title: 'Cookingdom Level 20<br>Inihaw na Pabo',
          imageUrl: '/images/guides_20.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-20' } },
        },
        {
          id: 'cookingdom-game-level-21',
          title: 'Cookingdom Level 21<br>Boba Milk Tea',
          imageUrl: '/images/guides_21.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
<p>Sa Cookingdom, ipinakikilala ng Level 22 ang isang masarap at malusog na meryenda: ang Madaling Smoothie. Ang malamig na inuming ito ay perpekto para sa isang mabilis at masustansiyang meryenda, at ito ay nakatuon sa pagpapantay ng tamang dami ng prutas, yogurt, at iba pang mga sangkap upang makagawa ng isang malasa at makinis na inumin. Ang layunin ay gumawa ng perpektong smoothie nang mabilis upang masiyahan ang iyong mga customer at magpatuloy sa susunod na level.</p>
<p>Sa Cookingdom, ang level ng Madaling Smoothie ay nakatuon sa paghahanda ng isang masarap na inumin nang may kawastuhan. Kailangan mong pumili ng tamang mga prutas, i-blend ang mga ito ng perpekto, at ihain ito nang may tamang konsistensya. Kung ito man ay isang tropical mango smoothie o berry burst smoothie, ang susi sa tagumpay ay nasa tamang tekstura at lasa.</p>

<h2 id="goal">Mga Layunin ng Level 22</h2>
<ul>
    <li>
        <strong>Pumili ng Prutas:</strong> Piliin ang prutas na gagamitin sa iyong smoothie. Maaari kang gumamit ng kombinasyon ng mga prutas tulad ng saging, strawberry, blueberry, o mangga upang makagawa ng isang masarap at balanseng lasa.
    </li>
    <li>
        <strong>Magdagdag ng Yogurt o Likidong Base:</strong> Pumili ng yogurt o likidong base tulad ng gatas, almond milk, o katas ng orange upang matulungan ang pag-blend ng mga prutas sa isang makinis na konsistensya.
    </li>
    <li>
        <strong>Paghaluin ng Perpekto:</strong> Pagkatapos mong idagdag ang mga sangkap, i-blend ang mga ito hanggang sa maging makinis. Mag-ingat na huwag i-overblend o underblend, dahil nakakaapekto ito sa texture ng smoothie.
    </li>
    <li>
        <strong>Hainin ang Smoothie:</strong> Pagkatapos mag-blend, ibuhos ang smoothie sa isang baso at ihain ito kaagad. Maaari kang magdagdag ng garnish o karagdagang prutas para sa isang pandekorasyon na touch.
    </li>
</ul>

<h2 id="steps">Mga Hakbang sa Paggawa ng Madaling Smoothie</h2>
<ol>
    <li>
        <h3>Pumili ng Iyong Prutas:</h3>
        <p>Ang unang hakbang sa paggawa ng isang mahusay na Madaling Smoothie ay ang pagpili ng iyong prutas. Sa Cookingdom, mayroon kang iba't ibang mga opsyon, mula sa mga tropikal na prutas tulad ng mangga at pinya, hanggang sa mga klasikong pagpipilian tulad ng strawberry, blueberry, o saging.</p>
        <p><strong>Tip:</strong> Para sa isang tropical na smoothie, pagsamahin ang mangga, pinya, at kaunting coconut milk para sa isang refreshing na meryenda. Para sa isang berry smoothie, pagsamahin ang strawberry, blueberry, at raspberry para sa isang matamis at maasim na lasa.</p>
    </li>
    <li>
        <h3>Magdagdag ng Yogurt o Likidong Base:</h3>
        <p>Pagkatapos pumili ng prutas, kailangan mong magdagdag ng isang creamy na base upang matulungan ang pag-blend ng mga sangkap. Pumili ng yogurt para sa isang mas makapal at creamy na smoothie, o pumili ng gatas, almond milk, o katas ng orange para sa isang magaan na konsistensya.</p>
        <p><strong>Tip:</strong> Kung gusto mo ng dairy-free na opsyon, maganda ang almond milk o coconut milk bilang likidong base. Para sa isang mas mayamang smoothie, pumili ng full-fat yogurt o kahit Greek yogurt para sa dagdag na protina at creaminess.</p>
        <p><strong>Tip:</strong> Para sa dagdag na lasa at creaminess, maaari mo ring idagdag ang honey, agave, o maple syrup upang patamisin ang smoothie.</p>
    </li>
    <li>
        <h3>Paghaluin ang mga Sangkap:</h3>
        <p>Kapag naidagdag mo na ang prutas at likidong base, oras na para i-blend. Sa Cookingdom, kailangan mong i-blend ang mga sangkap ng mabuti hanggang sa makuha ang isang makinis at creamy na texture. Siguraduhin na i-blend ng tamang oras—ang overblending ay maaaring magdulot ng sobrang lapot, samantalang ang underblending ay mag-iiwan ng mga piraso ng prutas.</p>
        <p><strong>Tip:</strong> Magsimula sa mababang bilis at unti-unting dagdagan upang matiyak na lahat ay magkahalo nang pantay. Magdagdag ng kaunting likido kung ang smoothie ay sobrang lapot o kung nahihirapan ang blender.</p>
    </li>
    <li>
        <h3>Suriin ang Konsistensya:</h3>
        <p>Pagkatapos mag-blend, suriin ang konsistensya ng smoothie. Dapat itong maging makapal, creamy, at madaling inumin gamit ang straw. Kung masyadong makapal, magdagdag ng kaunting likido upang mapagaan ito. Kung masyadong manipis, magdagdag ng ilang piraso ng prutas o kaunting yogurt.</p>
        <p><strong>Tip:</strong> Kung ang smoothie ay masyadong chunky o malata, i-blend pa ito ng ilang segundo upang makuha ang nais na smoothness.</p>
    </li>
    <li>
        <h3>Hainin ang Smoothie:</h3>
        <p>Kapag nasiyahan ka na sa konsistensya, oras na upang ihain ang smoothie. Ibuhos ito sa isang malamig na baso at magdagdag ng garnishing na prutas o chia seeds, flax seeds, o granola para sa texture.</p>
        <p><strong>Tip:</strong> Para sa magandang presentasyon, maaari mo ring idagdag ang isang makulay na straw o ilang mint leaves bilang garnishing.</p>
        <p><strong>Tip:</strong> Ihain ang smoothie kaagad pagkatapos mag-blend para sa pinakamahusay na lasa at texture.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip at Tricks</h2>
<ul>
    <li>
        <h3>Gumamit ng Frozen na Prutas para sa Mas Makapal na Smoothie:</h3>
        <p>Ang frozen na prutas ay isang mahusay na karagdagan sa mga smoothie dahil ito ay nagpapalapot ng inumin at ginagawang malamig at refreshing.</p>
        <p><strong>Tip:</strong> Kung gumagamit ka ng sariwang prutas, isaalang-alang na i-freeze ito bago, lalo na ang saging o berry, upang magbigay ng tamang texture.</p>
    </li>
    <li>
        <h3>Ayusin ang Tamis Ayon sa Panlasa:</h3>
        <p>Tikman ang smoothie bago ihain at ayusin ang tamis kung kinakailangan. Maaari kang magdagdag ng honey, agave syrup, o isang patak ng fruit juice upang patamisin ito.</p>
        <p><strong>Tip:</strong> Kung nais mo ng sugar-free na smoothie, pumili ng naturally sweet fruits tulad ng mangga o saging at iwasan ang mga karagdagang pampatamis.</p>
    </li>
    <li>
        <h3>Mag-eksperimento sa mga Add-ins:</h3>
        <p>Sa Cookingdom, maaari kang maging malikhain sa iyong smoothies sa pamamagitan ng pagdagdag ng mga karagdagang sangkap tulad ng chia seeds, flax seeds, protein powder, o kahit spinach para sa dagdag na nutrisyon.</p>
        <p><strong>Tip:</strong> Ang pagdagdag ng isang dakot na spinach ay hindi gaanong makakaapekto sa lasa ngunit magpapataas ng mga benepisyo sa kalusugan ng smoothie.</p>
    </li>
    <li>
        <h3>Huwag I-overblend:</h3>
        <p>Mag-ingat na huwag i-overblend ang mga sangkap. Habang mahalaga ang pag-blend upang makuha ang makinis na texture, ang overblending ay maaaring magdulot ng sobrang pagdudumi o pagkawalan ng konsistensya ng smoothie.</p>
        <p><strong>Tip:</strong> I-blend ng 30-45 segundo, pagkatapos ay suriin ang konsistensya. Kung kinakailangan, i-blend pa ng ilang segundo.</p>
    </li>
    <li>
        <h3>Hainin Agad:</h3>
        <p>Ang mga smoothies ay pinakamahusay na inihahain ng sariwa, kaya tiyakin na ihain agad ang iyong smoothie pagkatapos mag-blend upang mapanatili ang kanyang texture at lasa.</p>
        <p><strong>Tip:</strong> Kung kailangan mong itago ang smoothie para sa ibang pagkakataon, ilagay ito sa isang airtight container sa ref at gamitin sa loob ng 24 oras, ngunit pinakamahusay itong inumin habang sariwa.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Level 22 ng Cookingdom, ang paggawa ng Madaling Smoothie ay nakatuon sa pagpili ng tamang prutas, pag-blend ng mga ito gamit ang isang creamy na base, at pagkuha ng perpektong konsistensya. Panatilihing makinis ang texture, ayusin ang tamis, at ihain nang malamig na may pandekorasyon na touch para sa pinakamataas na kasiyahan ng mga customer.</p>
<p>Ang pagiging master ng Madaling Smoothie ay hindi lamang magpapahusay sa iyong mga kasanayan sa Cookingdom, kundi maghahanda rin sa iyo para sa tagumpay sa mga susunod na level kung saan lilikha ka ng mas kumplikadong mga pagkain at inumin!</p>
`,
  },
  {
    // Add entry for Level 23
    id: 'cookingdom-game-level-23',
    title: 'Cookingdom Level 23:<br>Yule Log Cake',
    pageTitle: 'Cookingdom Level 23 - Gabay sa Yule Log Cake',
    pageSubtitle:
      'Pag-aralan ang paggawa ng Yule Log Cake (Bûche de Noël) sa Level 23 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_23.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
    iframeUrl: 'https://www.youtube.com/embed/FCFq9xRRobo', // Placeholder
    seo: {
      title: 'Gabay sa Cookingdom Level 23: Yule Log Cake | Tips & Strategy',
      description:
        'Pag-aralan ang paggawa ng Yule Log Cake sa Level 23 ng Cookingdom. Makakuha ng mga tip tungkol sa pagpapakulo ng sponge, pag-roll, pagpuno, frosting, at dekorasyon ng klasikong dessert na ito.',
      keywords:
        'Cookingdom, Level 23, Yule Log Cake, Bûche de Noël, Holiday Dessert, Gabay sa Pagbe-bake, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_23.webp', // Placeholder
      levelInfoHtml:
        '<h3>Yule Log Cake</h3><p><strong>Hirap:</strong> Mataas</p><p><strong>Inaasahang Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-20',
          title: 'Cookingdom Level 20<br>Roast Turkey',
          imageUrl: '/images/guides_20.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-20' } },
        },
        {
          id: 'cookingdom-game-level-21',
          title: 'Cookingdom Level 21<br>Boba Milk Tea',
          imageUrl: '/images/guides_21.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
        },
        {
          id: 'cookingdom-game-level-22',
          title: 'Cookingdom Level 22<br>Easy Smoothie',
          imageUrl: '/images/guides_22.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Maligayang pagdating sa Level 23 ng Cookingdom, kung saan susubok ang iyong kasanayan sa pagbe-bake gamit ang klasikong holiday dessert – ang Yule Log Cake (kilala rin bilang Bûche de Noël). Hinahamon ng level na ito ang mga manlalaro na maingat na mag-bake, mag-roll, at mag-dekorasyon ng isang festive sponge cake na may cream at tinakpan ng masarap na tsokolate. Mahalaga ang pagiging tumpak at ang tamang timing upang makumpleto ang masalimuot na dessert na ito at mapaligaya ang iyong mga virtual na customer.</p>
  <p>Ang mga gabay ng Cookingdom ay tutulong sa iyo upang mag-navigate sa bawat hakbang ng level na ito upang matiyak na ang iyong Yule Log Cake ay hindi lamang masarap kundi pati na rin kaakit-akit sa mata.</p>
  
  <h2 id="goal">Mga Layunin ng Level 23</h2>
  <ul>
      <li>Mag-bake ng isang magaan at flexible na sponge cake.</li>
      <li>Maghanda at magkalat ng creamy filling.</li>
      <li>I-roll ang sponge nang hindi nababasag.</li>
      <li>Frost ang log ng tsokolate icing.</li>
      <li>Mag-dekorasyon gamit ang holiday-themed toppings.</li>
      <li>Maghatid ng perpektong cakes sa loob ng oras.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay sa Pag-master ng Yule Log Cake</h2>
  <ol>
      <li>
          <h3>Ihanda ang Sponge Cake Batter</h3>
          <p>Sa Cookingdom, magsimula sa paghahalo ng itlog, asukal, harina, at cocoa powder.</p>
          <p><strong>Tip:</strong> I-whisk ang mga itlog at asukal hanggang maging magaan at malambot – ito ang magbibigay ng airy na texture sa iyong sponge.</p>
          <p><strong>Tip mula sa Cookingdom:</strong> Iwasang overmix ang harina upang mapanatili ang malambot na batter.</p>
      </li>
      <li>
          <h3>Mag-bake ng Sponge</h3>
          <p>Ilagay ang batter sa baking tray na may parchment paper.</p>
          <p>Mag-bake sa isang preheated oven hanggang maging firm – mga 10 minuto sa oras ng laro.</p>
          <p><strong>Tip:</strong> Dapat flexible ang sponge upang mai-roll nang hindi nababasag.</p>
      </li>
      <li>
          <h3>I-Roll Habang Mainit</h3>
          <p>Agad pagkatapos mag-bake, i-roll ang sponge (kasama ang parchment paper) habang mainit pa ito.</p>
          <p>Hayaan itong lumamig sa nakarolyang anyo — ito ay “magtra-train” sa cake at magpapigil sa pagkabasag nito mamaya.</p>
          <p><strong>Binibigyang-diin ng mga gabay ng Cookingdom na kung hindi ito gagawin, posibleng masira ang cake!</strong></p>
      </li>
      <li>
          <h3>Maghanda ng Cream Filling</h3>
          <p>Sa level na ito ng Cookingdom, i-whip ang heavy cream na may konting vanilla at asukal.</p>
          <p>Opsyonal: Magdagdag ng konting espresso o cocoa para sa dagdag na lasa.</p>
      </li>
      <li>
          <h3>I-fill at I-Roll</h3>
          <p>Maingat na i-unroll ang malamig na sponge, ikalat ang cream nang pantay, at dahan-dahang i-roll muli ito.</p>
          <p>Gamitin ang steady na mga kamay upang maiwasang mapunit.</p>
          <p><strong>Tip:</strong> Panatilihing mahigpit ang roll para sa mas magandang spiral effect kapag hiniwa.</p>
      </li>
      <li>
          <h3>Frost ang Log</h3>
          <p>Takpan ang roll ng tsokolate ganache o buttercream.</p>
          <p>Gamitin ang tinidor upang lumikha ng “bark” texture — isang mahalagang detalye sa Cookingdom na nagpapataas ng iyong score.</p>
          <p><strong>Tip:</strong> I-chill ang cake saglit upang mag-set ang frosting bago mag-dekorasyon.</p>
      </li>
      <li>
          <h3>Magdagdag ng Festive Decorations</h3>
          <p>Gamitin ang powdered sugar para sa snow-dusted effect.</p>
          <p>Magdagdag ng holly, berries, o edible mushrooms.</p>
          <p><strong>Pinapalakas ng mga gabay ng Cookingdom ang pagiging malikhain dito — ang dekorasyon ay nagpapataas ng iyong star rating!</strong></p>
      </li>
  </ol>
  
  <h2 id="tips">Pro Tips para sa Tagumpay sa Level 23</h2>
  <ul>
      <li>
          <h3>Ang Timing ay Mahalaga</h3>
          <p>Huwag i-overbake ang sponge; dapat ito ay malambot para i-roll.</p>
      </li>
      <li>
          <h3>Mahalaga ang Dekorasyon</h3>
          <p>Pinapalakas ng laro ang mga manlalaro na naglalaan ng oras sa dekorasyon. Mas festive, mas maganda!</p>
      </li>
      <li>
          <h3>Practice Makes Perfect</h3>
          <p>Ang level na ito ay maaaring mangailangan ng ilang pagsubok upang mag-master ang rolling at filling.</p>
      </li>
      <li>
          <h3>Combo Streaks</h3>
          <p>Magkumpleto ng maraming cakes nang mabilis upang mag-trigger ng bonus combos para sa mas mataas na score.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Cookingdom Level 23, ang mastering ng Yule Log Cake ay nangangailangan ng balanse ng kasanayan sa pagbe-bake, tumpak na timing, at pagiging malikhain. Mula sa paggawa ng perfect na sponge hanggang sa pag-dekorasyon ng iyong cake ng holiday flair, sinusubok ng level na ito ang lahat ng iyong natutunan. Sa tulong ng mga gabay ng Cookingdom, magra-roll ka patungo sa tagumpay at iiwan ang iyong mga customer ng puno ng holiday cheer!</p>
  `,
  },
  {
    // Add entry for Level 24
    id: 'cookingdom-game-level-24',
    title: 'Cookingdom Level 24:<br>Beef Pho',
    pageTitle: 'Cookingdom Level 24 - Gabay sa Beef Pho',
    pageSubtitle:
      'Masterin ang paggawa ng masarap na Vietnamese Beef Pho sa Level 24 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: true,
    imageUrl: '/images/guides_24.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
    iframeUrl: 'https://www.youtube.com/embed/iKRnARMMl_0', // Placeholder
    seo: {
      title: 'Gabay sa Cookingdom Level 24: Beef Pho | Mga Tip at Estratehiya',
      description:
        'Masterin ang Beef Pho sa Level 24 ng Cookingdom. Makakuha ng mga tip sa pagpapalasa ng sabaw, pagluluto ng noodles, paghiwa ng karne, at pagbuo ng masarap na Vietnamese soup na ito.',
      keywords:
        'Cookingdom, Level 24, Beef Pho, Vietnamese Soup, Noodle Soup, Sabaw, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_24.webp', // Placeholder
      levelInfoHtml:
        '<h3>Beef Pho</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-21',
          title: 'Cookingdom Level 21<br>Boba Milk Tea',
          imageUrl: '/images/guides_21.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-21' } },
        },
        {
          id: 'cookingdom-game-level-22',
          title: 'Cookingdom Level 22<br>Easy Smoothie',
          imageUrl: '/images/guides_22.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
        },
        {
          id: 'cookingdom-game-level-23',
          title: 'Cookingdom Level 23<br>Yule Log Cake',
          imageUrl: '/images/guides_23.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang Pagtingin sa Laro</h2>
  <p>Sa Cookingdom Level 24, ipakikilala sa iyo ang Beef Pho, isang masarap at mabangong Vietnamese noodle soup. Ang hamon dito ay ang pagkuha ng tamang sabaw, pagluluto ng karne sa tamang antas, at pagbubuo ng ulam gamit ang lahat ng mga kinakailangang garnishes. Ang kombinasyon ng mabangong mga herbs, rice noodles, at manipis na hiniwang karne ng baka ay ginagawang paborito ang ulam na ito, at sa Cookingdom, ang lahat ay tungkol sa pagtama sa bawat hakbang upang matiyak na nasisiyahan ang iyong mga customer.</p>
  <p>Ang level na ito ay nangangailangan ng precision at atensyon sa detalye, dahil ang Beef Pho ay may maraming hakbang: pagpapalasa ng sabaw, paghahanda ng noodles, at siguraduhing tama ang pagkaluto ng karne. Ang mga gabay sa laro ng Cookingdom ay magbibigay sa iyo ng hakbang-hakbang na mga tagubilin upang magtagumpay sa level na ito.</p>
  
  <h2 id="goal">Layunin ng Level 24</h2>
  <ul>
      <li>Pakuluin ang sabaw gamit ang tamang mga spices at sangkap.</li>
      <li>Maghanda ng rice noodles at tiyaking malambot ito.</li>
      <li>Pagluto ng hiniwang karne sa tamang antas ng luto.</li>
      <li>Pagbuo ng pho gamit ang mga sariwang herbs, bean sprouts, at kalamansi.</li>
      <li>Ihain ang pho habang mainit at masarap.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay sa Paggawa ng Beef Pho</h2>
  <ol>
      <li>
          <h3>Pakuluin ang Sabaw</h3>
          <p>Simulan sa pagpapalasa ng sabaw sa Cookingdom. Ang susi sa isang masarap na sabaw ng pho ay ang pagpapakulo ng matagal. Sa laro, magdagdag ng mga buto ng baka, sibuyas, luya, at mga spices tulad ng star anise, cloves, kanela, at cardamom. Pakuluan ang mga sangkap na ito ng matagal (karaniwang 30-40 minuto sa laro).</p>
          <p><strong>Tip:</strong> Alisin ang mga dumi na lumulutang sa ibabaw upang mapanatiling malinis at malinaw ang sabaw.</p>
      </li>
      <li>
          <h3>Maghanda ng Rice Noodles</h3>
          <p>Habang pinapakulo ang sabaw, oras na para maghanda ng rice noodles. Sa Cookingdom, kailangan mong lutuin ang mga ito hanggang sa maging malambot ngunit hindi malata.</p>
          <p><strong>Tip:</strong> Huwag overcook ang noodles. Dapat ay may konting kagat pa ito, dahil magpapatuloy pa itong lumambot kapag inihain kasama ang mainit na sabaw.</p>
      </li>
      <li>
          <h3>Hiwain ang Karne ng Baka</h3>
          <p>Ang Beef Pho ay karaniwang inihahain na may manipis na hiniwang hilaw na karne ng baka na lulutuin sa mainit na sabaw. Sa Cookingdom, hihingin kang hiwain ang karne ng baka ng pino at laban sa hibla.</p>
          <p><strong>Tip:</strong> I-freeze ang karne ng baka ng 10-15 minuto bago hiwain upang maging mas madali ang paghihiwa ng manipis na piraso.</p>
      </li>
      <li>
          <h3>Buoin ang Pho</h3>
          <p>Kapag handa na ang sabaw at naluto na ang noodles, oras na upang buuin ang pho. Ilagay ang noodles sa mangkok, pagkatapos ay ilagay ang mga hiniwang hilaw na piraso ng karne sa ibabaw. Ibuhos ang mainit na sabaw sa ibabaw ng karne, at hayaang maluto ang mga piraso ng karne sa init ng sabaw.</p>
          <p><strong>Tip:</strong> Siguraduhing ibuhos ang sabaw nang dahan-dahan sa ibabaw ng karne upang maluto ito ng pantay-pantay, ngunit huwag hayaang magtagal ito sa sabaw upang hindi maluto nang labis ang karne.</p>
      </li>
      <li>
          <h3>Magdagdag ng Sariwang Herbs at Garnishes</h3>
          <p>Sa Cookingdom, ang huling detalye ay mahalaga: magdagdag ng sariwang herbs tulad ng cilantro, basil, at green onions, pati na rin ang kalamansi at bean sprouts sa gilid.</p>
          <p><strong>Tip:</strong> Kung gusto mo ng extra na lasa, magdagdag ng ilang piraso ng jalapeño o isang patak ng hoisin sauce at sriracha para sa anghang.</p>
      </li>
      <li>
          <h3>Ihain ang Pho</h3>
          <p>Ihain ang pho habang mainit, siguraduhing ang karne ay bahagyang pink pa sa gitna at perpektong malambot. Magpapatuloy pa ang pagluto ng karne sa mainit na sabaw habang tinatangkilik ito ng iyong customer.</p>
          <p><strong>Tip:</strong> Siguraduhing ang sabaw ay umuusok at mabangong-bango, dahil ang amoy ay isang malaking bahagi ng karanasan sa pho.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Pro Tips para sa Tagumpay sa Level 24</h2>
  <ul>
      <li>
          <h3>Pagtuunan ng Pansin ang Sabaw</h3>
          <p>Ang sabaw ay puso ng anumang pho. Pakuluan ito ng matagal at tiyaking balanse ang mga spices.</p>
          <p><strong>Tip:</strong> Kung masyadong malakas ang lasa ng sabaw, maaari mong diluting ito gamit ang kaunting tubig; kung mahina naman, pakuluan pa ito ng mas matagal.</p>
      </li>
      <li>
          <h3>Huwag Overcook ang Noodles</h3>
          <p>Madaling maluto ang rice noodles. Ang pag-oovercook nito ay magreresulta sa malambot at malata na tekstura. Bantayan ang timer at alisin ito kapag ito'y malambot na.</p>
      </li>
      <li>
          <h3>Hiwain ng Tamang Manipis ang Karne</h3>
          <p>Ang mga hiniwang karne ay dapat na manipis na manipis upang maluto agad sa mainit na sabaw. Gumamit ng matalim na kutsilyo para sa pinakamagandang resulta. Ang pag-freeze sa karne bago ito hiwain ay makakatulong sa paggawa ng manipis na hiwa.</p>
      </li>
      <li>
          <h3>Mga Kagustuhan ng Customer</h3>
          <p>Ang ilang mga customer ay maaaring humiling ng dagdag na herbs o sriracha para sa dagdag na anghang. Laging suriin ang kanilang mga kagustuhan at magdagdag ng mga karagdagang topping kapag kinakailangan.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Cookingdom Level 24, ang paggawa ng Beef Pho ay nangangailangan ng perpektong balanse ng mga sangkap, oras, at presentasyon. Mula sa pagpapalasa ng isang masarap na sabaw hanggang sa pagbuo ng ulam gamit ang tamang garnishes, ang level na ito ay tungkol sa atensyon sa detalye. Sa pamamagitan ng pagsunod sa mga gabay sa laro ng Cookingdom, matututuhan mong tamaing lutuin ang sabaw, perpektong hiwain ang karne, at buuin ang pho gamit ang tamang kumbinasyon ng herbs at spices.</p>
  <p>Sa pasensya at pagsasanay, mamahalin mo ang paggawa ng Beef Pho at magpapatuloy ang iyong paglalakbay sa masarap at masayang mundo ng Cookingdom!</p>
  `,
  },
  {
    // Add entry for Level 25
    id: 'cookingdom-game-level-25',
    title: 'Cookingdom Level 25:<br>Pizza',
    pageTitle: 'Cookingdom Level 25 - Gabay sa Pizza',
    pageSubtitle:
      'Matutunan kung paano gumawa ng perpektong Pizza mula sa simula sa Level 25 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_25.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
    iframeUrl: 'https://www.youtube.com/embed/BJJ9KEWeJBc', // Placeholder
    seo: {
      title: 'Cookingdom Level 25 Gabay: Pizza | Mga Tip at Estratehiya',
      description:
        'Maging eksperto sa paggawa ng Pizza sa Level 25 ng Cookingdom. Makakuha ng mga tip sa paggawa ng masa, sarsa, mga toppings, pagluluto, at paghahain ng perpektong pizza.',
      keywords:
        'Cookingdom, Level 25, Pizza, Pizza Dough, Pagluluto, Toppings, Pagkain ng Italyano, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_25.webp', // Placeholder
      levelInfoHtml:
        '<h3>Pizza</h3><p><strong>Antas ng Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-22',
          title: 'Cookingdom Level 22<br>Easy Smoothie',
          imageUrl: '/images/guides_22.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-22' } },
        },
        {
          id: 'cookingdom-game-level-23',
          title: 'Cookingdom Level 23<br>Yule Log Cake',
          imageUrl: '/images/guides_23.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
        },
        {
          id: 'cookingdom-game-level-24',
          title: 'Cookingdom Level 24<br>Beef Pho',
          imageUrl: '/images/guides_24.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang Ideya ng Laro</h2>
  <p>Sa Cookingdom Level 25, ang iyong gawain ay maghanda ng isa sa pinakapopular at pinakapuno ng lasa na pagkain: Pizza. Ang level na ito ay isang hamon upang makagawa ng perpektong pizza, mula sa paggawa ng masa, paghahanda ng mga toppings, at pagluluto nito sa tamang golden crisp. Sa iba't ibang uri ng toppings na magagamit, susubok ang Cookingdom sa iyong kakayahan na magbalanse ng mga lasa at texture upang lumikha ng ultimate pizza.</p>
  <p>Ang layunin ay tiyakin na ang iyong pizza ay perpektong lutong, na may malutong na crust, pantay na pagkakalagay ng mga toppings, at tamang dami ng keso at sarsa. Sa gabay na ito ng Cookingdom, tatalakayin natin ang bawat hakbang na kailangan mong gawin upang magtagumpay sa Level 25 at mapasaya ang iyong mga customer.</p>
  
  <h2 id="goal">Mga Layunin ng Level 25</h2>
  <ul>
      <li>Ihanda ang masa ng pizza mula sa simula.</li>
      <li>I-apply ang sarsa ng pantay-pantay sa masa.</li>
      <li>Magdagdag ng tamang dami ng keso at toppings.</li>
      <li>I-bake ang pizza hanggang sa maging malutong at perpekto.</li>
      <li>Ihain ang pizza habang mainit at masarap.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay sa Paggawa ng Pizza</h2>
  <ol>
      <li>
          <h3>Ihanda ang Masa ng Pizza</h3>
          <p>Sa Cookingdom, ang paggawa ng perpektong masa ng pizza ay mahalaga. Ang masa ay kailangang magaan at malambot ngunit matibay upang mag-hold ng toppings.</p>
          <p>Simulan sa paghahalo ng harina, lebadura, tubig, olive oil, at asin upang makagawa ng makinis na masa.</p>
          <p><strong>Tip:</strong> Masahihin ang masa ng hindi bababa sa 5-7 minuto upang ma-activate ang gluten at matiyak ang chewy ngunit malutong na crust.</p>
      </li>
      <li>
          <h3Pahingahin ang Masa</h3>
          <p>Matapos i-masa, hayaang magpahinga ang masa ng mga 30 minuto upang tumaas. Doblehin ng masa ang laki nito. Sa oras na ito, gumagana ang lebadura upang gumawa ng mga bula na magbibigay sa crust ng magaan na texture.</p>
          <p><strong>Tip:</strong> Sa Cookingdom, kung palampasin mo ang hakbang na ito, hindi tumaas ng maayos ang iyong masa na magdudulot ng matigas at chewy na crust.</p>
      </li>
      <li>
          <h3>Ibuwal ang Masa</h3>
          <p>Kapag tumaas na ang masa, dahan-dahang tapikin ito upang palabasin ang hangin. Ibuwal ang masa sa isang ibabaw ng may harina hanggang maabot ang nais na kapal.</p>
          <p><strong>Tip:</strong> Kung nais mo ng mas manipis na crust, ibuwal ang masa ng mas manipis. Para sa mas makapal na crust, iwanan itong medyo makapal.</p>
          <p><strong>Tip:</strong> Kung nais mo ng malutong na crust, siguraduhing mas manipis ang masa sa paligid ng mga gilid.</p>
      </li>
      <li>
          <h3>I-apply ang Sarsa</h3>
          <p>Sa Cookingdom, ang susunod na hakbang ay ang pagkalat ng tomato sauce o white sauce ng pantay-pantay sa masa.</p>
          <p>Huwag ilagay ang sobrang dami—gamitin ang manipis na layer upang maiwasan ang pagka-mabasa ng pizza.</p>
          <p><strong>Tip:</strong> Para sa dagdag na lasa, maaari kang magdagdag ng kaunting garlic powder, oregano, o basil sa sarsa bago ito ikalat sa masa.</p>
      </li>
      <li>
          <h3>Magdagdag ng Keso at Toppings</h3>
          <p>Kapag naikalat na ang sarsa, oras na upang ilagay ang keso sa pizza. Ang mozzarella ang pinaka-karaniwang pinipili, ngunit maaari ka ring gumamit ng halo-halong keso tulad ng cheddar, parmesan, o goat cheese para sa dagdag na lasa.</p>
          <p><strong>Tip:</strong> Magdagdag ng maraming keso upang makuha ang malasa at malagkit na resulta.</p>
          <p>Pagkatapos ng keso, magdagdag ng iyong piniling toppings. Maaari kang gumamit ng pepperoni, kabute, at green peppers, o maging malikhain gamit ang sausage, sibuyas, o kahit pineapple.</p>
          <p><strong>Tip:</strong> Siguraduhing pantay-pantay ang mga toppings upang makuha ang balanse sa bawat kagat.</p>
      </li>
      <li>
          <h3>I-bake ang Pizza</h3>
          <p>Susundin ka ng Cookingdom sa proseso ng pag-bake ng pizza. Siguraduhin na ang iyong oven ay preheated sa paligid ng 475°F (245°C). Ilagay ang pizza sa isang baking sheet o pizza stone.</p>
          <p>I-bake ang pizza ng 10-15 minuto, depende sa kapal ng crust at mga toppings. Ang pizza ay handa na kapag ang crust ay golden brown at ang keso ay bubbly at bahagyang browned.</p>
          <p><strong>Tip:</strong> Laging bantayan ang pizza, dahil maaaring mag-iba ang oras ng pagluluto depende sa kapal ng masa at mga toppings.</p>
      </li>
      <li>
          <h3>Hiwain at Ihain</h3>
          <p>Kapag tapos na ang pizza, alisin ito mula sa oven at hayaang mag-cool ng ilang minuto.</p>
          <p>Gamitin ang pizza cutter upang i-slice ang pizza sa perpektong mga piraso.</p>
          <p><strong>Tip:</strong> Ihain ang pizza agad habang ang keso ay malagkit pa at ang crust ay malutong.</p>
          <p>Bonus: Magdagdag ng kaunting fresh basil o drizzle ng olive oil para sa dagdag na lasa bago ihain.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Pro Tip para sa Tagumpay sa Level 25</h2>
  <ul>
      <li>
          <h3>Huwag Maglagay ng Sobrang Toppings</h3>
          <p>Habang nakakalugod maglagay ng maraming toppings, binibigyang halaga ng Cookingdom ang balanseng pizza. Ang labis na toppings ay maaaring magresulta sa hindi pantay na pagluluto o basang crust.</p>
          <p><strong>Tip:</strong> Mas magaan ay mas mabuti! Panatilihing 3-4 na toppings na magkasunod na tumutugma.</p>
      </li>
      <li>
          <h3>Perpektong Texture ng Masa</h3>
          <p>Ang magaan, malambot na masa ay susi sa mahusay na pizza. Huwag madaliin ang paggawa ng masa; ang pagmasa at pagpapahinga nito ng maayos ay magbibigay sa iyo ng pinakamahusay na crust.</p>
          <p><strong>Tip:</strong> Kung ang masa ay malagkit, magdagdag ng kaunting harina, ngunit mag-ingat na huwag maging sobrang tuyo.</p>
      </li>
      <li>
          <h3>Tamangg Luto ng Pizza</h3>
          <p>Pinapayagan ka ng Cookingdom na mag-bake ng pizza sa mataas na temperatura, kaya siguraduhin na ang oven ay fully preheated. Ang mainit na oven ay nagtitiyak ng malutong, golden crust.</p>
          <p><strong>Tip:</strong> Kung gagamit ka ng pizza stone, i-preheat ito sa oven para sa dagdag na crispiness.</p>
      </li>
      <li>
          <h3>Panatilihing Tinututok ang Oras</h3>
          <p>Ang timing ay napakahalaga sa Cookingdom. Huwag hayaang magtagal ang pizza sa oven, o masyado itong matutuyo at masusunog.</p>
<p><strong>Tip:</strong> Suriin ang pizza pagkatapos ng 10 minuto. Kapag ang keso ay nagsimulang mag-bubble at ang gilid ng crust ay golden, oras na upang alisin ito.</p>
</li>

</ul> <h2 id="summary">Buod</h2> <p>Ang Cookingdom Level 25 ay naglalaman ng hamon upang gumawa ng perpektong Pizza mula sa simula, mula sa paggawa ng masa hanggang sa pagdagdag ng tamang dami ng keso at toppings. Ang susi sa tagumpay ay ang balanseng lasa at texture, na tinitiyak na malutong ang crust at natutunaw ng tama ang keso.</p> <p>Sa pamamagitan ng pagsunod sa mga gabay ng Cookingdom, makakamtan mo ang bawat hakbang mula sa paggawa ng masa hanggang sa tamang pagluluto. Kapag natutunan mo nang tama ang paggawa ng pizza, handa ka nang harapin ang mas kumplikadong mga putahe sa mga susunod na level.</p> `,
  },
  {
    // Add entry for Level 26
    id: 'cookingdom-game-level-26',
    title: 'Cookingdom Level 26:<br>Smoothie',
    pageTitle: 'Cookingdom Level 26 - Gabay sa Smoothie',
    pageSubtitle:
      'Matutunan kung paano mag-blend ng perpektong Smoothie sa Level 26 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_26.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
    iframeUrl: 'https://www.youtube.com/embed/BK2eYJhoKl8', // Placeholder
    seo: {
      title: 'Cookingdom Level 26 Gabay: Smoothie | Mga Tips at Istratehiya',
      description:
        'Masterin ang Smoothie sa Level 26 ng Cookingdom. Makakuha ng mga tips sa pagpili ng prutas, likido, pag-blend sa tamang consistency, at garnishing.',
      keywords:
        'Cookingdom, Level 26, Smoothie, Inuming Healthy, Pag-blend, Inuming Prutas, Gabay, Istratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_26.webp', // Placeholder
      levelInfoHtml:
        '<h3>Smoothie</h3><p><strong>Hirap:</strong> Madali</p><p><strong>Oras:</strong> 2 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-23',
          title: 'Cookingdom Level 23<br>Yule Log Cake',
          imageUrl: '/images/guides_23.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-23' } },
        },
        {
          id: 'cookingdom-game-level-24',
          title: 'Cookingdom Level 24<br>Beef Pho',
          imageUrl: '/images/guides_24.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
        },
        {
          id: 'cookingdom-game-level-25',
          title: 'Cookingdom Level 25<br>Pizza',
          imageUrl: '/images/guides_25.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Level 26, ang iyong gawain ay maghanda ng isang <a href="/level-22" title="level 22 smoothie">Smoothie</a>, isang nakakainis at healthy na inumin. Ang level na ito ay nakatuon sa pag-blend ng tamang mga sangkap upang makuha ang makinis at creamy na texture na hindi masyadong makapal o malabnaw. Kailangan mong maingat na pumili ng mga prutas, likido, at additives upang makuha ang perpektong balanse ng mga lasa. Ang Cookingdom ay magbibigay sa iyo ng hamon upang pagsamahin ang iyong mga sangkap nang tumpak upang mapasaya ang iyong mga customer sa laro.</p>
  <p>Ang gabay na ito ay magtuturo sa iyo ng mga hakbang upang gumawa ng perpektong smoothie sa Cookingdom, tinitiyak na ang iyong obra ay parehong masarap at kaakit-akit sa mata.</p>
  
  <h2 id="goal">Mga Layunin sa Level 26</h2>
  <ul>
      <li>Pumili ng tamang prutas para sa base ng smoothie.</li>
      <li>Magdagdag ng likido tulad ng gatas, katas ng prutas, o yogurt.</li>
      <li>Paghaluin upang makuha ang tamang consistency.</li>
      <li>I-serve ang smoothie na may mga opsyonal na garnishes.</li>
      <li>Gumawa ng maraming variation upang mapanatiling masaya ang iyong mga customer.</li>
  </ul>
  
  <h2 id="steps">Step-by-Step Gabay sa Paggawa ng Smoothie</h2>
  <ol>
      <li>
          <h3>Pumili ng Base na Prutas</h3>
          <p>Sa Cookingdom, may iba't ibang mga prutas na maaari mong piliin tulad ng saging, strawberry, blueberry, at mangga. Ang susi ay pumili ng tamang balanse ng mga prutas na nagko-kombina ng maayos.</p>
          <p><strong>Tip:</strong> Para sa makapal na smoothie, pumili ng saging o mangga. Para sa mas magaan na texture, subukan ang mga berry o pinya.</p>
      </li>
      <li>
          <h3>Magdagdag ng mga Likido</h3>
          <p>Ang susunod na hakbang ay magdagdag ng likido. Maaari mong piliin ang mga opsyon tulad ng gatas, almond milk, katas ng orange, o yogurt. Ang likido ay tumutulong sa paghahalo ng prutas nang maayos at tumutukoy sa huling consistency ng smoothie.</p>
          <p><strong>Tip:</strong> Kung nais mo ng mas creamy na texture, piliin ang yogurt o gatas. Kung nais mo ng mas magaan na smoothie, mas maganda ang katas ng prutas o tubig.</p>
      </li>
      <li>
          <h3>Magdagdag ng Opsyonal na Mga Sangkap</h3>
          <p>Sa Cookingdom, maaari mong idagdag ang iba pang mga sangkap upang mapabuti ang lasa at texture ng iyong smoothie, tulad ng:</p>
          <ul>
              <li>Honey o agave syrup para sa tamis.</li>
              <li>Spinach o kale para sa dagdag na nutrisyon.</li>
              <li>Yelo upang gawing malamig at makapal.</li>
              <li>Protein powder o peanut butter para sa protein-packed na smoothie.</li>
          </ul>
          <p><strong>Tip:</strong> Mag-ingat sa antas ng tamis; ang labis na honey o syrup ay maaaring magtakip sa natural na lasa ng prutas.</p>
      </li>
      <li>
          <h3>Pag-blend Hanggang Perpekto</h3>
          <p>Kapag nailagay mo na ang lahat ng mga sangkap sa blender, oras na upang paghaluin ito! Ang layunin ay makuha ang makinis, lump-free na consistency. Sa Cookingdom, kailangan mong bantayan ang proseso ng pag-blend nang mabuti.</p>
          <p><strong>Tip:</strong> Magsimula sa isang maiikling cycle ng pag-blend, tingnan ang texture, at mag-blend pa kung kinakailangan. Kung ang smoothie ay masyadong makapal, magdagdag ng likido; kung masyadong malabnaw, magdagdag ng prutas o yelo.</p>
      </li>
      <li>
          <h3>Tikman at I-adjust</h3>
          <p>Pagkatapos mag-blend, maglaan ng oras upang tikman ang smoothie sa Cookingdom. I-adjust ang tamis, asididad, o kapal kung kinakailangan.</p>
          <p><strong>Tip:</strong> Kung masyadong matamis, magdagdag ng konting lemon juice o lime para sa isang fresh na kick. Kung masyadong makapal, magdagdag ng kaunting likido.</p>
      </li>
      <li>
          <h3>Garnish at I-serve</h3>
          <p>Upang bigyan ang iyong smoothie ng isang propesyonal na hitsura, magdagdag ng mga garnishes tulad ng:</p>
          <ul>
              <li>Sariwang hiwa ng prutas (tulad ng strawberry sa gilid o hiwa ng saging).</li>
              <li>Mint leaves para sa fresh na hitsura.</li>
              <li>Chia seeds o granola para sa texture.</li>
          </ul>
          <p><strong>Tip:</strong> Mahalaga ang presentasyon sa Cookingdom! Ang mas kaakit-akit na hitsura ng iyong smoothie, mas mataas ang kasiyahan ng customer.</p>
      </li>
      <li>
          <h3>I-serve at Pasayahin ang Iyong Customer</h3>
          <p>Kapag nasiyahan ka na sa lasa at hitsura ng iyong smoothie, i-serve ito agad. Ang huling produkto ay dapat na makinis, creamy, at masarap, na may makulay na hitsura at nakaka-refresh na amoy.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Pro Tips para sa Tagumpay sa Level 26</h2>
  <ul>
      <li>
          <h3>Pagbalanse ng Prutas at Likido</h3>
          <p>Ang susi sa perpektong smoothie ay balanse. Pumili ng mga prutas na bagay magkasama, at palaging magdagdag ng tamang halaga ng likido upang matulungan ang pag-blend nang hindi ginagawang malabnaw ang smoothie.</p>
      </li>
      <li>
          <h3>Gamitin ang Yelo ng Tama</h3>
          <p>Habang ang yelo ay makakatulong na gawing makapal ang smoothie, masyado nitong malalabnaw ang lasa kung labis. Magdagdag lamang ng kaunting yelo para sa refreshing na texture.</p>
      </li>
      <li>
          <h3>I-customize para sa Mga Hiling ng Customer</h3>
          <p>Ang ilang mga customer ay maaaring gusto ng green smoothies o humiling ng partikular na sangkap tulad ng berries o protein powder. Maging attentive sa mga request ng customer upang mapataas ang iyong rating.</p>
      </li>
      <li>
          <h3>Watch the Blending Time</h3>
          <p>Huwag mag-over-blend! Bantayan ang consistency. Ang sobrang pag-blend ay maaaring magresulta sa isang malabnaw na smoothie.</p>
      </li>
      <li>
          <h3>Eksperimento sa Superfoods</h3>
          <p>Nais mong maging kakaiba? Magdagdag ng superfoods tulad ng chia seeds, flax seeds, o spirulina sa smoothie para sa dagdag na health benefits at competitive edge sa Cookingdom.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Cookingdom Level 26, ang paggawa ng perpektong Smoothie ay nangangailangan ng tamang balanse ng mga prutas, likido, at opsyonalna mga sangkap, na lahat ay hinahalo nang perpekto. Kung naglalayon kang gumawa ng isang tropical smoothie gamit ang mangga at pinya o isang berry-packed na inumin gamit ang strawberry at blueberry, ang level na ito ay tungkol sa precision at creativity.</p>

<p>Sa pagsunod sa mga gabay ng Cookingdom, madali mong matutunan ang paggawa ng smoothie. Kumuha ng tamang consistency, garnish nang may estilo, at i-serve ang isang masarap na treat na magpapasaya sa iyong mga customer!</p> `,
  },
  {
    // Add entry for Level 27
    id: 'cookingdom-game-level-27',
    title: 'Cookingdom Level 27:<br>Sandwich',
    pageTitle: 'Cookingdom Level 27 - Gabay sa Sandwich',
    pageSubtitle: 'Alamin kung paano maghanda ng perpektong Sandwich sa Level 27 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_27.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
    iframeUrl: 'https://www.youtube.com/embed/vWz6SmiMBk0', // Placeholder
    seo: {
      title: 'Cookingdom Level 27 Gabay: Sandwich | Mga Tip at Istratehiya',
      description:
        'Masterin ang Sandwich sa Level 27 ng Cookingdom. Kumuha ng mga tip tungkol sa pagpili ng tinapay, protina, gulay, mga sawsawan, pag-layer, at paghahain.',
      keywords:
        'Cookingdom, Level 27, Sandwich, Mabilis na Pagkain, Pag-layer, Tinapay, Protina, Gabay, Istratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_27.webp', // Placeholder
      levelInfoHtml:
        '<h3>Sandwich</h3><p><strong>Kahirapan:</strong> Madali</p><p><strong>Tinatayang Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-24',
          title: 'Cookingdom Level 24<br>Beef Pho',
          imageUrl: '/images/guides_24.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-24' } },
        },
        {
          id: 'cookingdom-game-level-25',
          title: 'Cookingdom Level 25<br>Pizza',
          imageUrl: '/images/guides_25.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
        },
        {
          id: 'cookingdom-game-level-26',
          title: 'Cookingdom Level 26<br>Smoothie',
          imageUrl: '/images/guides_26.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Level 27, ikaw ay itatalaga na maghanda ng isang masarap na Sandwich, isang mabilis ngunit kasiya-siyang pagkain. Bagamat tila simple lang, ang paggawa ng perpektong sandwich sa Cookingdom ay nangangailangan ng tamang kombinasyon ng mga sangkap at maingat na pag-aassemble upang mapasaya ang iyong mga customer. Ang level na ito ay naglalayong subukan ang iyong pagiging malikhain, balanse ng mga lasa, at kakayahang mag-layer ng mga sangkap upang makuha ang pinakamataas na kasiyahan.</p>
  <p>Dapat mayroong malutong at masarap na kombinasyon ng tinapay, protina, gulay, at sawsawan ang iyong sandwich. Mahalaga na makuha mo ang tamang layering upang siguruhing bawat kagat ay balanse at masarap. Gabay na ito ay magtuturo sa iyo ng bawat hakbang upang matutunan mong magtagumpay sa Cookingdom Level 27 at maghain ng perpektong sandwich.</p>
  
  <h2 id="goal">Mga Layunin ng Level 27</h2>
  <ul>
      <li>Pumili ng tinapay para sa sandwich.</li>
      <li>Pumili ng protina (halimbawa, manok, pabo, o baka).</li>
      <li>Magdagdag ng mga gulay para sa crunch at lasa.</li>
      <li>Magdagdag ng mga sawsawan at mga dagdag tulad ng keso.</li>
      <li>Assemble ang sandwich at ihain ng sariwa.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay para Ma-master ang Sandwich</h2>
  <ol>
      <li>
          <h3>Pumili ng Tinapay</h3>
          <p>Ang tinapay ay pundasyon ng bawat mahusay na sandwich. Sa Cookingdom, magkakaroon ka ng iba't ibang mga pagpipilian ng tinapay, tulad ng puting tinapay, whole wheat, ciabatta, o baguette. Ang uri ng tinapay ay makakaapekto sa texture at pangkalahatang lasa.</p>
          <p><strong>Tip:</strong> Para sa isang mas malutong na sandwich, pumili ng baguette o ciabatta. Para sa mas malambot na sandwich, piliin ang whole wheat o puting tinapay.</p>
          <p><strong>Tip:</strong> Sa Cookingdom, maaaring kailanganin mo ring i-toast ang tinapay para sa dagdag na crunch.</p>
      </li>
      <li>
          <h3>Magdagdag ng Protina</h3>
          <p>Pinapayagan ka ng Cookingdom na pumili ng protina para sa sandwich, tulad ng inihaw na manok, pabo, ham, o kahit na beef patties.</p>
          <p>Ilagay ang protina sa iyong tinapay, siguraduhing pantay ang pagkakalagay nito sa bawat hiwa. Ang protina ang magbibigay ng pangunahing lasa at sustansya sa sandwich.</p>
          <p><strong>Tip:</strong> Siguraduhing lutong-luto ang protina at hindi nito matakpan ang ibang mga sangkap. Ang inihaw na manok at pabo ay mga popular na pagpipilian para sa isang balanse na sandwich.</p>
      </li>
      <li>
          <h3>Layer ng mga Gulay</h3>
          <p>Ang mga gulay ay nagbibigay ng crunch at sariwa na lasa sa sandwich. Ang lettuce, kamatis, sibuyas, at pickles ay mga klasikong pagpipilian.</p>
          <p><strong>Tip:</strong> Gupitin ang mga gulay nang pantay-pantay at i-layer ang mga ito upang matiyak na makakakuha ka ng bawat lasa sa bawat kagat. Huwag maglagay ng sobrang gulay, dahil magiging mahirap kainin ang sandwich.</p>
          <p><strong>Tip:</strong> Sa Cookingdom, palaging gumamit ng sariwang gulay para sa pinakamagandang lasa at hitsura.</p>
      </li>
      <li>
          <h3>Magdagdag ng mga Sawsawan at Keso</h3>
          <p>Ngayon ay panahon na upang magdagdag ng lasa! Ang mga sawsawan tulad ng mayonesa, mustasa, ketchup, o barbecue sauce ay maaaring magdagdag ng higit pang lasa sa iyong sandwich.</p>
          <p><strong>Tip:</strong> Huwag maglagay ng sobrang sawsawan; sapat na ang konti upang magdagdag ng moisture at lasa. Maaari ka ring magdagdag ng keso para sa karagdagang creaminess, tulad ng cheddar, Swiss, o American cheese.</p>
          <p><strong>Tip:</strong> Kung magdadagdag ka ng keso, siguraduhing medyo matutunaw ito para sa perpektong malapot na texture.</p>
      </li>
      <li>
          <h3>Assemble ang Sandwich</h3>
          <p>Maingat na assemble ang iyong sandwich sa pamamagitan ng maayos na pag-stack ng mga layers. Simulan sa ilalim na hiwa ng tinapay, idagdag ang protina, pagkatapos ang mga gulay, at tapusin ito ng sawsawan at keso. Sa wakas, ilagay ang ibabaw na hiwa ng tinapay upang kumpletuhin ang sandwich.</p>
          <p><strong>Tip:</strong> Kung ang sandwich ay masyadong matangkad, maaari mo itong bahagyang pisilin o hatiin ito sa kalahati upang mas madaling hawakan.</p>
      </li>
      <li>
          <h3>Hain at I-enjoy</h3>
          <p>Kapag ang sandwich ay ganap nang na-assemble, oras na upang ihain ito. Siguraduhing ang sandwich ay sariwa at mukhang kaakit-akit.</p>
          <p><strong>Tip:</strong> Sa Cookingdom, mahalaga ang presentasyon! Hatiin ang sandwich sa maayos na kalahati o kwarto, at kung may oras, magdagdag ng garnish tulad ng pickle o side ng chips.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Pro Tip para sa Tagumpay sa Level 27</h2>
  <ul>
      <li>
          <h3>Gumamit ng Sariwang Sangkap</h3>
          <p>Ang pagiging sariwa ay susi sa paggawa ng sandwich. Palaging piliin ang pinakasariwang gulay at protina upang matiyak ang mataas na kalidad ng sandwich.</p>
      </li>
      <li>
          <h3>Balansihin ang mga Lasa</h3>
          <p>Siguraduhing ang mga lasa ay well-balanced. Kung ang protina ay mataba (tulad ng baka), gumamit ng mild na sawsawan at gulay. Kung ang protina ay magaan (tulad ng pabo), maaari kang magdagdag ng mas matapang na mga lasa tulad ng mustasa o barbecue sauce.</p>
      </li>
      <li>
          <h3>Toast para sa Crunch</h3>
          <p>Ang pag-toast ng tinapay ay nagdaragdag ng texture sa sandwich. Ang malutong na sandwich ay maaaring magpataas ng karanasan, lalo na kung ito ay ihahain na may malambot, natutunaw na keso.</p>
      </li>
      <li>
          <h3>Alamin ang Mga Preference ng Customer</h3>
          <p>Sa Cookingdom, maaaring may mga espesyal na hiling ang mga customer sa kanilang sandwich. Mag-ingat sa mga hiling tulad ng "extra cheese," "walang sibuyas," o "extra mayo." Ang pagtupad sa mga hiling na ito ay magpapataas ng iyong customer ratings.</p>
      </li>
      <li>
          <h3>Huwag I-overload ang Sandwich</h3>
          <p>Habang tempting na magdagdag ng maraming toppings, ang isang sobrang laki ng sandwich ay mahirap hawakan, parehong sa Cookingdom at sa tunay na buhay. Panatilihin itong simple at well-balanced.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Cookingdom Level 27, ang paggawa ng perpektong Sandwich ay tungkol sa balanse at pagtuon sa mga detalye. Mula sa pagpili ng tamang tinapay hanggang sa pagdagdag ng perpektong protina, gulay, sawsawan, at keso, bawat hakbang ay kailangang maisakatuparan ng maayos upang lumikha ng isang masarap na sandwich.</p>
  <p>Sa pagsunod sa gabay na ito sa Cookingdom, magagawa mong lumikha ng isang masarap at mahusay na nakabuo na sandwich na tiyak magugustuhan ng iyong mga customer. Tandaan na laging alamin ang kanilang mga preferences, i-toast ang tinapay para sa dagdag na crunch, at laging ihain ng sariwa!</p>
  `,
  },
  {
    // Add entry for Level 28
    id: 'cookingdom-game-level-28',
    title: 'Cookingdom Level 28:<br>Croissant',
    pageTitle: 'Cookingdom Level 28 - Gabay sa Croissant',
    pageSubtitle:
      'Matutunan kung paano gumawa ng perpektong malutong na Croissant sa Level 28 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_28.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
    iframeUrl: 'https://www.youtube.com/embed/c0TZorOkxWU', // Placeholder
    seo: {
      title: 'Cookingdom Level 28 Guide: Croissant | Tips & Strategy',
      description:
        'Masterin ang Croissant sa Level 28 ng Cookingdom. Makakuha ng mga tip tungkol sa paghahanda ng masa, lamination, paghubog, pag-prove, at pagpapainit ng klasikong Pranses na pastry.',
      keywords:
        'Cookingdom, Level 28, Croissant, French Pastry, Baking, Lamination, Masa, Gabay, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_28.webp', // Placeholder
      levelInfoHtml:
        '<h3>Croissant</h3><p><strong>Pagka-hirap:</strong> Mataas</p><p><strong>Oras:</strong> 6 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-25',
          title: 'Cookingdom Level 25<br>Pizza',
          imageUrl: '/images/guides_25.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-25' } },
        },
        {
          id: 'cookingdom-game-level-26',
          title: 'Cookingdom Level 26<br>Smoothie',
          imageUrl: '/images/guides_26.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
        },
        {
          id: 'cookingdom-game-level-27',
          title: 'Cookingdom Level 27<br>Sandwich',
          imageUrl: '/images/guides_27.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 28, ang iyong layunin ay maghanda ng isang Croissant, isang klasikong Pranses na pastry na kilala sa malutong, buttery na mga layer. Nagtutuon ang level na ito sa pagiging tumpak, dahil ang paggawa ng perpektong croissant ay nangangailangan ng tamang balanse ng mga sangkap, maingat na paghahanda, at tamang oras ng pagluluto. Hinahamon ka ng Cookingdom na perpekto ang teknika ng paggawa ng mga maselang pastry na ito, tinitiyak na ang bawat croissant ay golden, malutong, at malambot sa loob.</p>
<p>Gagabayan ka ng gabay na ito sa proseso ng paggawa ng isang tradisyonal na croissant, mula sa paghahanda ng masa hanggang sa pagluluto nito hanggang sa perpeksyon.</p>

<h2 id="goal">Mga Layunin sa Level 28</h2>
<ul>
    <li>Maghanda ng masa para sa croissant.</li>
    <li>Tiklopin at i-laminado ang masa upang makagawa ng mga malutong na layer.</li>
    <li>Hugisin ang croissant at hayaang mag-rise.</li>
    <li>I-bake ang croissants hanggang sa mag-golden na perpeksyon.</li>
    <li>I-serve ang croissants ng sariwa at mainit.</li>
</ul>

<h2 id="steps">Step-by-Step na Gabay sa Paggawa ng Croissant</h2>
<ol>
    <li>
        <h3>Maghanda ng Masa</h3>
        <p>Ang unang hakbang sa paggawa ng croissant ay ang paghahanda ng masa. Ang Cookingdom ay nagbibigay sa iyo ng lahat ng pangunahing sangkap na kailangan mo: harina, mantikilya, lebadura, asukal, gatas, at isang kurot ng asin.</p>
        <p><strong>Tip:</strong> Paghaluin muna ang mga tuyong sangkap—harina, asukal, at asin—at pagkatapos idagdag ang mga basang sangkap—yeast at gatas. Paghaluin ang masa hanggang sa ito ay maging makinis, pagkatapos ay hayaang magpahinga ng mga 30 minuto upang mag-rise.</p>
        <p><strong>Tip:</strong> Siguraduhing malamig ang mantikilya bago isama ito sa masa; ito ay makakatulong sa paggawa ng mga layer mamaya.</p>
    </li>
    <li>
        <h3>Tiklopin at Laminate ang Masa</h3>
        <p>Ang hakbang na ito ay mahalaga sa paggawa ng mga layer sa croissant. Matapos magpahinga ang masa, kakailanganin mong igulong ito sa isang rectangle. Ilagay ang isang malamig na piraso ng mantikilya sa gitna ng masa.</p>
        <p>Itiklop ang masa sa mantikilya tulad ng liham, pagkatapos ay igulong ito muli sa isang manipis na rectangle. Itiklop ang masa sa tatlong bahagi at hayaang magpahinga ng 20-30 minuto.</p>
        <p><strong>Tip:</strong> Ulitin ang prosesong ito ng 2-3 beses upang makagawa ng mga malutong na layer. Sa Cookingdom, bawat tiklop at pahinga ay mahalaga para sa texture.</p>
    </li>
    <li>
        <h3>Hugisin ang Croissant</h3>
        <p>Kapag ang masa ay laminated na, igulong ito ng huling pagkakataon sa isang malaking rectangle. Gupitin ang masa sa mga triangles—ito ang magiging mga indibidwal na croissants.</p>
        <p><strong>Tip:</strong> Para sa perpektong hugis ng croissant, igulong ang masa mula sa base ng triangle hanggang sa dulo, tinitiyak na ang mga layer ay mahigpit na nakabalot. Maaari mo ring bahagyang i-curve ang croissant sa crescent na hugis para sa isang tradisyonal na itsura.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay-pantay ang laki ng mga croissant upang magluto ng maayos.</p>
    </li>
    <li>
        <h3>Hayaan Mag-rise ang Croissants</h3>
        <p>Matapos hugisin ang mga croissant, kailangan nilang mag-rise. Ilagay ang mga ito sa isang baking sheet, may distansya sa pagitan ng bawat isa, at hayaang magpahinga ng mga 1 oras. Dapat mag-puff up sila sa panahong ito.</p>
        <p><strong>Tip:</strong> Panatilihin ang masa sa isang mainit at walang-draft na lugar upang matulungan sa proseso ng pag-rise. Sa Cookingdom, ang pasensya ay susi sa pag-abot ng perpektong texture.</p>
    </li>
    <li>
        <h3>I-bake ang Croissants</h3>
        <p>I-preheat ang iyong oven sa 375°F (190°C). Kapag ang mga croissant ay nag-rise na, oras na para i-bake ang mga ito.</p>
        <p><strong>Tip:</strong> I-brush ang mga tuktok gamit ang kaunting egg wash (isang halo ng binating itlog at tubig) bago i-bake. Magbibigay ito ng magandang golden brown finish sa iyong mga croissant.</p>
        <p>I-bake ang mga croissant ng mga 15-20 minuto o hanggang sa sila ay mag-golden at mag-puff up.</p>
        <p><strong>Tip:</strong> Bantayan ang mga croissant habang nag-bake; ang sobrang pagluluto ay magpapatigas sa kanila at magiging masyadong malutong, habang ang hindi sapat na pagluluto ay mag-iiwan sa kanila na malagkit.</p>
    </li>
    <li>
        <h3>I-serve at I-enjoy</h3>
        <p>Kapag ang mga croissant ay golden brown at mag-puff up, kunin ito mula sa oven at hayaang mag-cool ng sandali bago i-serve.</p>
        <p><strong>Tip:</strong> Ang mga croissant ay pinakamahusay na i-serve ng sariwa at mainit, na may bahagyang malutong na panlabas at malambot, malutong na panloob. Para sa dagdag na pirma, maaari mong iwisik ng kaunting powdered sugar o i-serve kasama ng jam o mantikilya.</p>
    </li>
</ol>

<h2 id="tips">Mga Pro Tip para sa Tagumpay sa Level 28</h2>
<ul>
    <li>
        <h3>Gamitin ang Malamig na Mantikilya</h3>
        <p>Ang susi sa isang malutong na croissant ay ang malamig na mantikilya. Pinararangalan ka ng Cookingdom sa paggawa ng sure na ang mantikilya ay nananatiling malamig sa buong proseso ng pagtitiklop. Nakatutulong ito sa paggawa ng singaw habang nag-bake, na tumutulong sa paggawa ng mga layer.</p>
    </li>
    <li>
        <h3>Pasensya sa mga Pahinga</h3>
        <p>Huwag magmadali sa mga panahon ng pahinga. Hayaang mag-rise ng maayos ang masa sa pagitan ng mga pag-tiklop at pag-hubog. Sa Cookingdom, hindi maaaring palampasin ang hakbang na ito.</p>
    </li>
    <li>
        <h3>Egg Wash para sa Golden Finish</h3>
        <p>Ang paglalagay ng egg wash bago mag-bake ay nagbibigay ng golden, glossy na finish sa croissants. Mahalaga din ito upang makamit ang tamang texture.</p>
    </li>
    <li>
        <h3>Huwag Mag-overcrowd ng Baking Sheet</h3>
        <p>Siguraduhing may sapat na espasyo sa pagitan ng bawat croissant sa baking sheet. Ang pagiging masikip ng mga croissant ay magdudulot ng hindi pantay na pagluluto at maaaring magpigil sa kanila na mag-puff up nang maayos.</p>
    </li>
    <li>
        <h3>Bantayan ang Oras ng Pag-bake</h3>
        <p>Bantayan ang mga croissant habang nag-bake. Ayaw mong mag-overbake sila at maging sobrang tigas. Dapat silang maging golden sa labas at malambot at airy sa loob.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 28, ang paggawa ng perpektong Croissant ay nangangailangan ng balanse ng teknika at timing. Mula sa paggawa ng masa hanggang sa pagtitiklop at pag-laminate nito upang makagawa ng mga layer, ang bawat hakbang ay mahalaga upang makuha ang klasikong malutong na texture. Huwag kalimutan ang huling hakbang: i-bake ang mga croissant hanggang sa golden brown finish at i-serve ng sariwa at mainit.</p>
<p>Sa pamamagitan ng pagsunod sa gabay na ito ng Cookingdom, magagampanan mo ang sining ng paggawa ng croissant at magugustuhan ng iyong mga customer ang mga masarap at buttery na pastry na ito. Kapag naperpekto mo na ang kakayahang ito, handa ka nang harapin ang mas mahihirap na mga level sa Cookingdom!</p>
`,
  },
  {
    // Add entry for Level 29
    id: 'cookingdom-game-level-29',
    title: 'Cookingdom Level 29:<br>Matcha Boba Tea',
    pageTitle: 'Cookingdom Level 29 - Gabay sa Matcha Boba Tea',
    pageSubtitle:
      'Alamin kung paano gumawa ng trendy na Matcha Boba Tea sa Level 29 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_29.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
    iframeUrl: 'https://www.youtube.com/embed/BI4QGcm-kDM', // Placeholder
    seo: {
      title: 'Cookingdom Level 29 Gabay: Matcha Boba Tea | Mga Tips at Estratehiya',
      description:
        'Pamahalaan ang paggawa ng Matcha Boba Tea sa Level 29 ng Cookingdom. Kumuha ng mga tips sa pagluluto ng boba pearls, paghahalo ng matcha, pagsasama ng gatas, at pagtutok sa paggawa ng masarap na inuming ito.',
      keywords:
        'Cookingdom, Level 29, Matcha Boba Tea, Boba, Matcha, Bubble Tea, Inumin, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_29.webp', // Placeholder
      levelInfoHtml:
        '<h3>Matcha Boba Tea</h3><p><strong>Kahirapan:</strong> Katamtaman</p><p><strong>Oras:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 4 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-26',
          title: 'Cookingdom Level 26<br>Smoothie',
          imageUrl: '/images/guides_26.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-26' } },
        },
        {
          id: 'cookingdom-game-level-27',
          title: 'Cookingdom Level 27<br>Sandwich',
          imageUrl: '/images/guides_27.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
        },
        {
          id: 'cookingdom-game-level-28',
          title: 'Cookingdom Level 28<br>Croissant',
          imageUrl: '/images/guides_28.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 29, maghahanda ka ng trendy at masarap na Matcha Boba Tea! Ang popular na inuming ito ay pinagsasama ang earthy at mayamang lasa ng matcha at ang chewy na boba pearls, na lumilikha ng matamis at kasiya-siyang inumin. Ang hamon sa level na ito ay ang tamang pagpapantay ng lasa ng matcha sa makinis na gatas at ang chewy na tekstura ng boba. Ang iyong layunin ay gumawa ng perpektong tasa ng Matcha Boba Tea na magugustuhan ng iyong mga customer.</p>
<p>Ituturo sa iyo ng gabay na ito ang bawat hakbang sa paggawa ng perpektong Matcha Boba Tea, mula sa pagluluto ng boba pearls hanggang sa paghahalo ng matcha at gatas hanggang sa paghahain nito ng maayos.</p>

<h2 id="goal">Mga Layunin ng Level 29</h2>
<ul>
    <li>Maghanda ng boba pearls.</li>
    <li>Haluin ang matcha gamit ang tamang mga sangkap.</li>
    <li>Paghaluin ang gatas upang makagawa ng creamy na inumin.</li>
    <li>Assemble ang Matcha Boba Tea.</li>
    <li>Ihain ang inumin na may tamang garnish.</li>
</ul>

<h2 id="steps">Hakbang-hakbang na Gabay upang Makamtan ang Matcha Boba Tea</h2>
<ol>
    <li>
        <h3>Maghanda ng Boba Pearls</h3>
        <p>Unang hakbang ay ang pagluluto ng boba pearls. Sa Cookingdom, makikita mo ang boba pearls na kailangang pakuluan sa tubig ng mga 10-15 minuto.</p>
        <p><strong>Tip:</strong> Haluin paminsan-minsan ang boba pearls habang niluluto upang hindi magdikit-dikit. Kapag luto na at malambot, banlawan ito ng malamig na tubig upang mapigilan ang pagluluto.</p>
        <p><strong>Tip:</strong> Pahingahin ang boba pearls sa asukal na syrup o honey upang magdagdag ng tamis at mapahusay ang lasa. Ito ay nagbibigay ng magandang tamis sa boba.</p>
    </li>
    <li>
        <h3>Haluin ang Matcha</h3>
        <p>Sunod, ihanda ang matcha. Sa Cookingdom, bibigyan ka ng matcha powder na kailangang haluin sa kaunting mainit na tubig hanggang maging makinis at mabula.</p>
        <p><strong>Tip:</strong> Gumamit ng maliit na whisk o frother upang matiyak na matutunaw ng maayos ang matcha powder. Kung masyadong magaspang, hindi ito magiging maayos na timpla.</p>
        <p>Magdagdag ng sweetener sa iyong matcha mixture, tulad ng asukal o honey, batay sa iyong preference ng customer.</p>
    </li>
    <li>
        <h3>Pagsamahin ang Gatas</h3>
        <p>Ngayon ay panahon na upang magdagdag ng gatas sa matcha. Sa Cookingdom, maaari kang pumili ng regular na buong gatas, almond milk, o oat milk. Ang pagpili ng gatas ay makakaapekto sa creaminess ng inumin.</p>
        <p>Ilagay ang gatas sa matcha mixture at haluin hanggang magkasama.</p>
        <p><strong>Tip:</strong> Kung nais mo ng mas masarap at matamis, maaari mong gamitin ang condensed milk para sa dagdag na creaminess at tamis.</p>
    </li>
    <li>
        <h3>Assemble ang Matcha Boba Tea</h3>
        <p>Sa Cookingdom, ilalagay mo ang boba pearls sa ilalim ng isang baso o tasa.</p>
        <p>Kapag nailagay na ang boba, ibuhos ang matcha milk mixture sa ibabaw ng boba pearls.</p>
        <p><strong>Tip:</strong> Siguraduhing haluin ang matcha at gatas ng maayos bago ibuhos upang maiwasan ang mga clump ng matcha powder na matira sa ilalim.</p>
    </li>
    <li>
        <h3>Garnish at Ihain</h3>
        <p>Upang makumpleto ang Matcha Boba Tea, maaari mong magdagdag ng yelo upang maging malamig at refreshing.</p>
        <p>Maaari mo ring garnish ng kaunting matcha powder sa ibabaw o magdagdag ng dekoratibong straw upang mapaganda ang hitsura ng inumin.</p>
        <p><strong>Tip:</strong> Kung nais mong ihain ito sa tradisyonal na paraan, gumamit ng malapad na straw upang madaling lumusot ang boba pearls.</p>
    </li>
</ol>

<h2 id="tips">Mga Pro Tips para sa Tagumpay sa Level 29</h2>
<ul>
    <li>
        <h3>Gawin ng Tama ang Boba Pearls</h3>
        <p>Ang tekstura ng boba pearls ay mahalaga sa paggawa ng magandang Matcha Boba Tea. Dapat malambot ito, hindi masyadong malambot o matigas. Siguraduhing luto ng maayos at matamis ang mga ito.</p>
    </li>
    <li>
        <h3>Salain ang Matcha Powder</h3>
        <p>Kung hindi maayos ang pag-sift ng matcha powder o nagkakaroon ng mga bukol, gumamit ng fine mesh sieve upang matiyak na makinis ito. Pahalagahan ng Cookingdom ang iyong atensyon sa detalye sa proseso ng paghahalo.</p>
    </li>
    <li>
        <h3>Piliin ang Tamang Gatas</h3>
        <p>Pumili ng tamang gatas para sa iyong Matcha Boba Tea. Para sa mas mayamang at creamy na tekstura, piliin ang buong gatas. Para sa mas magaan at dairy-free na opsyon, pumili ng almond o oat milk.</p>
    </li>
    <li>
        <h3>Pagbutihin ang Paghalo</h3>
        <p>Haluin ang matcha at gatas mixture ng maayos. Kung hindi ito nahalo ng husto, magreresulta ito sa hindi pantay na lasa at mga clump ng matcha powder sa inumin.</p>
    </li>
    <li>
        <h3>Pagmasdan ang Antas ng Tamis</h3>
        <p>Magdagdag ng tamis sa matcha base ng maingat. Nais mong magtulungan ang lasa ng matcha, creamy na gatas, at chewy na boba. Masyadong maraming asukal ay magdudulot ng sobrang tamis, habang masyadong konti ay magdudulot ng mapait na lasa.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 29, ang paggawa ng perpektong Matcha Boba Tea ay tungkol sa pagpapares ng lasa ng matcha sa tekstura ng chewy na boba pearls at creaminess ng gatas. Sundin ang mga hakbang upang matiyak na ang boba ay luto ng maayos, ang matcha ay nahalo ng maayos, at ang inumin ay tama ang tamis. Bigyan ng pansin ang maliliit na detalye, tulad ng tamang gatas at sweetener, upang gawin ang iyong Matcha Boba Tea na talagang kahanga-hanga.</p>
<p>Sa pagsunod sa gabay na ito sa Cookingdom, magagawa mong gumawa ng perpektong Matcha Boba Tea na magugustuhan ng iyong mga customer, at magdadala sa iyo ng isang hakbang patungo sa pagiging bihasa sa paggawa ng mga inumin sa Cookingdom!</p>
`,
  },
  {
    // Add entry for Level 30
    id: 'cookingdom-game-level-30',
    title: 'Cookingdom Level 30:<br>Doner Kebab',
    pageTitle: 'Cookingdom Level 30 - Gabay sa Doner Kebab',
    pageSubtitle: 'Matutunan kung paano gumawa ng klasikong Doner Kebab sa Level 30 ng Cookingdom.',
    category: '21-30',
    publishDate: '2025-05-05',
    isSpecial: false,
    imageUrl: '/images/guides_30.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
    iframeUrl: 'https://www.youtube.com/embed/6l1-yu8zZKs', // Placeholder
    seo: {
      title: 'Cookingdom Level 30 Gabay: Doner Kebab | Mga Tip at Estratehiya',
      description:
        'Magmaster sa Doner Kebab sa Level 30 ng Cookingdom. Kumuha ng mga tip sa grilling ng karne, paghahanda ng mga topping, pag-aassemble, at pagsisilbi ng paboritong Turkish street food.',
      keywords:
        'Cookingdom, Level 30, Doner Kebab, Kebab, Turkish Food, Street Food, Grill, Pita, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_30.webp', // Placeholder
      levelInfoHtml:
        '<h3>Doner Kebab</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-27',
          title: 'Cookingdom Level 27<br>Sandwich',
          imageUrl: '/images/guides_27.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-27' } },
        },
        {
          id: 'cookingdom-game-level-28',
          title: 'Cookingdom Level 28<br>Croissant',
          imageUrl: '/images/guides_28.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
        },
        {
          id: 'cookingdom-game-level-29',
          title: 'Cookingdom Level 29<br>Matcha Boba Tea',
          imageUrl: '/images/guides_29.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 30, ang iyong layunin ay maghanda ng isang klasikong paborito: ang Doner Kebab! Ang Turkish street food na ito ay binubuo ng malasa at lutong karne (karaniwan ay tupa, manok, o baka), sariwang gulay, at masarap na mga sarsa, lahat ay nakabalot sa mainit na pita o flatbread. Ang hamon sa level na ito ay ang perpektong pag-grill ng karne, pag-aassemble ng mga palaman, at pagtiyak na ang kebab ay may tamang lasa at balanse.</p>
<p>Ang gabay na ito ay maghahatid sa iyo sa bawat hakbang ng paggawa ng Doner Kebab, tinitiyak na matutugunan mo ang lahat ng mga layunin at makakapaghain ng masarap at nakakabusog na pagkain para sa iyong mga customer.</p>

<h2 id="goal">Mga Layunin ng Level 30</h2>
<ul>
    <li>Magluto ng karne (tupa, manok, o baka).</li>
    <li>Maghanda ng mga toppings (gulay, mga sarsa).</li>
    <li>Assemble ang Doner Kebab sa pita o flatbread.</li>
    <li>Ihain ang kebab sa mga customer.</li>
</ul>

<h2 id="steps">Step-by-Step na Gabay sa Paggawa ng Doner Kebab</h2>
<ol>
    <li>
        <h3>Maghanda ng Karne</h3>
        <p>Ang unang hakbang sa paggawa ng Doner Kebab ay ang pagluluto ng karne. Sa Cookingdom, maaari kang pumili mula sa iba't ibang uri ng karne: manok, baka, o tupa.</p>
        <p><strong>Tip:</strong> Siguraduhing ang karne ay maayos na in-marinate gamit ang mga pampalasa at herbs upang matiyak ang masarap at malinamnam na lasa. Dapat luto ang karne hanggang sa maging malutong sa labas at malambot sa loob.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaaring kailanganin mong subaybayan ang proseso ng grilling upang maiwasan ang labis o kulang na pagluluto ng karne. Ang perpektong Doner Kebab ay may gintong kulay na malutong sa gilid ngunit malasa at malambot sa loob.</p>
    </li>
    <li>
        <h3>Maghanda ng Mga Gulay</h3>
        <p>Habang niluluto ang karne, kailangan mong maghanda ng mga gulay. Karaniwan, ang mga kamatis, sibuyas, at letsugas ay ginagamit sa tradisyunal na Doner Kebab. Maaari mo ring idagdag ang mga pickle o pipino para sa karagdagang lutong at lasa.</p>
        <p><strong>Tip:</strong> Hiwaing pino at pantay ang mga gulay upang madali silang mailagay sa kebab. Ang sariwa at malutong na gulay ay susi upang magkomplemento sa malasa at malutong na karne.</p>
    </li>
    <li>
        <h3>Maghanda ng Mga Sarsa</h3>
        <p>Ang isang mahusay na Doner Kebab ay hindi magiging kumpleto nang walang tamang mga sarsa. Sa Cookingdom, bibigyan ka ng mga opsyon para sa mga sarsa tulad ng yogurt sauce, garlic sauce, at spicy chili sauce.</p>
        <p><strong>Tip:</strong> Ibuhos ang mga sarsa ng pantay-pantay sa ibabaw ng karne at gulay upang mapahusay ang kabuuang lasa ng kebab. Mag-ingat na huwag maglagay ng labis na sarsa—just enough upang magbigay ng creaminess at spice nang hindi pinapalakas ang ibang mga lasa.</p>
    </li>
    <li>
        <h3>Assemble ang Doner Kebab</h3>
        <p>Kapag handa na ang lahat ng mga sangkap, oras na upang i-assemble ang Doner Kebab. Magsimula sa pamamagitan ng paglalagay ng nilutong karne sa gitna ng isang mainit na pita o flatbread.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay-pantay ang pagkaka-arrange ng karne upang ang bawat kagat ay may balanse ng palaman.</p>
        <p>Ilagay ang hiniwang gulay sa ibabaw ng karne.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay-pantay ang distribusyon ng gulay upang matiyak na ang bawat kagat ay may tamang texture at lasa.</p>
        <p>Sa wakas, ibuhos ang pinili mong sarsa sa ibabaw, mag-ingat na huwag maglagay ng labis upang hindi magmukhang magulo ang kebab.</p>
    </li>
    <li>
        <h3>Balutin at Ihain</h3>
        <p>Upang tapusin ang Doner Kebab, balutin ang pita o flatbread nang mahigpit sa paligid ng mga palaman, upang matiyak na ang lahat ay nananatiling nasa lugar.</p>
        <p><strong>Tip:</strong> Kung masyadong malaki ang pita o flatbread, maaari mong tiklop ang mga gilid upang siguruhing matatag ang mga palaman. Siguraduhing mahigpit ang pagkakabalot upang hindi mabagsak ang kebab kapag inihain.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mong hiwain ang kebab sa kalahati para mas madaling hawakan, ayon sa kagustuhan ng customer.</p>
    </li>
</ol>

<h2 id="tips">Mga Tip ng Propesyonal para sa Tagumpay sa Level 30</h2>
<ul>
    <li>
        <h3>Perpektong Pag-grill ng Karne</h3>
        <p>Ang karne ay ang pangunahing bahagi ng Doner Kebab, kaya't ang perpektong pag-grill nito ay mahalaga. Bantayan ang oras ng pagluluto at tiyaking malutong ang labas ngunit malambot pa rin ang loob. Ang Cookingdom ay magbibigay pansin sa tamang balanse nito.</p>
    </li>
    <li>
        <h3>Gamitin ang Sariwang, Malutong na Gulay</h3>
        <p>Dapat magdagdag ng lutong at kasariwaan ang mga gulay sa kebab, kaya't hiwain ito ng pino at gamitin lamang ang mga pinakamagagandang sangkap. Ang sariwang letsugas, sibuyas, at kamatis ay magbibigay ng pinakamahusay na texture at lasa.</p>
    </li>
    <li>
        <h3>Balansihin ang Mga Sarsa</h3>
        <p>Mag-ingat na huwag gumamit ng labis na sarsa, dahil maaari nitong lambugin ang ibang mga lasa. Ang tamang pag-aplay ng garlic sauce at kaunting spicy chili sauce ay magbibigay ng tamang balanse ng creaminess at anghang.</p>
    </li>
    <li>
        <h3>Balutin ng Mabuti</h3>
        <p>Ang paraan ng pagbabalot ng Doner Kebab ay mahalaga! Siguraduhing mahigpit ang pagkakabalot ng pita o flatbread sa paligid ng palaman upang hindi matapon. Kung hindi sapat ang pagkakabalot, maaaring magkalat ang mga palaman kapag tinangkang kainin ng customer.</p>
    </li>
    <li>
        <h3>Bantayan ang Oras ng Pagluluto</h3>
        <p>Sa Cookingdom, ang mga oras ng pagluluto para sa karne at grilling ay kailangang bantayan ng mabuti. Ang labis na pagluluto ng karne ay maaaring magdulot ng pagkakalutong, samantalang ang hindi sapat na pagluluto ay magreresulta sa malutong at hindi kaaya-ayang texture.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 30, ang paggawa ng perpektong Doner Kebab ay kinapapalooban ng pagluluto ng karne ng malutong at gintong kulay, paghahanda ng sariwang gulay, at balanseng paggamit ng mga sarsa upang makagawa ng isang masarap at nakakabusog na pagkain. Sa pamamagitan ng pagsunod sa gabay na ito at pag-aalaga sa mga detalye, makakagawa ka ng isang masarap at balanseng kebab na tiyak ay magugustuhan ng iyong mga customer.</p>
<p>Tandaan, ang Cookingdom ay tungkol sa balanse ng texture, lasa, at presentasyon. Perpekto ang iyong grilling, pag-aaplay ng sarsa, at paraan ng pagbabalot, at maghahatid ka ng pinakamahusay na Doner Kebabs sa bayan!</p>
`,
  },
  {
    // Add entry for Level 31
    id: 'cookingdom-game-level-31',
    title: 'Cookingdom Level 31:<br>Café Mocha',
    pageTitle: 'Cookingdom Level 31 - Gabay para sa Café Mocha',
    pageSubtitle: 'Alamin kung paano gumawa ng perpektong Café Mocha sa Level 31 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06', // Simula ng bagong kategorya
    isSpecial: false,
    imageUrl: '/images/guides_31.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-31' } },
    iframeUrl: 'https://www.youtube.com/embed/iq0t6XrkgF0', // Placeholder
    seo: {
      title: 'Cookingdom Level 31 Gabay: Café Mocha | Mga Tip at Estratehiya',
      description:
        'Masterin ang paggawa ng Café Mocha sa Level 31 ng Cookingdom. Makakuha ng mga tip sa paggawa ng espresso, paghahanda ng tsokolate, steaming ng gatas, at pagsasama ng klasikong inuming kape.',
      keywords:
        'Cookingdom, Level 31, Café Mocha, Mocha, Kape, Espresso, Tsokolate, Inumin, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_31.webp', // Placeholder
      levelInfoHtml:
        '<h3>Café Mocha</h3><p><strong>Dificultad:</strong> Katamtaman</p><p><strong>Oras:</strong> 4 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-28',
          title: 'Cookingdom Level 28<br>Croissant',
          imageUrl: '/images/guides_28.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-28' } },
        },
        {
          id: 'cookingdom-game-level-29',
          title: 'Cookingdom Level 29<br>Matcha Boba Tea',
          imageUrl: '/images/guides_29.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
        },
        {
          id: 'cookingdom-game-level-30',
          title: 'Cookingdom Level 30<br>Doner Kebab',
          imageUrl: '/images/guides_30.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 31, gagawa ka ng isang masarap at nakaka-comfort na Café Mocha, isang paboritong inumin sa mga kapehan na pinagsasama ang malalim na lasa ng espresso, ang kalinisan ng steamed milk, at ang kasiyahan ng tsokolate. Ang hamon sa level na ito ay ang pagtutok sa balanse ng kapaitan ng espresso at ang tamis ng tsokolate, upang matiyak na magugustuhan ng iyong mga customer ang malasa at malambot na karanasan.</p>
<p>Ituturo ng gabay na ito ang bawat hakbang sa paggawa ng perpektong Café Mocha, mula sa paggawa ng espresso, pag-steam ng gatas, at pagsasama ng inumin na may malasutla at matamis na tsokolate.</p>

<h2 id="goal">Mga Layunin ng Level 31</h2>
<ul>
    <li>Gumawa ng espresso ng perpekto.</li>
    <li>Maghanda ng tsokolate syrup o pulbos.</li>
    <li>Steam ang gatas upang magkaroon ng malambot na texture.</li>
    <li>Pagsamahin ang mga sangkap upang makagawa ng perpektong Café Mocha.</li>
    <li>I-serve ang Café Mocha sa mga customer.</li>
</ul>

<h2 id="steps">Hakbang-hakbang na Gabay sa Paghahanda ng Café Mocha</h2>
<ol>
    <li>
        <h3>Gumawa ng Espresso</h3>
        <p>Ang unang hakbang sa paggawa ng Café Mocha ay ang paggawa ng perpektong espresso. Sa Cookingdom, kailangan mong gumamit ng coffee machine o espresso maker upang makagawa ng malakas na espresso.</p>
        <p><strong>Tip:</strong> Siguraduhing ang espresso ay may malalim at mayamang konsistensya. Dapat ang espresso ay matapang at hindi watery. Sa Cookingdom, mahalaga ang pagsubaybay sa proseso ng paggawa ng espresso upang maiwasan ang over-extraction o under-extraction.</p>
        <p><strong>Tip:</strong> Kung nais mo ng mas matapang na lasa, maaari kang magdagdag ng pangalawang shot ng espresso, ngunit siguraduhing hindi malampasan ng espresso ang tsokolate.</p>
    </li>
    <li>
        <h3>Maghanda ng Tsokolate Syrup</h3>
        <p>Habang niluluto ang espresso, oras na upang maghanda ng tsokolate syrup o pulbos para sa base ng mocha.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, magkakaroon ka ng mga pagpipilian tulad ng tsokolate syrup, pulbos, o cocoa. Ihalo ang syrup o pulbos sa mainit na espresso upang matiyak na ito ay ganap na matunaw at malasutla.</p>
        <p><strong>Tip:</strong> I-adjust ang dami ng tsokolate batay sa preference ng customer. Kung kulang ang tsokolate, magiging bland ang mocha, ngunit kung sobra naman, malalampasan nito ang ibang mga lasa.</p>
    </li>
    <li>
        <h3>Steam ang Gatas</h3>
        <p>Ngayon, ihanda ang steamed milk. Sa Cookingdom, gagamit ka ng milk steamer o frother upang painitin ang gatas hanggang sa maging malambot at malasutla.</p>
        <p><strong>Tip:</strong> Siguraduhing ang gatas ay nai-steam sa tamang temperatura—mga 150°F (65°C). Dapat mainit ang gatas ngunit hindi nasusunog. Ang steamed milk ay dapat malambot, hindi frothy, para sa Café Mocha.</p>
        <p><strong>Tip:</strong> Maaari kang pumili ng whole milk o non-dairy milk tulad ng almond o oat milk, depende sa preference ng customer.</p>
    </li>
    <li>
        <h3>Pagsamahin ang mga Sangkap</h3>
        <p>Kapag lahat ng sangkap ay handa na, oras na upang pagsamahin ang Café Mocha.</p>
        <p>Ilagay ang espresso sa isang tasa, pagkatapos ay idagdag ang tsokolate syrup o pulbos na inihanda. Haluing mabuti hanggang matunaw ang tsokolate sa espresso.</p>
        <p><strong>Tip:</strong> Siguraduhing maghalo ng maayos upang pantay-pantay ang lasa.</p>
        <p>Pagkatapos, ibuhos ang steamed milk sa tsokolate-espresso na pinaghalo. Ibuhos ng dahan-dahan upang makabuo ng makinis na halo ng kape at tsokolate.</p>
        <p><strong>Tip:</strong> Mag-iwan ng kaunting espasyo sa ibabaw ng tasa upang magbigay daan para sa cream o garnish kung kinakailangan.</p>
    </li>
    <li>
        <h3>Garnish at I-serve</h3>
        <p>Upang tapusin ang Café Mocha, maaari kang magdagdag ng isang malaking swirl ng whipped cream sa ibabaw. Sa Cookingdom, maaari mo ring idagdag ang cocoa powder o chocolate shavings bilang garnish para sa dagdag na lasa at dekorasyon.</p>
        <p><strong>Tip:</strong> Ang ilang chocolate shavings o isang kaunting cocoa powder ay makakapagbigay ng magandang huling lasa at visual appeal sa inumin.</p>
        <p><strong>Tip:</strong> I-serve ang inumin na may chocolate drizzle sa ibabaw o sa gilid ng tasa para sa magandang presentasyon.</p>
    </li>
</ol>

<h2 id="tips">Pro Tips para sa Tagumpay sa Level 31</h2>
<ul>
    <li>
        <h3>Gumawa ng Matapang at Fresh na Espresso</h3>
        <p>Ang espresso ang puso ng Café Mocha, kaya siguraduhing ito ay tama ang paggawa. Dapat malasa at matapang ang espresso, ngunit hindi sobrang mapait. Sa Cookingdom, ang over-brewing ay maaaring magdulot ng matinding kapaitan, kaya mag-ingat sa oras ng paggawa.</p>
    </li>
    <li>
        <h3>Steaming ng Gatas ng Wasto</h3>
        <p>Ang gatas ay dapat smooth at malambot, hindi frothy. Sa Cookingdom, maglaan ng pansin sa proseso ng steaming upang makuha ang tamang texture. Ang steamed milk ay nagbibigay ng richness sa inumin.</p>
    </li>
    <li>
        <h3>Balansehin ang Tsokolate at Kape</h3>
        <p>Ang sikreto sa isang magandang Café Mocha ay ang balanse sa pagitan ng kapaitan ng espresso at tamis ng tsokolate. I-adjust ang dami ng tsokolate ayon sa iyong preference, ngunit huwag hayaang manaig ang tsokolate sa espresso.</p>
    </li>
    <li>
        <h3>Garnish nang Malikhain</h3>
        <p>Ang isang magandang-garnish na Café Mocha ay hindi lamang masarap kundi mukhang kaakit-akit din. Magdagdag ng isang swirl ng whipped cream, isang sprinkle ng cocoa powder, o ilang chocolate shavings para sa luxurious na finish.</p>
    </li>
    <li>
        <h3>I-serve agad</h3>
        <p>Ang Café Mocha ay pinakamahusay kapag ini-serve ng mainit at fresh. Kapag naisama na ang lahat ng sangkap, i-serve ito sa iyong mga customer agad-agad habang mainit at creamy pa.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 31, ang paggawa ng perpektong Café Mocha ay nangangailangan ng tamang atensyon sa bawat hakbang—mula sa paggawa ng malalim na espresso, tamang pag-steam ng gatas, at pagbibigay ng tamang balanse ng tsokolate. Ang susi sa tagumpay ay ang paggawa ng matapang na espresso, malambot na gatas, at tamang dami ng tsokolate. Ang isang mahusay na garnish ay tiyak magpapa-akit sa iyong mga customer at magbibigay saya sa kanila.</p>
<p>Sa pagsunod sa gabay na ito ng Cookingdom, matutunan mong gumawa ng isang masarap at indulgent na Café Mocha na tiyak na magpapahanga sa lahat at magdadala sa iyo sa mastery ng mga coffee-based beverages sa Cookingdom!</p>
`,
  },
  {
    // Add entry for Level 32
    id: 'cookingdom-game-level-32',
    title: 'Cookingdom Level 32:<br>Hamburger',
    pageTitle: 'Cookingdom Level 32 - Gabay para sa Hamburger',
    pageSubtitle: 'Alamin kung paano maghanda ng klasikong Hamburger sa Level 32 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_32.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-32' } },
    iframeUrl: 'https://www.youtube.com/embed/VViL7ptIJUA', // Placeholder
    seo: {
      title: 'Cookingdom Level 32 Gabay: Hamburger | Mga Tip at Diskarte',
      description:
        'Masterin ang Hamburger sa Level 32 ng Cookingdom. Makakuha ng mga tip sa pagluluto ng patties, paghahanda ng mga toppings, pag-toast ng mga buns, at pag-assemble ng klasikong ulam na ito.',
      keywords:
        'Cookingdom, Level 32, Hamburger, Burger, Beef Patty, Grill, Toppings, Buns, Gabay, Diskarte',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_32.webp', // Placeholder
      levelInfoHtml:
        '<h3>Hamburger</h3><p><strong>Dificultad:</strong> Katamtaman</p><p><strong>Oras na Tinataya:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 4 na Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-29',
          title: 'Cookingdom Level 29<br>Matcha Boba Tea',
          imageUrl: '/images/guides_29.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-29' } },
        },
        {
          id: 'cookingdom-game-level-30',
          title: 'Cookingdom Level 30<br>Doner Kebab',
          imageUrl: '/images/guides_30.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
        },
        {
          id: 'cookingdom-game-level-31',
          title: 'Cookingdom Level 31<br>Café Mocha',
          imageUrl: '/images/guides_31.webp3', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-31' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 32, ang iyong misyon ay maghanda ng isang klasikong at masarap na Hamburger! Ang iconic na pagkaing ito ay binubuo ng isang makatas na beef patty, sariwang gulay, at masasarap na condiments, na nakatago sa pagitan ng dalawang malambot na buns. Ang hamon sa level na ito ay ang perpektong pagluluto ng patty, pagsasama ng burger gamit ang tamang mga sangkap, at siguraduhing ito ay parehong kaakit-akit at masarap.</p>
<p>Itong gabay ay gagabay sa iyo sa bawat hakbang upang makagawa ng perpektong Hamburger, mula sa pagluluto ng patty hanggang sa pag-assemble at paghahain nito.</p>

<h2 id="goal">Mga Layunin ng Level 32</h2>
<ul>
    <li>Magluto ng beef patty nang tama.</li>
    <li>Maghanda ng mga toppings (lettuce, kamatis, sibuyas, keso, atbp.).</li>
    <li>Itost ang mga buns para sa dagdag na lasa at texture.</li>
    <li>Assemble ang Hamburger gamit ang tamang balanse ng mga sangkap.</li>
    <li>I-serve ang Hamburger sa iyong mga customer.</li>
</ul>

<h2 id="steps">Step-by-Step na Gabay sa Paghahanda ng Hamburger</h2>
<ol>
    <li>
        <h3>Magluto ng Beef Patty</h3>
        <p>Ang unang hakbang sa paggawa ng isang mahusay na Hamburger ay ang pagluluto ng beef patty. Sa Cookingdom, kailangan mong bantayan ang patty habang ito ay niluluto upang matiyak na ito ay perpektong luto.</p>
        <p><strong>Tip:</strong> Magluto ng patty sa katamtamang init, baliktarin ito sa tamang oras upang matiyak na ito ay golden-brown at pantay ang luto. Ang isang magandang luto na patty ay dapat may malutong na panlabas at manatiling malasa sa loob.</p>
        <p><strong>Tip:</strong> Para sa medium na burger, magluto ng patty ng mga 4-5 minuto bawat gilid, ngunit maaaring mag-iba ito depende sa kapal ng patty at nais na level ng pagluluto.</p>
    </li>
    <li>
        <h3>Maghanda ng mga Toppings</h3>
        <p>Habang niluluto ang beef patty, maaari mong ihanda ang mga toppings para sa burger.</p>
        <ul>
            <li><strong>Letucce:</strong> Gumamit ng sariwa at malutong na mga dahon ng letucce. Ang Romaine o iceberg na letucce ay pinakamahusay para sa isang magandang crunch.</li>
            <li><strong>Kamatis:</strong> Hiwa-hiwain ang kamatis sa makapal na bilog.</li>
            <li><strong>Sibuyas:</strong> Hiwa-hiwain ang mga sibuyas nang manipis. Maaari kang pumili ng red onions para sa kaunting tamis o yellow onions para sa mas savory na lasa.</li>
            <li><strong>Keso:</strong> Sa Cookingdom, mayroon kang mga opsyon para pumili ng iba't ibang uri ng keso tulad ng cheddar, American, o Swiss. Piliin ang keso na natutunaw ng maayos sa ibabaw ng patty.</li>
        </ul>
    </li>
    <li>
        <h3>Itost ang mga Buns</h3>
        <p>Upang mapahusay ang lasa at texture, itost ang mga buns ng burger. Sa Cookingdom, bibigyan ka ng opsyon na i-light toast ang mga buns.</p>
        <p><strong>Tip:</strong> Ang pag-toast ng mga buns ay nagdaragdag ng malutong na texture at pinipigilan itong maging basang-basa kapag inilagay na ang mga toppings. Ang bahagyang pagpapabutter sa mga buns bago i-toast ay magdadagdag ng dagdag na lasa.</p>
    </li>
    <li>
        <h3>Assemble ang Hamburger</h3>
        <p>Kapag ang patty ay naluto, ang mga buns ay na-toast, at ang mga toppings ay handa na, oras na para i-assemble ang iyong Hamburger.</p>
        <p>Simulan sa bottom bun at ilagay ang nilutong beef patty sa gitna.</p>
        <p>Maglagay ng isang hiwa ng keso sa ibabaw ng patty habang ito ay mainit pa upang matunaw ng maayos.</p>
        <p>I-layer ang letucce, kamatis, at sibuyas sa ibabaw ng patty.</p>
        <p><strong>Tip:</strong> Siguraduhing pantay-pantay ang pagkaka-distribute ng mga sangkap upang bawat kagat ay may tamang balanse ng lasa at texture.</p>
        <p>Ilagay ang top bun sa ibabaw ng mga sangkap.</p>
    </li>
    <li>
        <h3>I-serve ang Hamburger</h3>
        <p>Ang huling hakbang ay ang paghain ng Hamburger sa iyong mga customer. Siguraduhing maayos ang pagkaka-wrap o ihain ito sa isang plato na may kasamang side (tulad ng fries o salad) para sa isang kumpletong pagkain.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaaring may opsyon ka ring magdagdag ng maliit na pickle o side ng crispy fries para sa dagdag na presentation.</p>
    </li>
</ol>

<h2 id="tips">Pro Tips para sa Tagumpay sa Level 32</h2>
<ul>
    <li>
        <h3>Perpektong Luto ng Beef Patty</h3>
        <p>Ang beef patty ay ang puso ng Hamburger, kaya't mahalagang makuha ito nang tama. Bantayan ang proseso ng pagluluto upang maiwasan ang undercooking o overcooking ng patty. Ang magandang luto na patty ay dapat juicy at malasa, hindi matuyo.</p>
    </li>
    <li>
        <h3>Pumili ng Tamang Keso</h3>
        <p>Ang keso ay isang mahalagang bahagi ng Hamburger. Ang cheddar ay ang klasikong pagpipilian, ngunit maaari ring mag-eksperimento sa iba pang uri ng keso tulad ng Swiss o American. Dapat matunaw ng maayos ang keso sa ibabaw ng mainit na patty para sa pinakamahusay na texture.</p>
    </li>
    <li>
        <h3>Gumamit ng Sariwa at Malutong na Toppings</h3>
        <p>Ang sariwang letucce at hinog na kamatis ay magpapaganda sa iyong Hamburger. Gamitin ang pinakasariwang sangkap upang matiyak na ang burger ay parehong kaakit-akit at masarap.</p>
    </li>
    <li>
        <h3>Itost ang mga Buns Nang Bahagya</h3>
        <p>Ang bahagyang pag-toast ng mga buns ay nagdaragdag ng malutong, gintong texture at pinipigilan ang mga buns na maging basang-basa mula sa katas ng burger. Maging maingat na huwag itong labis na i-toast dahil maaari itong maging masyadong matigas.</p>
    </li>
    <li>
        <h3>Assemble ang Burger Nang Maayos</h3>
        <p>Siguraduhin na ang mga toppings ay maayos na naka-stack upang maiwasan ang magulong burger. Ang maayos na pagkaka-assemble ng Hamburger ay magiging mas magaan para sa iyong mga customer at mas maganda tingnan.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 32, ang paggawa ng perpektong Hamburger ay nangangailangan ng balanse ng mga lasa at texture—mula sa pagluluto ng beef patty, pag-toast ng mga buns, at pag-layer ng toppings. Ang susi ay nasa mga detalye: lutuin ang patty nang tama, pumili ng sariwa at malutong na toppings, at i-toast ang mga buns ng perpekto.</p>
<p>Sa pagsunod sa gabay na ito mula sa Cookingdom, magagawa mong maghain ng masarap at maayos na Hamburger na tiyak na magugustuhan ng iyong mga customer, at makakatulong sa iyo na mapalapit sa pagiging eksperto sa paggawa ng burger sa Cookingdom!</p>
`,
  },
  {
    // Add entry for Level 33
    id: 'cookingdom-game-level-33',
    title: 'Cookingdom Level 33:<br>Alaskan Steamed Lobster',
    pageTitle: 'Cookingdom Level 33 - Gabay sa Alaskan Steamed Lobster',
    pageSubtitle:
      'Matutunan kung paano maghanda ng masarap na Alaskan Steamed Lobster sa Level 33 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_33.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-33' } },
    iframeUrl: 'https://www.youtube.com/embed/2wdfF1Rzb0M', // Placeholder
    seo: {
      title: 'Cookingdom Level 33 Gabay: Alaskan Steamed Lobster | Mga Tip & Istratehiya',
      description:
        'Masterin ang Alaskan Steamed Lobster sa Level 33 ng Cookingdom. Makakuha ng mga tip sa paghahanda, steaming, paggawa ng butter sauce, at paghahain ng seafood delicacy na ito.',
      keywords:
        'Cookingdom, Level 33, Alaskan Steamed Lobster, Lobster, Seafood, Steam, Butter Sauce, Gabay, Istratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_33.webp', // Placeholder
      levelInfoHtml:
        '<h3>Alaskan Steamed Lobster</h3><p><strong>Kahirapan:</strong> Mataas</p><p><strong>Tinatayang Oras:</strong> 6 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-30',
          title: 'Cookingdom Level 30<br>Doner Kebab',
          imageUrl: '/images/guides_30.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-30' } },
        },
        {
          id: 'cookingdom-game-level-31',
          title: 'Cookingdom Level 31<br>Café Mocha',
          imageUrl: '/images/guides_31.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-31' } },
        },
        {
          id: 'cookingdom-game-level-32',
          title: 'Cookingdom Level 32<br>Hamburger',
          imageUrl: '/images/guides_32.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-32' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 33, maghahanda ka ng isang marangyang ulam: Alaskan Steamed Lobster. Ang delicacy na ito ay kilala sa masarap na lasa at malambot na karne, kaya’t paborito ng mga mahilig sa seafood. Ang hamon sa level na ito ay ang tamang pag-steam ng lobster habang pinapanatili itong juicy, pagdaragdag ng tamang pampalasa, at paghahain ng butter sauce upang mapalabas ang natural na tamis ng karne ng lobster.</p>
<p>Ang gabay na ito ay magtuturo sa iyo ng bawat hakbang sa paggawa ng Alaskan Steamed Lobster, mula sa paghahanda ng lobster, pag-steam nito, at paghahain ng tamang kasamahan.</p>

<h2 id="goal">Mga Layunin sa Level 33</h2>
<ul>
    <li>Maghanda ng lobster para sa steaming.</li>
    <li>I-steam ang lobster ng maayos.</li>
    <li>Maghanda ng butter sauce na sasama sa lobster.</li>
    <li>Hainin ang Alaskan Steamed Lobster na may butter sauce.</li>
</ul>

<h2 id="steps">Hakbang-hakbang na Gabay sa Paghahanda ng Alaskan Steamed Lobster</h2>
<ol>
    <li>
        <h3>Maghanda ng Lobster</h3>
        <p>Ang unang hakbang sa paggawa ng Alaskan Steamed Lobster ay ang tamang paghahanda ng lobster para sa steaming.</p>
        <p>Sa Cookingdom, kakailanganin mong linisin ang lobster at alisin ang mga parte na kailangang itapon.</p>
        <p><strong>Tip:</strong> Banlawan ang lobster sa malamig na tubig upang alisin ang anumang dumi o debris, lalo na sa mga claw at buntot.</p>
        <p><strong>Tip:</strong> Kung ikaw ay nagtatrabaho gamit ang buhay na lobster, mahalaga na dahan-dahan itong hawakan. Sa Cookingdom, kadalasan mong ilalagay ang lobster sa isang malaking steaming pot o basket.</p>
    </li>
    <li>
        <h3>I-Steam ang Lobster</h3>
        <p>Ngayon na malinis at handa na ang iyong lobster, oras na para i-steam ito. Sa Cookingdom, kailangan mong ilagay ang lobster sa isang malaking steaming pot na may tubig at pakuluan ito.</p>
        <p><strong>Tip:</strong> Siguraduhing may sapat na tubig sa pot upang makagawa ng steam, ngunit huwag masyadong puno upang hindi malubog ang lobster.</p>
        <p><strong>Tip:</strong> I-steam ang lobster ng 8-10 minuto bawat pound. Malalaman mong tapos na ang lobster kapag ang shell nito ay naging maliwanag na pula, at ang karne ay malambot at opaque.</p>
        <p><strong>Tip:</strong> Mag-ingat na huwag ma-oversteam ang lobster, dahil maaari itong magdulot ng matigas at rubbery na karne. Bantayan ang timer ng maigi.</p>
    </li>
    <li>
        <h3>Maghanda ng Butter Sauce</h3>
        <p>Habang ang lobster ay nag-i-steam, oras na para maghanda ng butter sauce na ihahain kasama ng lobster.</p>
        <p>Sa Cookingdom, maaari kang gumawa ng isang simpleng garlic butter sauce sa pamamagitan ng pagtunaw ng butter sa pan at pagdagdag ng minced garlic, lemon juice, at mga herbs (tulad ng parsley o thyme).</p>
        <p><strong>Tip:</strong> I-adjust ang pampalasa ayon sa iyong panlasa. Kung nais mo ng maanghang na lasa, maaari kang magdagdag ng chili flakes o paprika sa butter sauce.</p>
        <p><strong>Tip:</strong> Panatilihing mainit ang butter sauce habang nag-i-steam ang lobster upang maihain agad ito kapag tapos na ang lobster.</p>
    </li>
    <li>
        <h3>Hainin ang Lobster</h3>
        <p>Kapag tapos na ang lobster sa steaming at handa na ang butter sauce, oras na para i-serve.</p>
        <p>Maingat na tanggalin ang lobster mula sa steaming pot at ilagay ito sa serving plate.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mong buksan ang shell ng lobster upang gawing mas madali para sa customer na kainin ang karne. Maaari ka ring gumamit ng lobster cracker o maliit na tinidor upang matulungan sa prosesong ito.</p>
        <p>Ibuhos ang butter sauce sa ibabaw ng lobster o ihain ito sa gilid para sa dipping.</p>
        <p><strong>Tip:</strong> Garnish ang ulam ng sariwang herbs tulad ng parsley o lemon wedge para sa dagdag na visual appeal.</p>
    </li>
</ol>

<h2 id="tips">Mga Pro Tips para sa Tagumpay sa Level 33</h2>
<ul>
    <li>
        <h3>Huwag I-oversteam ang Lobster</h3>
        <p>Ang sobrang pag-steam ay maaaring magdulot ng matigas at dry na karne. Siguraduhing bantayan ang proseso ng steaming ng maigi. Ang oras ng steaming ay depende sa laki ng lobster, kaya’t tingnan ang kulay at texture ng shell ng lobster upang malaman kung tapos na ito.</p>
    </li>
    <li>
        <h3>Gumawa ng Masarap na Butter Sauce</h3>
        <p>Ang isang mahusay na season na butter sauce ay makakapag-enhance ng lasa ng Alaskan Steamed Lobster. Ang garlic, lemon juice, at sariwang herbs ay magbibigay ng sariwa at flavorful na kick. Siguraduhing tunawin ang butter sa mababang apoy upang maiwasan ang pagkasunog ng garlic.</p>
    </li>
    <li>
        <h3>Hainin Agad para sa Pinakamagandang Lasa</h3>
        <p>Ang Alaskan Steamed Lobster ay pinakamahusay na ihain ng sariwa at mainit. Kapag tapos na ang lobster at handa na ang butter sauce, i-serve ito agad para sa pinakamagandang lasa at karanasan.</p>
    </li>
    <li>
        <h3>Mag-garnish ng Malikhain</h3>
        <p>Ang pag-garnish ng sariwang herbs tulad ng parsley o lemon wedge ay magdadagdag ng elegance sa presentation at magpapaganda sa kabuuang appeal ng ulam.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 33, ang paggawa ng Alaskan Steamed Lobster ay tungkol sa tamang balanse ng steaming process, paggawa ng flavorful butter sauce, at paghahain ng maayos. Ang perpektong pag-steam ng lobster at paghahanda ng tamang butter sauce ay magreresulta sa isang masarap, malambot, at flavorful na ulam na tiyak na magugustuhan ng iyong mga customer.</p>
<p>Sa pamamagitan ng pagsunod sa gabay na ito, makakagawa ka ng perpektong Alaskan Steamed Lobster sa bawat pagkakataon. Bantayan ang iyong steaming time, maghanda ng masarap na butter sauce, at i-serve ito ng sariwa para sa ultimate dining experience.</p>
`,
  },
  {
    // Add entry for Level 34
    id: 'cookingdom-game-level-34',
    title: 'Cookingdom Level 34:<br>King Crab',
    pageTitle: 'Cookingdom Level 34 - Gabay sa King Crab',
    pageSubtitle: 'Matutunan kung paano maghanda ng King Crab sa Level 34 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_34.webp', // Placeholder
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-34' } },
    iframeUrl: 'https://www.youtube.com/embed/1dlwivzYyZg', // Placeholder
    seo: {
      title: 'Cookingdom Level 34 Gabay: King Crab | Mga Tip at Istratehiya',
      description:
        'Masterin ang King Crab sa Level 34 ng Cookingdom. Kumuha ng mga tip sa pag-crack, pagluluto, paggawa ng sarsa, at paghahain ng marangyang seafood dish na ito.',
      keywords:
        'Cookingdom, Level 34, King Crab, Crab, Seafood, Steam, Boil, Butter Sauce, Gabay, Istratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_34.webp', // Placeholder
      levelInfoHtml:
        '<h3>King Crab</h3><p><strong>Hirap:</strong> Mataas</p><p><strong>Oras:</strong> 6 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin</p>', // Estimate
      featuredGuides: [
        {
          id: 'cookingdom-game-level-31',
          title: 'Cookingdom Level 31<br>Café Mocha',
          imageUrl: '/images/guides_31.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-31' } },
        },
        {
          id: 'cookingdom-game-level-32',
          title: 'Cookingdom Level 32<br>Hamburger',
          imageUrl: '/images/guides_32.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-32' } },
        },
        {
          id: 'cookingdom-game-level-33',
          title: 'Cookingdom Level 33<br>Alaskan Steamed Lobster',
          imageUrl: '/images/guides_33.webp', // Placeholder
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-33' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Level 34, ang iyong layunin ay maghanda ng isang marangyang ulam: ang King Crab. Kilala sa malambot at matamis na karne, ang King Crab ay isang mataas na uri ng seafood na nangangailangan ng tumpak na paghawak at pagluluto upang makuha ang perpektong balanse ng tekstura at lasa. Ang hamon sa level na ito ay hindi lamang ang pagluluto ng crab kundi pati na rin ang paghahanda ng tamang sarsa upang magkomplemento sa masarap at malambot na karne.</p>
<p>Ang gabay na ito ay magtuturo sa iyo ng mga hakbang-hakbang kung paano maghanda ng King Crab, mula sa pagbabalat ng shell hanggang sa paghahain nito kasama ang tamang sarsa.</p>

<h2 id="goal">Layunin ng Level 34</h2>
<ul>
    <li>Balatan ang King Crab upang makuha ang karne.</li>
    <li>Lutuin ang King Crab na karne hanggang sa maging perpekto.</li>
    <li>Maghanda ng complementary na sarsa para sa crab.</li>
    <li>Ihain ang King Crab na may sarsa at garnish.</li>
</ul>

<h2 id="steps">Hakbang-hakbang na Gabay para sa Pag-master ng King Crab</h2>
<ol>
    <li>
        <h3>Balatan ang King Crab</h3>
        <p>Ang unang hakbang sa paghahanda ng King Crab ay ang pagbabalat ng shell. Sa Cookingdom, kakailanganin mo ang crab cracker o iba pang kasangkapan upang basagin ang matigas na shell at makuha ang matamis at malambot na karne.</p>
        <p><strong>Tip:</strong> Mag-ingat na huwag masira ang delicate na karne ng crab. Basagin ang shell sa mga tamang lugar upang hindi madurog ang karne.</p>
        <p><strong>Tip:</strong> Kailangan mong alisin ang mga hindi nakakain na bahagi ng crab, tulad ng mga gills at mga paa, bago magpatuloy sa pagluluto.</p>
    </li>
    <li>
        <h3>Lutuin ang King Crab na Karne</h3>
        <p>Kapag nakuha na ang karne, oras na upang lutuin ito. Sa Cookingdom, karaniwang ibababad o isi-steam ang King Crab upang mailabas ang likas nitong lasa.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, kailangan mong i-steam ang crab ng mga 8-10 minuto hanggang sa maging mainit ang karne. Mag-ingat na huwag ito labis na lutuin upang hindi maging matigas at tuyo.</p>
        <p><strong>Tip:</strong> Kung magbo-boil ka ng crab, tiyaking ang tubig ay may sapat na alat upang mapahusay ang lasa. Maaari ka ring magdagdag ng mga herbs o lemon sa tubig upang magbigay ng masarap na amoy.</p>
    </li>
    <li>
        <h3>Maghanda ng Complementary na Sarsa</h3>
        <p>Habang niluluto ang crab, kailangan mong maghanda ng rich butter sauce upang samahan ang King Crab. Ang isang simpleng garlic butter sauce ay perpekto sa crab at magdadagdag ng kalaliman at kasaganaan sa ulam.</p>
        <p>Sa Cookingdom, tunawin ang mantikilya sa isang kawali, pagkatapos ay idagdag ang tinadtad na bawang, lemon juice, at tinadtad na parsley para sa kal freshness.</p>
        <p><strong>Tip:</strong> Maaari ka ring magdagdag ng kaunting white wine o chili flakes sa sarsa para sa dagdag na kick.</p>
        <p><strong>Tip:</strong> Tikman ang sarsa at ayusin ang pampalasa kung kinakailangan upang matiyak na may tamang balanse ng lasa. Ang butter sauce ay dapat mag-enhance ng tamis ng karne ng crab nang hindi ito tinatabunan.</p>
    </li>
    <li>
        <h3>Ihain ang King Crab</h3>
        <p>Matapos maluto ang crab at maihanda ang sarsa, oras na upang ihain ang King Crab.</p>
        <p>Ilagay ang crab sa isang serving plate at ibuhos ng generous amount ng butter sauce.</p>
        <p><strong>Tip:</strong> Sa Cookingdom, maaari mo ring garnish ang ulam ng fresh herbs (tulad ng parsley o thyme) at mga wedges ng lemon upang magdagdag ng brightness at fresh na hitsura.</p>
        <p><strong>Tip:</strong> Ihain ang crab kasama ng crusty bread o steamed vegetables upang kumpleto ang ulam.</p>
    </li>
</ol>

<h2 id="tips">Pro Tips para sa Tagumpay sa Level 34</h2>
<ul>
    <li>
        <h3>Huwag I-overcook ang Crab</h3>
        <p>Ang sobrang pagluluto ng King Crab ay magdudulot ng tuyo at matigas na karne. Siguraduhin na i-steam o i-boil ang crab sa tamang oras (mga 8-10 minuto) upang mapanatili ang lambot nito.</p>
    </li>
    <li>
        <h3>Perpekto ang Butter Sauce</h3>
        <p>Ang susi sa mahusay na King Crab na ulam ay ang butter sauce. Siguraduhin na ito ay mayaman ngunit hindi matapang. Ang mga fresh ingredients tulad ng bawang, lemon, at herbs ay magbibigay ng dagdag na lasa at magpapalabas ng natural na tamis ng crab.</p>
    </li>
    <li>
        <h3>Gamitin ang Tamang Kasangkapan para Basagin ang Crab</h3>
        <p>Upang makuha ang matamis na karne ng crab, siguraduhin na gumamit ng crab cracker o specialized tools upang maingat na basagin ang shell. Huwag magmadali sa prosesong ito dahil ang pagpapanatili ng buo at malinis na karne ay magbibigay ng magandang presentation.</p>
    </li>
    <li>
        <h3>Ihain agad</h3>
        <p>IHain ang King Crab agad pagkatapos lutuin upang mapanatili itong mainit at fresh. Dapat mainit pa ang butter sauce at ihain ang crab mula sa steamer o boiling pot para sa pinakamagandang lasa.</p>
    </li>
    <li>
        <h3>Garnish para sa Visual Appeal</h3>
        <p>Ang magandang garnish ay hindi lamang nagpapaganda sa hitsura ng ulam, kundi nagdadagdag din ng mga layer ng lasa. Ang mga fresh herbs, lemon wedges, at kahit isang sprinkle ng paprika ay magpapaganda sa presentation ng ulam.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Cookingdom Level 34, ang paghahanda ng King Crab ay nangangailangan ng kasanayan at katumpakan. Mula sa pagbabalat ng matigas na shell hanggang sa pagtiyak na perpekto ang luto ng karne, bawat hakbang ay mahalaga upang makalikha ng masarap at memorable na ulam. Pairs ang crab sa isang flavorful butter sauce at ihain ito ng fresh na may magandang garnish para sa perfectong pagtatapos.</p>
<p>Sa pagsunod sa gabay na ito, matutunan mo kung paano maghanda ng King Crab at magpapabilib sa iyong mga customer gamit ang marangyang seafood na ulam na ito. Mag-ingat sa oras ng pagluluto, maghanda ng rich sauce, at mag-garnish ng maayos upang makalikha ng isang ulam na hindi lamang masarap kundi maganda rin ang presentation.</p>
`,
  },
  {
    id: 'cookingdom-game-level-35',
    title: 'Cookingdom Level 35:<br>Tsokolate',
    pageTitle: 'Cookingdom Level 35 - Gabay sa Tsokolate',
    pageSubtitle:
      'Matutong gumawa ng masasarap na tsokolateng panghimagas sa Level 35 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_35.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-35' } },
    iframeUrl: 'https://www.youtube.com/embed/3-Cfdyxut48',
    seo: {
      title: 'Gabay sa Cookingdom Level 35: Tsokolate | Mga Tip at Estratehiya',
      description:
        'Masterin ang paggawa ng tsokolateng panghimagas sa Level 35 ng Cookingdom. Alamin kung paano tunawin ang tsokolate, gumawa ng mousse o fondue, at magdekorasyon ng tamang presentasyon.',
      keywords:
        'Cookingdom, Level 35, Tsokolate, Panghimagas, Tunaw na Tsokolate, Fondue, Mousse, Keyk, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_35.webp',
      levelInfoHtml:
        '<h3>Tsokolate</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 5 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-32',
          title: 'Cookingdom Level 32<br>Hamburger',
          imageUrl: '/images/guides_32.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-32' } },
        },
        {
          id: 'cookingdom-game-level-33',
          title: 'Cookingdom Level 33<br>Alaskan Steamed Lobster',
          imageUrl: '/images/guides_33.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-33' } },
        },
        {
          id: 'cookingdom-game-level-34',
          title: 'Cookingdom Level 34<br>Ketam Raja',
          imageUrl: '/images/guides_34.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-34' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Level 35, gagawa ka ng masarap at nakakatakam na panghimagas: Tsokolate! Ang tsokolate ay isang paboritong sangkap sa mga panghimagas, at sa antas na ito, kailangan mong lumikha ng isang dekadenteng putahe na nagpapakita ng mayaman, malambot, at matamis nitong katangian. Mula sa pagtunaw ng tsokolate hanggang sa paghahain ng final na presentasyon, kailangan ng tamang timpla at teknik.</p>
  <p>Ang gabay na ito ay gagabay sa iyo sa bawat hakbang sa paggawa ng perpektong tsokolateng panghimagas — mula sa pagtunaw hanggang sa pagdekorasyon at paghain.</p>
  
  <h2 id="goal">Mga Layunin sa Level 35</h2>
  <ul>
      <li>Tunawin nang tama ang tsokolate upang makamit ang makinis na tekstura.</li>
      <li>Ihanda ang panghimagas gamit ang tinunaw na tsokolate.</li>
      <li>Magdekorasyon at ihain ang tsokolateng putahe.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay sa Paghahanda ng Tsokolate</h2>
  <ol>
      <li>
          <h3>Tunawin ang Tsokolate</h3>
          <p>Ang unang hakbang ay ang pagtunaw ng tsokolate. Sa Cookingdom, kailangan mong tunawin ito nang maingat upang makuha ang makinis at makintab na resulta nang hindi ito nasusunog.</p>
          <p><strong>Tip:</strong> Maaaring gamitin ang double boiler o microwave. Kung microwave, gamitin ito sa maikling yugto (20–30 segundo kada ulit) at haluin sa pagitan upang maiwasan ang pagkasunog.</p>
          <p><strong>Tip:</strong> Haluin nang marahan upang makamit ang makinis at makintab na resulta. Kung masyadong malapot, magdagdag ng kaunting cream o mantikilya.</p>
      </li>
      <li>
          <h3>Ihanda ang Panghimagas</h3>
          <p>Kapag natunaw na ang tsokolate, maaari na itong isama sa iyong dessert. Maaaring gumawa ng tsokolateng keyk, mousse, o fondue.</p>
          <p><strong>Tip:</strong> Para sa mousse, isama ang tinunaw na tsokolate sa whipped cream upang makamit ang magaan at malambot na tekstura.</p>
          <p><strong>Tip:</strong> Para sa fondue, ilagay ang tinunaw na tsokolate sa fondue pot at panatilihing mainit. Mainam na isawsaw dito ang mga prutas tulad ng strawberry, saging, at marshmallow.</p>
      </li>
      <li>
          <h3>Magdagdag ng Panimpla at Dekorasyon</h3>
          <p>Para mas mapasarap ang lasa, maaaring magdagdag ng vanilla extract o isang kurot ng asin upang balansehin ang tamis.</p>
          <p>Mga topping tulad ng durog na mani, whipped cream, o chocolate shavings ay nagbibigay ng dagdag na tekstura at ganda sa presentasyon.</p>
          <p><strong>Tip:</strong> Kung tsokolateng keyk ang ginagawa, lagyan ito ng tsokolateng ganache o creamy na frosting para sa dagdag sarap.</p>
      </li>
      <li>
          <h3>Ibuo at Ihain ang Tsokolateng Panghimagas</h3>
          <p>Kapag handa na ang tsokolate at dekorasyon, oras na para buuin ang dessert.</p>
          <p>Sa keyk, i-layer ito gamit ang frosting at lagyan ng tinunaw na tsokolate sa ibabaw.</p>
          <p>Sa fondue, ihain ito sa fondue pot na may kasamang prutas, biskwit, o marshmallow.</p>
          <p><strong>Tip:</strong> Sa Cookingdom, mahalaga ang presentasyon! Ayusin ito nang maganda sa pinggan at lagyan ng garnish gaya ng tsokolateng pahimakas, berries, o caramel sauce.</p>
      </li>
  </ol>
  
  <h2 id="tips">Mga Tip Para sa Tagumpay sa Level 35</h2>
  <ul>
      <li>
          <h3>Tunawin nang Dahan-dahan</h3>
          <p>Huwag magmadali sa pagtunaw. Gumamit ng mahinang init at haluin palagi upang maiwasan ang pagkakabuo o pagkasunog.</p>
      </li>
      <li>
          <h3>Pumili ng Tamang Uri ng Tsokolate</h3>
          <p>Gumamit ng de-kalidad na tsokolate. Para sa baking, dark chocolate ang mas mainam. Para sa mas malinamnam na lasa, gumamit ng milk o white chocolate ayon sa putahe.</p>
      </li>
      <li>
          <h3>Balansehin ang Tamis</h3>
          <p>Ang isang kurot ng asin ay nagpapalabas ng natural na lasa ng tsokolate. Mainam ito sa mga dessert tulad ng mousse o keyk.</p>
      </li>
      <li>
          <h3>Ipares sa Bagay na Lasa</h3>
          <p>Ang tsokolate ay bagay sa berries, mani, at pampalasa tulad ng kanela o kape. Subukan ang iba't ibang kombinasyon para sa kakaibang dessert.</p>
      </li>
      <li>
          <h3>Siguraduhing Sariwa</h3>
          <p>Ang mga tsokolateng dessert ay pinakamainam kapag sariwa, lalo na kung may cream. Ihanda nang maaga ngunit i-assemble bago ihain.</p>
      </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Cookingdom Level 35, ang paggawa ng perpektong tsokolateng panghimagas ay nangangailangan ng tamang teknik at atensyon sa detalye. Mula sa pagtunaw hanggang sa presentasyon, bawat hakbang ay mahalaga.</p>
  <p>Gamit ang gabay na ito, matututuhan mong gumawa ng masasarap na tsokolateng panghimagas na siguradong magugustuhan ng iyong mga customer — mula keyk, mousse, hanggang fondue. Sa tsokolate, panalo ka palagi sa panlasa ng dessert lovers!</p>
  `,
  },
  {
    id: 'cookingdom-game-level-36',
    title: 'Cookingdom Level 36:<br>Indian Curry',
    pageTitle: 'Cookingdom Level 36 - Gabay sa Indian Curry',
    pageSubtitle: 'Matutong magluto ng malinamnam na Indian Curry sa Level 36 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_36.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-36' } },
    iframeUrl: 'https://www.youtube.com/embed/ME58Cd2FYJ4',
    seo: {
      title: 'Gabay sa Cookingdom Level 36: Indian Curry | Mga Tip at Estratehiya',
      description:
        'Masterin ang Indian Curry sa Level 36 ng Cookingdom. Alamin kung paano maghanda ng mga sangkap, maghalo ng mga pampalasa, magpakulo, at ihain ang mabangong putaheng ito.',
      keywords:
        'Cookingdom, Level 36, Indian Curry, Curry, Pagkaing Indian, Pampalasa, Pakulo, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_36.webp',
      levelInfoHtml:
        '<h3>Indian Curry</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Tinatayang Oras:</strong> 5 minuto</p><p><strong>Mga Gantimpala:</strong> 4 na Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-33',
          title: 'Cookingdom Level 33<br>Alaskan Steamed Lobster',
          imageUrl: '/images/guides_33.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-33' } },
        },
        {
          id: 'cookingdom-game-level-34',
          title: 'Cookingdom Level 34<br>King Crab',
          imageUrl: '/images/guides_34.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-34' } },
        },
        {
          id: 'cookingdom-game-level-35',
          title: 'Cookingdom Level 35<br>Chocolate',
          imageUrl: '/images/guides_35.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-35' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Sa Cookingdom Level 36, maghahanda ka ng isang malasa at mabangong putahe: Indian Curry. Kilala sa masalimuot at malalim na lasa, ang Indian Curry ay isang paboritong ulam sa maraming kultura. Ang hamon sa level na ito ay ang tamang balanse ng mga pampalasa at sangkap upang maging masarap at kaaya-aya ang curry. Kadalasang pinapakulo ang karne o gulay kasama ng mga pampalasa, damo, at cream o gata ng niyog upang maging malasa at makapal ang sabaw.</p>
  <p>Sasagid ang gabay na ito sa bawat hakbang mula sa paghahanda ng pampalasa hanggang sa paghahain ng curry kasama ang mainam na panluob gaya ng kanin o tinapay.</p>
  
  <h2 id="goal">Mga Layunin sa Level 36</h2>
  <ul>
    <li>Ihanda ang mga sangkap ng curry.</li>
    <li>Lutuin ang curry gamit ang tamang halo ng pampalasa.</li>
    <li>Pakuluin upang magsanib ang mga lasa.</li>
    <li>Ihain ang Indian Curry kasama ng kanin o tinapay.</li>
  </ul>
  
  <h2 id="steps">Hakbang-hakbang na Gabay sa Indian Curry</h2>
  <ol>
    <li>
      <h3>Ihanda ang Mga Sangkap</h3>
      <p>Ang unang hakbang sa paggawa ng masarap na curry ay ang paghahanda ng mga sangkap. Kabilang dito ang:</p>
      <ul>
        <li>Manok, kordero, o gulay (depende sa uri ng curry).</li>
        <li>Sibuyas, bawang, at luya bilang base.</li>
        <li>Iba't ibang pampalasa tulad ng cumin, turmeric, coriander, garam masala, at chili powder.</li>
        <li>Gata ng niyog, kamatis, o cream para sa sabaw.</li>
      </ul>
      <p><strong>Tip:</strong> Sa Cookingdom, kailangan mong hiwain at ihanda nang maaga ang lahat ng sangkap upang tuloy-tuloy ang pagluluto.</p>
    </li>
    <li>
      <h3>Igisa ang Mga Aromatic</h3>
      <p>Magpainit ng mantika sa kawali. Igisa ang tinadtad na sibuyas, bawang, at luya upang makabuo ng mabangong base ng curry.</p>
      <p><strong>Tip:</strong> Igisa hanggang sa maging golden at mabango. Mahalaga ito para sa masarap na base.</p>
      <p><strong>Tip:</strong> Haluin nang madalas upang hindi masunog ang sangkap.</p>
    </li>
    <li>
      <h3>Idagdag ang Pampalasa</h3>
      <p>Kapag luto na ang aromatics, idagdag ang mga pampalasa tulad ng cumin, turmeric, coriander, garam masala, at chili powder.</p>
      <p>Igisa ito ng isa hanggang dalawang minuto para lumabas ang natural na mantika ng pampalasa.</p>
      <p><strong>Tip:</strong> Bawasan ang chili powder kung gusto mo ng banayad na curry.</p>
    </li>
    <li>
      <h3>Idagdag ang Karne o Gulay</h3>
      <p>Idagdag ang piniling karne o gulay at haluin para malagyan ito ng pampalasa.</p>
      <p><strong>Tip:</strong> Lutuing mabuti ang karne hanggang sa mamula-mula. Kung gulay ang gamit, tiyaking medyo malambot na bago lagyan ng sabaw.</p>
    </li>
    <li>
      <h3>Gawin ang Sabaw</h3>
      <p>Idagdag ang kamatis o gata ng niyog depende sa uri ng curry na niluluto.</p>
      <p><strong>Tip:</strong> Para sa creamy na curry, gamitin ang gata o heavy cream.</p>
      <p>Haluin ito sa pinagsamang karne at pampalasa upang magsama-sama ang lahat ng sangkap.</p>
      <p><strong>Tip:</strong> Kung masyadong malapot, magdagdag ng kaunting tubig o sabaw.</p>
    </li>
    <li>
      <h3>Pakuluin ang Curry</h3>
      <p>Pakuluin ng 15–20 minuto upang magsanib ang lasa at lumambot ang sangkap.</p>
      <p><strong>Tip:</strong> Timplahan muli sa kalagitnaan kung kailangan—dagdagan ng asin, paminta, o pampalasa ayon sa panlasa.</p>
      <p><strong>Tip:</strong> Kung gusto mo ng mas malapot na sabaw, pakuluan pa ng mas matagal.</p>
    </li>
    <li>
      <h3>Ihain ang Indian Curry</h3>
      <p>Kapag luto na, ihain ito kasama ng kanin, naan, o roti para sa mas kumpletong pagkain.</p>
      <p><strong>Tip:</strong> Palamutian ng sariwang cilantro o katas ng kalamansi para sa dagdag na aroma at sarap.</p>
      <p><strong>Tip:</strong> Ihain kasama ng yogurt o raita para pababain ang anghang.</p>
    </li>
  </ol>
  
  <h2 id="tips">Mga Pro Tip para Magtagumpay sa Level 36</h2>
  <ul>
    <li>
      <h3>Ayusin ang Halo ng Pampalasa</h3>
      <p>Ang tamang timpla ng pampalasa ang susi. Kung baguhan ka, simulan sa garam masala at dagdagan ng ibang pampalasa ayon sa panlasa.</p>
    </li>
    <li>
      <h3>Huwag Mabilisan ang Pagpakulo</h3>
      <p>Hayaan itong kumulo upang magsama-sama ang lasa. Ang pasensya ay susi sa malalim at masarap na curry.</p>
    </li>
    <li>
      <h3>Kontrolin ang Anghang</h3>
      <p>Ayusin ang dami ng chili powder ayon sa kagustuhan. Maaari itong dagdagan o bawasan depende sa inaasam na anghang.</p>
    </li>
    <li>
      <h3>Gamitin ang mga Sariwang Sangkap</h3>
      <p>Ang sariwang luya, bawang, karne, at gulay ay nagbibigay ng pinakamasarap na resulta.</p>
    </li>
    <li>
      <h3>Ayusin ang Presentasyon</h3>
      <p>Garnish ng cilantro, dagdag garam masala, o kalamansi para maging mas kaakit-akit at appetizing.</p>
    </li>
  </ul>
  
  <h2 id="summary">Buod</h2>
  <p>Sa Level 36 ng Cookingdom, ang pagluluto ng Indian Curry ay nakasalalay sa balanseng pampalasa, masarap na sabaw, at tamang panahon ng pagpapakulo. Kung ito man ay manok, kordero, o gulay, ang susi ay nasa maingat na kombinasyon ng sangkap at angkop na presentasyon.</p>
  <p>Sa pagsunod sa gabay na ito, makakalikha ka ng Indian Curry na magugustuhan ng lahat ng customer mo sa Cookingdom!</p>
  `,
  },
  {
    id: 'cookingdom-game-level-37',
    title: 'Antas 37 ng Cookingdom:<br>Kimchi Rice',
    pageTitle: 'Gabayan para sa Cookingdom Antas 37 - Kimchi Rice',
    pageSubtitle: 'Alamin kung paano magluto ng masarap na Kimchi Rice sa Antas 37 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_37.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-37' } },
    iframeUrl: 'https://www.youtube.com/embed/tFEyZT_-jTM',
    seo: {
      title: 'Gabayan sa Cookingdom Antas 37: Kimchi Rice | Mga Tips at Estratehiya',
      description:
        'Masterin ang pagluluto ng Kimchi Rice sa Antas 37 ng Cookingdom. Alamin ang tamang paghahanda ng kanin, pag-gisa ng kimchi, pagdaragdag ng toppings tulad ng pritong itlog, at kung paano ihain ang lutong Koreano na ito.',
      keywords:
        'Cookingdom, Antas 37, Kimchi Rice, Kimchi, Pagkaing Koreano, Gisa, Pritong Itlog, Gochujang, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_37.webp',
      levelInfoHtml:
        '<h3>Kimchi Rice</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Inaasahang Oras:</strong> 4 minuto</p><p><strong>Gantimpala:</strong> 4 na Bituin</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-34',
          title: 'Cookingdom Antas 34<br>King Crab',
          imageUrl: '/images/guides_34.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-34' } },
        },
        {
          id: 'cookingdom-game-level-35',
          title: 'Cookingdom Antas 35<br>Tsokolate',
          imageUrl: '/images/guides_35.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-35' } },
        },
        {
          id: 'cookingdom-game-level-36',
          title: 'Cookingdom Antas 36<br>Indian Curry',
          imageUrl: '/images/guides_36.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-36' } },
        },
      ],
    },
    detailsHtml: `
<h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
<p>Sa Cookingdom Antas 37, maghahanda ka ng isang masarap at maasim na putahe: Kimchi Rice. Ang sikat na pagkaing Koreano na ito ay gawa sa kimchi, isang tradisyunal na binurong gulay, na hinahalo sa kanin at karaniwang sinasamahan ng mga gulay at pritong itlog sa ibabaw. Isa itong simpleng lutuin pero punong-puno ng lasa—maanghang, maasim, at malinamnam. Ang pangunahing hamon dito ay ang wastong pagsasama-sama ng kimchi at kanin upang makamit ang balanseng lasa.</p>
<p>Gagabayan ka ng walkthrough na ito sa bawat hakbang ng pagluluto ng masarap na Kimchi Rice.</p>

<h2 id="goal">Mga Layunin sa Antas 37</h2>
<ul>
    <li>Ihanda ang kanin bilang base.</li>
    <li>Gisahin ang kimchi at iba pang sangkap upang makuha ang tamang timpla ng lasa.</li>
    <li>Ihain ang Kimchi Rice na may pritong itlog at palamuti.</li>
</ul>

<h2 id="steps">Hakbang-hakbang na Gabay sa Kimchi Rice</h2>
<ol>
    <li>
        <h3>Ihanda ang Kanin</h3>
        <p>Ang base ng Kimchi Rice ay siyempre ang kanin. Magluto ng puting kanin o short-grain rice kung wala kang natirang kanin.</p>
        <p><strong>Tip:</strong> Gamitin ang kaning luma (gabi bago) para mas madaling igisa at mas mahusay sumipsip ng lasa.</p>
    </li>
    <li>
        <h3>Gisahin ang Kimchi</h3>
        <p>Sa Cookingdom, kailangan mong igisa ang kimchi (binurong repolyo) upang lumabas ang masarap at maasim nitong lasa.</p>
        <p><strong>Tip:</strong> Hiwain sa maliliit ang kimchi bago igisa para pantay ang pagkakaluto.</p>
        <p>Maglagay ng kaunting mantika sa kawali at igisa ang kimchi ng 2-3 minuto hanggang lumambot at lumabas ang lasa nito.</p>
        <p><strong>Tip:</strong> Kung gusto mo ng mas anghang, magdagdag ng gochujang (Korean chili paste) o gochugaru (Korean chili flakes).</p>
    </li>
    <li>
        <h3>Igisa ang Kanin</h3>
        <p>Kapag naluto na ang kimchi, idagdag ang kanin at haluin. Tiyaking pantay ang pagkakahalo ng kimchi at kanin.</p>
        <p><strong>Tip:</strong> Igisa ng mga 5 minuto sa katamtamang init para masipsip ng kanin ang lasa ng kimchi.</p>
        <p><strong>Tip:</strong> Maaari ka ring magdagdag ng toyo o sesame oil para sa dagdag na sarap.</p>
    </li>
    <li>
        <h3>Magdagdag ng Gulay (Opsyonal)</h3>
        <p>Puwede kang magdagdag ng gulay tulad ng karot, sibuyas dahon, o gisantes para sa dagdag na texture at lasa.</p>
        <p><strong>Tip:</strong> Kung magdadagdag ng gulay, igisa muna ito kasama ng kimchi bago ihalo sa kanin.</p>
    </li>
    <li>
        <h3>Magprito ng Itlog</h3>
        <p>Karaniwang may pritong itlog sa ibabaw ang Kimchi Rice upang magdagdag ng linamnam at lambot.</p>
        <p>Sa Cookingdom, iprito ang itlog ayon sa gusto mo. Ang medyo malambot na pula ng itlog ay masarap ihalo sa kanin.</p>
        <p><strong>Tip:</strong> Maari mo ring lagyan ng kaunting sesame oil o toyo sa ibabaw ng itlog para sa dagdag sarap.</p>
    </li>
    <li>
        <h3>Ihain ang Kimchi Rice</h3>
        <p>Kapag luto na at malasang-malasang Kimchi Rice, ihain na ito.</p>
        <p>Sa Cookingdom, ilagay sa mangkok o plato ang kanin at ipatong ang pritong itlog.</p>
        <p><strong>Tip:</strong> Lagyan ng tinadtad na sibuyas dahon o sesame seeds bilang palamuti at dagdag na lasa.</p>
        <p><strong>Tip:</strong> Maaari ring magdagdag ng kaunting kimchi sa gilid para sa dagdag na anghang.</p>
    </li>
</ol>

<h2 id="tips">Mga Pro Tip para Magtagumpay sa Antas 37</h2>
<ul>
    <li>
        <h3>Gamitin ang Kaning Luma</h3>
        <p>Mas mainam gamitin ang kaning luma dahil hindi ito malagkit at mas madaling igisa.</p>
    </li>
    <li>
        <h3>Pagandahin ang Lasa ng Kimchi</h3>
        <p>Ang pag-gisa sa kimchi ay susi sa masarap na lasa. Gamitin ang gochujang o gochugaru kung gusto mo ng dagdag anghang.</p>
    </li>
    <li>
        <h3>I-adjust ang Antas ng Anghang</h3>
        <p>Depende sa hilig mo, maaari mong bawasan o dagdagan ang chili paste o flakes para makuha ang tamang anghang.</p>
    </li>
    <li>
        <h3>Ang Pritong Itlog ay Mahalagang Bahagi</h3>
        <p>Ang itlog ay nagbibigay ng creaminess at linamnam. Siguraduhing bahagyang malambot ang pula ng itlog.</p>
    </li>
    <li>
        <h3>Palamutian para sa Ganda at Sarap</h3>
        <p>Ang sibuyas dahon at sesame seeds ay nagbibigay ng kulay, texture, at dagdag lasa sa iyong putahe.</p>
    </li>
</ul>

<h2 id="summary">Buod</h2>
<p>Sa Antas 37 ng Cookingdom, ang pagluluto ng Kimchi Rice ay tungkol sa balanseng timpla ng maasim, maanghang, at malinamnam. Igisa ang kimchi at kanin, timplahan ng toyo o sesame oil, at tapusin sa isang pritong itlog sa ibabaw. Gamitin man ang gulay o mag-focus sa kimchi, siguradong mapapasaya mo ang iyong mga customer sa bold na lasa ng pagkaing ito.</p>
<p>Sa gabay na ito, matututuhan mo ang sining ng paggawa ng Kimchi Rice—isang klasikong Korean dish na may simpleng sangkap ngunit malakas ang dating sa lasa.</p>
`,
  },
  {
    id: 'cookingdom-game-level-38',
    title: 'Cookingdom Level 38:<br>Tteokbokki Rush',
    pageTitle: 'Cookingdom Level 38 - Gabay sa Tteokbokki Rush',
    pageSubtitle: 'Masterin ang maanghang na Tteokbokki sa mabilis na Level 38 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_38.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-38' } },
    iframeUrl: 'https://www.youtube.com/embed/EzXju3Q8Zsc',
    seo: {
      title: 'Gabay sa Cookingdom Level 38: Tteokbokki Rush | Mga Tip at Estratehiya',
      description:
        'Masterin ang Tteokbokki Rush sa Level 38 ng Cookingdom. Alamin kung paano lutuin ang rice cakes, hawakan ang sarsa, magdagdag ng itlog, at makakuha ng mataas na puntos.',
      keywords:
        'Cookingdom, Level 38, Tteokbokki, Korean Street Food, Rice Cakes, Gochujang, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_38.webp',
      levelInfoHtml:
        '<h3>Tteokbokki Rush</h3><p><strong>Hirap:</strong> Katamtaman-Pataas</p><p><strong>Tinatayang Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin (Tinataya)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-35',
          title: 'Cookingdom Level 35<br>Tsokolate',
          imageUrl: '/images/guides_35.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-35' } },
        },
        {
          id: 'cookingdom-game-level-36',
          title: 'Cookingdom Level 36<br>Indian Curry',
          imageUrl: '/images/guides_36.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-36' } },
        },
        {
          id: 'cookingdom-game-level-37',
          title: 'Cookingdom Level 37<br>Kimchi Rice',
          imageUrl: '/images/guides_37.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-37' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p>Hatid ng Level 38 ang init sa pamamagitan ng <strong>Tteokbokki</strong>, isang maanghang na paboritong Korean street food. Bilis, katumpakan, at pamamahala sa oras ang susi sa matagumpay na level na ito.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Ihain ang hindi bababa sa 30 Tteokbokki</li>
    <li>Panatilihin ang customer satisfaction sa higit 85%</li>
    <li>Tapusin sa loob ng 3 minuto</li>
  </ul>
  
  <h2 id="ingredients">🌶️ Mga Sangkap</h2>
  <ul>
    <li>Rice cakes (tteok)</li>
    <li>Sarsang gochujang</li>
    <li>Nilagang itlog (bonus kung nais ng customer)</li>
    <li>Dahon ng sibuyas o buto ng linga (garnish)</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Hakbang-hakbang na Estratehiya</h2>
  <ol>
    <li>Simulan sa pagpapakulo ng rice cakes sa dalawang kaserola.</li>
    <li>Ihanda ang gochujang sauce habang nagluluto ang rice cakes.</li>
    <li>Idagdag ang sarsa sa kawali, isama ang rice cakes, at lutuin hanggang medyo lumapot.</li>
    <li>Ilagay ang itlog at garnish bago ihain.</li>
    <li>Simulan agad ang susunod na batch habang naghahain upang iwasan ang idle time.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Tip ng Eksperto</h2>
  <ul>
    <li><strong>Pagluluto ng Batch:</strong> Magluto ng maramihan upang makatipid sa oras.</li>
    <li><strong>Itlog = Bonus:</strong> Laging idagdag kung may oras pa ang customer.</li>
    <li><strong>Bantayan ang Kaserola:</strong> Masasayang ang rice cakes kung maluto nang sobra.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Karaniwang Pagkakamali</h2>
  <ul>
    <li>Napapasong sarsa dahil hindi nabantayan.</li>
    <li>Walang prep — ang idle time ay sumisira ng combo.</li>
    <li>Nakakalimutang magdagdag ng itlog/garnish — mawawala ang bonus points.</li>
  </ul>
  `,
  },
  {
    id: 'cookingdom-game-level-39',
    title: 'Cookingdom Level 39:<br>Spaghetti with Mushroom Cream Sauce',
    pageTitle: 'Cookingdom Level 39 - Gabay sa Spaghetti with Mushroom Cream Sauce',
    pageSubtitle:
      'Masterin ang Spaghetti with Mushroom Cream Sauce, isang creamy na Western dish na nangangailangan ng tamang timing sa Level 39.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_39.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-39' } },
    iframeUrl: 'https://www.youtube.com/embed/VfAxaHCxBOA',
    seo: {
      title:
        'Gabay sa Cookingdom Level 39: Spaghetti with Mushroom Cream Sauce | Mga Tips & Strategy',
      description:
        'Masterin ang Spaghetti with Mushroom Cream Sauce sa Level 39 ng Cookingdom. Makakuha ng mga tips sa pagluluto ng pasta, pag-sauté ng kabute, paghahanda ng cream sauce, at paghahain ng creamy dish na ito.',
      keywords:
        'Cookingdom, Level 39, Spaghetti, Mushroom Cream Sauce, Pasta, Cream Sauce, Italian Food, Gabay, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_39.webp',
      levelInfoHtml:
        '<h3>Spaghetti w/ Mushroom Cream Sauce</h3><p><strong>Hirap:</strong> Katamtaman</p><p><strong>Oras:</strong> 3 minuto 30 segundo</p><p><strong>Gantimpala:</strong> 4 Bituin (Tinataya)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-36',
          title: 'Cookingdom Level 36<br>Kari ng India',
          imageUrl: '/images/guides_36.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-36' } },
        },
        {
          id: 'cookingdom-game-level-37',
          title: 'Cookingdom Level 37<br>Kimchi Rice',
          imageUrl: '/images/guides_37.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-37' } },
        },
        {
          id: 'cookingdom-game-level-38',
          title: 'Cookingdom Level 38<br>Tteokbokki Rush',
          imageUrl: '/images/guides_38.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-38' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p><strong>Level 39</strong> ay nagdadala ng hamon ng <strong>Spaghetti with Mushroom Cream Sauce</strong>, isang creamy na Western dish na nangangailangan ng tamang pag-timing sa pagitan ng pagpapakulo ng pasta at pag-sauté ng kabute. Ang eksaktong paggawa ay susi sa pagkuha ng 3 bituin dito.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Maghain ng hindi bababa sa 20 buong ulam</li>
    <li>Pananatilihin ang kasiyahan ng customer sa 90% o higit pa</li>
    <li>Matapos sa loob ng 3 minuto at 30 segundo</li>
  </ul>
  
  <h2 id="ingredients">🍝 Mga Sangkap</h2>
  <ul>
    <li>Spaghetti noodles (pinakulo)</li>
    <li>Mga kabute (hiniwa at in-saute)</li>
    <li>Cream sauce (ihanda nang hiwalay)</li>
    <li>Parsley o keso bilang garnish</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Hakbang-hakbang na Estratehiya</h2>
  <ol>
    <li>Simulan sa pagpapakulo ng spaghetti sa parehong mga kawali.</li>
    <li>Sautehin ang mga kabute sa hiwalay na kawali habang ang pasta ay niluluto.</li>
    <li>Painitin ang cream sauce sa isang maliit na kawali — huwag hayaang kumulo.</li>
    <li>Pagsamahin ang pasta, kabute, at cream sauce bago ihain.</li>
    <li>Garnish gamit ang parsley o keso bago ihain ang bawat ulam.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Pro Tips</h2>
  <ul>
    <li><strong>Huwag Sabayan ang Pagpakulo:</strong> Mag-umpisa ng isa pang kawali nang kaunti upang mapanatili ang tuloy-tuloy na daloy ng pasta.</li>
    <li><strong>Hiwain na ang mga Kabute:</strong> Makakatipid ng oras kapag abala.</li>
    <li><strong>Gamitin ang Auto-Serve:</strong> Kapag overwhelmed, pinapanatili nito ang combo.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Karaniwang Pagkakamali</h2>
  <ul>
    <li>Hinahayaan na maluto ng sobra ang pasta — nasisira ang ulam at nawawalan ng oras.</li>
    <li>Nakalimutang painitin ang sauce bago pagsamahin — nagpapababa ng rating ng ulam.</li>
    <li>Hindi paglalagay ng garnish — nawawala ang mahalagang bonus points.</li>
  </ul>
  `,
  },
  {
    id: 'cookingdom-game-level-40',
    title: 'Cookingdom Level 40:<br>Beef Wellington',
    pageTitle: 'Cookingdom Level 40 - Gabay sa Beef Wellington',
    pageSubtitle:
      'Masterin ang eleganteng at komplikadong Beef Wellington sa Level 40 ng Cookingdom.',
    category: '31-40',
    publishDate: '2025-05-06',
    isSpecial: false,
    imageUrl: '/images/guides_40.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-40' } },
    iframeUrl: 'https://www.youtube.com/embed/DGrXE28wjnU',
    seo: {
      title: 'Cookingdom Level 40 Gabay: Beef Wellington | Tips & Strategy',
      description:
        'Masterin ang Beef Wellington sa Level 40 ng Cookingdom. Kumuha ng mga tips sa pagpapaitim ng beef, paghahanda ng duxelles, pagbabalot ng pastry, pagluluto, at paghahain ng komplikadong putaheng ito.',
      keywords:
        'Cookingdom, Level 40, Beef Wellington, Beef Tenderloin, Puff Pastry, Mushroom Duxelles, Baking, Gabay, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_40.webp',
      levelInfoHtml:
        '<h3>Beef Wellington</h3><p><strong>Kahirapan:</strong> Mataas</p><p><strong>Tinatayang Oras:</strong> 4 minuto</p><p><strong>Mga Gantimpala:</strong> 5 Bituin (Tinataya)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-37',
          title: 'Cookingdom Level 37<br>Kimchi Rice',
          imageUrl: '/images/guides_37.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-37' } },
        },
        {
          id: 'cookingdom-game-level-38',
          title: 'Cookingdom Level 38<br>Tteokbokki Rush',
          imageUrl: '/images/guides_38.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-38' } },
        },
        {
          id: 'cookingdom-game-level-39',
          title: 'Cookingdom Level 39<br>Spaghetti with Mushroom Cream Sauce',
          imageUrl: '/images/guides_39.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-39' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p><strong>Level 40</strong> ay nag-aalok ng elegante at komplikadong putaheng <strong>Beef Wellington</strong>. Ang tamang timing, paghahanda, at paggamit ng oven ay mahalaga. Isa ito sa mga pinaka-mahirap na level sa ngayon, ngunit sulit kapag natutunan.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Maglingkod ng hindi bababa sa 18 Beef Wellington na putaheng kumpleto</li>
    <li>Panatilihing 85%+ ang kasiyahan ng customer</li>
    <li>Tapusin sa loob ng 4 na minuto</li>
  </ul>
  
  <h2 id="ingredients">🥩 Mga Sangkap</h2>
  <ul>
    <li>Beef tenderloin</li>
    <li>Mushroom duxelles</li>
    <li>Puff pastry</li>
    <li>Egg wash (para sa glazing)</li>
    <li>Gravy (opsyonal na bonus)</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Step-by-Step na Estratehiya</h2>
  <ol>
    <li>Simulan sa pamamagitan ng pag-sear ng beef tenderloin sa kawali.</li>
    <li>Maghanda ng mushroom duxelles habang ang beef ay nag-sear.</li>
    <li>Ibalot ang beef at duxelles sa puff pastry at mag-brush ng egg wash.</li>
    <li>I-bake sa oven — gamitin ang parehong mga slots ng oven upang mapabilis ang output.</li>
    <li>Ihain kasama ang gravy kapag pinapayagan ng customer ang bonus na oras.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Pro Tips</h2>
  <ul>
    <li><strong>Panatilihing Abala ang Mga Oven:</strong> Huwag hayaang mawalan ng gamit ang oven slots — laging queue ang susunod na Wellington.</li>
    <li><strong>Pre-prep Duxelles:</strong> Ihanda ang mushroom filling upang makatipid ng oras sa oras ng peak orders.</li>
    <li><strong>Mag-upgrade ng Oven:</strong> Mahalagang mag-bake nang mabilis upang maiwasan ang matagal na paghihintay.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Mga Karaniwang Pagkakamali</h2>
  <ul>
    <li>Nakalimutan ang egg wash — nagdudulot ng mas mababang ratings.</li>
    <li>Overcooked ang beef — kung iiwan ito sa kawali ng masyadong matagal.</li>
    <li>Idle time habang naghihintay para sa oven — magplano nang maaga at mag-multitask.</li>
  </ul>
  `,
  },
  {
    id: 'cookingdom-game-level-41',
    title: 'Cookingdom Level 41:<br>Donut',
    pageTitle: 'Cookingdom Level 41 - Gabay sa Donut',
    pageSubtitle:
      'Masterin ang matamis at mabilis na hamon ng paggawa ng Donut sa Level 41 ng Cookingdom.',
    category: '41-50',
    publishDate: '2025-05-07',
    isSpecial: false,
    imageUrl: '/images/guides_41.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-41' } },
    iframeUrl: 'https://www.youtube.com/embed/gws5p5MT2Bc',
    seo: {
      title: 'Cookingdom Level 41 Gabay: Donut | Tips & Estratehiya',
      description:
        'Masterin ang paggawa ng Donuts sa Level 41 ng Cookingdom. Kumuha ng mga tips sa deep frying, glazing, pagdagdag ng toppings, at mabilis na paghahain ng mga matamis na ito.',
      keywords:
        'Cookingdom, Level 41, Donut, Pagprito, Glaze, Toppings, Dessert, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_41.webp',
      levelInfoHtml:
        '<h3>Donut</h3><p><strong>Antas ng Hirap:</strong> Katamtaman</p><p><strong>Inaasahang Oras:</strong> 3 minuto</p><p><strong>Mga Gantimpala:</strong> 4 Bituin (Tinatayang)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-38',
          title: 'Cookingdom Level 38<br>Tteokbokki Rush',
          imageUrl: '/images/guides_38.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-38' } },
        },
        {
          id: 'cookingdom-game-level-39',
          title: 'Cookingdom Level 39<br>Spaghetti with Mushroom Cream Sauce',
          imageUrl: '/images/guides_39.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-39' } },
        },
        {
          id: 'cookingdom-game-level-40',
          title: 'Cookingdom Level 40<br>Beef Wellington',
          imageUrl: '/images/guides_40.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-40' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p><strong>Level 41</strong> ay nagdadala ng matamis at mabilis na hamon ng paggawa ng <strong>Donuts</strong>. Sa pamamagitan ng deep frying, glazing, at mga topping na iba't iba, kailangan mo ng matalim na konsentrasyon at mabilis na kamay upang makasabay sa demand ng customer.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Maghain ng hindi bababa sa 28 donuts</li>
    <li>Panatilihin ang 90% o mas mataas na kasiyahan ng customer</li>
    <li>Tapusin sa loob ng 3 minuto</li>
  </ul>
  
  <h2 id="ingredients">🍩 Mga Sangkap</h2>
  <ul>
    <li>Donut dough (plain)</li>
    <li>Frying oil</li>
    <li>Chocolate glaze / sugar glaze</li>
    <li>Toppings (sprinkles, nuts)</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Hakbang-hakbang na Estratehiya</h2>
  <ol>
    <li>Ilubog ang maraming piraso ng dough sa fryer nang sabay-sabay.</li>
    <li>Masusing bantayan ang fry timer — alisin bago mag-overcook.</li>
    <li>Isawsaw sa hinihinging glaze (chocolate o sugar).</li>
    <li>Magdagdag ng tamang topping at ihain kaagad.</li>
    <li>I-queue ang susunod na batch ng donuts habang naghahain ng kasalukuyan.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Pro Tips</h2>
  <ul>
    <li><strong>Batch Fry:</strong> Laging punuin ang fryer upang makatipid ng oras.</li>
    <li><strong>Alamin ang mga Pattern:</strong> Ang ilang mga customer ay laging humihiling ng parehong kombinasyon — tandaan ito.</li>
    <li><strong>Upgrade ang Fryer:</strong> Pinapabilis nito ang pagluluto at binabawasan ang panganib ng sunog.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Mga Karaniwang Pagkakamali</h2>
  <ul>
    <li>Over-frying na donuts — napakahalaga ng tamang oras sa level na ito.</li>
    <li>Maling glaze o topping — magtuon ng pansin sa mga order.</li>
    <li>Fryer downtime — nagdudulot ng pagkabasag ng combo at mababang rating ng bituin.</li>
  </ul>
  `,
  },
  {
    id: 'cookingdom-game-level-42',
    title: 'Cookingdom Level 42:<br>Mapo Tofu',
    pageTitle: 'Cookingdom Level 42 - Gabay sa Mapo Tofu',
    pageSubtitle:
      'Masterin ang matapang at maanghang na Chinese dish na Mapo Tofu, na nakatuon sa mga kasanayan sa wok at pamamahala ng pampalasa sa Level 42.',
    category: '41-50',
    publishDate: '2025-05-07',
    isSpecial: false,
    imageUrl: '/images/guides_42.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-42' } },
    iframeUrl: 'https://www.youtube.com/embed/bMS0DIO6nmo',
    seo: {
      title: 'Cookingdom Level 42 Gabay: Mapo Tofu | Mga Tips at Strategy',
      description:
        'Masterin ang Mapo Tofu sa Level 42 ng Cookingdom. Makakuha ng mga tip tungkol sa pagluluto gamit ang wok, pamamahala ng pampalasa, paghawak ng tofu, at paghahain ng klasikong Chinese dish na ito.',
      keywords:
        'Cookingdom, Level 42, Mapo Tofu, Pagkain ng Chinese, Sichuan Cuisine, Tofu, Doubanjiang, Wok, Gabay, Strategy',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_42.webp',
      levelInfoHtml:
        '<h3>Mapo Tofu</h3><p><strong>Hirap:</strong> Katamtaman-Hirap</p><p><strong>Oras ng Pagtatapos:</strong> 3 minuto 30 segundo</p><p><strong>Gantimpala:</strong> 4 Bituin (Tantiya)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-39',
          title: 'Cookingdom Level 39<br>Spaghetti with Mushroom Cream Sauce',
          imageUrl: '/images/guides_39.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-39' } },
        },
        {
          id: 'cookingdom-game-level-40',
          title: 'Cookingdom Level 40<br>Beef Wellington',
          imageUrl: '/images/guides_40.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-40' } },
        },
        {
          id: 'cookingdom-game-level-41',
          title: 'Cookingdom Level 41<br>Donut',
          imageUrl: '/images/guides_41.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-41' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p><strong>Level 42</strong> ay nagtatampok ng matapang at maanghang na Chinese dish na <strong>Mapo Tofu</strong>. Itinuturo ng level na ito ang pagluluto gamit ang wok at pamamahala ng pampalasa. Mahalaga ang kahusayan at pagtutok sa pagkakasunod-sunod ng mga sangkap upang magtagumpay.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Maghain ng hindi bababa sa 26 na Mapo Tofu na putahe</li>
    <li>Panatilihin ang 85% o mas mataas na kasiyahan ng customer</li>
    <li>Tapusin sa loob ng 3 minuto at 30 segundo</li>
  </ul>
  
  <h2 id="ingredients">🌶️ Mga Sangkap</h2>
  <ul>
    <li>Malambot na tofu na piraso</li>
    <li>Giniling na baboy o plant-based na karne</li>
    <li>Chili bean paste (doubanjiang)</li>
    <li>Bawang, sibuyas na pula</li>
    <li>Opsyonal: Sichuan pepper oil para sa dagdag na lasa</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Hakbang-hakbang na Estratehiya</h2>
  <ol>
    <li>Painitin ang langis sa wok at magsimula sa giniling na baboy.</li>
    <li>Idagdag ang bawang at chili paste, ihalo agad upang maiwasan ang pagsunog.</li>
    <li>Maingat na isama ang tofu at lutuin hanggang sa magdikit ang sarsa.</li>
    <li>Budburan ng sibuyas na pula at opsyonal na pepper oil, pagkatapos ay ihain.</li>
    <li>Laging maghanda ng susunod na batch habang niluluto ang kasalukuyang isa upang manatiling mabilis.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Pro Tips</h2>
  <ul>
    <li><strong>Huwag Ihalo ang Tofu ng Labis:</strong> Madaling mabasag at masisira ang kalidad ng putahe.</li>
    <li><strong>Batch Cooking:</strong> Magluto ng 2-3 na bahagi nang sabay kung pareho ang mga order.</li>
    <li><strong>Mag-upgrade ng Wok:</strong> Ang mas mabilis na wok ay magpapabilis ng oras ng paghahanda.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Karaniwang Mga Pagkakamali</h2>
  <ul>
    <li>Pagkakalimutang magdagdag ng bawang o chili paste — nagpapababa ng lasa ng putahe.</li>
    <li>Pagbasag ng tofu dahil sa sobrang paghahalo — nasisira ang texture at nababawasan ang mga bituin.</li>
    <li>Pag-aaksaya ng oras sa pagluluto ng isang bahagi sa isang pagkakataon sa panahon ng rush.</li>
  </ul>
  `,
  },
  {
    id: 'cookingdom-game-level-43',
    title: 'Cookingdom Level 43:<br>Moon Cake',
    pageTitle: 'Cookingdom Level 43 - Gabay sa Moon Cake',
    pageSubtitle:
      'Masterin ang delicado at maligayang Moon Cake, pagsubok sa katumpakan ng mga palaman at pagluluto sa Level 43.',
    category: '41-50',
    publishDate: '2025-05-07',
    isSpecial: false,
    imageUrl: '/images/guides_43.webp',
    detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-43' } },
    iframeUrl: 'https://www.youtube.com/embed/RetlPFno314',
    seo: {
      title: 'Cookingdom Level 43 Gabay: Moon Cake | Tips at Estratehiya',
      description:
        'Masterin ang Moon Cake sa Level 43 ng Cookingdom. Makakuha ng mga tips sa pagpili ng mga palaman, paghubog, tumpak na pagluluto, at paghahain ng tradisyonal na panghimagas na ito.',
      keywords:
        'Cookingdom, Level 43, Moon Cake, Panghimagas na Intsik, Pagkaing Pista, Pagbe-bake, Palaman, Mold, Gabay, Estratehiya',
    },
    sidebarData: {
      sidebarImageUrl: '/images/guides_43.webp',
      levelInfoHtml:
        '<h3>Moon Cake</h3><p><strong>Hirap:</strong> Katamtaman-Mataas</p><p><strong>Tinatayang Oras:</strong> 3 minuto</p><p><strong>Gantimpala:</strong> 4 Bituin (Tinataya)</p>',
      featuredGuides: [
        {
          id: 'cookingdom-game-level-40',
          title: 'Cookingdom Level 40<br>Beef Wellington',
          imageUrl: '/images/guides_40.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-40' } },
        },
        {
          id: 'cookingdom-game-level-41',
          title: 'Cookingdom Level 41<br>Donut',
          imageUrl: '/images/guides_41.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-41' } },
        },
        {
          id: 'cookingdom-game-level-42',
          title: 'Cookingdom Level 42<br>Mapo Tofu',
          imageUrl: '/images/guides_42.webp',
          detailsRoute: { name: 'guide-detail', params: { id: 'cookingdom-game-level-42' } },
        },
      ],
    },
    detailsHtml: `
  <h2 id="overview">Pangkalahatang-ideya ng Laro</h2>
  <p><strong>Level 43</strong> ay ipinagdiriwang ang tradisyon sa pamamagitan ng delicado at maligayang <strong>Moon Cake</strong>. Sinusubok ng level na ito ang iyong katumpakan sa pagpili ng mga palaman at tamang oras ng pagluluto. Balansihin ang bilis at katumpakan upang mapanatili ang kasiyahan ng mga customer at makakuha ng 3 bituin.</p>
  
  <h2 id="goal">🎯 Layunin</h2>
  <ul>
    <li>Maghain ng hindi bababa sa 24 na moon cakes</li>
    <li>Panatilihin ang kasiyahan ng customer sa 90% o higit pa</li>
    <li>Matapos sa loob ng 3 minuto</li>
  </ul>
  
  <h2 id="ingredients">🥮 Mga Sangkap</h2>
  <ul>
    <li>Moon cake dough (pre-mixed)</li>
    <li>Mga palaman: pulang bean, lotus seed, salted egg yolk</li>
    <li>Moon cake mold (nag-iwan ng pattern sa ibabaw)</li>
    <li>Oven para sa pagluluto</li>
  </ul>
  
  <h2 id="steps">👨‍🍳 Hakbang-hakbang na Estratehiya</h2>
  <ol>
    <li>Pumili ng tamang palaman ayon sa order ng customer.</li>
    <li>I-wrap ang palaman sa dough at ilagay sa moon cake mold.</li>
    <li>I-stamp ang pattern at ilagay sa oven.</li>
    <li>Mag-monitor ng oras ng pagluluto nang mabuti — ang underbaked o overbaked na cake ay magpapababa ng puntos.</li>
    <li>Agad na ihain pagkatapos maluto. Maghanda ng susunod na batch habang naghihintay.</li>
  </ol>
  
  <h2 id="tips">🔥 Mga Pro Tips</h2>
  <ul>
    <li><strong>Pre-select molds:</strong> Ihanda ang tamang mold bago dumating ang mga order upang makatipid ng oras.</li>
    <li><strong>Gamitin ang parehong oven slots:</strong> Palaging puno ang oven upang maiwasan ang downtime.</li>
    <li><strong>Upgrade oven speed:</strong> Ang mas mabilis na pagluluto ay nakakatulong sa pagpapanatili ng combos sa mga rush.</li>
  </ul>
  
  <h2 id="mistakes">🚫 Mga Karaniwang Pagkakamali</h2>
  <ul>
    <li>Magkakamaling palaman — siguraduhing suriin ang icon ng order ng customer bago magbalot.</li>
    <li>Pag-burn ng moon cake — manatili malapit sa oven habang nagluluto.</li>
    <li>Idle dough na hindi pa naluluto — nagiging sanhi ng nasayang na prep time at nasisira ang combo chains.</li>
  </ul>
  `,
  },
]
