
const nav = document.querySelector('.navlinks');
const menu = document.querySelector('.menu');
if (menu) menu.addEventListener('click', () => nav.classList.toggle('open'));

const page = document.body.dataset.page;
document.querySelectorAll('.navlinks a').forEach(a => {
  if (a.dataset.page === page) a.classList.add('active');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-order]').forEach(btn => {
  btn.addEventListener('click', () => window.location.href = 'order.html');
});

/* Settings */
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettings = document.getElementById('closeSettings');
const settingsBackdrop = document.getElementById('settingsBackdrop');

function setSettings(open) {
  if (!settingsPanel) return;
  settingsPanel.classList.toggle('open', open);
  settingsBackdrop?.classList.toggle('open', open);
  settingsPanel.setAttribute('aria-hidden', String(!open));
}
settingsBtn?.addEventListener('click', () => setSettings(!settingsPanel.classList.contains('open')));
closeSettings?.addEventListener('click', () => setSettings(false));
settingsBackdrop?.addEventListener('click', () => setSettings(false));

const translations = {
  en: {
    home:'Home', about:'About', benefits:'Benefits', order:'Order', contact:'Contact',
    orderNow:'ORDER NOW', settings:'Settings', language:'Language', theme:'Theme', bright:'Bright', dark:'Dark',
    orderKicker:'Order', orderTitle:'SHAHI GRASS SILAGE.', availableNow:'Available now', perPacket:'/ packet',
    '50kgPacket':'50 KG per packet',
    minMax:'Minimum order: <strong>20 packets</strong> &nbsp; • &nbsp; Maximum order: <strong>400 packets</strong>',
    totalWeightLabel:'Total Weight', totalPriceLabel:'Total Price',
    paymentRequired:'Payment required to confirm your order', cod:'Cash on Delivery',
    receiptTitle:'Order Receipt / Confirmation', receiptText:'After your order is confirmed, the receipt/confirmation will be sent to SHAHI AGRO FARM WhatsApp: 01814026318.'
  },
  bn: {
    home:'হোম', about:'আমাদের সম্পর্কে', benefits:'উপকারিতা', order:'অর্ডার', contact:'যোগাযোগ',
    orderNow:'অর্ডার করুন', settings:'সেটিংস', language:'ভাষা', theme:'থিম', bright:'উজ্জ্বল', dark:'ডার্ক',
    orderKicker:'অর্ডার', orderTitle:'শাহী গ্রাস সাইলেজ।', availableNow:'বর্তমানে উপলব্ধ', perPacket:'/ প্যাকেট',
    '50kgPacket':'প্রতি প্যাকেট ৫০ কেজি',
    minMax:'সর্বনিম্ন অর্ডার: <strong>২০ প্যাকেট</strong> &nbsp; • &nbsp; সর্বোচ্চ অর্ডার: <strong>৪০০ প্যাকেট</strong>',
    totalWeightLabel:'মোট ওজন', totalPriceLabel:'মোট মূল্য',
    paymentRequired:'অর্ডার নিশ্চিত করতে পেমেন্ট প্রয়োজন', cod:'ক্যাশ অন ডেলিভারি',
    receiptTitle:'অর্ডার রসিদ / নিশ্চিতকরণ', receiptText:'আপনার অর্ডার নিশ্চিত হওয়ার পর রসিদ/নিশ্চিতকরণ SHAHI AGRO FARM-এর WhatsApp নম্বর 01814026318-এ পাঠানো হবে।'
  }
};

/* Full-site language dictionary. The original English text is captured once so
   switching English ↔ বাংলা never loses the original wording. */
