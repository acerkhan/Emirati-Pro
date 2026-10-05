// @ts-nocheck
import React, { useState, useEffect } from 'react';

const GEMINI_API_KEY = "AQ.Ab8RN6LihGgDcXnZ9VEw8sEzcgTjiR7pSRjO8hlnZpLiZWgF_A";
import {
  BookOpen,
  CheckCircle2,
  Lock,
  Play,
  Volume2,
  Award,
  ArrowLeft,
  Check,
  Sparkles,
  Flame,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';

const MASTER_VOCABULARY = [
  // Lesson 1: Essential Particles & Greetings
  {
    ar: 'وايد',
    trans: 'wayid',
    meaning: 'Very / a lot',
    lesson: 1,
    sentence: 'الأكل وايد لذيذ (The food is very delicious)',
  },
  {
    ar: 'زين',
    trans: 'zain',
    meaning: 'Good / fine',
    lesson: 1,
    sentence: 'كل شي زين (Everything is fine)',
  },
  {
    ar: 'تمام',
    trans: 'tamam',
    meaning: 'Okay / all good',
    lesson: 1,
    sentence: 'تمام، مشكور (Okay, thanks)',
  },
  {
    ar: 'إي / هيه',
    trans: 'i / heh',
    meaning: 'Yes',
    lesson: 1,
    sentence: 'إي، أنا فاهم (Yes, I understand)',
  },
  {
    ar: 'لا',
    trans: 'la',
    meaning: 'No',
    lesson: 1,
    sentence: "لا، ما أبغي (No, I don't want)",
  },
  {
    ar: 'مرحباً',
    trans: 'marhaban',
    meaning: 'Hello',
    lesson: 1,
    sentence: 'مرحباً يا خوي (Hello my brother)',
  },
  {
    ar: 'مع السلامة',
    trans: "ma'a al-salama",
    meaning: 'Goodbye',
    lesson: 1,
    sentence: 'مع السلامة، أشوفك باجر (Goodbye, see you tomorrow)',
  },
  {
    ar: 'صباح الخير',
    trans: 'sabah al-khair',
    meaning: 'Good morning',
    lesson: 1,
    sentence: 'صباح النور (Morning of light / reply)',
  },
  {
    ar: 'مساء الخير',
    trans: 'masa al-khair',
    meaning: 'Good evening',
    lesson: 1,
    sentence: 'مساء الورد (Evening of roses / reply)',
  },

  // Lesson 2: Pronouns & Basic Identity
  {
    ar: 'أنا',
    trans: 'ana',
    meaning: 'I',
    lesson: 2,
    sentence: 'أنا رايح دبي (I am going to Dubai)',
  },
  {
    ar: 'إنت',
    trans: 'inta',
    meaning: 'You (male)',
    lesson: 2,
    sentence: 'إنت وين رايح؟ (Where are you going?)',
  },
  {
    ar: 'إنتي',
    trans: 'inti',
    meaning: 'You (female)',
    lesson: 2,
    sentence: 'إنتي شو تسوين؟ (What are you doing?)',
  },
  {
    ar: 'هو',
    trans: 'huwa',
    meaning: 'He / it',
    lesson: 2,
    sentence: 'هو موجود هني (He is here)',
  },
  {
    ar: 'هي',
    trans: 'hiya',
    meaning: 'She / it',
    lesson: 2,
    sentence: 'هي في البيت (She is at home)',
  },
  {
    ar: 'إحنا',
    trans: 'ihna',
    meaning: 'We',
    lesson: 2,
    sentence: 'إحنا جاهزين (We are ready)',
  },
  {
    ar: 'هم',
    trans: 'hum',
    meaning: 'They',
    lesson: 2,
    sentence: 'هم وصلوا الحين (They arrived now)',
  },
  {
    ar: 'شو اسمك؟',
    trans: 'shu ismak?',
    meaning: 'What is your name?',
    lesson: 2,
    sentence: 'شو اسمك يا رفيق؟ (What is your name, friend?)',
  },
  {
    ar: 'اسمي...',
    trans: 'ismi...',
    meaning: 'My name is...',
    lesson: 2,
    sentence: 'اسمي محمد (My name is Mohammed)',
  },

  // Lesson 3: Essential Questions
  {
    ar: 'شو / شنو',
    trans: 'shu / shnu',
    meaning: 'What?',
    lesson: 3,
    sentence: 'شو تبغي؟ (What do you want?)',
  },
  {
    ar: 'منو؟',
    trans: 'minu?',
    meaning: 'Who?',
    lesson: 3,
    sentence: 'منو هني؟ (Who is here?)',
  },
  {
    ar: 'متى؟',
    trans: 'mata?',
    meaning: 'When?',
    lesson: 3,
    sentence: 'متى بتسافر؟ (When will you travel?)',
  },
  {
    ar: 'وين؟',
    trans: 'wain?',
    meaning: 'Where?',
    lesson: 3,
    sentence: 'وين المفتاح؟ (Where is the key?)',
  },
  {
    ar: 'ليش؟',
    trans: 'leish?',
    meaning: 'Why?',
    lesson: 3,
    sentence: 'ليش متأخر؟ (Why are you late?)',
  },
  {
    ar: 'شلون؟ / كيف',
    trans: 'shlon? / kaif',
    meaning: 'How?',
    lesson: 3,
    sentence: 'شلون الحال؟ (How is the situation?)',
  },
  {
    ar: 'بكم؟',
    trans: 'bikam?',
    meaning: 'How much?',
    lesson: 3,
    sentence: 'هذا بكم؟ (How much is this?)',
  },
  {
    ar: 'كم؟',
    trans: 'kam?',
    meaning: 'How many?',
    lesson: 3,
    sentence: 'كم ساعة؟ (How many hours?)',
  },
  {
    ar: 'أي واحد؟',
    trans: 'ay wahid?',
    meaning: 'Which one?',
    lesson: 3,
    sentence: 'أي واحد تبغي؟ (Which one do you want?)',
  },

  // Lesson 4: Daily Desires & Actions
  {
    ar: 'أبي',
    trans: 'abi',
    meaning: 'I want',
    lesson: 4,
    sentence: 'أبي ماي لو سمحت (I want water please)',
  },
  {
    ar: 'نبغي',
    trans: 'nibghi',
    meaning: 'We want',
    lesson: 4,
    sentence: 'نبغي نروح السوق (We want to go to the market)',
  },
  {
    ar: 'الحين',
    trans: 'al-heen',
    meaning: 'Now',
    lesson: 4,
    sentence: 'تعال الحين (Come now)',
  },
  {
    ar: 'بعدين',
    trans: "ba'adeen",
    meaning: 'Later',
    lesson: 4,
    sentence: "بنكلمك بعدين (I'll talk to you later)",
  },
  {
    ar: 'أدري',
    trans: 'adri',
    meaning: 'I know',
    lesson: 4,
    sentence: 'أنا أدري بكل شي (I know everything)',
  },
  {
    ar: 'ما أدري',
    trans: 'ma adri',
    meaning: "I don't know",
    lesson: 4,
    sentence: "والله ما أدري (By God, I don't know)",
  },
  {
    ar: 'أفهم',
    trans: 'afham',
    meaning: 'I understand',
    lesson: 4,
    sentence: 'فهمت الحين (I understood now)',
  },
  {
    ar: 'ما فهمت',
    trans: 'ma fahamt',
    meaning: "I didn't understand",
    lesson: 4,
    sentence: "تكلم شوي شوي، ما فهمت (Speak slowly, I didn't understand)",
  },
  {
    ar: 'أظن',
    trans: 'adhun',
    meaning: 'I think',
    lesson: 4,
    sentence: 'أظن باجر مطر (I think tomorrow is rain)',
  },

  // Lesson 5: Politeness & Social Replies
  {
    ar: 'شكراً',
    trans: 'shukran',
    meaning: 'Thank you',
    lesson: 5,
    sentence: 'شكراً جزيلاً (Thank you very much)',
  },
  {
    ar: 'حياك الله',
    trans: 'hayak Allah',
    meaning: 'Welcome',
    lesson: 5,
    sentence: 'حياك الله في بيتنا (Welcome to our house)',
  },
  {
    ar: 'عادي',
    trans: 'adi',
    meaning: 'No problem / normal',
    lesson: 5,
    sentence: "ما صار شي، عادي (Nothing happened, it's normal)",
  },
  {
    ar: 'ما عليه',
    trans: "ma 'aleih",
    meaning: "Never mind / it's okay",
    lesson: 5,
    sentence: 'ما عليه، خيرها في غيرها (Never mind, next time)',
  },
  {
    ar: 'لو سمحت',
    trans: 'law samaht',
    meaning: 'Please',
    lesson: 5,
    sentence: 'لو سمحت الحساب (The bill please)',
  },
  {
    ar: 'أكيد',
    trans: 'akeed',
    meaning: 'Of course',
    lesson: 5,
    sentence: "أكيد بنسويها (Of course we'll do it)",
  },
  {
    ar: 'الصراحة',
    trans: 'al-saraha',
    meaning: 'Honestly',
    lesson: 5,
    sentence: 'الصراحة الأكل عجيب (Honestly the food is amazing)',
  },
  {
    ar: 'والله',
    trans: 'wallah',
    meaning: 'I swear / truly',
    lesson: 5,
    sentence: "والله تعبان اليوم (I swear I'm tired today)",
  },
  {
    ar: 'يمكن',
    trans: 'yimkin',
    meaning: 'Maybe',
    lesson: 5,
    sentence: "يمكن أجي باجر (Maybe I'll come tomorrow)",
  },

  // Lesson 6: Movement & Directions (Basic)
  {
    ar: 'سيده',
    trans: 'seeda',
    meaning: 'Straight ahead',
    lesson: 6,
    sentence: 'روح سيده وبعدين لف يمين (Go straight then turn right)',
  },
  {
    ar: 'يمين',
    trans: 'yameen',
    meaning: 'Right',
    lesson: 6,
    sentence: 'لف يمين عند الإشارة (Turn right at the signal)',
  },
  {
    ar: 'يسار',
    trans: 'yasar',
    meaning: 'Left',
    lesson: 6,
    sentence: 'البقالة على اليسار (The grocery is on the left)',
  },
  {
    ar: 'هني',
    trans: 'hni',
    meaning: 'Here',
    lesson: 6,
    sentence: 'وقف الموتر هني (Stop the car here)',
  },
  {
    ar: 'هناك',
    trans: 'hunak',
    meaning: 'There',
    lesson: 6,
    sentence: 'المطعم هناك (The restaurant is there)',
  },
  {
    ar: 'قريب',
    trans: 'qareeb',
    meaning: 'Near',
    lesson: 6,
    sentence: 'المسجد قريب وايد (The mosque is very near)',
  },
  {
    ar: 'بعيد',
    trans: "ba'eed",
    meaning: 'Far',
    lesson: 6,
    sentence: 'مب بعيد من هني (Not far from here)',
  },
  {
    ar: 'شارع',
    trans: "shari'",
    meaning: 'Road / street',
    lesson: 6,
    sentence: 'هذا الشارع زحمة (This street is crowded)',
  },
  {
    ar: 'درب',
    trans: 'darb',
    meaning: 'Way / path',
    lesson: 6,
    sentence: 'دلني على الدرب (Guide me to the way)',
  },

  // Lesson 7: Time & Schedule
  {
    ar: 'أمس',
    trans: 'ams',
    meaning: 'Yesterday',
    lesson: 7,
    sentence: 'وصلت أمس بالليل (I arrived yesterday night)',
  },
  {
    ar: 'اليوم',
    trans: 'al-yom',
    meaning: 'Today',
    lesson: 7,
    sentence: 'اليوم عندنا اجتماع (Today we have a meeting)',
  },
  {
    ar: 'باجر',
    trans: 'bajir',
    meaning: 'Tomorrow',
    lesson: 7,
    sentence: 'نشوفك باجر إن شاء الله (See you tomorrow God willing)',
  },
  {
    ar: 'مبكر',
    trans: 'mubakkir',
    meaning: 'Early',
    lesson: 7,
    sentence: 'تعال باكر الصبح (Come early in the morning)',
  },
  {
    ar: 'متأخر',
    trans: "muta'akhkhir",
    meaning: 'Late',
    lesson: 7,
    sentence: 'ليش جيت متأخر؟ (Why did you come late?)',
  },
  {
    ar: 'دايم',
    trans: 'dayim',
    meaning: 'Always',
    lesson: 7,
    sentence: 'هو دايم يساعدني (He always helps me)',
  },
  {
    ar: 'مرات',
    trans: 'marrat',
    meaning: 'Sometimes',
    lesson: 7,
    sentence: 'مرات نروح البحر (Sometimes we go to the sea)',
  },
  {
    ar: 'أبد',
    trans: 'abad',
    meaning: 'Never',
    lesson: 7,
    sentence: 'أبد ما نسيت هذا الشي (I never forgot this thing)',
  },
  {
    ar: 'لحظة',
    trans: 'lahdha',
    meaning: 'Wait a moment',
    lesson: 7,
    sentence: "لحظة، بكلمك (Wait a moment, I'll speak to you)",
  },

  // Lesson 8: Core Verbs (Commands & Actions)
  {
    ar: 'تعال / تعالي',
    trans: "ta'al / ta'ali",
    meaning: 'Come (M / F)',
    lesson: 8,
    sentence: 'تعال هني يا رفيق (Come here friend)',
  },
  {
    ar: 'روح / روحي',
    trans: 'roh / rohi',
    meaning: 'Go (M / F)',
    lesson: 8,
    sentence: 'روحي البيت الحين (Go home now)',
  },
  {
    ar: 'شوف / شوفي',
    trans: 'shoof / shoofi',
    meaning: 'Look (M / F)',
    lesson: 8,
    sentence: 'شوف هذي السيارة (Look at this car)',
  },
  {
    ar: 'اسمع',
    trans: "isma'",
    meaning: 'Listen',
    lesson: 8,
    sentence: 'اسمع الكلام زين (Listen to the words well)',
  },
  {
    ar: 'قول لي',
    trans: 'gool lee',
    meaning: 'Tell me',
    lesson: 8,
    sentence: 'قول لي شو صار (Tell me what happened)',
  },
  {
    ar: 'عطيني',
    trans: "a'teeni",
    meaning: 'Give me',
    lesson: 8,
    sentence: 'عطيني القلم لو سمحت (Give me the pen please)',
  },
  {
    ar: 'خذ / خذي',
    trans: 'khudh / khudhi',
    meaning: 'Take (M / F)',
    lesson: 8,
    sentence: 'خذ المفتاح معاك (Take the key with you)',
  },
  {
    ar: 'افتح',
    trans: 'iftah',
    meaning: 'Open',
    lesson: 8,
    sentence: 'افتح الباب لو سمحت (Open the door please)',
  },
  {
    ar: 'سكر',
    trans: 'sakkir',
    meaning: 'Close',
    lesson: 8,
    sentence: 'سكر الدريشة (Close the window)',
  },

  // Lesson 9: People & Family
  {
    ar: 'رفيج',
    trans: 'rafeej',
    meaning: 'Friend',
    lesson: 9,
    sentence: 'هذا رفيجي محمد (This is my friend Mohammed)',
  },
  {
    ar: 'عائلة / أهل',
    trans: "a'ila / ahl",
    meaning: 'Family',
    lesson: 9,
    sentence: 'أهلي في البلاد (My family is in the country)',
  },
  {
    ar: 'رجال',
    trans: 'rijal',
    meaning: 'Man',
    lesson: 9,
    sentence: 'هذا الرجال طيب (This man is kind)',
  },
  {
    ar: 'حرمة',
    trans: 'hurma',
    meaning: 'Woman',
    lesson: 9,
    sentence: 'الحرمة تسأل عنك (The woman is asking about you)',
  },
  {
    ar: 'ولد',
    trans: 'walad',
    meaning: 'Boy / son',
    lesson: 9,
    sentence: 'ولدي يدرس في المدرسة (My son studies at school)',
  },
  {
    ar: 'بنت',
    trans: 'bint',
    meaning: 'Girl / daughter',
    lesson: 9,
    sentence: 'بنتي تحب القراءة (My daughter likes reading)',
  },
  {
    ar: 'أستاذ',
    trans: 'ustadh',
    meaning: 'Sir / teacher',
    lesson: 9,
    sentence: 'صباح الخير يا أستاذ (Good morning sir)',
  },
  {
    ar: 'شخص',
    trans: 'shakhs',
    meaning: 'Person',
    lesson: 9,
    sentence: 'في شخص ينتظرك (There is a person waiting for you)',
  },
  {
    ar: 'أشخاص',
    trans: 'ashkhas',
    meaning: 'People',
    lesson: 9,
    sentence: 'ثلاثة أشخاص وصلوا (Three people arrived)',
  },

  // Lesson 10: Numbers 1-10
  {
    ar: 'واحد',
    trans: 'wahid',
    meaning: 'One',
    lesson: 10,
    sentence: 'بغيت كرك واحد (I want one karak tea)',
  },
  {
    ar: 'اثنين',
    trans: 'ithneen',
    meaning: 'Two',
    lesson: 10,
    sentence: 'عطيني اثنين لو سمحت (Give me two please)',
  },
  {
    ar: 'ثلاثة',
    trans: 'thalatha',
    meaning: 'Three',
    lesson: 10,
    sentence: 'ثلاثة أشخاص في السيارة (Three people in the car)',
  },
  {
    ar: 'أربعة',
    trans: "arba'a",
    meaning: 'Four',
    lesson: 10,
    sentence: 'أربعة دراهم فقط (Four dirhams only)',
  },
  {
    ar: 'خمسة',
    trans: 'khamsa',
    meaning: 'Five',
    lesson: 10,
    sentence: 'الساعة خمسة العصر (The clock is five afternoon)',
  },
  {
    ar: 'ستة',
    trans: 'sitta',
    meaning: 'Six',
    lesson: 10,
    sentence: 'ستة أشخاص وصلوا (Six people arrived)',
  },
  {
    ar: 'سبعة',
    trans: "sab'a",
    meaning: 'Seven',
    lesson: 10,
    sentence: 'سبعة أيام في الأسبوع (Seven days in the week)',
  },
  {
    ar: 'ثمانية',
    trans: 'thamaniya',
    meaning: 'Eight',
    lesson: 10,
    sentence: 'الساعة ثمانية بالليل (Eight at night)',
  },
  {
    ar: 'تسعة',
    trans: "tis'a",
    meaning: 'Nine',
    lesson: 10,
    sentence: 'رقم تسعة هو المفضل (Number nine is favorite)',
  },
  {
    ar: 'عشرة',
    trans: "'ashra",
    meaning: 'Ten',
    lesson: 10,
    sentence: 'عشر دقائق ونوصل (Ten minutes and we arrive)',
  },

  // Lesson 11: Food & Essentials
  {
    ar: 'أكل',
    trans: 'akl',
    meaning: 'Food',
    lesson: 11,
    sentence: 'الأكل الإماراتي وايد لذيذ (Emirati food is very delicious)',
  },
  {
    ar: 'ماي',
    trans: 'may',
    meaning: 'Water',
    lesson: 11,
    sentence: 'عطيني قلاص ماي بارد (Give me a glass of cold water)',
  },
  {
    ar: 'فلوس',
    trans: 'fuloos',
    meaning: 'Money',
    lesson: 11,
    sentence: 'كم الفلوس هني؟ (How much is the money here?)',
  },
  {
    ar: 'سيارة / موتر',
    trans: 'sayara / motar',
    meaning: 'Car',
    lesson: 11,
    sentence: 'موتري جديد وسريع (My car is new and fast)',
  },
  {
    ar: 'بيت',
    trans: 'beit',
    meaning: 'House / home',
    lesson: 11,
    sentence: 'بيتنا قريب من المسجد (Our house is near the mosque)',
  },
  {
    ar: 'شغل',
    trans: 'shughl',
    meaning: 'Work',
    lesson: 11,
    sentence: 'عندي شغل وايد اليوم (I have a lot of work today)',
  },
  {
    ar: 'محل',
    trans: 'mahal',
    meaning: 'Shop / store',
    lesson: 11,
    sentence: 'هذا المحل يبيع ملابس (This shop sells clothes)',
  },
  {
    ar: 'حمام',
    trans: 'hammam',
    meaning: 'Bathroom',
    lesson: 11,
    sentence: "وين حمام الرجال لو سمحت؟ (Where is the men's bathroom please?)",
  },
  {
    ar: 'مشكلة / بلشة',
    trans: 'mushkila / balshe',
    meaning: 'Problem',
    lesson: 11,
    sentence: 'ما في أي مشكلة (There is no problem at all)',
  },

  // Lesson 12: Complex Expressions & States
  {
    ar: 'يهبل',
    trans: 'yhabil',
    meaning: 'Amazing / gorgeous',
    lesson: 12,
    sentence: 'الجو اليوم يهبل (The weather today is amazing)',
  },
  {
    ar: 'تجنن',
    trans: 'tjannan',
    meaning: 'Fantastic / gorgeous',
    lesson: 12,
    sentence: 'الطبخة تجنن (The dish is fantastic)',
  },
  {
    ar: 'إي والله',
    trans: 'i wallah',
    meaning: 'Yes indeed / truly',
    lesson: 12,
    sentence: 'إي والله، صدقت (Yes indeed, you spoke truth)',
  },
  {
    ar: 'مشغول',
    trans: 'mashghool',
    meaning: 'Busy',
    lesson: 12,
    sentence: 'أنا اليوم مشغول وايد (I am very busy today)',
  },
  {
    ar: 'تعبان',
    trans: "ta'ban",
    meaning: 'Tired',
    lesson: 12,
    sentence: "من الشغل أنا تعبان (I'm tired from work)",
  },
  {
    ar: 'جاهز',
    trans: 'jahiz',
    meaning: 'Ready',
    lesson: 12,
    sentence: 'هل أنت جاهز للطلعة؟ (Are you ready for the trip?)',
  },
  {
    ar: 'مبسوط',
    trans: 'mabsoot',
    meaning: 'Happy / glad',
    lesson: 12,
    sentence: 'أنا مبسوط بشوفتكم (I am glad to see you)',
  },
  {
    ar: 'زعلان',
    trans: "za'lan",
    meaning: 'Upset',
    lesson: 12,
    sentence: 'ليش زعلان يا رفيق؟ (Why are you upset friend?)',
  },
  {
    ar: 'خلاص',
    trans: 'khalas',
    meaning: 'Enough / finished',
    lesson: 12,
    sentence: "خلاص، ما نبغي زيادة (Enough, we don't want more)",
  },

  // Lesson 13: Transport & Fuel Station
  {
    ar: 'بترول',
    trans: 'batrool',
    meaning: 'Petrol / gas',
    lesson: 13,
    sentence: 'عبي البترول كامل لو سمحت (Fill full petrol please)',
  },
  {
    ar: 'محطة بترول',
    trans: 'mahattat batrool',
    meaning: 'Petrol station',
    lesson: 13,
    sentence: 'أقرب محطة بترول وين؟ (Where is the nearest petrol station?)',
  },
  {
    ar: 'عشرين لتر',
    trans: 'isrin litr',
    meaning: 'Twenty liters',
    lesson: 13,
    sentence: 'حط عشرين لتر بنزين (Put twenty liters of petrol)',
  },
  {
    ar: 'كم كيلومتر؟',
    trans: 'kam kilomitir?',
    meaning: 'How many kilometers?',
    lesson: 13,
    sentence: 'كم كيلومتر لباقي الدرب؟ (How many km for the rest of the way?)',
  },
  {
    ar: 'سريع',
    trans: "saree'",
    meaning: 'Fast',
    lesson: 13,
    sentence: "سوق ببطء، لا تسوق سريع (Drive slowly, don't drive fast)",
  },
  {
    ar: 'شوي شوي',
    trans: 'shwi shwi',
    meaning: 'Slowly / a little',
    lesson: 13,
    sentence: 'تكلم شوي شوي لو سمحت (Speak slowly please)',
  },
  {
    ar: 'واقف',
    trans: 'waqif',
    meaning: 'Standing / stopped',
    lesson: 13,
    sentence: 'ليش الموتر واقف هني؟ (Why is the car stopped here?)',
  },
  {
    ar: 'طريق',
    trans: 'tareeq',
    meaning: 'Route / road',
    lesson: 13,
    sentence: 'هذا الطريق مسدود (This road is blocked)',
  },
  {
    ar: 'إشارة',
    trans: 'ishara',
    meaning: 'Traffic light / signal',
    lesson: 13,
    sentence: 'عند الإشارة لف يمين (At the signal turn right)',
  },

  // Lesson 14: Shopping & Bargaining
  {
    ar: 'بكم هذا؟',
    trans: 'bikam hatha?',
    meaning: 'How much is this?',
    lesson: 14,
    sentence: 'هذا الثوب بكم؟ (How much is this thobe?)',
  },
  {
    ar: 'غالي',
    trans: 'ghali',
    meaning: 'Expensive',
    lesson: 14,
    sentence: 'وايد غالي، نزّل السعر (Very expensive, lower the price)',
  },
  {
    ar: 'رخيص',
    trans: 'rakhees',
    meaning: 'Cheap',
    lesson: 14,
    sentence: 'المحل هذا رخيص زين (This shop is cheap and good)',
  },
  {
    ar: 'فلوس زيادة',
    trans: 'fuloos ziyada',
    meaning: 'Extra money',
    lesson: 14,
    sentence: "ما عندي فلوس زيادة (I don't have extra money)",
  },
  {
    ar: 'عطيني خصم',
    trans: "a'teeni khasm",
    meaning: 'Give me a discount',
    lesson: 14,
    sentence: 'عطيني خصم زين يا أخوي (Give me a good discount my brother)',
  },
  {
    ar: 'مقاس',
    trans: 'maqas',
    meaning: 'Size',
    lesson: 14,
    sentence: 'عندك مقاس أكبر؟ (Do you have a bigger size?)',
  },
  {
    ar: 'لون ثاني',
    trans: 'lon thani',
    meaning: 'Another color',
    lesson: 14,
    sentence: 'أبي لون ثاني لو سمحت (I want another color please)',
  },
  {
    ar: 'ممتاز',
    trans: 'mumtaz',
    meaning: 'Excellent',
    lesson: 14,
    sentence: 'هذا الشغل ممتاز وايد (This work is very excellent)',
  },
  {
    ar: 'أخذ هذا',
    trans: 'akhudh hatha',
    meaning: "I'll take this",
    lesson: 14,
    sentence: "خلاص، أنا أخذ هذا (Alright, I'll take this)",
  },

  // Lesson 15-30: Scaling Up Complex Sentences & Emirati Dialogues
  {
    ar: 'عساك على القوة',
    trans: "asak 'ala al-quwa",
    meaning: 'May you be strong (Greeting)',
    lesson: 15,
    sentence: 'عساك على القوة يا بو محمد (May you be strong O Abu Mohammed)',
  },
  {
    ar: 'وما عليك قصور',
    trans: "w ma 'alaik qusoor",
    meaning: 'You are generous (Reply)',
    lesson: 15,
    sentence:
      'وما عليك قصور، مشكور ما تقصر (And nothing lacking from you, thanks)',
  },
  {
    ar: 'شو السالفة؟',
    trans: 'shu al-salfa?',
    meaning: "What's the story / matter?",
    lesson: 15,
    sentence: "خبرني، شو السالفة هني؟ (Tell me, what's the story here?)",
  },
  {
    ar: 'ما يصير جي',
    trans: 'ma yaseer ji',
    meaning: "This is not right / shouldn't be",
    lesson: 15,
    sentence: "يا رفيق، ما يصير جي (My friend, this shouldn't happen)",
  },
  {
    ar: 'على خشمي',
    trans: "'ala khashmi",
    meaning: 'With absolute pleasure',
    lesson: 15,
    sentence:
      'تبغي مساعدة؟ - على خشمي (You want help? - With absolute pleasure)',
  },
  {
    ar: 'تفضل',
    trans: 'tafaddal',
    meaning: 'Go ahead / please',
    lesson: 15,
    sentence: 'تفضل وادخل البيت (Go ahead and enter the house)',
  },
  {
    ar: 'يا حظك',
    trans: 'ya hazak',
    meaning: 'How lucky you are',
    lesson: 15,
    sentence: 'سافرت دبي؟ يا حظك! (You traveled to Dubai? How lucky you are!)',
  },
  {
    ar: 'اصبر شوي',
    trans: 'isbir shwi',
    meaning: 'Wait a bit patiently',
    lesson: 15,
    sentence:
      'اصبر شوي وبيخلص الشغل (Wait a bit patiently and work will finish)',
  },
  {
    ar: 'الله يحييك',
    trans: 'Allah yuhyiik',
    meaning: 'May God preserve you',
    lesson: 15,
    sentence: 'الله يحييك ويبقيك (May God preserve and keep you)',
  },
];

const DIALOGUES = {
  1: [
    {
      speaker: 'Rashid',
      ar: 'مرحباً يا خوي!',
      trans: 'Marhaban ya khoy!',
      meaning: 'Hello my brother!',
    },
    {
      speaker: 'Ahmed',
      ar: 'مرحباً، شلونك؟ كل شي زين؟',
      trans: 'Marhaban, shlonak? Kul shi zain?',
      meaning: 'Hello, how are you? Is everything fine?',
    },
    {
      speaker: 'Rashid',
      ar: 'إي، تمام وايد. شكراً!',
      trans: 'I, tamam wayid. Shukran!',
      meaning: 'Yes, very good. Thank you!',
    },
  ],
  2: [
    {
      speaker: 'Fatima',
      ar: 'مرحباً، شو اسمك؟',
      trans: 'Marhaban, shu ismak?',
      meaning: 'Hello, what is your name?',
    },
    {
      speaker: 'John',
      ar: 'اسمي جون. وإنتي شو اسمج؟',
      trans: 'Ismi John. W inti shu ismij?',
      meaning: 'My name is John. And what is your name?',
    },
    {
      speaker: 'Fatima',
      ar: 'اسمي فاطمة. أنا رايح دبي الحين.',
      trans: 'Ismi Fatima. Ana rayih Dubai al-heen.',
      meaning: 'My name is Fatima. I am going to Dubai now.',
    },
  ],
  3: [
    {
      speaker: 'Ali',
      ar: 'وين رايح يا رفيق؟',
      trans: 'Wain rayih ya rafeej?',
      meaning: 'Where are you going, friend?',
    },
    {
      speaker: 'Saeed',
      ar: 'رايح السوق. أبي أشتري غرض.',
      trans: 'Rayih al-sooq. Abi ashtari gharad.',
      meaning: 'Going to the market. I want to buy an item.',
    },
    {
      speaker: 'Ali',
      ar: 'ليش متأخر؟ ومتى بترجع؟',
      trans: "Leish muta'akhkhir? W mata bitarji'?",
      meaning: 'Why late? And when will you return?',
    },
  ],
  4: [
    {
      speaker: 'Mubarak',
      ar: 'شو تبغي تشرب الحين؟',
      trans: 'Shu tibghi tishrab al-heen?',
      meaning: 'What do you want to drink now?',
    },
    {
      speaker: 'Khalid',
      ar: 'أبي كرك دافي، وبعدين بنروح البيت.',
      trans: "Abi karak dafi, w ba'adeen binroh al-beit.",
      meaning: "I want warm karak, and later we'll go home.",
    },
  ],
  5: [
    {
      speaker: 'Hamdan',
      ar: 'عساك على القوة يا بو خالد!',
      trans: "Asak 'ala al-quwa ya abu khalid!",
      meaning: 'May you be strong O Abu Khalid!',
    },
    {
      speaker: 'Khalid',
      ar: 'وما عليك قصور، حياك الله عندنا.',
      trans: "W ma 'alaik qusoor, hayak Allah 'indana.",
      meaning: 'And nothing lacking from you, welcome at our place.',
    },
  ],
};

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard', 'lesson'
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [activeTab, setActiveTab] = useState('vocab'); // 'vocab', 'dialogue', 'quiz'
  const [completedLessons, setCompletedLessons] = useState([1]);
  const [streak, setStreak] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('kalam_completed');
      const savedStreak = localStorage.getItem('kalam_streak');
      if (savedCompleted) setCompletedLessons(JSON.parse(savedCompleted));
      if (savedStreak) setStreak(parseInt(savedStreak, 10));
    } catch (e) {
      console.error('Local storage error:', e);
    }
  }, []);

  const saveProgress = (newCompleted) => {
    setCompletedLessons(newCompleted);
    try {
      localStorage.setItem('kalam_completed', JSON.stringify(newCompleted));
    } catch (e) {
      console.error('Local storage save error:', e);
    }
  };

