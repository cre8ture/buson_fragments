const poems = {
    "poems": [
      {
        "author": "Yosa Buson",
        "title": "Spring Poems",
        "haiku": [
          {
            "japanese": "春雨や ものがたりゆく 蓑と傘",
            "english": "The spring rain. Talking and passing"
          },
          {
            "japanese": "行く春や 重たき琵琶の 抱心",
            "english": "The fading of spring. The feeling of holding Of the biwa."
          }
        ]
      },
      {
        "author": "Yosa Buson",
        "title": "Summer Poems",
        "haiku": [
          {
            "japanese": "菜の花や 月は東に 日は西に",
            "english": "The canola flowers. The moon in the east. The sun in the west."
          },
          {
            "japanese": "夕立や 草葉をつかむ むら雀",
            "english": "The afternoon shower. Catch the grass or leaf The village sparrow."
          },
          {
            "japanese": "牡丹散りて 打ちかさなりぬ 二三片",
            "english": "The peony flower scattered And accumulated A few of the petals."
          },
          {
            "japanese": "不二ひとつ うづみのこして 若葉かな",
            "english": "Only Mount Fuji Is left unburied By young leaves."
          },
          {
            "japanese": "夏河を 越すうれしさよ 手に草履",
            "english": "The summer river. It’s happy to walk across it. My hands with zori sandal."
          }
        ]
      },
      {
        "author": "Yosa Buson",
        "title": "Autumn Poems",
        "haiku": [
          {
            "japanese": "線香や ますほのすすき 二三本",
            "english": "The incense sticks. The reddish soil color pampas grasses A few of pieces."
          },
          {
            "japanese": "秋たつや 素湯香しき 施薬院",
            "english": "Autumn has come. The plain hot water is fragrant. The Seyaku-in."
          }
        ]
      },
      {
        "author": "Yosa Buson",
        "title": "Winter Poems",
        "haiku": [
          {
            "japanese": "宿かせと 刀投げ出す 吹雪かな",
            "english": "“Put me up for a night!” He threw the katana. It is a snowstorm."
          },
          {
            "japanese": "斧入れて 香おどろくや 冬木立",
            "english": "Cutting into with the ax, I was surprised at the scent. The winter trees."
          }
        ]
      }
    ]
  }
  

  function getRandomPoemMapping() {
    // Function to get a random integer between min (inclusive) and max (inclusive)
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Select a random poem
    let poem = poems.poems[getRandomInt(0, poems.poems.length - 1)];

    // Select a random haiku from the poem
    let haiku = poem.haiku[getRandomInt(0, poem.haiku.length - 1)];

    // Split the English and Japanese versions of the haiku into words/characters
    let englishWords = haiku.english.split(' ');
    let japaneseCharacters = haiku.japanese.split('');

    // Create a map of English words to Japanese characters
    let wordCharacterMap = {};
    for (let i = 0; i < englishWords.length; i++) {
        wordCharacterMap[englishWords[i]] = japaneseCharacters[i] || '';
    }

    return wordCharacterMap;
}


function addRandomPolygon(element) {
    // Create a new element
    let polygon = document.createElement('div');
    polygon.style.position = 'absolute';
    polygon.style.top = '50%';
    polygon.style.left = '50%';
    polygon.style.transform = 'translate(-50%, -50%) rotate(30deg)';
    polygon.style.width = '70%';
    polygon.style.height = '70%';
    polygon.style.border = '1px solid red';
    polygon.style.backgroundColor = 'red';
    polygon.style.clipPath = generateRandomPolygon();

    // Add the new element to the passed element
    element.appendChild(polygon);
}