const bn = {
  'Real Product • Ready for Delivery':'বাস্তব পণ্য • ডেলিভারির জন্য প্রস্তুত',
  'Nutritious roughage, year-round feed supply, better feed utilization, easy storage and consistent quality — presented by SHAHI AGRO FARM.':'পুষ্টিকর রাফেজ, সারা বছর খাদ্য সরবরাহ, ভালো খাদ্য ব্যবহার, সহজ সংরক্ষণ ও ধারাবাহিক মান — SHAHI AGRO FARM-এর উপস্থাপনা।',
  'ORDER NOW →':'অর্ডার করুন →','EXPLORE BENEFITS':'উপকারিতা দেখুন',
  'The brand':'ব্র্যান্ড','Feed planning made more practical.':'খাদ্য পরিকল্পনাকে আরও বাস্তবসম্মত করুন।',
  'Grass silage can turn abundant grass into a stored roughage reserve, helping farmers build a more consistent feeding routine.':'ঘাসের সাইলেজ প্রচুর ঘাসকে সংরক্ষিত রাফেজে পরিণত করতে পারে এবং কৃষকদের আরও ধারাবাহিক খাদ্য দেওয়ার ব্যবস্থা গড়তে সাহায্য করে।',
  'Quality Focus':'মানের প্রতি গুরুত্ব','Built around proper preparation, fermentation and airtight storage.':'সঠিক প্রস্তুতি, ফারমেন্টেশন ও বায়ুরোধী সংরক্ষণের ওপর ভিত্তি করে তৈরি।',
  'Consistency':'ধারাবাহিকতা','A stored roughage option for times when fresh grass is less available.':'তাজা ঘাস কম পাওয়া গেলে ব্যবহারের জন্য সংরক্ষিত রাফেজের একটি বিকল্প।',
  'Convenience':'সুবিধাজনক','Packaged feed that can be portioned as part of a daily routine.':'প্যাকেটজাত খাদ্য, যা প্রতিদিনের খাদ্য দেওয়ার রুটিনে সহজে পরিমাণমতো ব্যবহার করা যায়।',
  'Better Utilization':'উন্নত ব্যবহার','Use surplus grass as a feed reserve instead of letting it go to waste.':'অতিরিক্ত ঘাস নষ্ট না করে খাদ্যের মজুত হিসেবে ব্যবহার করুন।',
  'Ready when you are':'আপনি প্রস্তুত হলেই','Choose SHAHI GRASS SILAGE.':'SHAHI GRASS SILAGE বেছে নিন।','All purchasing details are kept on the dedicated order page for a cleaner experience.':'সহজ অভিজ্ঞতার জন্য সব কেনাকাটার তথ্য আলাদা অর্ডার পেজে রাখা হয়েছে।',
  'Contact SHAHI AGRO FARM':'SHAHI AGRO FARM-এর সাথে যোগাযোগ করুন','Let’s make your feed supply more consistent.':'আপনার খাদ্য সরবরাহকে আরও ধারাবাহিক করি।',
  'CALL NOW':'এখনই কল করুন','ORDER NOW':'অর্ডার করুন','REAL SHAHI GRASS SILAGE':'আসল SHAHI GRASS SILAGE',
  'Our Silage. Ready for Farmers.':'আমাদের সাইলেজ। কৃষকদের জন্য প্রস্তুত।','Real photos from SHAHI AGRO FARM showing our prepared silage bags and stock ready for handling and delivery.':'SHAHI AGRO FARM-এর আসল ছবি—প্রস্তুত সাইলেজের বস্তা ও হ্যান্ডলিং এবং ডেলিভারির জন্য প্রস্তুত স্টক।',
  'Prepared silage stock':'প্রস্তুত সাইলেজের স্টক','Silage stock ready for delivery':'ডেলিভারির জন্য প্রস্তুত সাইলেজ স্টক',
  'Modern farm products with a focus on practical, consistent livestock feed solutions.':'বাস্তবসম্মত ও ধারাবাহিক গবাদিপশুর খাদ্য সমাধানের ওপর গুরুত্ব দেওয়া আধুনিক খামার পণ্য।',
  'Explore':'অন্বেষণ','Contact':'যোগাযোগ',
  'Built around better feed planning.':'আরও ভালো খাদ্য পরিকল্পনার ভিত্তিতে তৈরি।',
  'SHAHI GRASS SILAGE is our grass-silage product, designed around practical storage, convenient feeding and consistent roughage availability.':'SHAHI GRASS SILAGE আমাদের ঘাসের সাইলেজ পণ্য, যা বাস্তবসম্মত সংরক্ষণ, সুবিধাজনক খাদ্য প্রদান এবং ধারাবাহিক রাফেজ সরবরাহকে কেন্দ্র করে তৈরি।',
  'Grass that works beyond the field.':'ক্ষেতের বাইরেও কার্যকর ঘাস।','When grass is abundant, preserving it properly can create a feed reserve for periods when fresh grass is harder to maintain.':'যখন ঘাস প্রচুর থাকে, তখন সঠিকভাবে সংরক্ষণ করলে এমন সময়ের জন্য খাদ্যের মজুত তৈরি করা যায় যখন তাজা ঘাস পাওয়া কঠিন।',
  'Our website keeps the message simple: focus on quality preparation, proper fermentation and airtight storage, then make the finished silage convenient for farmers to use.':'আমাদের ওয়েবসাইটের বার্তা সহজ: মানসম্মত প্রস্তুতি, সঠিক ফারমেন্টেশন ও বায়ুরোধী সংরক্ষণে গুরুত্ব দিন, তারপর প্রস্তুত সাইলেজকে কৃষকদের জন্য সহজে ব্যবহারযোগ্য করুন।',
  'SEE BENEFITS →':'উপকারিতা দেখুন →','About the brand':'ব্র্যান্ড সম্পর্কে','Our approach':'আমাদের পদ্ধতি','Simple, practical, consistent.':'সহজ, বাস্তবসম্মত ও ধারাবাহিক।',
  'The product story is based on the fundamentals of good silage rather than exaggerated promises.':'পণ্যের গল্প অতিরঞ্জিত প্রতিশ্রুতির বদলে ভালো সাইলেজ তৈরির মৌলিক বিষয়ের ওপর ভিত্তি করে।',
  'Grass Selection':'ঘাস নির্বাচন','Start with suitable harvested grass and manage the material appropriately.':'উপযুক্ত কাটা ঘাস দিয়ে শুরু করুন এবং উপকরণটি সঠিকভাবে পরিচালনা করুন।',
  'Moisture Awareness':'আর্দ্রতা সম্পর্কে সচেতনতা','Moisture level is important to successful silage fermentation.':'সফল সাইলেজ ফারমেন্টেশনের জন্য আর্দ্রতার মাত্রা গুরুত্বপূর্ণ।',
  'Airtight Storage':'বায়ুরোধী সংরক্ষণ','Good packing and sealing help protect the stored feed.':'ভালোভাবে প্যাকিং ও সিল করা সংরক্ষিত খাদ্যকে সুরক্ষিত রাখতে সাহায্য করে।',
  'Consistent Routine':'ধারাবাহিক রুটিন','A stored roughage reserve can support a more consistent feeding program.':'সংরক্ষিত রাফেজের মজুত আরও ধারাবাহিক খাদ্য দেওয়ার ব্যবস্থা বজায় রাখতে সাহায্য করতে পারে।',
  'Our product':'আমাদের পণ্য','A packaged grass-silage option from SHAHI AGRO FARM.':'SHAHI AGRO FARM-এর প্যাকেটজাত ঘাসের সাইলেজ।','OUR STORY':'আমাদের গল্প','Talk to SHAHI AGRO FARM.':'SHAHI AGRO FARM-এর সাথে কথা বলুন।',
  'Why silage?':'সাইলেজ কেন?','Main benefits of grass silage.':'ঘাসের সাইলেজের প্রধান উপকারিতা।','Practical advantages of properly prepared and stored grass silage for livestock feeding.':'সঠিকভাবে প্রস্তুত ও সংরক্ষিত ঘাসের সাইলেজ গবাদিপশুর খাদ্য হিসেবে ব্যবহারের বাস্তব সুবিধা।',
  'Good Source of Fiber':'ফাইবারের ভালো উৎস','Helps maintain proper rumen function and supports healthy digestion.':'সঠিক রুমেন কার্যক্রম বজায় রাখতে এবং স্বাস্থ্যকর হজমে সহায়তা করে।',
  'Keeps Grass Available Year-Round':'সারা বছর ঘাসের সরবরাহ বজায় রাখে','You can harvest grass when it is abundant and preserve it for periods of rain, drought, or grass shortage.':'ঘাস প্রচুর থাকলে সংগ্রহ করে সংরক্ষণ করতে পারেন, যাতে বৃষ্টি, খরা বা ঘাসের সংকটের সময়ে ব্যবহার করা যায়।',
  'Can Support Milk Production':'দুধ উৎপাদনে সহায়তা করতে পারে','Good-quality silage provides energy and fiber needed by dairy cows. When combined with an appropriate protein/mineral concentrate, it can help maintain or improve milk yield.':'ভালো মানের সাইলেজ দুধাল গাভীর প্রয়োজনীয় শক্তি ও ফাইবার সরবরাহ করে। উপযুক্ত প্রোটিন/মিনারেল কনসেনট্রেটের সঙ্গে ব্যবহার করলে দুধের উৎপাদন বজায় রাখতে বা বাড়াতে সহায়তা করতে পারে।',
  'Preserves Nutrients':'পুষ্টি সংরক্ষণ করে',"Proper fermentation preserves much of the feed's nutritional value compared with simply leaving harvested grass to spoil.":'সঠিক ফারমেন্টেশন কাটা ঘাস নষ্ট হয়ে যাওয়ার তুলনায় খাদ্যের পুষ্টিমান অনেকটাই সংরক্ষণ করে।',
  'Reduces Feed Wastage':'খাদ্যের অপচয় কমায়','Properly packed and sealed silage can be stored for months, reducing dependence on daily fresh grass.':'সঠিকভাবে প্যাক ও সিল করা সাইলেজ কয়েক মাস সংরক্ষণ করা যায়, ফলে প্রতিদিনের তাজা ঘাসের ওপর নির্ভরতা কমে।',
  'Convenient for Farmers':'কৃষকদের জন্য সুবিধাজনক','Once prepared, it is relatively easy to portion and feed every day.':'প্রস্তুত করার পর প্রতিদিন পরিমাণমতো দেওয়া ও খাওয়ানো তুলনামূলক সহজ।',
  'Can Reduce Feeding Costs':'খাদ্য দেওয়ার খরচ কমাতে পারে','If you grow your own grass, silage can turn surplus grass into a stored feed reserve rather than letting it go to waste.':'নিজের ঘাস নিজে উৎপাদন করলে সাইলেজ অতিরিক্ত ঘাসকে নষ্ট না করে সংরক্ষিত খাদ্যের মজুতে পরিণত করতে পারে।',
  'Useful for Commercial Dairy Farms':'বাণিজ্যিক দুগ্ধ খামারের জন্য উপকারী','Consistent roughage availability makes it easier to maintain a more consistent feeding program.':'ধারাবাহিক রাফেজের সরবরাহ আরও নিয়মিত খাদ্য দেওয়ার ব্যবস্থা বজায় রাখা সহজ করে।',
  'Strong customer-selling points.':'গ্রাহকদের কাছে তুলে ধরার গুরুত্বপূর্ণ দিক।','A simple promise built around useful feed fundamentals.':'উপকারী খাদ্যের মৌলিক বিষয়ের ওপর ভিত্তি করে একটি সহজ প্রতিশ্রুতি।',
  'Order':'অর্ডার','Choose your quantity and the website will calculate total weight and total price instantly.':'আপনার পরিমাণ নির্বাচন করুন, ওয়েবসাইট সঙ্গে সঙ্গে মোট ওজন ও মোট মূল্য হিসাব করবে।',
  'SHAHI GRASS SILAGE':'SHAHI GRASS SILAGE','Available now':'বর্তমানে উপলব্ধ','/ packet':'/ প্যাকেট','50 KG per packet':'প্রতি প্যাকেট ৫০ কেজি',
  'Minimum order:':'সর্বনিম্ন অর্ডার:','20 packets':'২০ প্যাকেট','Maximum order:':'সর্বোচ্চ অর্ডার:','400 packets':'৪০০ প্যাকেট',
  'Total Weight':'মোট ওজন','Total Price':'মোট মূল্য','Payment required to confirm your order':'অর্ডার নিশ্চিত করতে পেমেন্ট প্রয়োজন',
  'Choose bKash, Nagad, or Cash on Delivery below. For bKash, send payment to':'নিচে bKash, Nagad অথবা ক্যাশ অন ডেলিভারি নির্বাচন করুন। bKash-এর জন্য পেমেন্ট পাঠান',
  'WhatsApp:':'WhatsApp:','For digital payments, provide your payment number and transaction ID.':'ডিজিটাল পেমেন্টের ক্ষেত্রে আপনার পেমেন্ট নম্বর ও ট্রানজ্যাকশন আইডি দিন।',
  'bKash Official Number':'bKash-এর অফিসিয়াল নম্বর','Payment Method':'পেমেন্ট পদ্ধতি','bKash / Nagad':'bKash / Nagad',
  'Order Receipt / Confirmation':'অর্ডার রসিদ / নিশ্চিতকরণ','After your order is confirmed, the receipt/confirmation will be sent to SHAHI AGRO FARM WhatsApp: 01814026318.':'আপনার অর্ডার নিশ্চিত হওয়ার পর রসিদ/নিশ্চিতকরণ SHAHI AGRO FARM-এর WhatsApp নম্বর 01814026318-এ পাঠানো হবে।',
  'WhatsApp: 01814026318':'WhatsApp: 01814026318','Customer Name':'গ্রাহকের নাম','Your name':'আপনার নাম','Phone Number':'ফোন নম্বর','Your phone number':'আপনার ফোন নম্বর',
  'Delivery Address':'ডেলিভারি ঠিকানা','Full delivery address':'সম্পূর্ণ ডেলিভারি ঠিকানা','Select payment method':'পেমেন্ট পদ্ধতি নির্বাচন করুন','Cash on Delivery':'ক্যাশ অন ডেলিভারি',
  'Customer bKash / Nagad Number':'গ্রাহকের bKash / Nagad নম্বর','Number used to make payment':'পেমেন্ট করার জন্য ব্যবহৃত নম্বর','Payment Transaction ID':'পেমেন্ট ট্রানজ্যাকশন আইডি','Enter your payment transaction ID':'আপনার পেমেন্ট ট্রানজ্যাকশন আইডি লিখুন',
  'Payment confirmation requires a valid':'পেমেন্ট নিশ্চিত করতে বৈধ','transaction ID':'ট্রানজ্যাকশন আইডি','An order cannot be confirmed without it.':'এটি ছাড়া অর্ডার নিশ্চিত করা যাবে না।','PLACE ORDER →':'অর্ডার দিন →','Your order summary will appear here after you submit.':'সাবমিট করার পর আপনার অর্ডারের সারাংশ এখানে দেখা যাবে।',
  'Contact Us':'যোগাযোগ করুন','Our details':'আমাদের তথ্য','Address':'ঠিকানা','Phone 01':'ফোন ০১','Phone 02':'ফোন ০২','Ready to order?':'অর্ডার করতে প্রস্তুত?','Go to the order page to choose between 20 and 400 packets and see the automatic weight and price calculation.':'অর্ডার পেজে গিয়ে ২০ থেকে ৪০০ প্যাকেটের মধ্যে পরিমাণ নির্বাচন করুন এবং স্বয়ংক্রিয় ওজন ও মূল্য হিসাব দেখুন।',
  'CALL 01799900886':'কল করুন 01799900886','CALL 01632638470':'কল করুন 01632638470','For SHAHI GRASS SILAGE orders and general product enquiries, use the contact details below.':'SHAHI GRASS SILAGE-এর অর্ডার ও সাধারণ পণ্যের তথ্যের জন্য নিচের যোগাযোগের তথ্য ব্যবহার করুন।',
  'Nutritious roughage • Year-round feed supply • Better feed utilization • Easy storage • Consistent quality':'পুষ্টিকর রাফেজ • সারা বছর খাদ্য সরবরাহ • ভালো খাদ্য ব্যবহার • সহজ সংরক্ষণ • ধারাবাহিক মান',
  'See Every Detail About Us':'আমাদের সম্পর্কে বিস্তারিত দেখুন','Watch our Facebook video to learn more about SHAHI AGRO FARM, our grass silage, preparation process, and our work.':'SHAHI AGRO FARM, আমাদের ঘাসের সাইলেজ, প্রস্তুত প্রক্রিয়া ও কাজ সম্পর্কে আরও জানতে আমাদের Facebook ভিডিও দেখুন।','WATCH OUR VIDEO ↗':'আমাদের ভিডিও দেখুন ↗',
  'Silage quality depends heavily on the grass, moisture level, fermentation, and airtight storage. Poorly fermented or moldy silage should':'সাইলেজের মান ঘাস, আর্দ্রতার মাত্রা, ফারমেন্টেশন ও বায়ুরোধী সংরক্ষণের ওপর অনেকটাই নির্ভর করে। সঠিকভাবে ফারমেন্ট না হওয়া বা ছত্রাকযুক্ত সাইলেজ','be fed to cattle.':'গবাদিপশুকে খাওয়ানো উচিত নয়।',
  'Quality matters':'মান গুরুত্বপূর্ণ','Year-Round Feed Supply':'সারা বছর খাদ্য সরবরাহ','Easy Storage':'সহজ সংরক্ষণ','Better Feed Utilization':'উন্নত খাদ্য ব্যবহার','Consistent Quality':'ধারাবাহিক মান'
};

const originalTextNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  if (!textNode.parentElement || ['SCRIPT','STYLE'].includes(textNode.parentElement.tagName)) continue;
  const original = textNode.nodeValue;
  if (original.trim()) originalTextNodes.push({node:textNode, original});
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  originalTextNodes.forEach(({node, original}) => {
    const trimmed = original.trim();
    const translated = lang === 'bn' ? bn[trimmed] : trimmed;
    if (translated === undefined) return;
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = leading + translated + trailing;
  });
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined && !bn[key]) {
      if (key === 'minMax') el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-language]').forEach(b => b.classList.toggle('selected', b.dataset.language === lang));
  localStorage.setItem('shahiLanguage', lang);
}

function applyTheme(theme) {
  const chosen = theme === 'dark' ? 'dark' : 'light';
  document.body.dataset.theme = chosen;
  document.querySelectorAll('[data-theme-choice]').forEach(b => b.classList.toggle('selected', b.dataset.themeChoice === chosen));
  localStorage.setItem('shahiTheme', chosen);
}

document.querySelectorAll('[data-language]').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.language));
});
document.querySelectorAll('[data-theme-choice]').forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.themeChoice));
});

applyLanguage(localStorage.getItem('shahiLanguage') || 'en');
applyTheme(localStorage.getItem('shahiTheme') || 'light');

