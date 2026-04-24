import React from "react";
import HomeClient from "@/components/home-client";

async function fetchLeetCodeData(username: string) {
  try {
    const [profileRes, solvedRes] = await Promise.all([
      fetch(`https://alfa-leetcode-api.onrender.com/${username}`, { next: { revalidate: 3600 } }),
      fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, { next: { revalidate: 3600 } })
    ]);
    if (!profileRes.ok || !solvedRes.ok) return null;
    return {
      profile: await profileRes.json(),
      solved: await solvedRes.json()
    };
  } catch (e) {
    console.error("Failed to fetch LeetCode data:", e);
    return null;
  }
}

export default async function Page() {
  // Parallel fetch for performance
  const [reposRes, leetcodeData] = await Promise.all([
    fetch('https://api.github.com/users/Zenous07/repos?sort=updated&per_page=100', {
      next: { revalidate: 3600 }
    }),
    fetchLeetCodeData("BennettJoshua")
  ]);

  const repos = reposRes.ok ? await reposRes.json() : [];

  return <HomeClient repos={repos} leetcodeData={leetcodeData} />;
}
