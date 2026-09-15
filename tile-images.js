const baseTilePhotoSets = {
  strengths: [
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80'
  ],
  weaknesses: [
    'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1600&q=80'
  ],
  opportunities: [
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'
  ],
  threats: [
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80'
  ]
};

const uploadedTileImages = Array.from({ length: 30 }, (_, index) => `assets/user-tile-${String(index + 1).padStart(2, '0')}.png`);

const keywordOverrides = [
  { re: /research|qualitative|critical|conceptual|theory|books?/i, url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80' },
  { re: /dcf|valuation|investment|finance|financial|market|economic/i, url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80' },
  { re: /excel|dataset|data|database|datastream|bloomberg|analytics|econometrics|quantitative/i, url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80' },
  { re: /python|stata|coding|code|ai/i, url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80' },
  { re: /team|leadership|collabor|communication|availability|network/i, url: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80' },
  { re: /esg|sustain/i, url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80' },
  { re: /english|danish|spoken|presentation|language/i, url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80' },
  { re: /deadline|time|workload|overloaded|pressure|student job/i, url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80' },
  { re: /real-world|hands-on|experience|corporate/i, url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80' },
  { re: /overanalyse|perfect|good enough|overcomplic|scope|unclear|priority|depth/i, url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80' },
  { re: /growth|build|develop|gain|access|speciali/i, url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80' },
  { re: /peer|competition|downturn|risk|automating|automation/i, url: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80' }
];

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return Math.abs(hash >>> 0);
}

function deterministicShuffle(list, seedKey) {
  return [...list].sort((a, b) => {
    const ah = hashString(`${seedKey}|${a}`);
    const bh = hashString(`${seedKey}|${b}`);
    return ah - bh;
  });
}

const combinedTileSets = Object.fromEntries(
  Object.entries(baseTilePhotoSets).map(([categoryKey, images]) => [
    categoryKey,
    deterministicShuffle([...images, ...uploadedTileImages], `combined-${categoryKey}`)
  ])
);

function buildTileKeys() {
  const tileKeys = [];
  Object.entries(swotData).forEach(([profileKey, profile]) => {
    Object.entries(profile.categories).forEach(([categoryKey, items]) => {
      items.forEach((_, index) => {
        tileKeys.push(`${profileKey}|${categoryKey}|${index}`);
      });
    });
  });
  return tileKeys;
}

const guaranteedUploadedAssignments = {};
(function assignUploadedImagesOnce() {
  const shuffledKeys = deterministicShuffle(buildTileKeys(), 'uploaded-tile-keys');
  const shuffledImages = deterministicShuffle(uploadedTileImages, 'uploaded-image-pool');
  shuffledImages.forEach((imagePath, index) => {
    if (shuffledKeys[index]) guaranteedUploadedAssignments[shuffledKeys[index]] = imagePath;
  });
})();

function getFinancialTileImage(profileKey, categoryKey, index, item) {
  const tileKey = `${profileKey}|${categoryKey}|${index}`;
  if (guaranteedUploadedAssignments[tileKey]) {
    return guaranteedUploadedAssignments[tileKey];
  }

  const categoryPool = combinedTileSets[categoryKey] || combinedTileSets.strengths;
  const override = keywordOverrides.find(entry => entry.re.test(item || ''));

  if (override) {
    const mixedPool = deterministicShuffle([override.url, ...categoryPool], `${tileKey}|override`);
    return mixedPool[hashString(`${tileKey}|${item}`) % mixedPool.length];
  }

  return categoryPool[hashString(`${tileKey}|${item}`) % categoryPool.length];
}

const tileImageMap = {};
Object.entries(swotData).forEach(([profileKey, profile]) => {
  Object.entries(profile.categories).forEach(([categoryKey, items]) => {
    items.forEach((item, index) => {
      tileImageMap[`${profileKey}|${categoryKey}|${index}`] = getFinancialTileImage(profileKey, categoryKey, index, item);
    });
  });
});