/* Order calculator */
const qtyInput = document.getElementById('qty');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const weightEl = document.getElementById('totalWeight');
const priceEl = document.getElementById('totalPrice');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const paymentMethodEl = document.getElementById('paymentMethod');
const customerPaymentNumberEl = document.getElementById('customerPaymentNumber');
const transactionIdEl = document.getElementById('transactionId');

function clampQty(v) {
  v = Math.round(Number(v) || 20);
  return Math.min(400, Math.max(20, v));
}
function updateOrder() {
  if (!qtyInput) return;
  const q = clampQty(qtyInput.value);
  qtyInput.value = q;
  weightEl.textContent = (q * 50).toLocaleString('en-US') + ' KG';
  priceEl.textContent = '৳' + (q * 350).toLocaleString('en-US');
}
if (qtyInput) {
  qtyInput.addEventListener('input', updateOrder);
  qtyInput.addEventListener('change', updateOrder);
  minus?.addEventListener('click', () => { qtyInput.value = clampQty(Number(qtyInput.value) - 1); updateOrder(); });
  plus?.addEventListener('click', () => { qtyInput.value = clampQty(Number(qtyInput.value) + 1); updateOrder(); });
  updateOrder();
}

function updatePaymentFields() {
  if (!paymentMethodEl) return;
  const cod = paymentMethodEl.value === 'COD';
  if (customerPaymentNumberEl) {
    customerPaymentNumberEl.required = !cod;
    customerPaymentNumberEl.disabled = cod;
    customerPaymentNumberEl.placeholder = cod ? 'Not required for Cash on Delivery' : 'Number used to make payment';
  }
  if (transactionIdEl) {
    transactionIdEl.required = !cod;
    transactionIdEl.disabled = cod;
    transactionIdEl.placeholder = cod ? 'Not required for Cash on Delivery' : 'Enter your payment transaction ID';
  }
}
paymentMethodEl?.addEventListener('change', updatePaymentFields);
updatePaymentFields();

