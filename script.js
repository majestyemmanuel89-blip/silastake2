const verses = [
  "“The Lord is my shepherd; I shall not want.” – Psalm 23:1",
  "“I can do all things through Christ which strengtheneth me.” – Philippians 4:13",
  "“The Lord is good, a strong hold in the day of trouble.” – Nahum 1:7",
  "“For with God nothing shall be impossible.” – Luke 1:37",
  "“The name of the Lord is a strong tower: the righteous runneth into it, and is safe.” – Proverbs 18:10",
  "“Be still, and know that I am God.” – Psalm 46:10",
  "“The Lord will fight for you; you need only to be still.” – Exodus 14:14"
];

const verseText = document.getElementById("verse-text");

function changeVerse() {
  const randomIndex = Math.floor(Math.random() * verses.length);
  verseText.textContent = verses[randomIndex];
}

// show first verse immediately
changeVerse();

// change every 10 seconds
setInterval(changeVerse, 10000);