// helpers/avatarHelper.js
export const getAvatarLetter = (user) => {
    return (
      (user?.FullName ||
        user?.fullName ||
        user?.username ||
        "-"
      )
        .charAt(0)
        .toUpperCase() || "-"
    );
  };
  
  // Optional: deterministic color generator (same name = same color)
  export const getAvatarColor = (name) => {
    const colors = [
      // Reds
      "bg-red-50", "bg-red-100", "bg-red-200", "bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800", "bg-red-900",
      // Oranges
      "bg-orange-50", "bg-orange-100", "bg-orange-200", "bg-orange-300", "bg-orange-400", "bg-orange-500", "bg-orange-600", "bg-orange-700", "bg-orange-800", "bg-orange-900",
      // Yellows
      "bg-yellow-50", "bg-yellow-100", "bg-yellow-200", "bg-yellow-300", "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800", "bg-yellow-900",
      // Greens
      "bg-green-50", "bg-green-100", "bg-green-200", "bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600", "bg-green-700", "bg-green-800", "bg-green-900",
      // Teals
      "bg-teal-50", "bg-teal-100", "bg-teal-200", "bg-teal-300", "bg-teal-400", "bg-teal-500", "bg-teal-600", "bg-teal-700", "bg-teal-800", "bg-teal-900",
      // Blues
      "bg-blue-50", "bg-blue-100", "bg-blue-200", "bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800", "bg-blue-900",
      // Indigos
      "bg-indigo-50", "bg-indigo-100", "bg-indigo-200", "bg-indigo-300", "bg-indigo-400", "bg-indigo-500", "bg-indigo-600", "bg-indigo-700", "bg-indigo-800", "bg-indigo-900",
      // Purples
      "bg-purple-50", "bg-purple-100", "bg-purple-200", "bg-purple-300", "bg-purple-400", "bg-purple-500", "bg-purple-600", "bg-purple-700", "bg-purple-800", "bg-purple-900",
      // Pinks
      "bg-pink-50", "bg-pink-100", "bg-pink-200", "bg-pink-300", "bg-pink-400", "bg-pink-500", "bg-pink-600", "bg-pink-700", "bg-pink-800", "bg-pink-900",
      // Grays
      "bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400", "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900",
      // Cool Grays (if using Tailwind v2+)
      "bg-cool-gray-50", "bg-cool-gray-100", "bg-cool-gray-200", "bg-cool-gray-300", "bg-cool-gray-400", "bg-cool-gray-500", "bg-cool-gray-600", "bg-cool-gray-700", "bg-cool-gray-800", "bg-cool-gray-900",
      // True Grays (if using Tailwind v2+)
      "bg-true-gray-50", "bg-true-gray-100", "bg-true-gray-200", "bg-true-gray-300", "bg-true-gray-400", "bg-true-gray-500", "bg-true-gray-600", "bg-true-gray-700", "bg-true-gray-800", "bg-true-gray-900",
      // Warm Grays (if using Tailwind v2+)
      "bg-warm-gray-50", "bg-warm-gray-100", "bg-warm-gray-200", "bg-warm-gray-300", "bg-warm-gray-400", "bg-warm-gray-500", "bg-warm-gray-600", "bg-warm-gray-700", "bg-warm-gray-800", "bg-warm-gray-900",
      // Emerald, Lime, Cyan, Fuchsia, Violet, Rose (Tailwind v2+)
      "bg-emerald-50", "bg-emerald-100", "bg-emerald-200", "bg-emerald-300", "bg-emerald-400", "bg-emerald-500", "bg-emerald-600", "bg-emerald-700", "bg-emerald-800", "bg-emerald-900",
      "bg-lime-50", "bg-lime-100", "bg-lime-200", "bg-lime-300", "bg-lime-400", "bg-lime-500", "bg-lime-600", "bg-lime-700", "bg-lime-800", "bg-lime-900",
      "bg-cyan-50", "bg-cyan-100", "bg-cyan-200", "bg-cyan-300", "bg-cyan-400", "bg-cyan-500", "bg-cyan-600", "bg-cyan-700", "bg-cyan-800", "bg-cyan-900",
      "bg-fuchsia-50", "bg-fuchsia-100", "bg-fuchsia-200", "bg-fuchsia-300", "bg-fuchsia-400", "bg-fuchsia-500", "bg-fuchsia-600", "bg-fuchsia-700", "bg-fuchsia-800", "bg-fuchsia-900",
      "bg-violet-50", "bg-violet-100", "bg-violet-200", "bg-violet-300", "bg-violet-400", "bg-violet-500", "bg-violet-600", "bg-violet-700", "bg-violet-800", "bg-violet-900",
      "bg-rose-50", "bg-rose-100", "bg-rose-200", "bg-rose-300", "bg-rose-400", "bg-rose-500", "bg-rose-600", "bg-rose-700", "bg-rose-800", "bg-rose-900"
    ];
    const hash = [...name].reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  