if (orderForm) {
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    const q = clampQty(qtyInput.value);
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const paymentMethod = paymentMethodEl.value;
    const customerPaymentNumber = customerPaymentNumberEl.value.trim();
    const transactionId = transactionIdEl.value.trim();

    if (!name || !phone || !address || !paymentMethod ||
        (paymentMethod !== 'COD' && (!customerPaymentNumber || !transactionId))) {
      orderSummary.textContent = paymentMethod === 'COD'
        ? (document.documentElement.lang === 'bn' ? 'আপনার নাম, ফোন নম্বর, ঠিকানা এবং পেমেন্ট পদ্ধতি সম্পূর্ণ করুন।' : 'Please complete your name, phone number, address and payment method.')
        : (document.documentElement.lang === 'bn' ? 'গ্রাহকের তথ্য, পেমেন্ট পদ্ধতি, পেমেন্ট নম্বর এবং ট্রানজ্যাকশন আইডি সম্পূর্ণ করুন।' : 'Please complete the customer details, payment method, payment number and transaction ID.');
      orderSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (paymentMethod === 'COD') {
      orderSummary.innerHTML = document.documentElement.lang === 'bn'
        ? `<strong>অর্ডার জমা হয়েছে — ক্যাশ অন ডেলিভারি নির্বাচিত।</strong><br>${q} প্যাকেট • ${(q*50).toLocaleString()} কেজি • ৳${(q*350).toLocaleString()}<br>ডেলিভারির সময় পেমেন্ট নেওয়া হবে।`
        : `<strong>Order submitted — Cash on Delivery selected.</strong><br>${q} packets • ${(q*50).toLocaleString()} KG • ৳${(q*350).toLocaleString()}<br>Payment will be collected on delivery.`;
    } else {
      orderSummary.innerHTML = document.documentElement.lang === 'bn'
        ? `<strong>পেমেন্ট যাচাইয়ের জন্য অর্ডার জমা হয়েছে।</strong><br>${q} প্যাকেট • ${(q*50).toLocaleString()} কেজি • ৳${(q*350).toLocaleString()}<br>পদ্ধতি: ${paymentMethod} • পেমেন্ট নম্বর: ${customerPaymentNumber}<br>ট্রানজ্যাকশন আইডি: ${transactionId}<br><br><strong>এই ওয়েবসাইট স্বয়ংক্রিয়ভাবে পেমেন্ট যাচাই করে না।</strong> নিশ্চিত করার আগে ট্রানজ্যাকশন আইডি পরীক্ষা করতে হবে।`
        : `<strong>Order submitted for payment verification.</strong><br>${q} packets • ${(q*50).toLocaleString()} KG • ৳${(q*350).toLocaleString()}<br>Method: ${paymentMethod} • Payment number: ${customerPaymentNumber}<br>Transaction ID: ${transactionId}<br><br><strong>Payment is not automatically verified by this website.</strong> The transaction ID must be checked before confirmation.`;
    }
    orderSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