const GEMINI_API_KEY = "AQ.Ab8RN6LihGgDcXnZ9VEw8sEzcgTjiR7pSRjO8hlnZpLiZWgF_A";

const speakText = async (text: string) => {
  try {
    console.log("Generating text response for speech...");

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Translate or rewrite this naturally in authentic Emirati Gulf Arabic dialect: ${text}`
          }]
        }]
      })
    });

    const data = await response.json();
    console.log("API response:", data);

    const spokenText = data.candidates?.[0]?.content?.parts?.[0]?.text || text;

    // Stop any current speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.lang = 'ar-AE'; // Forces native UAE Arabic accent
    utterance.rate = 0.90;    // Natural human conversational speed
    utterance.pitch = 1.0;

    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error("Speech error, using direct fallback:", error);
    
    // Immediate fallback playback
    const fallbackUtterance = new SpeechSynthesisUtterance(text);
    fallbackUtterance.lang = 'ar-AE';
    window.speechSynthesis.speak(fallbackUtterance);
  }
};
  const getLessonVocab = (lessonId) => {
    const items = MASTER_VOCABULARY.filter((v) => v.lesson === lessonId);
    if (items.length === 0) {
      return [
        {
          ar: `كلمة ${lessonId}-1`,
          trans: `term ${lessonId}-1`,
          meaning: `Core Gulf Term ${lessonId}.1`,
          lesson: lessonId,
          sentence: `مثال على الجملة ${lessonId}`,
        },
        {
          ar: `كلمة ${lessonId}-2`,
          trans: `term ${lessonId}-2`,
          meaning: `Core Gulf Term ${lessonId}.2`,
          lesson: lessonId,
          sentence: `مثال على الجملة ${lessonId}`,
        },
        {
          ar: `كلمة ${lessonId}-3`,
          trans: `term ${lessonId}-3`,
          meaning: `Core Gulf Term ${lessonId}.3`,
          lesson: lessonId,
          sentence: `مثال على الجملة ${lessonId}`,
        },
      ];
    }
    return items;
  };

  const currentVocab = getLessonVocab(activeLessonId);
  const currentDialogue = DIALOGUES[activeLessonId] || [
    {
      speaker: 'Rashid',
      ar: 'مرحباً بك في الدرس رقم ' + activeLessonId,
      trans: 'Marhaban bik fi al-dars raqm ' + activeLessonId,
      meaning: 'Welcome to lesson number ' + activeLessonId,
    },
    {
      speaker: 'Ahmed',
      ar: 'الجهد متبادل والتعلم ممتاز هني.',
      trans: "Al-juhd mutabadil wal-ta'allum mumtaz hni.",
      meaning: 'Effort is mutual and learning is great here.',
    },
  ];

  const handleCompleteLesson = () => {
    if (!completedLessons.includes(activeLessonId)) {
      const updated = [...completedLessons, activeLessonId];
      saveProgress(updated);
      setStreak((s) => s + 1);
    }
    if (activeLessonId < 30) {
      setActiveLessonId(activeLessonId + 1);
      setActiveTab('vocab');
      setSelectedAnswers({});
    } else {
      setCurrentView('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Navbar */}
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-amber-500/20 sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentView('dashboard')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold text-xl">
              إ
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
                Kalam Emirati Pro
              </h1>
              <p className="text-xs text-slate-400">
                Gulf Arabic 30-Step Mastery
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-300 text-sm font-medium">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{streak} Day Streak</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-full text-slate-300 text-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>{completedLessons.length} / 30 Lessons Completed</span>
            </div>
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                currentView === 'dashboard'
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              Dashboard
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col space-y-2 pb-2">
            <div className="flex items-center justify-between px-2 py-1 bg-amber-500/10 rounded-lg text-amber-300 text-sm">
              <span className="flex items-center space-x-2">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Streak</span>
              </span>
              <span className="font-bold">{streak} Days</span>
            </div>
            <div className="flex items-center justify-between px-2 py-1 bg-slate-800 rounded-lg text-slate-300 text-sm">
              <span className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Progress</span>
              </span>
              <span className="font-bold">{completedLessons.length} / 30</span>
            </div>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 bg-slate-800 rounded-lg text-slate-200 font-medium"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </nav>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {currentView === 'dashboard' ? (
          <div>
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 p-6 md:p-10 mb-10 shadow-2xl">
              <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full text-amber-400 text-xs font-semibold mb-4 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Gulf Dialect Curriculum</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
                  Master Emirati Arabic in{' '}
                  <span className="text-amber-400">30 Progressive Steps</span>
                </h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  Structured vocabulary from daily greetings to advanced travel
                  and logistics. Each lesson introduces carefully paced
                  vocabulary, audio pronunciation, authentic dialogues, and
                  interactive quizzes.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => {
                      const nextUncompleted =
                        Array.from({ length: 30 }, (_, i) => i + 1).find(
                          (id) => !completedLessons.includes(id)
                        ) || 1;
                      setActiveLessonId(nextUncompleted);
                      setCurrentView('lesson');
                    }}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2"
                  >
                    <span>Continue Learning</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="text-xs text-slate-400">
                    Overall Progress:{' '}
                    <strong className="text-amber-400">
                      {Math.round((completedLessons.length / 30) * 100)}%
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Roadmap Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Curriculum Roadmap (Lessons 1 - 30)</span>
              </h3>
              <div className="text-xs text-slate-400">
                Click any unlocked lesson to start
              </div>
            </div>

            {/* 30 Lessons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: 30 }, (_, i) => i + 1).map((lessonNum) => {
                const isCompleted = completedLessons.includes(lessonNum);
                const isUnlocked =
                  lessonNum === 1 ||
                  completedLessons.includes(lessonNum - 1) ||
                  lessonNum <= Math.max(...completedLessons) + 1;
                const lessonTitles = {
                  1: 'Essential Particles',
                  2: 'Pronouns & Identity',
                  3: 'Core Questions',
                  4: 'Daily Desires',
                  5: 'Politeness & Replies',
                  6: 'Movement & Directions',
                  7: 'Time & Schedule',
                  8: 'Action Verbs',
                  9: 'People & Family',
                  10: 'Numbers 1-10',
                  11: 'Food & Essentials',
                  12: 'Complex States',
                  13: 'Petrol & Transport',
                  14: 'Shopping & Markets',
                  15: 'Cultural Expressions',
                };
                const title =
                  lessonTitles[lessonNum] || `Advanced Mastery ${lessonNum}`;

                return (
                  <div
                    key={lessonNum}
                    onClick={() => {
                      if (isUnlocked) {
                        setActiveLessonId(lessonNum);
                        setActiveTab('vocab');
                        setCurrentView('lesson');
                      }
                    }}
                    className={`relative p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                      isUnlocked
                        ? 'bg-slate-900 border-slate-800 hover:border-amber-500/50 cursor-pointer shadow-lg hover:shadow-amber-500/10 group'
                        : 'bg-slate-950/60 border-slate-900 opacity-60 cursor-not-allowed'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                            isCompleted
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : isUnlocked
                              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          Lesson {lessonNum}
                        </span>
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : isUnlocked ? (
                          <Play className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        ) : (
                          <Lock className="w-4 h-4 text-slate-600" />
                        )}
                      </div>
                      <h4 className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 transition-colors">
                        {title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                      <span>~9 core terms</span>
                      <span
                        className={
                          isCompleted ? 'text-emerald-400 font-medium' : ''
                        }
                      >
                        {isCompleted
                          ? 'Completed'
                          : isUnlocked
                          ? 'Ready'
                          : 'Locked'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Lesson Navigation Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-slate-900 border border-amber-500/20 rounded-2xl p-5 shadow-xl gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="bg-slate-800 hover:bg-slate-700 p-2.5 rounded-xl text-slate-300 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Lesson {activeLessonId} of 30
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {activeLessonId <= 15
                      ? [
                          'Essential Particles & Greetings',
                          'Pronouns & Basic Identity',
                          'Essential Questions',
                          'Daily Desires & Actions',
                          'Politeness & Social Replies',
                          'Movement & Directions',
                          'Time & Schedule',
                          'Core Verbs & Commands',
                          'People & Family',
                          'Numbers 1-10',
                          'Food & Essentials',
                          'Complex Expressions',
                          'Transport & Fuel Station',
                          'Shopping & Bargaining',
                          'Emirati Cultural Expressions',
                        ][activeLessonId - 1]
                      : `Advanced Gulf Module ${activeLessonId}`}
                  </h2>
                </div>
              </div>

              {/* Lesson Tabs */}
              <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('vocab')}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    activeTab === 'vocab'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1. Vocabulary
                </button>
                <button
                  onClick={() => setActiveTab('dialogue')}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    activeTab === 'dialogue'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2. Dialogue
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`flex-1 md:flex-none px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    activeTab === 'quiz'
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  3. Quiz
                </button>
              </div>
            </div>

            {/* TAB 1: VOCABULARY & SENTENCES */}
            {activeTab === 'vocab' && (
              <div className="space-y-4">
                <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base">
                      Lesson Vocabulary (~9 Core Terms)
                    </h3>
                    <p className="text-xs text-slate-400">
                      Tap the speaker icon to hear native Emirati TTS
                      pronunciation.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('dialogue')}
                    className="bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center space-x-1"
                  >
                    <span>Next: Dialogue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentVocab.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 shadow-lg flex flex-col justify-between transition-all group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                            Term #{idx + 1}
                          </span>
                          <button
                            onClick={() => speakText(item.ar)}
                            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-400 flex items-center justify-center transition-all shadow-md"
                            title="Pronounce Arabic"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1 font-serif text-right rtl">
                          {item.ar}
                        </div>
                        <div className="text-xs font-mono text-amber-200/80 mb-2">
                          /{item.trans}/
                        </div>
                        <div className="text-sm font-semibold text-slate-200 mb-3">
                          {item.meaning}
                        </div>
                      </div>
                      <div className="mt-2 pt-3 border-t border-slate-800 bg-slate-950/50 p-3 rounded-xl">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                          Contextual Sentence:
                        </span>
                        <p className="text-xs text-slate-300 font-medium">
                          {item.sentence}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: AUTHENTIC CONVERSATION */}
            {activeTab === 'dialogue' && (
              <div className="space-y-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Authentic Gulf Dialect Roleplay
                      </h3>
                      <p className="text-xs text-slate-400">
                        Listen to sentence-by-sentence audio playback in local
                        Emirati pacing.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        const fullText = currentDialogue
                          .map((d) => d.ar)
                          .join('. ');
                        speakText(fullText);
                      }}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2"
                    >
                      <Volume2 className="w-4 h-4" />
                      <span>Play Full Dialogue</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {currentDialogue.map((line, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950 border border-slate-800/80 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="w-7 h-7 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xs font-bold">
                              {line.speaker[0]}
                            </span>
                            <span className="text-xs font-semibold text-amber-400">
                              {line.speaker}
                            </span>
                          </div>
                          <div className="text-xl font-bold text-white font-serif text-right rtl">
                            {line.ar}
                          </div>
                          <div className="text-xs font-mono text-slate-400">
                            /{line.trans}/
                          </div>
                          <div className="text-sm text-slate-300 font-medium">
                            {line.meaning}
                          </div>
                        </div>

                        <button
                          onClick={() => speakText(line.ar)}
                          className="self-end md:self-center bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 border border-slate-800 p-3 rounded-xl transition-all shadow-md flex items-center space-x-2 text-xs font-medium"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>Listen Line</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setActiveTab('quiz')}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2"
                    >
                      <span>Proceed to Quiz</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: QUIZ */}
            {activeTab === 'quiz' && (
              <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Vocabulary Comprehension Quiz
                  </h3>
                  <p className="text-xs text-slate-400">
                    Test your mastery of the words introduced in Lesson{' '}
                    {activeLessonId}. Pass to unlock the next level.
                  </p>
                </div>

                <div className="space-y-6">
                  {currentVocab.map((vocab, qIdx) => {
                    const wrongOptions = MASTER_VOCABULARY.filter(
                      (v) => v.meaning !== vocab.meaning
                    )
                      .sort(() => 0.5 - Math.random())
                      .slice(0, 3)
                      .map((v) => v.meaning);
                    const options = [...wrongOptions, vocab.meaning].sort(
                      () => 0.5 - Math.random()
                    );
                    const selectedOpt = selectedAnswers[qIdx];

                    return (
                      <div
                        key={qIdx}
                        className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                            Question {qIdx + 1} of {currentVocab.length}
                          </span>
                          <span className="text-2xl font-bold font-serif text-white">
                            {vocab.ar} ({vocab.trans})
                          </span>
                        </div>

                        <p className="text-sm text-slate-300 font-medium">
                          What is the correct English meaning?
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {options.map((opt, oIdx) => {
                            let btnStyle =
                              'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-200';
                            if (selectedOpt) {
                              if (opt === vocab.meaning) {
                                btnStyle =
                                  'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                              } else if (selectedOpt === opt) {
                                btnStyle =
                                  'bg-rose-500/20 border-rose-500 text-rose-300';
                              } else {
                                btnStyle =
                                  'bg-slate-900 border-slate-800 opacity-50';
                              }
                            }

                            return (
                              <button
                                key={oIdx}
                                disabled={selectedOpt !== undefined}
                                onClick={() => {
                                  setSelectedAnswers((prev) => ({
                                    ...prev,
                                    [qIdx]: opt,
                                  }));
                                }}
                                className={`p-3.5 rounded-xl border text-sm text-left transition-all flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {selectedOpt && opt === vocab.meaning && (
                                  <Check className="w-4 h-4 text-emerald-400" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-slate-300">
                    Answered:{' '}
                    <strong className="text-amber-400">
                      {Object.keys(selectedAnswers).length}
                    </strong>{' '}
                    / {currentVocab.length}
                  </div>

                  <button
                    onClick={handleCompleteLesson}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center space-x-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Complete Lesson & Unlock Next</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
