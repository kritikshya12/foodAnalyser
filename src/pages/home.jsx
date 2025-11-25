import { useState } from "react";
import PlaceholdersAndVanishInputDemo from "./input";
import FoodAnalyzer from "./Text";
import { motion } from "framer-motion";
import { ChefHat, Zap, TrendingUp, Search } from "lucide-react";

const PopularSearches = () => {
  const searches = [
    "🍛 Roti",
    "🧀 Paneer",
    "🍲 Dosa",
    "🍚 Biryani",
    "🍗 Chicken Curry",
    "🥔 Poha",
    "🥘 Dal Fry"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-4"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        Popular Searches
      </h3>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {searches.map((search, index) => (
          <motion.button
            key={search}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + index * 0.05 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 hover:border-blue-400/60 text-xs sm:text-sm text-gray-200 transition-all duration-300 hover:text-white"
          >
            {search}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

const RegionalFoods = () => {
  const regions = [
    {
      name: "North India",
      emoji: "🏔️",
      foods: ["🫓 Roti", "🫘 Rajma", "🧀 Paneer"],
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      name: "South India",
      emoji: "🌴",
      foods: ["🍲 Dosa", "⚪ Idli", "🥘 Sambar"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "West India",
      emoji: "🌊",
      foods: ["🥘 Dhokla", "🫓 Thepla", "🥭 Fafda"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "East India",
      emoji: "🦅",
      foods: ["🍲 Litti Chokha", "🐟 Fish Curry", "🍚 Khichuri"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "North East",
      emoji: "⛰️",
      foods: ["🥟 Momos", "🍲 Thukpa", "🌶️ Smoked Fish"],
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-4 mt-8 sm:mt-12"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
        Top Indian Foods by Region
      </h3>

      <div className="flex overflow-x-auto pb-3 sm:pb-4 gap-3 sm:gap-4 -mx-3 sm:-mx-4 px-3 sm:px-4 scrollbar-hide">
        {regions.map((region, index) => (
          <motion.div
            key={region.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + index * 0.08 }}
            className={`flex-shrink-0 w-48 sm:w-56 p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${region.color} border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-blue-500/20`}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-2xl sm:text-3xl">{region.emoji}</span>
              <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors">{region.name}</h4>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              {region.foods.map((food) => (
                <p key={food} className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                  {food}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-3 sm:mt-4">
        <p className="text-xs text-gray-400">← Scroll to see all regions →</p>
      </div>
    </motion.div>
  );
};

const TrendingFoods = () => {
  const trendingItems = [
    {
      name: "Paneer Tikka",
      emoji: "🧀",
      calories: 183,
      color: "from-orange-400/20 to-orange-600/20",
      accentColor: "text-orange-300"
    },
    {
      name: "Masala Dosa",
      emoji: "🍲",
      calories: 168,
      color: "from-green-400/20 to-green-600/20",
      accentColor: "text-green-300"
    },
    {
      name: "Poha",
      emoji: "🥔",
      calories: 118,
      color: "from-yellow-400/20 to-yellow-600/20",
      accentColor: "text-yellow-300"
    },
    {
      name: "Chole Bhature",
      emoji: "🥘",
      calories: 392,
      color: "from-red-400/20 to-red-600/20",
      accentColor: "text-red-300"
    },
    {
      name: "Chicken Biryani",
      emoji: "🍚",
      calories: 456,
      color: "from-amber-400/20 to-amber-600/20",
      accentColor: "text-amber-300"
    },
    {
      name: "Butter Chicken",
      emoji: "🍗",
      calories: 315,
      color: "from-rose-400/20 to-rose-600/20",
      accentColor: "text-rose-300"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-4 mt-8 sm:mt-12"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
        Trending Now
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {trendingItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35 + index * 0.05 }}
            whileHover={{ y: -5 }}
            className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group text-center`}
          >
            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform">
              {item.emoji}
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
              {item.name}
            </h4>
            <div className={`text-xs sm:text-sm font-bold ${item.accentColor}`}>
              {item.calories} kcal
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TrySearching = () => {
  const suggestions = [
    {
      name: "Tandoori Chicken",
      emoji: "🍗",
      nutrition: { protein: "35g", carbs: "2g", fat: "8g", calories: 165 },
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      name: "Palak Paneer",
      emoji: "🌿",
      nutrition: { protein: "15g", carbs: "8g", fat: "12g", calories: 180 },
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Aloo Gobi",
      emoji: "🥔",
      nutrition: { protein: "3g", carbs: "18g", fat: "8g", calories: 145 },
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      name: "Fish Curry",
      emoji: "🐟",
      nutrition: { protein: "28g", carbs: "4g", fat: "10g", calories: 210 },
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      name: "Methi Paratha",
      emoji: "🫓",
      nutrition: { protein: "8g", carbs: "32g", fat: "6g", calories: 220 },
      color: "from-indigo-500/20 to-purple-500/20"
    },
    {
      name: "Chana Masala",
      emoji: "🫘",
      nutrition: { protein: "12g", carbs: "35g", fat: "5g", calories: 210 },
      color: "from-pink-500/20 to-red-500/20"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-4 mt-8 sm:mt-12"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
        Try Searching These
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {suggestions.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 + index * 0.06 }}
            className={`p-4 sm:p-5 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer hover:shadow-lg hover:shadow-blue-500/20`}
          >
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">
                {item.emoji}
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-blue-300 font-bold mt-1">
                  {item.nutrition.calories} kcal
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-3 sm:pt-4 border-t border-white/10">
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-1">Protein</p>
                <p className="text-xs sm:text-sm font-bold text-green-300">{item.nutrition.protein}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-1">Carbs</p>
                <p className="text-xs sm:text-sm font-bold text-blue-300">{item.nutrition.carbs}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-1">Fat</p>
                <p className="text-xs sm:text-sm font-bold text-yellow-300">{item.nutrition.fat}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Search",
      description: "Search any Indian food",
      icon: "🔍",
      color: "from-blue-500/30 to-blue-600/30"
    },
    {
      number: "2",
      title: "Analyze",
      description: "Get instant nutrition",
      icon: "⚡",
      color: "from-green-500/30 to-green-600/30"
    },
    {
      number: "3",
      title: "Track",
      description: "Track your meals",
      icon: "📊",
      color: "from-purple-500/30 to-purple-600/30"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-3 sm:px-4 mt-8 sm:mt-12"
    >
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-6 sm:mb-8 text-center">
        How It Works
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + index * 0.1 }}
            className="relative"
          >
            <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${step.color} border border-white/10 text-center hover:border-blue-400/50 transition-all duration-300`}>
              <div className="text-5xl sm:text-6xl mb-4 opacity-80">{step.icon}</div>

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3 sm:mb-4 font-bold text-sm sm:text-base">
                {step.number}
              </div>

              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                {step.description}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden sm:block absolute top-1/2 -right-4 lg:-right-8 transform -translate-y-1/2 text-2xl text-gray-600">
                →
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

function Home({ foodName, setFoodName, output, setOutput, loading, setLoading, setOriginalQuery, originalQuery }) {
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [searchAttempted, setSearchAttempted] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen w-full flex flex-col bg-black"
    >
      {/* Fixed Header Section */}
      <div className="w-full z-20 flex flex-col items-center bg-black/95 pb-4 sm:pb-6 lg:pb-8 pt-3 sm:pt-4 lg:pt-8 sticky top-0 border-b border-blue-900/30 px-3">
        <h2 className="relative z-10 max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 flex items-center gap-0.5 sm:gap-2 md:gap-4 lg:gap-6 flex-wrap justify-center">
          <span className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold">Food Analyser</span>
          <span className="text-yellow-400 text-xs sm:text-sm md:text-base lg:text-xl font-bold">×</span>
          <span className="text-base sm:text-lg md:text-2xl lg:text-4xl font-bold">fit</span>
        </h2>
        <h3 className="text-gray-300 text-xs sm:text-sm md:text-base font-thin mb-3 sm:mb-4 px-2 text-center mt-1 sm:mt-2">
          🇮🇳 Discover nutritional information for any Indian food
        </h3>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl px-1 sm:px-2">
          <PlaceholdersAndVanishInputDemo
            foodName={foodName}
            setFoodName={setFoodName}
            output={output}
            setOutput={setOutput}
            loading={loading}
            setLoading={setLoading}
            setOriginalQuery={setOriginalQuery}
            setSearchAttempted={setSearchAttempted}
          />
        </div>

        <button
          onClick={() => setIsGuideOpen(true)}
          className="mt-2 sm:mt-3 text-xs sm:text-sm text-blue-400 hover:text-blue-300 underline focus:outline-none transition-colors"
        >
          How to Use?
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col items-center w-full bg-black">
        {/* Show results if search attempted */}
        {searchAttempted && (
          <div className="w-full py-4 sm:py-6 lg:py-8">
            <div className="flex justify-center px-2 sm:px-3 lg:px-4">
              <FoodAnalyzer
                output={output}
                loading={loading}
                originalQuery={originalQuery}
                searchAttempted={searchAttempted}
              />
            </div>
          </div>
        )}

        {/* Show content sections if no search attempted */}
        {!searchAttempted && (
          <div className="w-full py-6 sm:py-8 lg:py-10 space-y-8 sm:space-y-12">
            <PopularSearches />
            <RegionalFoods />
            <TrendingFoods />
            <TrySearching />
            <HowItWorks />

            <div className="w-full py-6 sm:py-8 text-center px-3 sm:px-4">
              <p className="text-xs sm:text-sm text-gray-500">
                ✨ Made with care for Indian foodies
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Buy Me a Coffee Button */}
      <a
        href="https://www.buymeacoffee.com/suvamneog"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 hover:scale-105 transition-transform duration-200 z-40"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="shadow-lg h-8 sm:h-10 md:h-12 w-auto"
        />
      </a>

      {/* Guide Modal */}
      {isGuideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 sm:p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-neutral-900 border border-blue-900/50 rounded-2xl p-4 sm:p-6 max-w-2xl w-full mx-auto text-xs sm:text-sm md:text-base text-gray-300 max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-300 mb-4 sm:mb-6">
              🍽️ How to Use FoodAnalyser × Fit
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-xs sm:text-sm">
              <div>
                <p className="font-semibold text-blue-300 mb-1">1. Search for Indian Foods</p>
                <p className="text-gray-400">Type any Indian dish name like "roti", "paneer curry", "biryani", etc.</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300 mb-1">2. Get Instant Nutrition</p>
                <p className="text-gray-400">View calories, protein, carbs, fats, and other nutrients per 100g.</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300 mb-1">3. Specify Quantities</p>
                <p className="text-gray-400">Add grams (e.g., "100g roti") to see adjusted nutrition values.</p>
              </div>
              <div>
                <p className="font-semibold text-blue-300 mb-1">4. Track Your Meals</p>
                <p className="text-gray-400">Keep track of what you eat throughout the day for better health.</p>
              </div>
            </div>

            <button
              onClick={() => setIsGuideOpen(false)}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg focus:outline-none text-sm sm:text-base font-semibold transition-all"
            >
              Got it!
            </button>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default Home;
